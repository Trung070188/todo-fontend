export default [
  {
    path: "",
    name: "LayoutLogin",
    component: () => import("@/layouts/LayoutLogin.vue"),
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("@/components/Login.vue"),
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("@/components/Register.vue"),
      },
    ],
  },
];
