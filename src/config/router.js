export default [
  {
    title: "Login Page | Booking",
    component: "./bodys/login-logout/login",
    path: "/login",
    isProtected: false,
  },
  {
    title: "Register Page | Booking",
    component: "./bodys/login-logout/register",
    path: "/register",
    isProtected: false,
  },
  {
    title: "Home Page |Booking",
    component: "./bodys/home/home",
    path: "/home",
    isProtected: false,
  },
  {
    title: "Home Page |Booking",
    component: "./bodys/home/home",
    path: "/",
    isProtected: false,
  },
  {
    title: "Home Page |Booking",
    component: "./bodys/home/home",
    path: "/",
    isProtected: false,
  },
  {
    title: "Tour |Booking",
    component: "./bodys/tour/bgTour",
    path: "/tour",
    isProtected: false,
  },
  {
    title: "Payment |Booking",
    component: "./payment/payment",
    path: "/payment",
    isProtected: false,
  },
  {
    title: "Detail Tour |Booking",
    component: "./bodys/home/detail/detail",
    path: "/detail/:id",
    isProtected: false,
  },
  {
    title: "Detail Booking Tour |Booking",
    component: "./booking/detail-booking",
    path: "/booking/:id",
  },
  {
    title: "Recover |Booking",
    component: "./bodys/login-logout/recover",
    path: "/recover",
    isProtected: false,
  },
  {
    title: "Recover |Booking",
    component: "./bodys/login-logout/recoverRegister",
    path: "/recover/re-register",
    isProtected: false,
  },
  {
    title: "Edit Infomation |Booking",
    component: "./bodys/login-logout/editInformation",
    path: "/editInformation",
    isProtected: false,
  },
  {
    title: "Not Found |Booking",
    component: "./bodys/home/notFound/404NotFound",
    path: "*",
    isProtected: false,
  },
];
