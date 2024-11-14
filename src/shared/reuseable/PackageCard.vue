<template>
   <!-- position: absolute; bottom: 0; width: 100%; height: 30px; background-color: rgba(0, 0, 0, 0.5); -->
   <div>
      <div class="row">
         <div class="col-lg-4 col-md-6 mb-4" v-for="(item, index) in packprice" :key="index">
            <div class="card h-100">
               <img :src="item.image" class="card-img-top" :alt="item.country + ' image'">

               <div class="card-body">
                  <table class="table table-bordered mb-3">
                     <tr>
                        <td class="text-center fw-bold">{{ item.country }}</td>
                        <td class="text-center">{{ item.days }} Days</td>
                        <td class="text-center">{{ item.persons }} Persons</td>
                     </tr>
                  </table>

                  <h5 class="card-title text-primary">{{ item.packageprice }}</h5>
                  <p class="card-text">{{ item.packdesc }}</p>

                  <div class="d-flex gap-2">
                     <button class="btn btn-primary">{{ item.btn1 }}</button>
                     <button class="btn btn-outline-secondary">{{ item.btn2 }}</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>



   <!-- <div>

      <img src="" class="card-img-top" alt="...">
      <div class="row" style="" v-for="(item, index)  in packprice" :key="index">
         <div class="col-4 text-center text-white">{{ item }} </div>
         <div class="col-4 text-center text-white">{{ days }}</div>
         <div class="col-4 text-center text-white">{{ persons }}</div>
      </div>
      <div class="card-body">
         <h5 class="card-title">{{ packprice }}</h5>
         <p class="card-text">{{ packdesc }}</p>
      </div>
   </div> -->
</template>
<script>
export default {
   props: {
      packprice: {
         type: Array,
         required: true
      },
   },
   mounted() {
      console.log(this.packprice)
   }
};

</script>