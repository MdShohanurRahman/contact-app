import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/contacts'
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('../views/ContactsView.vue')
    },
    {
        path: '/contacts/add',
        name: 'Add',
        component: () => import('../views/AddEditView.vue')
    },
    {
        path: '/contacts/edit/:id',
        name: 'Edit',
        component: () => import('../views/AddEditView.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginView.vue')
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () => import('../views/SignUpView.vue')
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () => import('../components/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    if (to.name !== 'Login' && to.name !== 'Logout' && !token) {
        next('/login')
    } else {
        next()
    }
})

export default router