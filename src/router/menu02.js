export default [
  {
    path:"/menu02/Exam01Expressions",
    component: () => import(/* webpackChunkName: "menu02" */ '../views/menu02/Exam01Expressions'),
  },
  {
    path:"/menu02/Exam02Directives",
    component: () => import(/* webpackChunkName: "menu02" */ '../views/menu02/Exam02Directives'),
  },
  {
    path:"/menu02/Exam03AttrBinding",
    component: () => import(/* webpackChunkName: "menu02" */ '../views/menu02/Exam03AttrBinding'),
  },
  {
    path:"/menu02/Exam04FormBinding",
    component: () => import(/* webpackChunkName: "menu02" */ '../views/menu02/Exam04FormBinding'),
  },
  {
    path:"/menu02/Exam05ForRepeatBinding",
    component: () => import(/* webpackChunkName: "menu02" */ '../views/menu02/Exam05ForRepeatBinding'),
  },
  {
    path:"/menu02/Exam06ComputedBinding",
    component: () => import(/* webpackChunkName: "menu02" */ '../views/menu02/Exam06ComputedBinding'),
  },
  {
    path:"/menu02/Exam07Template",
    component: () => import(/* webpackChunkName: "menu02" */ '../views/menu02/Exam07Template'),
  },
];