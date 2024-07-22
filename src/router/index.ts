import { type RouteRecordRaw, createRouter } from "vue-router"
import { history, flatMultiLevelRoutes } from "./helper"
import routeSettings from "@/config/route"
const Layouts = () => import("@/layouts/index.vue")

/**
 * 常驻路由
 * 除了 redirect/403/404/login 等隐藏页面，其他页面建议设置 Name 属性
 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layouts,
    meta: {
      hidden: true
    },
    children: [
      {
        path: ":path(.*)",
        component: () => import("@/views/redirect/index.vue")
      }
    ]
  },
  {
    path: "/403",
    component: () => import("@/views/error-page/403.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    meta: {
      hidden: true
    },
    alias: "/:pathMatch(.*)*"
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/",
    component: Layouts,
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("@/views/home/index.vue"),
        name: "Home",
        meta: {
          title: "首页",
          elIcon: "Grid",
          affix: true
        }
      }
    ]
  },
  {
    path: "/hygl",
    meta: {
      title: "会员管理",
      elIcon: "Grid"
    },
    component: Layouts,
    children: [
      {
        path: "hylb",
        component: () => import("@/views/member/hylb.vue"),
        name: "HYLB",
        meta: {
          title: "会员列表"
        }
      },
      {
        path: "hydj",
        component: () => import("@/views/member/hydj.vue"),
        name: "HYDJ",
        meta: {
          title: "会员等级"
        }
      },
      {
        path: "fypz",
        component: () => import("@/views/member/fypz.vue"),
        name: "FYPZ",
        meta: {
          title: "返佣配置"
        }
      }
    ]
  },
  {
    path: "/cwgl",
    meta: {
      title: "财务管理",
      elIcon: "Grid"
    },
    component: Layouts,
    children: [
      {
        path: "hyck",
        component: () => import("@/views/finance/hyck.vue"),
        name: "HYCK",
        meta: {
          title: "会员存款"
        }
      },
      {
        path: "hyzz",
        component: () => import("@/views/finance/hyzz.vue"),
        name: "HYZZ",
        meta: {
          title: "会员转账"
        }
      },
      {
        path: "hyqk",
        component: () => import("@/views/finance/hyqk.vue"),
        name: "HYQK",
        meta: {
          title: "会员取款"
        }
      },
      {
        path: "hyfy",
        component: () => import("@/views/finance/hyfy.vue"),
        name: "HYFY",
        meta: {
          title: "会员返佣"
        }
      },
      {
        path: "hytj",
        component: () => import("@/views/finance/hytj.vue"),
        name: "HYTJ",
        meta: {
          title: "会员统计"
        }
      }
    ]
  },
  {
    path: "/dlgl",
    meta: {
      title: "代理管理",
      elIcon: "Grid"
    },
    component: Layouts,
    children: [
      {
        path: "dlbl",
        component: () => {},
        name: "DLLB",
        meta: {
          title: "代理列表"
        }
      },
      {
        path: "dlyj",
        component: () => {},
        name: "DLYJ",
        meta: {
          title: "代理佣金"
        }
      },
      {
        path: "dltj",
        component: () => {},
        name: "DLTJ",
        meta: {
          title: "代理统计"
        }
      }
    ]
  },
  {
    path: "/hdgl",
    meta: {
      title: "活动管理",
      elIcon: "Grid",
      alwaysShow: true
    },
    component: Layouts,
    children: [
      {
        path: "dlbl",
        component: () => {},
        name: "DLLB",
        meta: {
          title: "活动分类"
        }
      }
    ]
  },
  {
    path: "/zntz",
    meta: {
      title: "站内通知",
      elIcon: "Grid"
    },
    component: Layouts,
    children: [
      {
        path: "tzlb",
        component: () => {},
        name: "TZLB",
        meta: {
          title: "通知列表"
        }
      },
      {
        path: "fklb",
        component: () => {},
        name: "FKLB",
        meta: {
          title: "反馈列表"
        }
      },
      {
        path: "tzfl",
        component: () => {},
        name: "TZFL",
        meta: {
          title: "通知分类"
        }
      },
      {
        path: "fkfl",
        component: () => {},
        name: "FKFL",
        meta: {
          title: "反馈分类"
        }
      }
    ]
  },
  {
    path: "/xtgl",
    meta: {
      title: "系统管理",
      elIcon: "Grid",
      alwaysShow: true
    },
    component: Layouts,
    children: [
      {
        path: "xtgl",
        component: () => import("@/views/xtgl/index.vue"),
        name: "XTGL",
        meta: {
          title: "系统管理"
        }
      }
    ]
  },
  {
    path: "/nrgl",
    meta: {
      title: "内容管理",
      elIcon: "Grid"
    },
    component: Layouts,
    children: [
      {
        path: "banner",
        component: () => import("@/views/nrgl/index.vue"),
        name: "BANNER",
        meta: {
          title: "banner"
        }
      },
      {
        path: "pmd",
        component: () => {},
        name: "PMD",
        meta: {
          title: "跑马灯"
        }
      },
      {
        path: "zzfw",
        component: () => {},
        name: "ZZFW",
        meta: {
          title: "自助服务"
        }
      },
      {
        path: "zzfl",
        component: () => {},
        name: "ZZFL",
        meta: {
          title: "自助分类"
        }
      }
    ]
  },
  {
    path: "/zfgl",
    meta: {
      title: "支付管理",
      elIcon: "Grid",
      alwaysShow: true
    },

    component: Layouts,
    children: [
      {
        path: "yhlb",
        component: () => import("@/views/zfgl/yhlb.vue"),
        name: "YHLB",
        meta: {
          title: "银行列表"
        }
      }
    ]
  },
  {
    path: "/jkgl",
    meta: {
      title: "接口管理",
      elIcon: "Grid"
    },
    component: Layouts,
    children: [
      {
        path: "jkkey",
        component: () => import("@/views/jkgl/index.vue"),
        name: "JKKEY",
        meta: {
          title: "接口Key"
        }
      },
      {
        path: "jkfl",
        component: () => {},
        name: "JKFL",
        meta: {
          title: "接口分类"
        }
      },
      {
        path: "jklb",
        component: () => {},
        name: "JKLB",
        meta: {
          title: "接口列表"
        }
      }
    ]
  },
  {
    path: "/qxgl",
    meta: {
      title: "权限管理",
      elIcon: "Grid"
    },
    component: Layouts,
    children: [
      {
        path: "glylb",
        component: () => import("@/views/qxgl/index.vue"),
        name: "GLYLB",
        meta: {
          title: "管理员列表"
        }
      },
      {
        path: "jsgl",
        component: () => {},
        name: "JSGL",
        meta: {
          title: "角色管理"
        }
      },
      {
        path: "cdgl",
        component: () => {},
        name: "CDGL",
        meta: {
          title: "菜单管理"
        }
      }
    ]
  },
  {
    path: "/rzgl",
    meta: {
      title: "日志管理",
      elIcon: "Grid"
    },
    component: Layouts,
    children: [
      {
        path: "hyrz",
        component: () => import("@/views/rzgl/index.vue"),
        name: "HYRZ",
        meta: {
          title: "会员日志"
        }
      },
      {
        path: "hydl",
        component: () => {},
        name: "HYDL",
        meta: {
          title: "代理日志"
        }
      },
      {
        path: "htrz",
        component: () => {},
        name: "HTRZ",
        meta: {
          title: "后台日志"
        }
      }
    ]
  }
]

/**
 * 动态路由
 * 用来放置有权限 (Roles 属性) 的路由
 * 必须带有 Name 属性
 */
// export const dynamicRoutes: RouteRecordRaw[] = [
//   {
//     path: "/permission",
//     component: Layouts,
//     redirect: "/permission/page",
//     name: "Permission",
//     meta: {
//       title: "权限",
//       svgIcon: "lock",
//       roles: ["admin", "editor"], // 可以在根路由中设置角色
//       alwaysShow: true // 将始终显示根菜单
//     },
//     children: [
//       {
//         path: "page",
//         component: () => import("@/views/permission/page.vue"),
//         name: "PagePermission",
//         meta: {
//           title: "页面级",
//           roles: ["admin"] // 或者在子导航中设置角色
//         }
//       },
//       {
//         path: "directive",
//         component: () => import("@/views/permission/directive.vue"),
//         name: "DirectivePermission",
//         meta: {
//           title: "按钮级" // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
//         }
//       }
//     ]
//   }
// ]

const router = createRouter({
  history,
  routes: routeSettings.thirdLevelRouteCache ? flatMultiLevelRoutes(constantRoutes) : constantRoutes
})

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}

export default router
