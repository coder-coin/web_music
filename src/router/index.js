import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
const LDiscover = lazy(() => import('@/pages/discover'))
const LRecommend = lazy(() => import('@/pages/discover/children-pages/recommend'))
const LToplist = lazy(() => import('@/pages/discover/children-pages/toplist'))
const LPlaylist = lazy(() => import('@/pages/discover/children-pages/playlist'))
const LDjradio = lazy(() => import('@/pages/discover/children-pages/djradio'))
const LArtist = lazy(() => import('@/pages/discover/children-pages/artist'))
const LAlbum = lazy(() => import('@/pages/discover/children-pages/album'))
const SongPlayer = lazy(() => import('@/pages/player'))

const LMine = lazy(() => import('@/pages/mine'))
const LFriend = lazy(() => import('@/pages/friend'))
const LCreatorCenter = lazy(() => import('@/pages/creatorCenter'))
/**
 * 配置路由
 * @returns routes
 */
const useMusicRouter = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Navigate to='/discover/recommend' />,
        },
        {
            path: '/discover',
            element: <LDiscover />,
            children: [
                {
                    path: 'recommend',
                    element: <LRecommend />
                },
                {
                    path: 'toplist',
                    element: <LToplist />
                },
                {
                    path: 'playlist',
                    element: <LPlaylist />
                },
                {
                    path: 'djradio',
                    element: <LDjradio />
                },
                {
                    path: 'artist',
                    element: <LArtist />
                },
                {
                    path: 'album',
                    element: <LAlbum />
                },
                {
                    path: 'song',
                    element: <SongPlayer />
                }
            ]
        },
        {
            path: '/mine',
            element: <LMine />
        },
        {
            path: '/friend',
            element: <LFriend />
        }, {
            path: '/creatorCenter',
            element: <LCreatorCenter />
        }
    ])

    return routes
}

export default useMusicRouter

