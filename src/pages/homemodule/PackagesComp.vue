<template>

   <!-- Packages Section -->
   <div class="container mt-5 mb-5" data-aos="fade-up" data-aos-duration="1000">
      <div class="text-center" data-aos="fade-down" data-aos-duration="1000">
         <h6 class="success">Packages</h6>
         <h2>Awesome Packages</h2>
      </div>
      <div>
         <PackageCard :packprice="packcard" />
      </div>
   </div>

   <!-- Booking Section -->
   <div class="container p-5 booking" data-aos="fade-up" data-aos-duration="1200">
      <div class="row">
         <!-- Booking Info Section -->
         <div class="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration="1200">
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
         <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
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
                  <button class="btn btn-primary w-100" data-aos="zoom-in" data-aos-delay="600">Book Now</button>
               </div>
            </div>
         </div>
      </div>
   </div>

   <!-- Process Section -->
   <div class="container mt-5 mb-5" data-aos="fade-up" data-aos-duration="1200">
      <div class="text-center" data-aos="fade-down" data-aos-duration="1000">
         <h6 class="success">Process</h6>
         <h2>3 Easy Steps</h2>
      </div>
      <div>
         <ProcessCard :processprop="processcards" />
      </div>
   </div>


   <!-- <PackageCard :packprice="packcard" /> -->
</template>
<script>
import PackageCard from '@/shared/reuseable/PackageCard.vue';
import ProcessCard from '@/shared/reuseable/ProcessCard.vue';


export default {
   components: {
      PackageCard, ProcessCard

   },
   data() {
      return {
         packcard: [
            {
               country: "india", days: "3 days", persons: "2", packageprice: "$ 120", packdesc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", image: require("@/assets/package-1.jpg"), btn1: "Read More", btn2: "Book Now"
            },
            { country: "india", days: "3 days", persons: "2", packageprice: "$ 120", packdesc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", image: require("@/assets/package-2.jpg"), btn1: "Read More", btn2: "Book Now" },
            { country: "india", days: "3 days", persons: "2", packageprice: "$ 120", packdesc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", image: require("@/assets/package-3.jpg"), btn1: "Read More", btn2: "Book Now" }
         ],
         processcards: [
            { processtitle: "Choose A Destination", processdesc: "Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit" },
            { processtitle: "Pay Online", processdesc: "Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit" },
            { processtitle: "Fly Today", processdesc: "Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit" }
         ]
      }
   },

}
// import { ref } from 'vue';
// import PackageCard from '@/shared/reuseable/PackageCard.vue';
// const packcard = ref([
//    {
//       country: "pak", days: "3 days", persons: "2", packprice: "$ 120", packdesc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
//    },
//    { country: "india", days: "3 days", persons: "2", packprice: "$ 120", packdesc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },
//    { country: "india", days: "3 days", persons: "2", packprice: "$ 120", packdesc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" }
// ])

</script>
