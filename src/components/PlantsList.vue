<template>
  <div class="container">
    <div class="d-flex justify-center">
      <div class="dropdown">
        <button
          class="dropdown__btn"
          @click="isFilterMenuOpen = !isFilterMenuOpen"
        >
          Filter By Planter
          <font-awesome-icon
            v-if="isFilterMenuOpen"
            :icon="['fas', 'chevron-up']"
            class="dropdown__btn-icon"
          />
          <font-awesome-icon
            v-else
            :icon="['fas', 'chevron-down']"
            class="dropdown__btn-icon"
          />
        </button>

        <ul class="dropdown__menu" v-show="isFilterMenuOpen">
          <li
            class="dropdown__item"
            @click="filter($event)"
            v-for="(planter, index) of planters"
            :key="index"
          >
            {{ planter }}
          </li>
          <div class="dropdown__divider"></div>
          <li class="dropdown__item" value="reset" @click="filter($event)">
            Reset
          </li>
        </ul>
      </div>

      <div class="dropdown">
        <button class="dropdown__btn" @click="isSortMenuOpen = !isSortMenuOpen">
          Sort By Price
          <font-awesome-icon
            :icon="['fas', 'sort']"
            class="dropdown__btn-icon"
          />
        </button>

        <ul class="dropdown__menu" v-show="isSortMenuOpen">
          <li class="dropdown__item" value="a2z" @click="sort($event)">
            Low to High
            <font-awesome-icon :icon="['fas', 'arrow-down-1-9']" />
          </li>
          <li class="dropdown__item" value="z2a" @click="sort($event)">
            High to Low
            <font-awesome-icon :icon="['fas', 'arrow-down-9-1']" />
          </li>
          <div class="dropdown__divider"></div>
          <li class="dropdown__item" value="reset" @click="sort($event)">
            Reset
          </li>
        </ul>
      </div>
    </div>

    <div class="plants__grid">
      <PlantCard
        v-for="plant in renderedPlants"
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
  name: 'PlantsList',

  components: {
    PlantCard: () => import('@/components/PlantCard.vue'),
  },

  data() {
    return {
      isFilterMenuOpen: false,
      isSortMenuOpen: false,
      plants: undefined,
      renderedPlants: undefined,
    };
  },

  mounted() {
    this.fetchPlants();
  },

  methods: {
    fetchPlants() {
      Vue.axios
        .get('https://api.jsonbin.io/v3/b/64fc60dfe4033326cbd487d4?meta=false')
        .then((res) => {
          this.plants = new Array(...res?.data);
          this.renderedPlants = new Array(...res?.data);
          return res?.data;
        })
        .catch((err) => (err.value = err));
    },

    filter(e) {
      const planter = e?.target?.innerText;
      this.isFilterMenuOpen = false;
      if (e.target.getAttribute('value') === 'reset') {
        this.renderedPlants = this.plants;
      } else {
        this.renderedPlants = this.plants?.filter((p) =>
          planter === 'no-planter'
            ? p.planter === undefined
            : p.planter === planter
        );
      }
    },

    sort(e) {
      this.isSortMenuOpen = false;
      if (e.target.getAttribute('value') === 'a2z') {
        return this.renderedPlants.sort((a, b) => a.price - b.price);
      } else if (e.target.getAttribute('value') === 'z2a') {
        return this.renderedPlants.sort((a, b) => b.price - a.price);
      } else {
        this.renderedPlants = this.plants;
        return this.renderedPlants;
      }
    },
  },

  computed: {
    planters() {
      let planters = this.plants?.map((p) =>
        p.planter ? p.planter : 'no-planter'
      );
      return [...new Set(planters)];
    },
  },
};
</script>

<style lang="scss" scoped>
.plants__grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 20px;

  @media only screen and (min-width: 768px) {
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 30px;
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.dropdown {
  position: relative;
  margin: 0 16px;

  .dropdown__btn {
    display: flex;
    align-items: center;
    background-color: var(--primary);
    color: var(--white);
    outline: none;
    border: none;
    padding: 14px 24px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: var(--primary-darker);
    }

    .dropdown__btn-icon {
      color: var(--white);
      margin-left: 8px;
    }
  }

  .dropdown__menu {
    position: absolute;
    z-index: 9;
    background-color: var(--white);
    border: 1px solid var(--primary);
    padding: 8px 15px;
    color: var(--secondary);
    font-size: 16px;
    width: 100%;

    .dropdown__divider {
      height: 0;
      margin: 0.5rem -15px;
      overflow: hidden;
      border-top: 1px solid var(--alpha);
    }

    .dropdown__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--primary-darker);
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        background-color: var(--alpha);
        color: var(--white);
        margin: 0 -15px;
        padding: 0 15px;
      }
    }
  }
}
</style>
