<template>
   <div class="container mt-5 fade-in-up">
      <div class="row">
         <div class="col-lg-6 mb-4 mb-lg-0">
            <img src="../../assets/destination-3.jpg" alt="About us image" class="img-fluid h-100">
         </div>
         <div class="col-lg-6">
            <h4 class="section-title bg-white text-start " style="color: #86B817; ">About Us</h4>
            <h2>Welcome to <span>Tourist</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, in sunt. Error suscipit dignissimos
               accusantium.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quasi delectus laudantium minus quia
               consectetur perspiciatis inventore nostrum. Architecto maiores rem pariatur? Provident sequi ex ducimus
               earum eius obcaecati et!</p>

            <div class="row g-3">
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
            <a class="btn  text-uppercase py-3 px-5 mt-2" style="background-color: #86B817;">Read More</a>
         </div>
      </div>
   </div>

   <div class="container mt-5 mb-5 ">
      <div class="text-center">
         <h6 style="color: #86B817;">Services</h6>
         <h2>Our Services</h2>
      </div>
      <div>
         <CardComp :cardprop="cards" />
      </div>

   </div>


   <div class="container g-4">
      <div class="text-center mb-4">
         <h6 style="color: #86B817;">Destination</h6>
         <h2>Popular Destinations</h2>
      </div>
      <div class="row">
         <div class="col-lg-6 mb-4 mb-lg-0">
            <img src="../../assets/destination-1.jpg" alt="Main destination view" class="img-fluid w-100">
            <div class="row mt-4">
               <div class="col-6">
                  <img src="../../assets/destination-2.jpg" alt="Secondary destination view 1" class="img-fluid w-100">
               </div>
               <div class="col-6">
                  <img src="../../assets/1000_F_289840945_ZqEJkoDBAw6ltmSv97p4ZXPI2W0eufPJ.jpg"
                     alt="Secondary destination view 2" class="img-fluid w-100">
               </div>
            </div>
         </div>
         <div class="col-lg-6">
            <img src="../../assets/destination-4.jpg" alt="Alternative destination view" class="img-fluid w-100">
         </div>
      </div>
   </div>


   <div class="container mt-5 mb-5 ">
      <div class="text-center">
         <h6 style="color: #86B817;">Packages</h6>
         <h2>Awesome Packages</h2>
      </div>
      <div>
         <PackageCard :packprice="packcard" />
      </div>
   </div>
   <div class="container p-5 booking">
      <div class="row">
         <!-- Booking Info Section -->
         <div class="col-lg-6 mb-4 mb-lg-0">
            <h4>Booking</h4>
            <h2>Online Booking</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore, voluptatum atque est
               exercitationem facilis soluta amet facere error hic!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt reiciendis nostrum saepe suscipit,
               modi omnis perspiciatis placeat! Dolore quae, facilis commodi est eos doloribus recusandae voluptatibus
               eum dolorum earum.</p>
            <button class="btn btn-primary mt-2">Read More</button>
         </div>

         <!-- Booking Form Section -->
         <div class="col-lg-6">
            <h2>Book a Tour</h2>
            <div class="row g-2">
               <div class="col-lg-6">
                  <div class="form-floating">
                     <input type="email" class="form-control" id="emailInput" placeholder="name@example.com"
                        value="mdo@example.com">
                     <label for="emailInput">Email address</label>
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="form-floating">
                     <input type="text" class="form-control" id="nameInput" placeholder="Full Name">
                     <label for="nameInput">Full Name</label>
                  </div>
               </div>
            </div>

            <div class="row mt-2 g-2">
               <div class="col-lg-6">
                  <div class="form-floating">
                     <input type="date" class="form-control" id="dateInput" placeholder="Select a date">
                     <label for="dateInput">Select a date</label>
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="form-floating">
                     <select class="form-select" id="destinationSelect">
                        <option selected>Destination 1</option>
                        <option value="2">Destination 2</option>
                        <option value="3">Destination 3</option>
                     </select>
                     <label for="destinationSelect">Destination</label>
                  </div>
               </div>
            </div>

            <div class="row mt-2">
               <div class="col-lg-12">
                  <div class="form-floating">
                     <textarea class="form-control" placeholder="Leave a comment here" id="specialRequestTextarea"
                        style="height: 100px;"></textarea>
                     <label for="specialRequestTextarea">Special Request</label>
                  </div>
               </div>
            </div>

            <div class="row mt-3">
               <div class="col-lg-12">
                  <button class="btn btn-primary w-100">Book Now</button>
               </div>
            </div>
         </div>
      </div>
   </div>


   <div class="container mt-5 mb-5 ">
      <div class="text-center">
         <h6 style="color: #86B817;">Process</h6>
         <h2>3 Easy Steps</h2>
      </div>
      <div>
         <ProcessCard :processprop="processcards" />
      </div>
   </div>
   <div class="container mt-5 mb-5 ">
      <div class="text-center">
         <h6 style="color: #86B817;">Travel Guide</h6>
         <h2>Meet Our Guide</h2>
      </div>
      <div>
         <GuideCard :guideprop="guidecards" />
      </div>
   </div>

   <div class="container mt-5 mb-5 ">
      <div class="text-center">
         <h6 style="color: #86B817;">Testimonial</h6>
         <h2>Our Clients Say !!!</h2>
      </div>
      <div>
         <ClientCard :clientprop="clientcards" />
      </div>
   </div>




