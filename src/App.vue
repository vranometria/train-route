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

        相模鉄道
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.sagami.honsen}}">相鉄本線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.sagami.sotetsushin_yokohama}}">相鉄新横浜線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_sotetsu_chokutsu}}">相鉄・JR直通線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.sagami.izumino}}">いずみ野線</RouterLink>
        </div>

        東急電鉄
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.toukyu.touyoko}}">東横線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.toukyu.denentoshi}}">田園都市線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.toukyu.tamagawa}}">多摩川線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.toukyu.oimachi}}">大井町線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.toukyu.meguro}}">目黒線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.toukyu.shin_yokohama}}">新横浜線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.toukyu.ikegami}}">池上線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.toukyu.setagaya}}">世田谷線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.toukyu.kodomonokuni}}">こどもの国線</RouterLink>
        </div>

        小田急電鉄
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.odakyu.odawara}}">小田原線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.odakyu.enoshima}}">江ノ島線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.odakyu.tama}}">多摩線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.odakyu.hakonetozan}}">箱根登山線</RouterLink>
        </div>
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

        京王電鉄
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keiou.keiou}}">京王線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keiou.keioushinsen}}">京王新線</RouterLink>
          <!-- <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keio.inokashira}}">井の頭線</RouterLink> -->
        </div>

        京成電鉄
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keisei.honsen}}">京成本線</RouterLink>
          <!-- <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keisei.ksk}}">京成金町線</RouterLink> -->
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keisei.sky_liner}}">スカイライナー</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.keisei.narita_kuko}}">京成成田空港線</RouterLink>
          <!-- ユーカリが丘線 -->
           <!-- 千葉線 -->
            <!-- 押上線 -->
        </div>
<!--
        北総電鉄
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.hokusou.hokusou}}">北総線</RouterLink>
        </div> -->

        西武鉄道
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.seibu.ikebukuro}}">池袋線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.seibu.shinjuku}}">新宿線</RouterLink>
          <!-- <RouterLink :to="{name: 'line', params: {id: 'seibu-toshima'}}">豊島線</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: 'seibu-yurakucho'}}">有楽町線</RouterLink> -->
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
<!--
        埼玉新都市交通
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.saitama_shintoshi_koutsu.new_shuttle}}">ニューシャトル</RouterLink>
        </div>

        秩父鉄道
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.chichibu.chichibu}}">秩父本線</RouterLink>
        </div> -->

        <!-- 横浜市営地下鉄
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.yokohama_subway.blue_line}}">ブルーライン</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.yokohama_subway.green_line}}">グリーンライン</RouterLink>
        </div> -->

        <!-- 関東鉄道
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.kantou.jousou}}">関東鉄道</RouterLink>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.kantou.ryugasaki}}">竜ケ崎線</RouterLink>
        </div> -->

        小湊鉄道
        <div>
          <RouterLink :to="{name: 'line', params: {id: LINE_IDS.kominato.kominato}}">小湊鉄道線</RouterLink>
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
