import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }

const routes = [  {
    path: '/',
    name: 'index',
    component: () =>
        import("../views/Index.vue"),

},
{
    path: "/address",
    name: "addressed",
    component: () =>
        import("../views/Address.vue"),


},
{
    path: '/block',
    name: 'block',
    component: () =>
        import("../views/Block.vue"),

},
{
    path: '/chart',
    name: 'chart',
    component: () =>
        import("../views/Chart.vue"),

},
{
    path: "/transaction",
    name: "transaction",
    component: () =>
        import("../views/Transaction.vue"),

},
{
    path: "/wallet",
    name: "Fastoken",
    component: () =>
        import("../views/Wallet.vue"),

},
// 区块详情页
{
    path: "/blockdetail",
    name: "blockdetail",
    component: () =>
        import("../views/blockchildren/blockdetail.vue"),

},
// 区块详情页2
{
    path: "/blockdetails",
    name: "blockdetails",
    component: () =>
        import("../views/blockchildren/blockdetails.vue"),

},

// 交易详情页
{
    path: "/transactiondetail",
    name: "transactiondetail",
    component: () =>
        import("../views/transactionchildren/transactiondetail.vue"),

},
// 地址搜索详情页
{
    path: "/transactiondetails",
    name: "transactiondetails",
    component: () =>
        import("../views/transactionchildren/transactiondetails.vue"),

},
{
    path: "/notfound",
    name: "notfound",
    component: () =>
        import("../views/notfound.vue"),

},

// 搜索栏
{
    path: "/search",
    name: "search",
    component: () =>
        import("../components/common/search.vue"),

},
{
    path: "/headertop",
    name: "headertop",
    component: () =>
        import("../components/common/HeaderTop.vue"),

},

];

const router = new VueRouter({
    routes,
});

export default router;