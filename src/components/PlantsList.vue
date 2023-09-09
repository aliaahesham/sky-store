<template>
  <div class="container">

  <div></div>
    <div class="plants__grid">
      <PlantCard
        v-for="plant in plants"
        :key="plant.id"
        :plant="plant"
      ></PlantCard>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import vueAxios from 'vue-axios';

Vue.use(vueAxios, axios);

export default {
  components: {
    PlantCard: () => import('@/components/PlantCard.vue'),
  },

  data() {
    return {
      plants: undefined,
    };
  },
  methods: {
    fetchPlants() {
      Vue.axios
        .get('https://api.jsonbin.io/v3/b/64fc60dfe4033326cbd487d4?meta=false')
        .then((res) => {
          this.plants = res?.data;
          console.log('hamada', this.plants);
          return res?.data;
        })
        .catch((err) => (error.value = err));
    },
  },
  mounted() {
    this.fetchPlants();
  },
};
</script>

<style lang="scss" scoped>
.plants__grid {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
