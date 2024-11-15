<template>
   <div class="container mt-5 mb-5" data-aos="fade-up" data-aos-duration="1000">
      <div class="text-center" data-aos="fade-down" data-aos-duration="1000">
         <h6 class="success text-success">Contact Us</h6>
         <h2>Contact For Any Query</h2>
      </div>
      <div class="row">
         <div class="col-lg-4" data-aos="fade-right" data-aos-duration="1200">
            <h4>Get In Touch</h4>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos</p>
            <h4>Office</h4>
            <p>123 Street, New York, USA</p>
            <h4>Mobile</h4>
            <p>+012 345 67890</p>
            <h4>Email</h4>
            <p>info@example.com</p>
         </div>
         <div class="col-lg-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <img src="../../assets/map.jpg" alt="" class="img-fluid">
         </div>
         <div class="col-lg-4" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="400">
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


</template>
<script>




</script>
