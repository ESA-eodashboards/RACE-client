---
layout: page
---

<script setup>
    import { withBase } from 'vitepress'
    const configPath = new URL("./race-config.js",import.meta.url).href
</script>

<eo-dash style="height:calc(100dvh - 64px)" .config="configPath"/>
