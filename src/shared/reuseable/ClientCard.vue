<template>
   <div class="row">
      <div class="col-lg-3 col-md-6 col-12 mb-4" v-for="(item, index) in clientprop" :key="index">
         <div class="card h-100">
            <div class="card-body text-center">
               <!-- Centering the image -->
               <img :src="item.image" class="client-image img-fluid mb-3" alt="Client Image">
               <h5 class="card-title">{{ item.clientname }}</h5>
               <p class="card-text">{{ item.clientplace }}</p>
               <p class="card-text">{{ item.clientdesc }}</p>
            </div>
         </div>
      </div>
   </div>

</template>
<script>
export default {
   props: {
      clientprop: {
         type: Array,
         required: true
      }
   }
}
</script>
<style>
.client-image {
   display: block;
   margin-left: auto;
   margin-right: auto;
   width: 80%;

   max-width: 100px;
   border-radius: 50%;

}
</style>