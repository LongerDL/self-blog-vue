import Home from '@/views/Home'
import Blog from '@/views/Blog'
import About from '@/views/About'
import Message from '@/views/Message'
import Project from '@/views/Project'
import articleDetail from '@/views/Blog/articleDetail'

export default [
  { name: 'Home', path: '/', component: Home },
  { name: 'Blog', path: '/blog', component: Blog },
  { name: 'CategoryBlog', path: '/blog/cate/:categoryId', component: Blog },
  { name: 'articleDetail', path: '/article/:id', component: articleDetail },
  { name: 'About', path: '/about', component: About },
  { name: 'Message', path: '/message', component: Message },
  { name: 'Project', path: '/project', component: Project },
]
