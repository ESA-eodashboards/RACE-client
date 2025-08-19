<script setup>
import Layout from '@eox/pages-theme-esa/src/Layout.vue';
import { useData } from 'vitepress';

const {frontmatter, theme, site} = useData();
</script>

<template>
  <div v-if="frontmatter.layout === 'eodash'">
    <esa-navbar
      :brand-logo="theme.logo"
      :brand-title="site.title"
      .menuItems="theme.nav.map((n) => ({ title: n.text, href: n.link }))"
      :enable-login="theme.login"
      style="--header-transform: translateY(calc(-0.35 * var(--vp-nav-height))); background: #001923; display: block; height: var(--vp-nav-height);"
    ></esa-navbar>
    <Content></Content>
  </div>
  <Layout v-else></Layout>
</template>