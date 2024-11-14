import { createWebHistory, createRouter } from "vue-router";
import homeroutes from "./pages/homemodule/homeroutes";
import tourismroutes from "./pages/Tourism-module/tourismroutes";

const routes = [{
    path: "/",
    redirect: "/main/home" // Redirect root path to /main/home
},
...homeroutes,
...tourismroutes
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;


// import { createWebHistory, createRouter } from "vue-router";
// import homeroutes from "./pages/homemodule/homeroutes";
// import tourismroutes from "./pages/Tourism-module/tourismroutes";



// const routes = [

//     ...homeroutes,
//     ...tourismroutes
// ];

// const router = createRouter({
//     history: createWebHistory(),
//     routes,
// });

// export default router;