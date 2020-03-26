export default [
  {
    title: "Login Page | Booking",
    component: "./bodys/login-logout/login",
    path: "/login",
    isProtected: false
  },
  {
    title: "Register Page | Booking",
    component: "./bodys/login-logout/register",
    path: "/register",
    isProtected: false
  },
  {
    title: "Home Page |Booking",
    component: "./bodys/home/home",
    path: "/home",
    isProtected: false
  },
  {
    title: "Home Page |Booking",
    component: "./bodys/home/home",
    path: "/",
    isProtected: false
  },
  {
    title: "Home Page |Booking",
    component: "./bodys/home/home",
    path: "/",
    isProtected: false
  },
  // {
  //   title: "Tour |Booking",
  //   component: "./bodys/listTour/bgListTour",
  //   path: "/tour",
  //   isProtected: false
  // },
  {
    title: "Home Payment |Booking",
    component: "./headers/payment",
    path: "/payment",
    isProtected: false
  },
  {
    title: "Home Detail |Booking",
    component: "./bodys/home/detail/detail",
    path: "/detail/:id",
    isProtected: false
  },
  {
    title: "Not Found |Booking",
    component: "./bodys/home/notFound/404NotFound",
    path: "*",
    isProtected: false
  }
];
