<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { LINE_IDS } from '@/constants/ids'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        京急電鉄
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keikyu.honsen}}">本線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keikyu.haneda_kuko}}">羽田空港線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keikyu.zushi}}">逗子線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keikyu.kurihama}}">久里浜線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keikyu.daishi}}">大師線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keikyu.sea_side}}">シーサイドライン</RouterLink>
        </div>

        東京都交通局
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyo_subway.asakusa}}" >浅草線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyo_subway.mita}}" >三田線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyo_subway.shinjuku}}" >新宿線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyo_subway.oedo}}" >大江戸線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyo_subway.nippori_toneri_liner}}" >日暮里・舎人ライナー</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyo_subway.sakura_tram}}" >東京さくらトラム</RouterLink>
        </div>

        東京メトロ
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyo_metro.hibiya}}" >日比谷線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyo_metro.marunouchi}}" >丸の内線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyo_metro.yurakucho}}" >有楽町線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyo_metro.fukutoshin}}" >副都心線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyo_metro.ginza}}" >銀座線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyo_metro.hanzoumon}}" >半蔵門線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyo_metro.chiyoda}}" >千代田線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyo_metro.touzai}}" >東西線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyo_metro.nanboku}}" >南北線</RouterLink>
        </div>

        東京モノレール
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tokyo_monorail.haneda_kuko}}" >羽田空港線</RouterLink>
        </div>

        千葉都市モノレール
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.chiba_toshi_monorail.ichigou}}">1号線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.chiba_toshi_monorail.nigou}}">2号線</RouterLink>
        </div>

        JR東日本
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.saikyou}}" >埼京線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.kawagoe}}" >川越線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.sobu}}" >総武線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.sobu_kaisoku}}" >総武線快速</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.chuo}}" >中央線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.keiyou}}" >京葉線</RouterLink>
          <!-- 相模線 -->
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.yokohama}}" >横浜線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.tsurumi}}" >鶴見線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.tokiwa}}" >常盤線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.keihin_touhoku}}" >京浜東北線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.negishi}}" >根岸線</RouterLink>
          <!-- 千代田線 -->
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.musashino}}" >武蔵野線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.nanbu}}" >南武線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.nanbu_shisen}}" >南武線(支線)</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.yokosuka}}" >横須賀線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.shonan_shinjuku}}" >湘南新宿ライン</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.tokaido}}" >東海道本線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.utunomiya}}" >宇都宮線</RouterLink>
          <!-- 八高線 -->
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.yamanote}}" >山手線</RouterLink>

          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.touhoku_honsen}}" >東北本線</RouterLink>

          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.shinkansen.jouetsu}}" >上越新幹線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.shinkansen.tohoku}}" >東北新幹線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.shinkansen.yamagata}}" >山形新幹線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.shinkansen.akita}}" >秋田新幹線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.shinkansen.hokuriku}}" >北陸新幹線</RouterLink>
        </div>


        首都圏新都市
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.shutoken_shintoshi.tsukuba_express}}" >つくばエクスプレス</RouterLink>
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



        京王電鉄
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keiou.keiou}}">京王線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keiou.keioushinsen}}">京王新線</RouterLink>
          <!-- <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keio.inokashira}}">井の頭線</RouterLink> -->
        </div>

        京成電鉄
        <div>
          <!-- <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keisei.main}}">本線</RouterLink> -->
          <!-- <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keisei.hokuso}}">北総線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keisei.ksk}}">京成金町線</RouterLink> -->
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keisei.keisei_narita_sky_access}}">京成成田スカイアクセス</RouterLink>
        </div>

        北総電鉄
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.hokusou.hokusou}}">北総線</RouterLink>
        </div>

        小田急電鉄
        <div>
          <RouterLink :to="{name: 'line', params: {id: 'odakyu-odawara'}}">小田原線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: 'odakyu-enoshima'}}">江ノ島線</RouterLink>
          <!-- <RouterLink :to="{name: 'line', params: {id: 'odakyu-tama'}}">多摩線</RouterLink> -->
        </div>

        西武鉄道
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.seibu.ikebukuro}}">池袋線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.seibu.shinjuku}}">新宿線</RouterLink>
          <!-- <RouterLink :to="{name: 'line', params: {id: 'seibu-toshima'}}">豊島線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: 'seibu-yurakucho'}}">有楽町線</RouterLink> -->
        </div>

        東武鉄道
        <div>
          <!-- <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tobu.isesaki}}">伊勢崎線</RouterLink> -->
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.toubu.toujou}}">東上線</RouterLink>
          <!-- <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tobu.nikko}}">日光線</RouterLink> -->
          <!-- <RouterLink :to="{name: 'line', params: {id: LINE_IDS.tobu.utsunomiya}}">宇都宮線</RouterLink> -->
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.toubu.urban_park_line}}">東武アーバンパークライン</RouterLink>
        </div>

        埼玉新都市交通
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.saitama_shintoshi_koutsu.new_shuttle}}">ニューシャトル</RouterLink>
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
