---
layout: page
---

<script setup client-only>
    if(!customElements.get('eox-map')) import("@eox/map") && import("@eox/map/dist/eox-map-advanced-layers-and-sources");
    if(!customElements.get('eox-jsonform')) import("@eox/jsonform");
    
</script>
<style>
    .editor-wrapper {
        top: 50px!important;
    }
</style>
<ClientOnly>
    <eox-storytelling show-editor="open" style="overflow-y: auto;height: calc(100vh - 64px);" markdown="## Start your journey here!"></eox-storytelling>
</ClientOnly>
