<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { LINE_IDS } from '@/constants/line-ids'
import { PREFECTURE } from './constants/prefecture';
import LineAccordion from './components/LineAccordion.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/company">鉄道会社別</RouterLink>

<!--
        JR東日本
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.saikyou}}" >埼京線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.kawagoe}}" >川越線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.chuo_soubu_kankou}}" >総武線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.sobu_kaisoku}}" >総武線快速</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.soubu_honsen}}" >総武本線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.chuou_honsen}}" >中央線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.oume}}" >青梅線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.keiyou}}" >京葉線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.sagami}}" >相模線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.yokohama}}" >横浜線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.tsurumi}}" >鶴見線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.jouban}}" >常盤線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.keihin_touhoku}}" >京浜東北線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.negishi}}" >根岸線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.musashino}}" >武蔵野線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.nanbu}}" >南武線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.nanbu_shisen}}" >南武線(支線)</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.yokosuka}}" >横須賀線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.shonan_shinjuku}}" >湘南新宿ライン</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.tokaido}}" >東海道本線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.utunomiya}}" >宇都宮線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.takasaki}}" >高崎線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.hachiko}}" >八高線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.yamanote}}" >山手線</RouterLink>

          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.ryoumou}}" >両毛線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.mito}}" >水戸線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.sotobou}}" >外房線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.uchibou}}" >内房線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.kururi}}" >久留里線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.narita1}}" >成田線[我孫子-成田]</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.narita2}}" >成田線[佐倉-銚子]</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.narita3}}" >成田線[成田-成田空港]</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.kashima}}" >鹿島線</RouterLink>


          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.touhoku_honsen}}" >東北本線</RouterLink>

          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.shinkansen.jouetsu}}" >上越新幹線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.shinkansen.tohoku}}" >東北新幹線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.shinkansen.yamagata}}" >山形新幹線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.shinkansen.akita}}" >秋田新幹線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.shinkansen.hokuriku}}" >北陸新幹線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.shinkansen.hokkaido}}" >北海道新幹線</RouterLink>
        </div> -->

        西武鉄道
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.seibu.ikebukuro}}">池袋線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.seibu.shinjuku}}">新宿線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.seibu.seibu_chichibu}}">秩父線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.seibu.seibu_yurakucho}}">有楽町線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.seibu.toshima}}">豊島線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.seibu.tamako}}">多摩湖線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.seibu.kokubunji}}">国分寺線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.seibu.haijima}}">拝島線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.seibu.sayama}}">狭山線</RouterLink>
        </div>

        東武鉄道
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.toubu.toujou}}">東上線</RouterLink>
          <!-- <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tobu.nikko}}">日光線</RouterLink> -->
          <!-- <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tobu.utsunomiya}}">宇都宮線</RouterLink> -->
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.toubu.urban_park_line}}">東武アーバンパークライン</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.toubu.ogose}}">生越線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.toubu.kameido}}">亀戸線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.toubu.isezaki}}">伊勢崎線</RouterLink>
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
