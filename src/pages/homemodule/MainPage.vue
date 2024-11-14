<template>
   <MainHeader />
   <router-view></router-view>

   <FooterComp />

</template>
<script setup>
import FooterComp from '@/components/common/FooterComp.vue';

import MainHeader from '@/components/common/MainHeader.vue';




</script>