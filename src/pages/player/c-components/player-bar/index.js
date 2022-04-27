import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { getSongDetailAction } from '../../store/actionCreator'
import { imageSizeFormat, songSourceUrlFormat } from '@/utils/data-format'
import { Slider } from 'antd'
import { PlayerBarWrapper, Control, PlayInfo, Operations } from './styled'

const LPlayerBar = memo(() => {
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isChanging, setIsChanging] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    const audioRef = useRef()
    //redux hooks
    const { currentSong } = useSelector(state => ({
        currentSong: state.getIn(['player', 'currentSong'])
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSongDetailAction(167876))
    }, [dispatch])
    //获取当前歌曲
    useEffect(() => {
        audioRef.current.src = songSourceUrlFormat(currentSong.id)
    }, [currentSong])
    //其他控制
    const picUrl = currentSong.al && currentSong.al.picUrl
    const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'
    //歌曲总时长，单位毫秒
    const duration = currentSong.dt || 0
    const showDuration = moment.utc(duration).format('mm:ss')
    const showCurrentTime = moment.utc(currentTime).format('mm:ss')
    //功能函数
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
    //视图
    return (
        <PlayerBarWrapper className='player_bar'>
            <div className='content wrap-v2'>
                <Control isPlaying={isPlaying}>
                    <i className='prev player_bar'></i>
                    <i className='play player_bar' onClick={e => playAudio()} ></i>
                    <i className='next player_bar'></i>
                </Control>
                <PlayInfo>
                    <img src={imageSizeFormat(picUrl, 34)} className='image' alt=''></img>
                    <a href='/#' className='mask player_bar'>{currentSong.name}</a>
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
                <Operations>
                    <a href='/#' className='btn pic_in_pic player_bar_new_icon'>画中画歌词</a>
                    <a href='/#' className='btn favor player_bar'>收藏</a>
                    <a href='/#' className='btn share player_bar'>分享</a>
                    <div className='right player_bar'>
                        <a href='/#' className='btn volume player_bar'>音量</a>
                        <a href='/#' className='btn loop player_bar'>循环</a>
                        <a href='/#' className='btn playlist player_bar'>0</a>
                    </div>
                </Operations>
            </div>
            <audio ref={audioRef}
                onTimeUpdate={timeUpdate} />
        </PlayerBarWrapper>
    )
})

export default LPlayerBar