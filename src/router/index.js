import { useRoutes } from 'react-router-dom'
import LDiscover from '@/pages/discover'
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
            element: <LDiscover />
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

