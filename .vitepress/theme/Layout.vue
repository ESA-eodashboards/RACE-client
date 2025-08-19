<script setup>
import Layout from '@eox/pages-theme-esa/src/Layout.vue';
import { onMounted } from 'vue';
import { useData } from 'vitepress';

const {frontmatter, theme, site} = useData();
onMounted(() => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  });
});
</script>

<template>
  <div v-if="frontmatter.layout === 'eodash' || frontmatter.layout === 'story'">
    <esa-navbar
      fixed
      :brand-logo="theme.logo"
      :brand-title="site.title"
      .menuItems="theme.nav.map((n) => ({ title: n.text, href: n.link }))"
      :enable-login="theme.login"
      style="--header-transform: translateY(0); --header-background: #001923; display: block; height: var(--vp-nav-height);"
    ></esa-navbar>
    <Content></Content>
  </div>
  <Layout v-else></Layout>
</template>