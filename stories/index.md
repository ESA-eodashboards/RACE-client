---
layout: page
---
<script client-only>
  if(window && !customElements.get('eox-itemfilter')) import("@eox/itemfilter");
</script>


<script setup>
  import { ref, onMounted } from 'vue';
  import { withBase, useRouter } from 'vitepress';

  const router = useRouter();
  const items = ref([]);

  const filterProps = [{
    "keys": [
      "title",
      "subtitle"
    ],
    "title": "Search",
    "type": "text",
    "placeholder": "Search in title or subtitle",
    "expanded": true
  }, {
    "key": 'theme',
    "title": 'Theme',
    "expanded": true,
    "type": "select"
  }
  ];

  onMounted(async () => {
    try {
      const response = await fetch('https://esa-eodashboards.github.io/RACE-narratives/narratives.json');
      const results = await response.json();
      results.forEach((res)=>{
        if (res['cover-image'] && res['cover-image'].startsWith('build')){
            // Adapt image urls in case locally built and not absolute
            res['cover-image'] = 'https://esa-eodashboards.github.io/RACE-narratives/'+res['cover-image']
        }
    });
      items.value = results;
    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
    if (window && typeof window !== 'undefined') {
      function injectStyleToShadowRoot(selector, css) {
        const interval = setInterval(() => {
        const el = document.querySelector(selector);
        if (el && el.shadowRoot) {
          clearInterval(interval);
          const style = document.createElement('style');
          style.textContent = css;
          el.shadowRoot.appendChild(style);
        }
        }, 100);
      }

      injectStyleToShadowRoot('eox-itemfilter', `
        small.subtitle.no-line.truncate {
          white-space: wrap!important;
        }
      `);
    }
  });

  // Click event handler
  const handleResultClick = (evt) => {
    const sections = evt.detail.file.split("/");
    const filename = sections[sections.length-1].split(".")[0];
    router.go(withBase(`/story?id=${filename}`));
  };
</script>
<section class="blue">
</section>
<section class="white">

**Explore** and **filter** the RACE stories to find out how indicators can provide value for citizens and businesses.
<client-only>
  <eox-itemfilter
    :items="items"
    titleProperty="title"
    imageProperty="cover-image"
    subTitleProperty="subtitle"
    aggregateResults=""
    :filterProperties="filterProps"
    resultType="cards"
    @select="handleResultClick"
    style="--form-flex-direction: row;--card-width: 300px; --card-height: 350px; --card-border-radius: 0px;--card-gap:40px"
  ></eox-itemfilter>
</client-only>
</section>
