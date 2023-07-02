export default [
  {
    path: "/users",
    name: "UserIndex",
    component: () => import("@/views/user/UserIndex.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/users/create",
    name: "CreateUser",
    component: () => import("@/views/user/Create.vue"),
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/users/:id",
    name: "UpdateUser",
    component: () => import("@/views/user/Update.vue"),
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/users/test",
    name: "Test",
    component: () => import("@/views/user/TestTable.vue"),
    props: true,
    meta: { requiresAuth: true },
  },
];
