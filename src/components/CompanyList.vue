<script setup lang="ts">
import { COMPANIES } from '@/constants/companies';
import { LINES } from '@/constants/lines';
import { orderByJapanese } from '@/util';
import { ref } from 'vue';

  interface LineData {
    id: string;
    name: string;
    company: string;
  }

  class CompanyModel {
    name: string;
    lines: LineData[];
    yomi: string;
    keywords: string[];
    constructor(name: string, lines: LineData[], keywords: string[], yomi: string) {
      this.name = name;
      this.yomi = yomi;
      this.lines = lines;
      this.keywords = keywords;
    }
  }

  const keys = Object.keys(COMPANIES);
  const lines = Object.keys(LINES).map((key) => {
    const l = LINES[key];
    return {
      id: key,
      name: l.name ? l.name : key,
      company: l.companyId ? l.companyId : '',
    };
  });

  const initModels = orderByJapanese(
    keys.map((key) => {
      const c = COMPANIES[key];
      const ls = lines.filter((l) => l.company === c.id);
      return new CompanyModel(c.name, ls, c.keywords, c.yomi);
    }), "yomi"
  );
  const companies = ref<CompanyModel[]>(initModels);

  const textChanged = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    console.log(value);
    if(!value){
      companies.value = initModels;
      return;
    }
    const filtered = initModels.filter((m) => [m.name, m.yomi, ...m.keywords].some(s => s.includes(value)));
    companies.value = orderByJapanese(filtered, "yomi");
  };

</script>

<template>
  <div>
    <h1>鉄道会社別</h1>
    <input type="text" placeholder="検索" :oninput="textChanged" />
    <ul>
      <li v-for="company in companies" :key="company.name" class="company">
        <h2>{{ company.name }}</h2>
        <ul>
          <li v-for="line in company.lines" :key="line.id">
            <RouterLink :to="{name: 'line', params: {id: line.id}}">{{ line.name }}</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.company {
  margin-top: 30px;
}
</style>
