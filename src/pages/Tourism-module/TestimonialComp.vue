<template>
   <div class="container mt-5 mb-5 ">
      <div class="text-center">
         <h6 class="success text-success">Testimonial</h6>
         <h2>Our Clients Say !!!</h2>
      </div>
      <div>
         <ClientCard :clientprop="clientcards" />
      </div>
   </div>
</template>
<script>
import ClientCard from '@/shared/reuseable/ClientCard.vue';

export default {
   components: {
      ClientCard
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
         ]
      }
   }
}
</script>