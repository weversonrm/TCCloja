import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Inicio from './views/Inicio.vue'
import Teste from './views/Teste.vue'
import Cadastro from './views/Cadastro.vue'
import Acessorios from './views/Acessorios.vue'
import Calçados from './views/Calçados.vue'
import Roupas from './views/Roupas.vue'
import Usuario from './views/Usuario.vue'
import Vegas from './views/Vegas.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/teste',
      name: 'teste',
      component: Teste
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/acessorios',
      name: 'acessorios',
      component: Acessorios
    },
    {
      path: '/calçados',
      name: 'calçados',
      component: Calçados
    },
    {
      path: '/roupas',
      name: 'roupas',
      component: Roupas
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: Usuario
    },
    {
      path: '/vegas',
      name: '/vegas',
      component: Vegas
    },
  ]
})
