import { createWebHistory, createRouter } from "vue-router";
import homeroutes from "./pages/homemodule/homeroutes"; // Import routes for the home module
import tourismroutes from "./pages/Tourism-module/tourismroutes"; // Import routes for the tourism module
import LoginPage from "./auth/LoginPage.vue"; // Import LoginPage component
import SignupComp from "./auth/SignupComp.vue"; // Import SignupComp component
import { isAuthenticated } from "./shared/auth";

// Define the array of routes
const routes = [{
        path: '/', // Base path
        redirect: '/login' // Redirect root URL to the login page
    },
    {
        path: "/login", // Login route path
        name: "login", // Name of the route
        component: LoginPage, // Component to render for the login route
    },
    {
        path: "/signup", // Signup route path
        name: "signup", // Name of the route
        component: SignupComp, // Component to render for the signup route
    },
    // Include routes from other modules dynamically
    ...homeroutes,
    ...tourismroutes,
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(), // Use the history mode for cleaner URLs
    routes, // Pass the routes array
});

// Global Navigation Guard
router.beforeEach((to, from, next) => {
    const isAuthenticate = isAuthenticated(); // Call your authentication check function
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth); // Check if route requires authentication

    console.log("Navigating to:", to.name, "From:", from.name);

    if (requiresAuth && !isAuthenticate) {
        // Redirect unauthenticated users trying to access protected routes to the signup page
        next({ name: "signup" });
    } else if (isAuthenticate && to.name === "login") {
        // Redirect authenticated users trying to access the login page
        next({ path: "/main/home" });
    } else {
        // Allow navigation to all other routes
        next();
    }
});


export default router; // Export the router instance