import{E as n,A as s}from"./lit-element.BMPlKsWQ.js";import{e as T,i as p,t}from"./directive.CvdRHFdJ.js";import{r as l,p as f}from"./directive-helpers.DDXwWjbG.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=T(class extends p{constructor(e){if(super(e),e.type!==t.PROPERTY&&e.type!==t.ATTRIBUTE&&e.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!l(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[r]){if(r===n||r===s)return r;const o=e.element,i=e.name;if(e.type===t.PROPERTY){if(r===o[i])return n}else if(e.type===t.BOOLEAN_ATTRIBUTE){if(!!r===o.hasAttribute(i))return n}else if(e.type===t.ATTRIBUTE&&o.getAttribute(i)===r+"")return n;return f(e),r}});export{A as l};
