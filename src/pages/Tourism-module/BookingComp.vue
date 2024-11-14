<template>
   <div class="container mt-5 mb-5 ">
      <div class="text-center">
         <h6 class="success text-success">Process</h6>
         <h2>3 Easy Steps</h2>
      </div>
      <div>
         <ProcessCard :processprop="processcards" />
      </div>
   </div>

   <div class="container p-5 mt-5 mb-5 booking">
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
</template>
<script>
import ProcessCard from '@/shared/reuseable/ProcessCard.vue';

export default {
   components: {
      ProcessCard
   },
   data() {
      return {
         processcards: [
            { processtitle: "Choose A Destination", processdesc: "Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit" },
            { processtitle: "Pay Online", processdesc: "Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit" },
            { processtitle: "Fly Today", processdesc: "Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit" }
         ],
      }
   }
}
</script>