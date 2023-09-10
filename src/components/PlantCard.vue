<template>
  <div class="plant" v-if="plant">
    <div class="plant__img">
      <img :alt="plant.title" :src="plant.image" />
    </div>
    <div class="plant__info">
      <div>
        <h5 class="plant__title">
          {{ plant.title }}
        </h5>
        <h6 class="plant__price">
          <span>$</span><span>{{ plant.price }}</span>
        </h6>
      </div>
      <button class="plant__btn" @click="addToCart(plant)">
        <font-awesome-icon
          :icon="['fas', 'cart-plus']"
          flip="horizontal"
          class="cart-icon"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['plant'],

  methods: {
    addToCart(plant) {
      this.$store?.state?.inCart?.push(plant);
    },
  },
};
</script>

<style lang="scss" scoped>
.plant {
  &:hover {
    cursor: grab;
  }

  .plant__img {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    &::before {
      display: flex;
      content: '';
      padding-top: calc((466 / 359) * 100%);
    }

    img {
      height: 100% !important;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: 100% !important;
    }
  }

  .plant__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 0 0;
    padding: 0 8px;
    .plant__title {
      font-size: 21px;
      color: var(--secondary);
    }

    .plant__price {
      font-size: 21px;
      color: var(--secondary);
      span {
        font-weight: bold;
      }
    }

    .plant__btn {
      background: transparent;
      border: none;
    }
    .cart-icon {
      color: var(--primary);
      font-size: 24px;
      &:hover {
        color: var(--alpha);
        cursor: pointer;
      }
    }
  }
}
</style>
