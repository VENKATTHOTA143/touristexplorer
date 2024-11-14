<template>
   <div class="container mt-5 mb-5 ">
      <div class="text-center">
         <h6 class="success">Services</h6>
         <h2>Our Services</h2>
      </div>
      <div>
         <CardComp :cardprop="cards" />
      </div>

   </div>

   <div class="container mt-5 mb-5 ">
      <div class="text-center">
         <h6 class="success">Testimonial</h6>
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
   }
}
</script>