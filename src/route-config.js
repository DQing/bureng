'use strict';

export default function (router) {
    router.map({
        '/': {
            name: 'home',
            component: (resolve) => {
                require(['./views/index/app.vue'], resolve)
            }
        },
        '/login': {
            name: 'login',
            component: (resolve) => {
                require(['./views/login/login.vue'], resolve)
            }
        },
        '/register': {
            name: 'register',
            component: (resolve) => {
                require(['./views/login/register.vue'], resolve)
            }
        },
        // 个人中心
        '/user': {
            name: 'user',
            component: (resolve) => {
                require(['./views/user/app.vue'], resolve)
            },
            subRoutes: {
                '/': {
                    name: 'user-data',
                    component: (resolve) => {
                        require(['./views/user/sub/data.vue'], resolve)
                    }
                },
                '/publish': {
                    name: 'user-publish',
                    component: (resolve) => {
                        require(['./views/user/sub/publish.vue'], resolve)
                    }
                },
                '/favorite': {
                    name: 'user-favorite',
                    component: (resolve) => {
                        require(['./views/user/sub/favorite.vue'], resolve)
                    }
                },
                '/msg': {
                    name: 'user-msg',
                    component: (resolve) => {
                        require(['./views/user/sub/msg.vue'], resolve)
                    }
                }
            }
        },
        // 协议
        '/agreement': {
            name: 'agreement',
            component: (resolve) => {
                require(['./views/agreement/app.vue'], resolve)
            }
        },
        '/publish': {
            name: 'publish',
            component: (resolve) => {
                require(['./views/publish/app.vue'], resolve)
            },
            subRoutes: {
                '/about': {
                    name: 'about',
                    component: (resolve) => {
                        require(['./views/other/about.vue'], resolve)
                    }
                }
            }
        },
        '/goodsInfo': {
            name: 'goodsInfo',
            component: (resolve) => {
                require(['./views/goodsInfo/app.vue'], resolve)
            }
        }

    })
}