<template>
   <div class="row">
      <div class="col-lg-4 col-md-6 mb-4" v-for="(item, index) in processprop" :key="index">
         <div class="card h-100">

            <div class="card-body">
               <!-- <div v-html="item.icon" class="card-icon"></div> -->
               <h4 class="card-title">{{ item.processtitle }}</h4>
               <p class="card-text">{{ item.processdesc }}</p>
            </div>
         </div>
      </div>
   </div>



</template>
<script>
export default {
   props: {
      processprop: {
         type: Array,
         required: true
      },

   }
}
</script>