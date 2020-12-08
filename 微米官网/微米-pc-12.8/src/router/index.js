import Vue from "vue";
import VueRouter from "vue-router";
// import index from '../views/Index.vue';

Vue.use(VueRouter);
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const routes = [
    { path: '/', redirect: '/index' },
    {
        path: '/login',
        component: () =>
            import("../components/common/Login.vue"),
    },
    {
        path: '/ceshi',
        component: () =>
            import("../views/ceshi.vue"),
    },
    {
        path: "/forgetpassword",
        name: "forgetpassword",
        component: () =>
            import("../components/common/ForgetPassword.vue"),
        meta: {
            keepAlive: false // 需要被缓存
        }
    },
    {
        path: "/swiper",
        name: "swiper",
        component: () =>
            import("../components/common/swiper.vue"),
        meta: {
            keepAlive: false // 需要被缓存
        }
    },
    {
        path: "/fastoken",
        name: "fastoken",
        component: () =>
            import("../components/common/Fastoken.vue"),
        meta: {
            keepAlive: false // 需要被缓存
        }
    },
    {
        path: "/fastokensecond",
        name: "fastokensecond",
        component: () =>
            import("../components/common/FastokenSecond.vue"),
        meta: {
            keepAlive: false // 需要被缓存
        }
    },

    {
        path: '/header',
        component: () =>
            import("../components/common/header.vue"),
    },
    {
        path: '/index',
        name: 'index',
        component: resolve => require(['../views/Index.vue'], resolve),
        meta: {
            keepAlive: false // 需要被缓存
        }
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import("../views/About.vue"),
        meta: {
            keepAlive:false // bu需要被缓存
        }
    },
    {
        path: '/FAQ',
        name: 'FAQ',
        component: () =>
            import("../views/FAQ.vue"),
        meta: {
            keepAlive: false // 需要被缓存
        }
    },
    {
        path: '/news',
        name: 'news',
        component: () =>
            import("../views/Media.vue"),
        meta: {
            keepAlive: false // 需要被缓存
        }
    },
    {
        path: "/partner",
        name: "partner",
        component: () =>
            import("../views/Partner.vue"),
        meta: {
            keepAlive: false // 需要被缓存
        }
    },
    {
        path: "/detail",
        name: "detail",
        component: () =>
            import("../views/Detail.vue"),
        meta: {
            keepAlive: false // 需要被缓存
        }
    },
    {
        path: "/proposal",
        name: "proposal",
        component: () =>
            import("../views/Proposal.vue"),
        meta: {
            keepAlive: false // 需要被缓存
        }
    },
    {
        path: "/toproposal",
        name: "toproposal",
        component: () =>
            import("../views/ToProposal.vue"),
        meta: {
            keepAlive: false // 需要被缓存
        }
    },
    {
        path: "/proposaldetail",
        name: "proposaldetail",
        component: () =>
            import("../views/ProposalDetail.vue"),
        meta: {
            keepAlive: false // 需要被缓存
        }
    },
    {
        path: "/vote",
        name: "vote",
        component: () =>
            import("../views/Vote.vue"),
        meta: {
            keepAlive: false // 需要被缓存
        }
    },
    {
        path: "/votedetail",
        name: "votedetail",
        component: () =>
            import("../views/VoteDetail.vue"),
        meta: {
            keepAlive: false // 需要被缓存
        }
    },


];

const router = new VueRouter({
    routes,
});

// 挂载路由导航守卫,to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作 next('/login')强制跳转login
// router.beforeEach((to, from, next) => {
//     // 访问登录页，放行
//     if (to.path === '/proposal') {
//         const tokenStr = window.sessionStorage.getItem('token')
//         // 没有token, 强制跳转到登录页
//         if (!tokenStr) return next('/')
//     }
//     // 获取token
//     next()
// })

export default router;