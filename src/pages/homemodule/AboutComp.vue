<template>
   <!-- About Us Section -->
   <div class="container" data-aos="fade-up" data-aos-duration="1000">
      <div class="row">
         <div class="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration="1200">
            <img src="../../assets/about.jpg" alt="About us image" class="img-fluid">
         </div>
         <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1200">
            <h6 class="section-title bg-white text-start text-primary">About Us</h6>
            <h2>Welcome to <span>Tourist</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, in sunt. Error suscipit dignissimos
               accusantium.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quasi delectus laudantium minus quia
               consectetur perspiciatis inventore nostrum. Architecto maiores rem pariatur? Provident sequi ex ducimus
               earum eius obcaecati et!</p>

            <div class="row g-3">
               <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                  <p>First Class Flights</p>
               </div>
               <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                  <p>Hand Picked Hotels</p>
               </div>
               <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
                  <p>5 Star Accommodations</p>
               </div>
               <div class="col-lg-6" data-aos="fade-up" data-aos-delay="600">
                  <p>Latest Model Vehicles</p>
               </div>
               <div class="col-lg-6" data-aos="fade-up" data-aos-delay="700">
                  <p>150 Premium City Tours</p>
               </div>
               <div class="col-lg-6" data-aos="fade-up" data-aos-delay="800">
                  <p>24/7 Service</p>
               </div>
            </div>
            <a class="btn btn-primary text-uppercase py-3 px-5 mt-2" data-aos="zoom-in" data-aos-delay="900">Read
               More</a>
         </div>
      </div>
   </div>

   <!-- Travel Guide Section -->
   <div class="container mt-5 mb-5" data-aos="fade-up" data-aos-duration="1000">
      <div class="text-center">
         <h6 class="success">Travel Guide</h6>
         <h2>Meet Our Guide</h2>
      </div>
      <div>
         <GuideCard :guideprop="guidecards" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" />
      </div>
   </div>

</template>

<script>
import GuideCard from '@/shared/reuseable/GuideCard.vue';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles




export default {
   components: {
      GuideCard
   },
   data() {
      return {
         guidecards: [
            {
               image: require("@/assets/team-1.jpg"), guidename: "Full Name", guidedesignation: "Designation"
            }, {
               image: require("@/assets/team-2.jpg"), guidename: "Full Name", guidedesignation: "Designation"
            }, {
               image: require("@/assets/team-3.jpg"), guidename: "Full Name", guidedesignation: "Designation"
            }, {
               image: require("@/assets/team-4.jpg"), guidename: "Full Name", guidedesignation: "Designation"
            }
         ]
      }
   },
   mounted() {
      AOS.init({
         duration: 1200, // Animation duration
         easing: 'ease', // Animation easing
         once: true // Animation triggers only once
      });
   },
}
</script>
<style>
/* Custom Styles for the Animation */
[data-aos] {
   opacity: 0;
   transition: opacity 1s ease-out, transform 1s ease-out;
}

[data-aos].aos-animate {
   opacity: 1;
   transform: translateY(0);
}

[data-aos="fade-up"] {
   transform: translateY(30px);
}

[data-aos="fade-left"] {
   transform: translateX(-30px);
}

[data-aos="fade-right"] {
   transform: translateX(30px);
}

[data-aos="zoom-in"] {
   transform: scale(0.8);
}
</style>