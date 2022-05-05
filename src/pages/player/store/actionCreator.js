import * as actionTypes from './constants'
import { getSongDetail, getLyric, getSimiPlaylist, getSimiSong } from '@/service/player'
import { parseLyric } from '@/utils/parse-lyric'
//修改当前歌曲
const changeCurrentSongAction = (res) => ({
    type: actionTypes.PLAYER_CHANGE_CURRENT_SONG,
    currentSong: res
})
//修改播放列表
const changePlayListAction = (playList) => ({
    type: actionTypes.PLAYER_CHANGE_LIST,
    playList
})
//修改当前播放歌曲的Index
const changeCurrentSongIndexAction = (currentSongIndex) => ({
    type: actionTypes.PLAYER_CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex
})
//修改歌词数组
const changeLyricListAction = (lyricList) => ({
    type: actionTypes.PLAYER_CHANGE_LYRIC_LIST,
    lyricList
})

//修改选中歌曲的id
export const chanegSelectedSongIdAction = (id) => ({
    type: actionTypes.PLAYER_CHANGE_SELECTED_SONG_ID,
    selectedSongId: id
})
//修改选择的歌曲
const changeSelectedSongAction = (song) => ({
    type: actionTypes.PLAYER_CHANGE_SELECTED_SONG,
    selectedSong: song
})
//修改歌曲详情页的歌词
const changeSelectedSongLyricAction = (lyricList) => ({
    type: actionTypes.PLAYER_CHANGE_SELECTED_SONG_LYRIC,
    selectedSongLyric: lyricList
})
//修改相似歌单和歌曲
const changeSimiPlaylistAction = (res) => ({
    type: actionTypes.PLAYER_CHANGE_SIMI_PLAYLIST,
    simiPlaylist: res.playlists
})

const changeSimiSongsAction = (res) => ({
    type: actionTypes.PLAYER_CHANGE_SIMI_SONGS,
    simiSongs: res.songs
})
//修改当前播放模式
export const chanePlayerModeAction = (playerMode) => ({
    type: actionTypes.PLAYER_CHANGE_MODE,
    playerMode
})

//改变播放的歌曲,上一首或下一首
export const changeMusicPrevOrNextAction = (tag) => {
    return (dispatch, getState) => {
        const playerMode = getState().getIn(['player', 'playerMode'])
        let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])
        const playList = getState().getIn(['player', 'playList'])
        switch (playerMode) {
            case 1:
                //随即播放
                let randomIndex = Math.floor(Math.random() * playList.length)
                while (randomIndex === currentSongIndex) {
                    randomIndex = Math.floor(Math.random() * playList.length)
                }
                currentSongIndex = randomIndex
                break
            default:
                //顺序播放
                currentSongIndex += tag
                if (currentSongIndex >= playList.length) currentSongIndex = 0
                if (currentSongIndex < 0) currentSongIndex = playList.length - 1
                break
        }
        const currentSong = playList[currentSongIndex]
        dispatch(changeCurrentSongAction(currentSong))
        dispatch(changeCurrentSongIndexAction(currentSongIndex))
        //获取歌词
        dispatch(getLyricAction(currentSong.id))
    }
}
//获取歌曲详情
export const getSongDetailAction = (ids) => {
    return (dispatch, getState) => {
        //根据id查找当前播放列表里是否已有该歌曲
        const playList = getState().getIn(['player', 'playList'])
        const songIndex = playList.findIndex(song => song.id === ids)
        //判断是否找到歌曲
        let song = null
        if (songIndex !== -1) {
            //找到歌曲。修改当前播放歌曲的索引，并播放选中歌曲
            dispatch(changeCurrentSongIndexAction(songIndex))
            song = playList[songIndex]
            dispatch(changeCurrentSongAction(song))
            //获取歌曲歌词
            dispatch(getLyricAction(song.id))
        } else {
            //没有找到歌曲，请求歌曲
            getSongDetail(ids).then(res => {
                song = res.songs && res.songs[0]
                if (!song) {
                    return
                }
                //将最新请求的歌曲加入播放列表
                const newPlayList = [...playList]
                newPlayList.push(song)
                //更新redux中的值
                dispatch(changePlayListAction(newPlayList))
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
                dispatch(changeCurrentSongAction(song))
                //获取歌曲歌词
                dispatch(getLyricAction(song.id))
            })
        }
    }
}
//获取歌曲的歌词
export const getLyricAction = (id) => {
    return dispatch => {
        getLyric(id).then(res => {
            //解析歌词
            const lyricList = parseLyric(res.lrc.lyric)
            dispatch(changeLyricListAction(lyricList))
        }
        )
    }
}
//修改当前播放的歌词索引
export const changeCurrentLyricIndexAction = (index) => ({
    type: actionTypes.PLYAER_CHANGE_CURRENT_LYRIC_INDEX,
    currentLyricIndex: index
})

export const getSimiPlaylistAction = () => {
    return (dispatch, getState) => {
        const id = getState().getIn(["player", "selectedSong"]).id
        if (!id) return

        getSimiPlaylist(id).then(res => {
            dispatch(changeSimiPlaylistAction(res))
        })
    }
}

export const getSimiSongAction = () => {
    return (dispatch, getState) => {
        const id = getState().getIn(["player", "selectedSong"]).id
        if (!id) return
        getSimiSong(id).then(res => {
            dispatch(changeSimiSongsAction(res))
        })
    }
}
export const getSelectedSongDetailAction = () => {
    return (dispatch, getState) => {
        const id = getState().getIn(['player', 'selectedSongId'])
        getSongDetail(id).then(res => {
            const song = res.songs && res.songs[0]
            dispatch(changeSelectedSongAction(song))
        }).catch(err => {
            console.log(err)
        })
    }
}
export const getSelectedSongLyricAction = () => {
    return (dispatch, getState) => {
        const id = getState().getIn(['player', 'selectedSongId'])
        getLyric(id).then(res => {
            //解析歌词
            const lyricList = parseLyric(res.lrc.lyric)
            dispatch(changeSelectedSongLyricAction(lyricList))
        }
        ).catch(err => {
            console.log(err)
        })
    }
}