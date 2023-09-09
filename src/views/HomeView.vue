
<template>
  <main>
    <PlantsList></PlantsList>
  </main>
</template>

  <script>
  // import TheWelcome from '@/components/TheWelcome.vue'

  export default {

    components: {
      PlantsList: () => import('@/components/PlantsList.vue'),
  },
  


  }
  </script>