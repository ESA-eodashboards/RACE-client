---
layout: page
---


<section class="blue">
</section>

<section class="light-grey">

## Partnerships

  <esa-cards v-if="partnerships" style="min-height: 500px">
    <esa-card
      v-for="(partnershipConfig, partnership) in partnerships"
      :key="partnership"
      :title="partnership"
      :description="`
        ${partnershipConfig.Description}
      `"
      :icon="partnershipConfig.Logo ? `<img src='${partnershipConfig.Logo}'' height='60' style='max-width: 100%; object-fit: contain' /> ` : null"
      :link="partnershipConfig.Url"
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
