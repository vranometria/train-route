<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { LINE_IDS } from '@/constants/ids'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        JR東日本
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.tokaido}}" >東海道本線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.chuo}}" >中央線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.sobu}}" >総武線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.sobu_kaisoku}}" >総武線快速</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.keihin_touhoku}}" >京浜東北線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.yokosuka}}" >横須賀線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.yamanote}}" >山手線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.yokohama}}" >横浜線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.negishi}}" >根岸線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.saikyou}}" >埼京線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.shinkansen.jouetsu}}" >上越新幹線</RouterLink>
        </div>

        相模鉄道
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.sagami.honsen}}">相鉄本線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.sagami.sotetsushinyokohama}}">相鉄新横浜線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_sotetsu_chokutsu}}">相鉄・JR直通線</RouterLink>
        </div>

        東急電鉄
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyu.denentoshi}}">田園都市線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyu.tamagawa}}">多摩川線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyu.oimachi}}">大井町線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyu.meguro}}">目黒線</RouterLink>
        </div>

        小田急電鉄
        <div>
          <RouterLink :to="{name: 'line', params: {id: 'odakyu-odawara'}}">小田原線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: 'odakyu-enoshima'}}">江ノ島線</RouterLink>
          <!-- <RouterLink :to="{name: 'line', params: {id: 'odakyu-tama'}}">多摩線</RouterLink> -->
        </div>
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
