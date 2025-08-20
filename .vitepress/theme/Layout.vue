<script setup>
import Layout from '@eox/pages-theme-esa/src/Layout.vue';
import { onMounted } from 'vue';
import { useData, withBase } from 'vitepress';

const {frontmatter, theme, site} = useData();
onMounted(() => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  });
});
</script>

<template>
  <div v-if="frontmatter.layout === 'eodash' || frontmatter.layout === 'story'">
    <ClientOnly>
      <esa-navbar
        fixed
        :brand-logo="withBase(theme.logo)"
        :brand-title="site.title"
        .menuItems="theme.nav.map((n) => ({ title: n.text, href: withBase(n.link) }))"
        :enable-login="theme.login"
        style="--header-transform: translateY(0); --header-background: #001923; display: block; height: var(--vp-nav-height);"
      ></esa-navbar>
    </ClientOnly>
    <Content></Content>
  </div>
  <Layout v-else></Layout>
</template>