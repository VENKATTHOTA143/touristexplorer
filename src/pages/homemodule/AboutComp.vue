<template>
   <div class="container">
      <div class="row">
         <div class="col-lg-6 mb-4 mb-lg-0">
            <img src="../../assets/about.jpg" alt="About us image" class="img-fluid">
         </div>
         <div class="col-lg-6">
            <h6 class="section-title bg-white text-start text-primary">About Us</h6>
            <h2>Welcome to <span>Tourist</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, in sunt. Error suscipit dignissimos
               accusantium.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quasi delectus laudantium minus quia
               consectetur perspiciatis inventore nostrum. Architecto maiores rem pariatur? Provident sequi ex ducimus
               earum eius obcaecati et!</p>

            <div class="row g-3"> <!-- Added gap class for consistent spacing -->
               <div class="col-lg-6">
                  <p>First Class Flights</p>
               </div>
               <div class="col-lg-6">
                  <p>Hand Picked Hotels</p>
               </div>
               <div class="col-lg-6">
                  <p>5 Star Accommodations</p>
               </div>
               <div class="col-lg-6">
                  <p>Latest Model Vehicles</p>
               </div>
               <div class="col-lg-6">
                  <p>150 Premium City Tours</p>
               </div>
               <div class="col-lg-6">
                  <p>24/7 Service</p>
               </div>
            </div>
            <a class="btn btn-primary text-uppercase py-3 px-5 mt-2">Read More</a>
         </div>
      </div>
   </div>


   <div class="container mt-5 mb-5 ">
      <div class="text-center">
         <h6 class="success">Travel Guide</h6>
         <h2>Meet Our Guide</h2>
      </div>
      <div>
         <GuideCard :guideprop="guidecards" />
      </div>
   </div>
</template>

<script>
import GuideCard from '@/shared/reuseable/GuideCard.vue';

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
   }
}
</script>
<style></style>