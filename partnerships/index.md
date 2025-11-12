---
layout: page
---


<section class="blue">
</section>

<section class="light-grey">

## Partnerships
<section class="light-grey">

## Partnerships

  <esa-cards v-if="partnerships.length" style="min-height: 500px">
    <esa-card
      v-for="partnership in partnerships"
      :key="partnership.id"
      :title="partnership.id"
      :description="`
        ${partnership.Description}
      `"
      :icon="`<img src='${partnership.Logo}'' height='60' style='max-width: 100%; object-fit: contain' />`"
      :link="partnership.Url"
      action="Website"
    ></esa-card>
  </esa-cards>
</section>

<script setup>
  import { onMounted, ref } from "vue";

  const partnerships = ref([]);

  onMounted(async () => {
    const partnershipsResponse = await fetch("https://esa-eodashboards.github.io/RACE-catalog/partnerships.json");
    partnerships.value = await partnershipsResponse.json();
  })
</script>
