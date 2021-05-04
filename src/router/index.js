import { createRouter, createWebHistory } from 'vue-router'
import shouye from '@/views/shouye/shouye'
import fenlei from '@/views/fenlei/fenlei'
import gouwuche from '@/views/gouwuche/gouwuche'
import wode from '@/views/wode/wode'
import chanping from '@/views/fenlei/chanping'
import spzsxq from '@/components/commen/spzsxq'

const routes = [
  {
    path: '',
    redirect:'/shouye'
  },
  {
    path: '/shouye',
    name: 'shouye',
    component: shouye,
    
  },
  {
    path: '/fenlei',
    name: 'fenlei',
    component: fenlei,
    
  },
  {
    path: '/chanping',
    name: 'chanping',
    component: chanping,
  },
  {
    path: '/spzsxq',
    name: 'spzsxq',
    component: spzsxq,
  },
  {
    path: '/gouwuche',
    name: 'gouwuche',
    component: gouwuche
  },
  {
    path: '/wode',
    name: 'wode',
    component: wode
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
