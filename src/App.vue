<template>
  <div id="app">
    <header>
    <div class="d-flex">
      <img
        alt="sky store logo"
        class="logo__img"
        src="@/assets/img/logo.svg"
        width="40"
        height="40"
      />

      <h3 class="logo__title">Sky Store</h3>
    </div>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Login/Register</RouterLink>
    </nav>
  </header>

    <router-view />
  </div>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  place-items: center;
  padding: 2rem 0;
  border-bottom: 1px solid var(--primary);
  margin-bottom: 2rem;

  .logo__img {
    margin: 0 2rem 0 0;
  }

  .logo__title {
    font-weight: bold;
    font-size: 30px;
    line-height: normal;
  }
}

nav {
  // width: 100%;
  font-size: 14px;
  text-align: center;
  // margin-top: 2rem;
  a {
    display: inline-block;
    padding: 0 1rem;

    &:first-of-type {
      padding-left: 0;
    }

    &:last-of-type {
      padding-right: 0;
    }

    &.router-link-exact-active {
      color: var(--primary);

      &:hover {
        color: var(--alpha);
      }
    }
  }
}

@media (min-width: 1024px) {
}
</style>
