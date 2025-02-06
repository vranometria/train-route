<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { PREFECTURE } from './constants/prefecture';
import LineAccordion from './components/LineAccordion.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div>
          <RouterLink to="/company">鉄道会社別</RouterLink>
          <RouterLink to="/station">駅別</RouterLink>
        </div>

        <LineAccordion :prefecture="PREFECTURE.HOKKAIDO" />
        <LineAccordion :prefecture="PREFECTURE.MIYAGI" />
        <LineAccordion :prefecture="PREFECTURE.IWATE" />
        <LineAccordion :prefecture="PREFECTURE.FUKUSHIMA" />
        <LineAccordion :prefecture="PREFECTURE.TOCHIGI" />
        <LineAccordion :prefecture="PREFECTURE.IBARAKI" />
        <LineAccordion :prefecture="PREFECTURE.GUNMA" />
        <LineAccordion :prefecture="PREFECTURE.TOKYO" />
        <LineAccordion :prefecture="PREFECTURE.KANAGAWA" />
        <LineAccordion :prefecture="PREFECTURE.SAITAMA" />
        <LineAccordion :prefecture="PREFECTURE.CHIBA" />
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  nav.div a {
    display: block;
  }
}
</style>
