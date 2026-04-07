---
layout: eodash
feedback: false
---

<script setup>
    import { onMounted, watch } from "vue"
    import { withBase } from 'vitepress'
    import { trackEvent } from "@eox/pages-theme-eox/src/helpers.js";

    function waitForEodashStore(callback) {
        const interval = setInterval(() => {
            if (window.eodashStore) {
                clearInterval(interval)
                callback(window.eodashStore)
            }
        }, 100)
    }

    onMounted(() => {
        waitForEodashStore((eodashStore) => {
            const indicatorRef = eodashStore?.states?.indicator
            watch(indicatorRef, (newVal, oldVal) => {
                if (newVal && newVal !== "") {
                    trackEvent(['indicators', 'select_indicator', newVal]);
                }
            }, { immediate: true })
            const poiRef = eodashStore?.states?.poi
            watch(poiRef, (newVal, oldVal) => {
                if (newVal && newVal !== "") {
                    trackEvent(['features', 'select_feature', newVal]);
                }
            }, { immediate: true })
        })
        })
        // to fix attribution button display (bottom-right)
        const eodashElement = document.querySelector('eo-dash');
        if (eodashElement && eodashElement.shadowRoot) {
            const fixMapHeight = () => {
                const eoxMapDiv = eodashElement.shadowRoot.querySelector('eox-map');
                if (eoxMapDiv) {
                    const mapDiv = eoxMapDiv.shadowRoot.querySelector('#map');
                    if (mapDiv) {
                        mapDiv.style.height = 'calc(100% - 80px)'
                    }
                }
            }

            // Run it again after a short delay just in case the map re-renders
            setTimeout(fixMapHeight, 500)
        }
    const cacheBuster = `?t=${new Date().getTime()}`; // Add a timestamp for cache busting
</script>

<eo-dash style="display: block; height: calc(100dvh - 80px)" :config="withBase(`/configs/race-config.js${cacheBuster}`)"/>
