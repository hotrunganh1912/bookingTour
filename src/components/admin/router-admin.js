export default [
  {
    title: "Tour Management | Booking",
    component: "./page/tour-management",
    path: "/admin/tour-management",
    isProtected: true,
  },
  {
    title: "User Management | Booking",
    component: "./page/user-management",
    path: "/admin/user-management",
    isProtected: true,
  },
  {
    title: "Admin Login | Booking",
    component: "./page/login-admin",
    path: "/admin/login-admin",
    isProtected: false,
  },
  {
    title: "Admin Login | Booking",
    component: "./page/login-admin",
    path: "/admin",
    isProtected: false,
  },
];
