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
    title: "Dashboard | Booking",
    component: "./page/dashboard-admin",
    path: "/admin/dashboard",
    isProtected: true,
  },
  {
    title: "Admin Login | Booking",
    component: "./page/login-admin",
    path: "/admin/login-admin",
    isProtected: false,
  },
  {
    title: "Booking Management | Booking",
    component: "./page/booking-management",
    path: "/admin/booking-management",
    isProtected: true,
  },
  {
    title: "Booking Management | Booking",
    component: "./page/detail-item-booking",
    path: "/admin/booking-management/detail/:id",
    isProtected: true,
  },
  {
    title: "Booking Management | Booking",
    component: "./component/item-booking-management/detailBooked",
    path: "/admin/detail-booked-bill/:id",
    isProtected: true,
  },
  {
    title: "Admin Login | Booking",
    component: "./page/login-admin",
    path: "/admin",
    isProtected: false,
  },
];
