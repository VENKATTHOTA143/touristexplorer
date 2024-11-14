<template>
   <div class="tabs p-1 m-3">
      <button v-for="(tab, index) in tabs" :key="index"
         :class="['btn', 'tab-button', 'me-2', { 'btn-success': selectedTab === tab }]" @click="selectTab(tab)">
         <router-link :to="`${tab.route}`" class="tab-link">{{ tab.name }}</router-link>
      </button>
   </div>
   <div>


   </div>
</template>

<script>
export default {
   props: {
      tabs: {
         type: Array,
         default: () => []
      },
      selectedTab: {
         type: String,
         default: ""
      }
   },
   methods: {
      selectTab(tab) {
         this.$emit('update:selectedTab', tab);
      }
   }
};
</script>

<style scoped>
/* General styling for the button */
.tab-button {
   background-color: #f8f9fa;
   /* Light background color for consistency */
   color: #333;
   /* Dark text color */
   border-radius: 8px;
   padding: 8px 15px;
   font-weight: 500;
   border: none;
   transition: background-color 0.3s, color 0.3s;
}

/* Selected button styling */
.tab-button.btn-success {
   background-color: #86B817;
   /* Primary color when selected */
   color: white;
}

/* Hover effect */
.tab-button:hover {
   background-color: #86B817;
   /* Match primary color */
   color: white;
}

/* Router-link style override */
.tab-link {
   color: inherit;
   /* Inherit color from button */
   text-decoration: none;
   /* Remove underline */
}
</style>
