---
layout: page
---

<section class="blue">
</section>

<section class="light-grey">

## Providers

  <esa-cards v-if="providers.length" style="min-height: 500px">
    <esa-card
      v-for="provider in providers"
      :key="provider.id"
      :title="provider.id"
      :description="`
        ${provider.Description}${provider['NoR Offering'] ? `<br /><br /><a href='${provider['NoR Offering']}' target='_blank'>NoR Offering</a>` : ''}
        ${provider.narratives?.length ? `<br /><br />Stories: ${provider.narratives.map(n => `<a href='${withBase(`/story/?id=${n.file.split(/\/|\\/).pop().replace('.md', '')}`)}'>${n.title}</a>`).join(', ')}` : ''}
        ${provider.indicators?.length ? `<br /><br />Indicators: ${provider.indicators.map(i => `<a href='${withBase(`/explore/?indicator=${i.code}`)}'>${i.title}</a>`).join(', ')}` : ''}
      `"
      :icon="provider.Logo ? `<img src='${provider.Logo}'' height='60' style='max-width: 100%; object-fit: contain' />` : null"
      :link="provider.Url"
      action="Website"
    ></esa-card>
  </esa-cards>
</section>

<script setup>
  import { onMounted, ref } from "vue";
  import { withBase } from 'vitepress';

  const indicators = ref([]);
  const providers = ref([]);
  const narratives = ref([]);

  const getIndicatorsForProvider = (providerKey) => indicators.value.filter(i => i.providers?.includes(providerKey));
  const getNarrativesForProvider = (providerKey) => narratives.value.filter(n => n.provider === providerKey);

  onMounted(async () => {
    const providersResponse = await fetch("https://esa-eodashboards.github.io/RACE-catalog/providers.json");
    const providersJson = await providersResponse.json();

    const indicatorsResponse = await fetch("https://esa-eodashboards.github.io/RACE-catalog/RACE/catalog.json");
    const indicatorsJson = await indicatorsResponse.json();
    indicators.value = indicatorsJson.links.filter(c => c.rel === "child");

    const narrativesResponse = await fetch("https://esa-eodashboards.github.io/RACE-narratives/narratives.json");
    narratives.value = await narrativesResponse.json();

    const enhancedProviders = Object.entries(providersJson).map(([key, provider]) => ({
      ...provider,
      id: key,
      indicators: getIndicatorsForProvider(key),
      narratives: getNarrativesForProvider(key),
    }));
    providers.value = enhancedProviders;
  })
</script>


