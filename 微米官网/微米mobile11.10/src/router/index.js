import Vue from "vue";
import VueRouter from "vue-router";
import index from '../views/Index.vue';
Vue.use(VueRouter);
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }
const routes = [{
    path: '/',
    redirect: '/index'
}, {
    path: "/slider",
    name: "slider",
    component: () =>
        import("../components/common/slider.vue"),
},
{
    path: "/login",
    name: "login",
    component: () =>
        import("../components/common/Login.vue"),
},
{
    path: "/forgetpassword",
    name: "forgetpassword",
    component: () =>
        import("../components/common/ForgetPassword.vue"),
},
{
    path: "/fastoken",
    name: "fastoken",
    component: () =>
        import("../components/common/Fastoken.vue"),
    meta: {
        keepAlive: false // bu需要被缓存
    }
},
{
    path: "/fastokensecond",
    name: "fastokensecond",
    component: () =>
        import("../components/common/FastokenSecond.vue"),
    meta: {
        keepAlive: false // bu需要被缓存
    }
},
{
    path: "/votenumber",
    name: "votenumber",
    component: () =>
        import("../components/common/voteNumber.vue"),
    meta: {
        keepAlive: false // bu需要被缓存
    }
},
{
    path: '/index',
    name: 'index',
    component: index,
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
        keepAlive: false // bu需要被缓存
    }
},
{
    path: "/proposal",
    name: "proposal",
    component: () =>
        import("../views/Proposal.vue"),
    meta: {
        keepAlive: false // bu需要被缓存
    }
},
{
    path: "/proposaldetail",
    name: "proposaldetail",
    component: () =>
        import("../views/ProposalDetail.vue"),
    meta: {
        keepAlive: false // bu需要被缓存
    }
},
{
    path: "/toproposal",
    name: "toproposal",
    component: () =>
        import("../views/Toproposal.vue"),
    meta: {
        keepAlive: false // bu需要被缓存
    }
},
{
    path: "/vote",
    name: "vote",
    component: () =>
        import("../views/Vote.vue"),
    meta: {
        keepAlive: false // bu需要被缓存
    }
},
{
    path: "/votedetail",
    name: "votedetail",
    component: () =>
        import("../views/VoteDetail.vue"),
    meta: {
        keepAlive: false // bu需要被缓存
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
},
];

const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

export default router;