import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt'

// import Usuario from './components/usuario/Usuario'
// import UsuarioLista from './components/usuario/UsuarioLista'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'

Vue.use(Router)

const Usuario = () => import('./components/usuario/Usuario')
const UsuarioEditar = () => import('./components/usuario/UsuarioEditar')
const UsuarioLista = () => import('./components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import('./components/usuario/UsuarioDetalhe')

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return { selector: to.hash }
        }
        else {
            return { x: 0, y: 0 }
        }
        // return { x: 0, y: 1000 }
    },
    routes: [{
        name: 'inicio',
        path: '/',
        // component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    }, {
        path: '/usuario',
        // component: Usuario,
        components: {
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props: true, beforeEnter: (to, from, next) => {
                console.log('antes da rota -> usuário detalhe')
                next()
            } },
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' }
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    },
    {
        path: '/*',
        redirect: '/'
    },
    ]
})

router.beforeEach((to, from, next) => {
    console.log('antes das rotas -> global')
    next()
    /* if (to,path !== 'usuario') {
        next('/usuarios')
    } else {
        next()
    } */
})

export default router