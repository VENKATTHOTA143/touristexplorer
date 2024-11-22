<template>


   <nav class="navbar navbar-expand-lg bg-body-tertiary" data-aos="fade-down" data-aos-duration="1000">
      <div class="container d-flex justify-content-between align-items-center">

         <a class="navbar-brand" href="#">Tourist</a>


         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>


         <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <div class="d-flex flex-column flex-lg-row gap-3 align-items-center">

               <HeaderComp class="tabs" :tabs="tabs" :selectedTab="selectedTab"
                  @update:selectedTab="updateSelectedTab" />


               <div class="nav-item dropdown" data-aos="fade-in" data-aos-delay="200">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                     aria-expanded="false">
                     Dropdown
                  </a>
                  <ul class="dropdown-menu custom-dropdown-menu">
                     <li><router-link to="/tour/destination" class="dropdown-item">Destination</router-link></li>
                     <li><router-link to="/tour/booking" class="dropdown-item">Booking</router-link></li>
                     <li><router-link to="/tour/travelguides" class="dropdown-item">Travel Guide</router-link></li>
                     <li><router-link to="/tour/testimonial" class="dropdown-item">Testimonial</router-link></li>
                     <li><router-link to="/tour/error" class="dropdown-item">404 Error</router-link></li>
                  </ul>
               </div>


               <div>
                  <!-- Login Button -->
                  <button v-if="!isLoggedIn" type="button" class="btn btn-success" data-aos="zoom-in"
                     data-aos-delay="400">
                     <router-link to="/login">Login</router-link>
                  </button>
                  <!-- Logout Button -->
                  <button v-if="isLoggedIn" type="button" class="btn btn-danger" data-aos="zoom-in" data-aos-delay="400"
                     @click="logout">
                     Logout
                  </button>

               </div>
            </div>
         </div>
      </div>
   </nav>


   <div class="selected-tab-display mt-4 text-center" v-if="selectedTab">
      <transition name="fade">
         <h2 class="selected-tab-text text-dark">{{ selectedTab.name }}</h2>
      </transition>
   </div>


   <div class="position-relative w-50 mx-auto my-4 search-bar" data-aos="fade-up">
      <input class="border-1 rounded-pill w-100 py-3 ps-4 pe-5 shadow-sm" type="text" placeholder="Search">
      <button type="button" class="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2 border-0"
         style="margin-top: 8px;">Search</button>
   </div>


   <nav aria-label="breadcrumb" class="text-center">
      <transition name="breadcrumb">
         <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item"><router-link to="/main/home">Home</router-link></li>
            <li class="breadcrumb-item active" v-if="selectedTab && selectedTab.name !== 'Home'">
               {{ selectedTab.name }}
            </li>
         </ol>
      </transition>
   </nav>


   <!-- 
   <div class="main-head">
      <div class="container d-flex justify-content-between align-items-center p-0">
         <h1 class="" style="color: #86B817;">Tourist</h1>
         <div class="d-flex align-items-center">
            <HeaderComp class="tabs" :tabs="tabs" :selectedTab="selectedTab" @update:selectedTab="updateSelectedTab" />
            <div class="btn-group">
               <button class="btn btn-success text-white dropdown-toggle px-4 py-2" type="button"
                  data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
                  Pages
               </button>
               <ul class="dropdown-menu custom-dropdown-menu">
                  <li><router-link to="/tour/destination" class="dropdown-item">Destination</router-link></li>
                  <li><router-link to="/tour/booking" class="dropdown-item">Booking</router-link></li>
                  <li><router-link to="/tour/travelguides" class="dropdown-item">Travel Guide</router-link></li>
                  <li><router-link to="/tour/testimonial" class="dropdown-item">Testimonial</router-link></li>
                  <li><router-link to="/tour/error" class="dropdown-item">404 Error</router-link></li>
               </ul>
            </div>

            <button type="button" class="btn btn-success ms-3">Register</button>
         </div>
      </div>
      <div class="selected-tab-display mt-5 text-white" v-if="selectedTab">
         <h2 class="selected-tab-text">{{ selectedTab.name }}</h2>
      </div>
      <div class="position-relative w-75 mx-auto">
         <input class="border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Search">
         <button type="button"
            class="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2 border-0"
            style="margin-top: 8px;">Search</button>
      </div>

      <div>
         <nav aria-label="breadcrumb">
            <ol class="breadcrumb ">
               <li class="breadcrumb-item"><a href="#">Home</a></li>
               <li class="breadcrumb-item" v-if="selectedTab && selectedTab.name !== 'home'">
                  <a href="#">{{ selectedTab.name }}</a>
               </li>
            </ol>
         </nav>
      </div>
   </div> -->
</template>

<script>
import HeaderComp from '@/components/common/HeaderComp.vue';

export default {
   components: {
      HeaderComp
   },
   data() {
      return {
         selectedTab: null,
         tabs: [
            { name: "home", route: "/main/home" },
            { name: "About", route: "/main/about" },
            { name: "Services", route: "/main/services" },
            { name: "Packages", route: "/main/packages" },
            { name: "Contact", route: "/main/contact" }
         ],
      };
   },
   computed: {
      isLoggedIn() {
         // Check for the presence of userDetails in localStorage
         return localStorage.getItem("userDetails") !== null;
      }
   },
   methods: {
      updateSelectedTab(newTab) {
         this.selectedTab = newTab;
      },
      logout() {
         // Correctly remove the keys
         localStorage.removeItem("userDetails");
         localStorage.removeItem("authToken");

         // Redirect to login page
         this.$router.push({ path: '/login' });
      }

   },
   created() {
      const savedTab = localStorage.getItem('selectedTab');
      if (savedTab) {
         this.selectedTab = JSON.parse(savedTab);
      }
   }

};
</script>

