---
layout: page
---

<script setup>
    import { withBase } from 'vitepress'
    console.log(import.meta)
    const configPath = new URL("./race-config.js",import.meta.url).href
</script>

<eo-dash style="height:calc(100dvh - 64px)" .config="configPath"/>
