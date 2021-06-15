import Layout from '@/layout'
const FilesRouter = [
    {
        path: '/files',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'files',
                component: () => import('@/views/files/index'),
                meta: { title: '文件管理', icon: 'form' }
            }
        ]
    }
]

export default FilesRouter