<style scoped>
.main-head {
   background: linear-gradient(rgba(20, 20, 31, .7), rgba(20, 20, 31, .7)), url(../../assets/background.jpg);
   background-position: center center;
   background-repeat: no-repeat;
   background-size: cover;
}

.btn {
   background-color: #86B817;
   border: none;
}


.custom-dropdown-menu {
   background-color: #f8f9fa;

   border-radius: 8px;
   padding: 10px;
   min-width: 180px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

}


.custom-dropdown-menu .dropdown-item {
   color: #333;
   padding: 8px 15px;
   font-weight: 500;
   transition: background-color 0.3s, color 0.3s;
}

.custom-dropdown-menu .dropdown-item:hover {
   background-color: #86B817;
   color: white;
   border-radius: 6px;
}

/* Fade transition for Selected Tab */
.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
   opacity: 0;
}

/* Breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
   transition: opacity 0.5s, transform 0.3s;
}

/* Ensure navbar and dropdown have a higher z-index */
.navbar {
   position: relative;
   z-index: 10;
   /* Adjust this value if necessary */
}

.dropdown-menu {
   position: absolute;
   z-index: 20;
   /* Higher than the navbar and search bar */
}

/* Lower z-index for the search bar */
.search-bar {
   position: relative;
   z-index: 5;
}


.breadcrumb-enter,
.breadcrumb-leave-to {
   opacity: 0;
   transform: translateY(10px);
}

/* Active Tab Highlight */
.tabs .active-tab {
   border-bottom: 2px solid #86B817;
   font-weight: bold;
}





.selected-tab-display {
   text-align: center;
   margin-top: 50px;
}

.selected-tab-text {
   font-size: 40px;
   color: #fffefe;
}

.tabs {
   display: flex;
   gap: 10px;
   margin-top: 0;
   cursor: pointer;
   border-radius: 8px;
   background-color: transparent;
   color: white;
   font-weight: bold;
   transition: color 0.3s, border-bottom 0.3s;
}

.tabs.active {
   background-color: #3636366a;
   color: #333;
   border-color: #3636366a;
}

.tabs:hover {
   color: white;
   text-decoration: none;
}
</style>


<!-- <template>
   <div class="main-head">
      <div class="container d-flex justify-content-between align-items-center p-0">
         <h1 class="text-success">Tourist</h1>
         <div class="d-flex align-items-center">
            <HeaderComp class="tabs" :tabs="tabs" :selectedTab="selectedTab" @update:selectedTab="updateSelectedTab" />
            <div class="btn-group">
               <button class="btn  text-white dropdown-toggle" type="button" data-bs-toggle="dropdown"
                  data-bs-auto-close="inside" aria-expanded="false">
                  Pages
               </button>
               <ul class="dropdown-menu">
                  <li><router-link to="/tour/destination">Destination</router-link></li>
                  <li><router-link to="/tour/booking">Booking</router-link></li>
                  <li><router-link to="/tour/travelguides">Travel Guide</router-link></li>
                  <li><router-link to="/tour/testimonial">Testimonial</router-link></li>
                  <li><router-link to="/tour/error">404 Error</router-link></li>

               </ul>
            </div>
            <button type="button" class="btn btn-success ms-3">Register</button>
         </div>
      </div>
      <div class="selected-tab-display mt-5 text-white" v-if="selectedTab">
         <h2 class="selected-tab-text"> {{ selectedTab.name }}</h2>
      </div>
      <div class="position-relative w-75 mx-auto  ">
         <input class=" border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text">
         <button type="button"
            class="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2 border-none"
            style="margin-top: 8px;">Search</button>
      </div>

      <div>
         <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
               <li class="breadcrumb-item"><a href="#">Home</a></li>
               <li class="breadcrumb-item" v-if="selectedTab !== 'home'"><a href="#">{{ selectedTab.name }}</a></li>
               <li class="breadcrumb-item active" aria-current="page"></li>
            </ol>
         </nav>
      </div>


   </div>

</template>

<script>
import HeaderComp from '@/components/common/HeaderComp.vue';

export default {
   components: {
      HeaderComp
   },
   data() {
      return {
         selectedTab: "",
         tabs: [
            {
               name: "home",
               route: "home"
            }, {
               name: "About",
               route: "about"
            }, {
               name: "Services",
               route: "services"
            }, {
               name: "Packages",
               route: "packages"
            }, {
               name: "Contact",
               route: "contact"
            },

         ],
      };
   },
   methods: {
      updateSelectedTab(newTab) {
         this.selectedTab = newTab;
      }
   }
};
</script>

<style scoped>
.main-head {
   background: linear-gradient(rgba(20, 20, 31, .7), rgba(20, 20, 31, .7)), url(../../assets/background.jpg);
   background-position: center center;
   background-repeat: no-repeat;
   background-size: cover;
}


.btn {
   background-color: #86B817;
   border: none;
}

img {
   height: 500px;
}

.container {
   margin-bottom: 50px;

}

.selected-tab-display {
   text-align: center;
   margin-top: 50px;

}

.selected-tab-text {
   font-size: 40px;
   color: #fffefe;
}

.tabs {
   display: flex;
   gap: 10px;
   margin-top: 0;
}

.tabs {

   cursor: pointer;

   border-radius: 8px;
   background-color: transparent;
   color: #333;
   color: white;
   align-items: center;
   font-weight: bold;
   transition: color 0.3s, border-bottom 0.3s;
}

.tabs.active {
   background-color: #3636366a;
   color: #333;
   border-color: #3636366a;
}

.tabs:hover {
   color: white;

   text-decoration: none;



}
</style> -->
