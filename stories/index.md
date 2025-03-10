---
layout: page
---

<script setup>
    import { onMounted } from 'vue';
    import { data } from './config.data.js';
    import { withBase } from 'vitepress'
</script>

<h2 style="font-size: 40px; height: 50px; margin: 20px;"> Story gallery </h2>
<div v-for="key in Object.keys(data)">
    <a style="color: blue; margin: 20px;" :href="'../storyviewer/?storyid='+key">{{data[key].title}}</a>
</div>
