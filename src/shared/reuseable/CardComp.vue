<template>
   <div>
      <div class="row">
         <div class="col-lg-3 g-3" v-for="(item, index) in cardprop" :key="index">
            <div class="card h-100 p-4 total-card">
               <!-- Render the icon as HTML instead of an image -->


               <div class="card-body">
                  <div v-html="item.icon" class="card-icon"></div>
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.description }}</p>
               </div>
            </div>
         </div>
      </div>
   </div>


   <!-- <div>
      <div class="card p-4">
         <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
         </div>
      </div>
   </div> -->
</template>

<script>
export default {
   props: {
      cardprop: {
         type: Array,
         required: true
      },

   }
};
</script>
<style>
.card-icon {
   color: #86B817;
   font-size: 40px;
   transition: color 0.5s;

}


.total-card {
   transition: background-color 1s, color 1s;

}


.total-card:hover {
   background-color: #86B817;
   color: #ffffff;
}

/* Change icon color on card hover */
.total-card:hover .card-icon {
   color: #ffffff;

}
</style>
