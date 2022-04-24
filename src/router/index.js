import { Navigate, useRoutes } from 'react-router-dom'
import LDiscover from '@/pages/discover'
import LRecommend from '@/pages/discover/children-pages/recommend'
import LToplist from '@/pages/discover/children-pages/toplist'
import LPlaylist from '@/pages/discover/children-pages/playlist'
import LDjradio from '@/pages/discover/children-pages/djradio'
import LArtist from '@/pages/discover/children-pages/artist'
import LAlbum from '@/pages/discover/children-pages/album'

import LMine from '@/pages/mine'
import LFriend from '@/pages/friend'
import LCreatorCenter from '@/pages/creatorCenter'
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

