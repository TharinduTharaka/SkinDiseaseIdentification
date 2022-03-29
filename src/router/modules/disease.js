export default [
    {
        path: '/add_disease',
        component: () => import ('@/views/Disease/index.vue'),
    },
    {
        path: '/add_disease_details/:id',
        component: () => import ('@/views/Disease/diseaseDetails.vue'),
    },

]