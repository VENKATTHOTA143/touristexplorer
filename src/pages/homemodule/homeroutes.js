import AboutComp from "./AboutComp.vue";
import ContactComp from "./ContactComp.vue";
import HomePage from "./HomePage.vue";
import MainPage from "./MainPage.vue";
import PackagesComp from "./PackagesComp.vue";
import RegisterComp from "./RegisterComp.vue";
import ServicesComp from "./ServicesComp.vue";

const homeroutes = [{
   path: "/main",
   component: MainPage,
   redirect: "/main/home",
   meta: { requiresAuth: true },
   children: [{
      path: "home",
      name: "home",
      component: HomePage,
   },
   {
      path: "about",
      component: AboutComp,
      meta: { requiresAuth: true },
   },
   {
      path: "contact",
      component: ContactComp,
      meta: { requiresAuth: true },
   },
   {
      path: "packages",
      component: PackagesComp,
      meta: { requiresAuth: true },
   },
   {
      path: "register",
      component: RegisterComp,
      meta: { requiresAuth: true },
   },
   {
      path: "services",
      component: ServicesComp,
      meta: { requiresAuth: true },
   },
   ],
},];

export default homeroutes;



// import AboutComp from "./AboutComp.vue"
// import ContactComp from "./ContactComp.vue"
// import HomePage from "./HomePage.vue"
// import MainPage from "./MainPage.vue"

// import PackagesComp from "./PackagesComp.vue"
// import RegisterComp from "./RegisterComp.vue"
// import ServicesComp from "./ServicesComp.vue"


// const homeroutes = [{
//    path: "/main",
//    component: MainPage,
//    redirect: "/main/home",
//    children: [{
//       path: "about",
//       component: AboutComp
//    }, {
//       path: "home",
//       component: HomePage,
//    },
//    {
//       path: "contact",
//       component: ContactComp,
//    },
//    {
//       path: "packages",
//       component: PackagesComp
//    },
//    {
//       path: "register",
//       component: RegisterComp
//    }, {
//       path: "services",
//       component: ServicesComp
//    }

//    ]
// }];

// export default homeroutes