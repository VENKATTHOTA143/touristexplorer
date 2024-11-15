<template>
   <div class="container mt-5 mb-5" data-aos="fade-up" data-aos-duration="1000">
      <div class="text-center" data-aos="fade-down" data-aos-duration="1000">
         <h6 class="success">Services</h6>
         <h2>Our Services</h2>
      </div>
      <div>
         <CardComp :cardprop="cards" data-aos="zoom-in" data-aos-duration="1500" />
      </div>
   </div>

   <!-- Testimonial Section -->
   <div class="container mt-5 mb-5" data-aos="fade-up" data-aos-duration="1000">
      <div class="text-center" data-aos="fade-down" data-aos-duration="1000">
         <h6 class="success">Testimonial</h6>
         <h2>Our Clients Say !!!</h2>
      </div>
      <div>
         <ClientCard :clientprop="clientcards" data-aos="zoom-in" data-aos-duration="1500" />
      </div>
   </div>
</template>
<script>
import CardComp from '@/shared/reuseable/CardComp.vue';
import ClientCard from '@/shared/reuseable/ClientCard.vue';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default {
   components: {
      ClientCard, CardComp
   },
   data() {
      return {
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
         ],
         cards: [
            { title: "World Wide Tours", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },
            { title: "Hotel Reservation", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },
            { title: "Travel Guides", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },
            { title: "Event Management", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },
            { title: "Hotel Reservation", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },
            { title: "Travel Guides", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },
            { title: "World Wide Tours", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },
            { title: "Event Management", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },

         ]
      }
   },
   mounted() {
      AOS.init({
         duration: 1000, // Animation duration
         easing: 'ease', // Easing for the animations
         once: true // Trigger animations only once when the element comes into the viewport
      });
   },
}
</script>

<style scoped>
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

[data-aos="fade-down"] {
   transform: translateY(-30px);
}

[data-aos="zoom-in"] {
   transform: scale(0.8);
}
</style>