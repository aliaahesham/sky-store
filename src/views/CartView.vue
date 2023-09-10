<template>
    <div class="container">
      <h2 v-for="item in cartItems" :key="item.id">{{item.title}}</h2>
    </div>
</template>
  
<script>
  export default {
    props: ['plant'],
  
    computed: {
      cartItems() {
        return this.$store?.state?.inCart;
      },
    },
  };
</script>
  
<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>
  