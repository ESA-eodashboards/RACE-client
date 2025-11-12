---
layout: page
---

<section class="blue">
</section>

<section class="light-grey">

## Resources

  <esa-cards v-if="resources" style="min-height: 500px">
    <esa-card
      v-for="(resourceConfig, resource) in resources"
      :key="resource"
      :title="resource"
      :description="`
        ${resourceConfig.Description}
      `"
      :icon="`<img src='${resourceConfig.Logo}'' height='60' style='max-width: 100%; object-fit: contain' />`"
      :link="resourceConfig.Url"
      action="Website"
    ></esa-card>
  </esa-cards>
</section>

<script setup>
  import { onMounted, ref } from "vue";

  const resources = ref([]);

  onMounted(async () => {
    const resourcesResponse = await fetch("https://esa-eodashboards.github.io/RACE-catalog/resources.json");
    resources.value = await resourcesResponse.json();
  })
</script>
