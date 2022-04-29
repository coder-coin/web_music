import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import {
    getSongDetailAction,
    changeMusicPrevOrNextAction,
    chanePlayerModeAction,
    changeCurrentLyricIndexAction
} from '../store/actionCreator'
import { imageSizeFormat, songSourceUrlFormat } from '@/utils/data-format'

import { NavLink } from 'react-router-dom'
import { Slider, message } from 'antd'
import { PlayerBarWrapper, Control, PlayInfo, Operations } from './styled'


const LPlayerBar = memo(() => {
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isChanging, setIsChanging] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    const audioRef = useRef()
    //redux hooks
    const { currentSong,
        playList,
        playerMode,
        lyricList,
        currentLyricIndex } = useSelector(state => ({
            currentSong: state.getIn(['player', 'currentSong']),
            playList: state.getIn(['player', 'playList']),
            playerMode: state.getIn(['player', 'playerMode']),
            lyricList: state.getIn(['player', 'lyricList']),
            currentLyricIndex: state.getIn(['player', 'currentLyricIndex'])
        }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSongDetailAction(167876))
    }, [dispatch])
    //获取当前歌曲
    useEffect(() => {
        audioRef.current.src = songSourceUrlFormat(currentSong.id)
        //第一次进入不播放，更新后自动播放
        audioRef.current.play().then(res => {
            setIsPlaying(true)
        }).catch(err => {
            setIsPlaying(false)
        })
    }, [currentSong])
    //其他控制
    const picUrl = currentSong.al && currentSong.al.picUrl
    const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'
    //歌曲总时长，单位毫秒
    const duration = currentSong.dt || 0
    const showDuration = moment.utc(duration).format('mm:ss')
    const showCurrentTime = moment.utc(currentTime).format('mm:ss')
    //功能函数

    //切换歌曲
    function changeMusic (tag) {
        dispatch(changeMusicPrevOrNextAction(tag))
    }
    //播放
    function playAudio () {
        isPlaying ? audioRef.current.pause() : audioRef.current.play()
        setIsPlaying(!isPlaying)
    }
    //监听歌曲进度
    function timeUpdate (e) {
        if (!isChanging) {
            setCurrentTime(e.target.currentTime * 1000)
            setProgress(currentTime / duration * 100)
        }
        let i = 0
        for (; i < lyricList.length; i++) {
            if (currentTime < lyricList[i].time) {
                break
            }
        }
        if (currentLyricIndex !== i - 1) {
            dispatch(changeCurrentLyricIndexAction(i - 1))
            const content = lyricList[i - 1] && lyricList[i - 1].content
            message.open({
                key: 'lryic',
                content: content,
                duration: 1000,
                className: 'lyric-class'
            })
        }

    }
    //监听歌曲结束
    function handleMUusicEnd () {
        if (playerMode === 2) {
            //单曲循环
            audioRef.current.currentTime = 0
            audioRef.current.play()
        } else {
            //顺序播放或随即播放
            dispatch(changeMusicPrevOrNextAction(1))
        }
    }
    //监听进度条滑动
    const onProgressChange = useCallback(value => {
        setIsChanging(true)
        //实时获取当前时间并显示
        const currentTime = value / 100 * duration
        setCurrentTime(currentTime)
        //修改进度
        setProgress(value)
    }, [duration])
    //监听进度条变化停止
    const onAfterProgressChange = useCallback(value => {
        //停止滑动后，修改歌曲进度
        const currentTime = value / 100 * duration
        audioRef.current.currentTime = currentTime / 1000
        setCurrentTime(currentTime)
        setIsChanging(false)
    }, [duration])


    //改变播放模式
    function changeMode () {
        let currentMode = playerMode + 1
        if (currentMode > 2) {
            currentMode = 0
        }
        dispatch(chanePlayerModeAction(currentMode))
    }
    //判断播放模式
    function judgeMode () {
        switch (playerMode) {
            case 0:
                return '循环'
            case 1:
                return '随机'
            case 2:
                return '单曲循环'
            default:
                break
        }
    }
    //视图
    return (
        <PlayerBarWrapper className='player_bar'>
            <div className='content wrap-v2'>
                <Control isPlaying={isPlaying}>
                    <i className='prev player_bar'
                        onClick={e => changeMusic(-1)}
                    ></i>
                    <i className='play player_bar' onClick={e => playAudio()} ></i>
                    <i className='next player_bar'
                        onClick={e => changeMusic(1)}
                    ></i>
                </Control>
                <PlayInfo>
                    <img src={imageSizeFormat(picUrl, 34)} className='image' alt=''></img>
                    <NavLink to='/discover/song' className='mask player_bar'>{currentSong.name}</NavLink>
                    <div className='info'>
                        <div className='song'>
                            <a className='song-name' href='/#'>{currentSong.name}</a>
                            <a className='singer-name' href='/#'>{singerName}</a>
                        </div>
                        <div className='progress'>
                            <Slider value={progress}
                                onChange={onProgressChange}
                                onAfterChange={onAfterProgressChange}
                                tooltipVisible={false}
                            />
                            <div className='time'>
                                <span className='now-time'>{showCurrentTime}</span>
                                <span className='divider'>/</span>
                                <span className='duration'>{showDuration}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operations playerMode={playerMode}>
                    <a href='/#' className='btn pic_in_pic player_bar_new_icon'>画中画歌词</a>
                    <a href='/#' className='btn favor player_bar'>收藏</a>
                    <a href='/#' className='btn share player_bar'>分享</a>
                    <div className='right player_bar'>
                        <i className='btn volume player_bar' title='音量'></i>
                        <i className='btn loop player_bar' title={judgeMode()} onClick={e => changeMode()}></i>
                        <i className='btn playlist player_bar'>{playList.length}</i>
                    </div>
                </Operations>
            </div>
            <audio ref={audioRef}
                onTimeUpdate={timeUpdate}
                onEnded={handleMUusicEnd} />
        </PlayerBarWrapper>
    )
})

export default LPlayerBar