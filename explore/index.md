---
layout: eodash
---

<script setup>
    import { onMounted, watch } from "vue"
    import { withBase } from 'vitepress'
    import eodashStyle from "@eodash/eodash/webcomponent.css?raw"
    // import { trackEvent } from "@eox/pages-theme-eox/src/helpers.js";

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
                    // trackEvent(['indicators', 'select_indicator', newVal]);
                }
            }, { immediate: true })
            const poiRef = eodashStore?.states?.poi
            watch(poiRef, (newVal, oldVal) => {
                if (newVal && newVal !== "") {
                    // trackEvent(['features', 'select_feature', newVal]);
                }
            }, { immediate: true })
        })

        const EodashContainer = class extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: "open" });
            }

            connectedCallback() {
                const style = document.createElement("style");
                style.innerHTML = `
                    ${eodashStyle}
                    /* Why is this needed? Somehow these CSS vars get "lost" */
                    .bg-primary {
                        --v-theme-overlay-multiplier: var(--v-theme-primary-overlay-multiplier);
                        background-color: rgb(var(--v-theme-primary)) !important;
                        color: rgb(var(--v-theme-on-primary)) !important;
                    }
                    .bg-secondary {
                        --v-theme-overlay-multiplier: var(--v-theme-secondary-overlay-multiplier);
                        background-color: rgb(var(--v-theme-secondary)) !important;
                        color: rgb(var(--v-theme-on-secondary)) !important;
                    }
                    :root {
                        --v-hover-opacity: 0.04 !important;
                        --v-focus-opacity: 0.12 !important;
                    }
                    .v-btn:hover>.v-btn__overlay {
                        opacity: var(--v-hover-opacity);
                    }
                    .v-btn:focus-visible>.v-btn__overlay {
                        opacity: var(--v-focus-opacity);
                    }
                `;
                this.shadowRoot.appendChild(style);

                const eoDash = document.createElement("eo-dash");
                eoDash.style = "display: block; height: 100%; width: 100%;";
                eoDash.config = withBase('/configs/race-config.js');
                this.shadowRoot.appendChild(eoDash);
            }
        };
        if (!customElements.get("eodash-container")) {
            customElements.define("eodash-container", EodashContainer);
        }  
        // monkeypatching querySelector to get to the EOXMap inside shadowDom for drawtools to attach itself
        document.querySelector = (function(originalQuerySelector) {
        return function(selector) {
            if (selector === 'eox-map#main') {
                return document.querySelector("eodash-container").shadowRoot.querySelector("eox-map#main");
            }
            return originalQuerySelector.call(document, selector);
        };
        })(document.querySelector);
    });
</script>

<eodash-container style="display: block; height: calc(100dvh - var(--vp-nav-height))"></eodash-container>
