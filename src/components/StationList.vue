<script setup lang="ts">
import { STATIONS } from '@/constants/stations';
import { Station, StationInfo } from '@/types/station-info';
import { ref } from 'vue';

const createGroup = (args: (Station|StationInfo)[]): {[key: string]: (Station|StationInfo)[]} => {
  const ja = [ "あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","わ","を"];
  const group: {[key: string]: Station[]} = {};
  ja.forEach((j) => {
    const list = args.filter((station:Station) => station.pronunciation.startsWith(j));
    if(list.length > 0){
      group[j] = list;
    }
  });
  return group;
};

const all_stations = Object.entries(STATIONS).map( ([k, v]) => { v.id=k; return v; } );
let count = all_stations.length;
const group = ref(createGroup(all_stations));

const textInput = (e: InputEvent) => {
  const element = e.target as HTMLInputElement;
  const value = element.value;
  const searchPattern = ".*"+ value.replace(/(tu|tsu)/i, "(tsu|tu)") + ".*"
  const regex = new RegExp(searchPattern, "i");
  const stations = all_stations.filter((station: Station) => {
    return [station.name, station.pronunciation, station.prefecture].some((s) => s.match(regex));
  });
  group.value = createGroup(stations);
  count = stations.length;
};
</script>

<template>
  <div>
    <section class="search-area">
        <input type="text" :oninput="textInput" placeholder="Search" class="search" />
        <span class="count">{{ count }}件</span>
    </section>
    <div v-for="(ja, index) in Object.keys(group)" :key="index">
      <h2>{{ ja }}</h2>
      <ul>
        <li v-for="(station, index) in group[ja]" :key="index">
          <router-link :to="{ name: 'station', params: { id: station.id } }">{{ station.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-area {
  justify-content: space-between;
  margin-bottom: 10px;
  position: sticky;
  top: 0px;
}
.search {
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  height: 40px;
}
.count {
  margin-left: 10px;
}
</style>
