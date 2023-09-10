<template>
  <main>
    <PlantsList></PlantsList>
  </main>
</template>

<script>
export default {
  components: {
    PlantsList: () => import('@/components/PlantsList.vue'),
  },
};
</script>
