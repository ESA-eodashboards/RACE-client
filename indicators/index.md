---
layout: page
---

<section class="blue">
</section>

<section class="light-grey">

## Indicators

**Explore** the RACE indicators to find out how indicators can provide value for citizens and businesses.

Will show pure indicator without any context (not the data, but story of an indicator) - longer description than the metadata, link to Providers and link to NoR offering for that indicator or where it is on CDSE or workflow
(1 page for all of them, structured manner info for each),

  <div v-if="themes" class="filters button-group" style="margin-bottom: 40px">
    <a
      class="btn"
      :class="{active: !activeTheme}"
      @click="setActiveTheme(null)"
    >All</a>
    <a
      v-for="(themeConfig, theme) in themes"
      :key=theme
      class="btn"
      :class="{active: activeTheme === theme}"
      @click="setActiveTheme(theme)"
    >{{themeConfig.title}}</a>
  </div>

  <esa-cards v-if="indicators.length">
    <esa-card
      v-for="indicator in indicators.filter(i => activeTheme ? i.themes.includes(activeTheme) : true)"
      :key="indicator.id"
      :title="indicator.title"
      :description="indicator.shortdescription"
      :image="indicator.thumbnail[0]"
      :tag="indicator.themes.join(', ')"
      :link="withBase(`/explore/?indicator=${indicator.code}`)"
      action="View"
    ></esa-card>
  </esa-cards>
</section>

<script setup>
  import {onMounted, ref} from "vue";
  import { withBase } from 'vitepress';

  const indicators = ref([]);
  const themes = ref([]);
  const activeTheme = ref(null);

  const setActiveTheme = (theme) => {
    activeTheme.value = theme;
  }

  onMounted(async () => {
    const indicatorsResponse = await fetch("https://esa-eodashboards.github.io/RACE-catalog/RACE/catalog.json");
    const indicatorsJson = await indicatorsResponse.json();
    indicators.value = indicatorsJson.links.filter(c => c.rel === "child");
    
    const themesResponse = await fetch("https://esa-eodashboards.github.io/RACE-catalog/themes.json");
    themes.value = await themesResponse.json();
  })
</script>

<style>
  a {
    background-color: transparent;
}
a {
    text-decoration: none;
    color: inherit;
}
.btn {
    display: inline-block;
    font-size: .75rem;
    line-height: 1.125rem;
    font-weight: 400;
    text-transform: uppercase;
    color: #fff;
    padding: 10px 20px;
    background-color: transparent;
    border: 2px solid #335E6F;
    border-radius: 2px;
    letter-spacing: 0.15625rem;
    transition: all 0.25s ease;
    cursor: pointer;
}
.btn.active {
    color: #fff;
    background-color: #335E6F;
}
.btn:hover {
    color: #fff;
    background-color: #335E6F;
    transform: translateY(-0.15rem);
}
.button-group .btn {
    margin: 0 7px 10px 0;
}
.filters .btn {
    color: #335E6F;
    border-color: #335E6F;
}
  .filters .btn.active, .filters .btn:hover {
    color: #fff;
    background-color: #335E6F;
}
  </style>
