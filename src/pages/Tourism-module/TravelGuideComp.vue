<template>
   <div class="container mt-5 mb-5 ">
      <div class="text-center">
         <h6 class="success text-success">Travel Guide</h6>
         <h2>Meet Our Guide</h2>
      </div>
      <GuideCard :guideprop="guidecards" />
   </div>
</template>

<script>
import GuideCard from '@/shared/reuseable/GuideCard.vue';

export default {
   components: {
      GuideCard
   },
   data() {
      return {
         guidecards: [
            { image: require("@/assets/team-1.jpg"), guidename: "Full Name", guidedesignation: "Designation" },
            { image: require("@/assets/team-2.jpg"), guidename: "Full Name", guidedesignation: "Designation" },
            { image: require("@/assets/team-3.jpg"), guidename: "Full Name", guidedesignation: "Designation" },
            { image: require("@/assets/team-4.jpg"), guidename: "Full Name", guidedesignation: "Designation" },
            { image: require("@/assets/team-1.jpg"), guidename: "Full Name", guidedesignation: "Designation" },
            { image: require("@/assets/team-2.jpg"), guidename: "Full Name", guidedesignation: "Designation" },
            { image: require("@/assets/team-3.jpg"), guidename: "Full Name", guidedesignation: "Designation" },
            { image: require("@/assets/team-4.jpg"), guidename: "Full Name", guidedesignation: "Designation" }
         ]
      };
   }
};
</script>