</template>
<script>
import CardComp from '@/shared/reuseable/CardComp.vue';
import ClientCard from '@/shared/reuseable/ClientCard.vue';
import GuideCard from '@/shared/reuseable/GuideCard.vue';

import PackageCard from '@/shared/reuseable/PackageCard.vue';

import ProcessCard from '@/shared/reuseable/ProcessCard.vue';


export default {
   components: {
      CardComp,
      PackageCard, ProcessCard, GuideCard,
      ClientCard
   },
   data() {
      return {
         cards: [
            {
               icon: "<i class='ri-earth-fill'></i>",
               title: "World Wide Tours",
               description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
            }

            ,
            { icon: "<i class='ri-hotel-line'></i>", title: "Hotel Reservation", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },
            { icon: "<i class='ri-user-line'></i>", title: "Travel Guides", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },
            {
               icon: "<i class='ri-settings-3-line'></i>", title: "Event Management", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
            },
            { icon: "<i class='ri-earth-fill'></i>", title: "Hotel Reservation", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },
            { icon: "<i class='ri-hotel-line'></i>", title: "Travel Guides", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },
            { icon: "<i class='ri-user-line'></i>", title: "World Wide Tours", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },
            { icon: "<i class='ri-settings-3-line'></i>", title: "Event Management", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },

         ],
         packcard: [
            {
               country: "india", days: "3 ", persons: "2", packageprice: "$ 149.00", packdesc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", image: require("@/assets/package-1.jpg"), btn1: "Read More", btn2: "Book Now"
            },
            { country: "india", days: "3 ", persons: "2", packageprice: "$ 139.00", packdesc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", image: require("@/assets/package-2.jpg"), btn1: "Read More", btn2: "Book Now" },
            { country: "india", days: "3 ", persons: "2", packageprice: "$ 189.00", packdesc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", image: require("@/assets/package-3.jpg"), btn1: "Read More", btn2: "Book Now" }
         ],
         processcards: [
            { icon: "<i class='ri-earth-fill'></i>", processtitle: "Choose A Destination", processdesc: "Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit" },
            { icon: "<i class='ri-money-dollar-circle-line'></i>", processtitle: "Pay Online", processdesc: "Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit" },
            { icon: "<i class='ri-plane-line' ></i >", processtitle: "Fly Today", processdesc: "Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit" }
         ],
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
         ],
         clientcards: [
            {
               image: require("@/assets/team-1.jpg"), clientname: "Full Name", clientplace: "New York,USA ", clientdesc: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
            }, {
               image: require("@/assets/team-2.jpg"), clientname: "Full Name", clientplace: "New York,USA", clientdesc: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
            }, {
               image: require("@/assets/team-3.jpg"), clientname: "Full Name", clientplace: "New York,USA", clientdesc: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
            }, {
               image: require("@/assets/team-4.jpg"), clientname: "Full Name", clientplace: "New York,USA", clientdesc: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
            }
         ]
      };
   }
}
</script>
<style>
.booking {
   background-image: url("../../assets/booking-bg.jpg");

}
</style>