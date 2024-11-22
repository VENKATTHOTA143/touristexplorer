<template>
   <div class="row">

      <div class="col-lg-3" v-for="(item, index) in guideprop" :key="index">
         <div class="card">
            <img :src="item.image" class="card-img-top">
            <div class="card-body text-center">
               <h5 class="card-title">{{ item.guidename }}</h5>
               <p class="card-text">{{ item.guidedesignation }}</p>

            </div>
         </div>
      </div>
   </div>

</template>
<script>
export default {
   props: {
      guideprop: {
         type: Array,
         Required: true
      }
   }
}
</script>