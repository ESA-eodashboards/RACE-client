---
layout: story
---

<script setup>
    import { onMounted, ref } from 'vue';
    import { withBase } from 'vitepress';

    if (!import.meta.env.SSR) {
        if(window && !customElements.get('eox-map')) import("@eox/map");
        if(window && !customElements.get('eox-jsonform')) import("@eox/jsonform");
        if(window) import("@eox/map/src/plugins/advancedLayersAndSources");
        if(window && !customElements.get('eox-chart')) import("@eox/chart");
    }

    const storyurl = ref('')

    const PROJDICT = {
        'EPSG:3035': {
            name: 'EPSG:3035',
            def: '+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs',
        },
        'ORTHO:680500': {
            name: 'ORTHO:680500',
            def: '+proj=ortho +lat_0=90 +lon_0=0 +x_0=0 +y_0=0 +ellps=WGS84 +units=m +no_defs',
            extent: [-6422528, -6422528, 6422528, 6422528],
        },
        'EPSG:3411': {
            name: 'EPSG:3411',
            def: '+proj=stere +lat_0=90 +lat_ts=70 +lon_0=-45 +x_0=0 +y_0=0 +a=6378273 +b=6356889.449 +units=m +no_defs +type=crs',
            extent: [-3314763.31, -3314763.31, 3314763.31, 3314763.31],
        },
        'EPSG:3031': {
            name: 'EPSG:3031',
            def: '+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs +type=crs',
            extent: [-3299207.53, -3333134.03, 3299207.53, 3333134.03],
        },
    };

    function initWidgets({ detail }) {
      const element = detail;
      if (element?.tagName === 'EOX-MAP' && element.registerProjection) {
        element.registerProjection(
          'EPSG:3035',
          PROJDICT['EPSG:3035'].def,
          PROJDICT['EPSG:3035'].extent,
        );
        element.registerProjection(
          'ORTHO:680500',
          PROJDICT['ORTHO:680500'].def,
          PROJDICT['ORTHO:680500'].extent,
        );
        element.registerProjection(
          'EPSG:3031',
          PROJDICT['EPSG:3031'].def,
          PROJDICT['EPSG:3031'].extent,
        );
        element.registerProjection(
          'EPSG:3411',
          PROJDICT['EPSG:3411'].def,
          PROJDICT['EPSG:3411'].extent,
        );
      }
    }

    onMounted(() => {
        let storyfile;
        if (window && typeof window !== 'undefined' && 'URLSearchParams' in window) {
            const searchParams = new URLSearchParams(window.location.search);
            storyfile = searchParams.get('id');
            storyurl.value = `https://esa-eodashboards.github.io/RACE-narratives/${storyfile}.md`;
        }
    })
    
</script>

<eox-storytelling 
    show-nav
    v-if="storyurl" 
    :markdown-url="storyurl"
    class="full-width"
    style="transform: translateY(var(--vp-nav-height)); margin-top: calc(var(--vp-nav-height) * -1)"
    @init="initWidgets"
>
</eox-storytelling>
