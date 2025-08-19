---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  text: Rapid Action for Citizens with Earth Observation
  tagline: "Demonstrator dashboard"
  background: "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='600' fill='%230b1d26' /%3E%3C/svg%3E"  
  image: "https://placehold.co/800x600"
  actions:
    - theme: cta
      text: Dashboard
      link: /explore
    - theme: alt
      text: Usecases
      link: /usecases
---

<section class="white">


## What is RACE?

<img src="https://placehold.co/400x300" style="float: right; margin: 0 0 1rem .5rem !important; max-width: 100%;" />

This dashboard aims to showcase the power of Earth Observations to inform on societal global challenges. It is a joint cooperation between [ESA](https://www.esa.int/) and the [European Commission](https://ec.europa.eu/info/index_en). The activity started in 2020, triggered by Covid-19 crisis and
served as testbed for Open Innovation, with participation of European Industry and citizens.

In October 2022 the activity was rebranded to "Rapid Action for Citizens with Earth Observation", as it continues the rapid development of EO-informed indicators with societal relevance (such as air quality, agricultural production or manufacturing volumes), and it provides more open tools for interaction (such as Jupyter Notebooks and free tutorials on Earth Observation).

</section>
<section class="blue">

## Featured stories

  <esa-cards>
    <esa-card
      v-for="story in stories"
      overline="Story"
      :image="story['cover-image']"
      :tag="story.official !== true ? 'community' : undefined"
      tag-color="#00B19D"
      :title="story.title"
      :description="`${story.tags ? `Tags: ${story.tags.split(',')}<br />` : ''}${story.subtitle}`"
      :link="`/story?id=${story.file.slice(story.file.lastIndexOf('/') + 1).replace('.md', '')}`"
      action="Read"
    ></esa-card>
  </esa-cards>
</section>
<section class="light-grey">
  <esa-cards>
    <esa-card
      title="Application and Tools"
      description="What EO can for EU industry"
    ></esa-card>
    <esa-card
      title="Ecosystems"
      description="This has an enabler"
    ></esa-card>
  </esa-cards>
</section>
<section class="white">

## Partnerships

Eurodatacube, Eodash GitHub, ….
This is also as an enabler.

</section>
<section class="blue">

## Get involved/Resources

  <esa-cards>
    <esa-card
      title="Educational material"
      description=""
      link="/"
      action="Explore"
    ></esa-card>
    <esa-card
      title="Contributing via GitHub (Editor + Data)"
      description=""
      link="/"
      action="Explore"
    ></esa-card>
    <esa-card
      title="Eodashboard GitHub"
      description=""
      link="/"
      action="Explore"
    ></esa-card>
    <esa-card
      title="Notebooks"
      description=""
      link="/"
      action="Explore"
    ></esa-card>
  </esa-cards>
</section>

<script setup>
  import { onMounted, ref } from "vue";
  const stories = ref([]);

  const getStories = async () => {
    const response = await fetch("https://esa-eodashboards.github.io/RACE-narratives/narratives.json");
    const json = await response.json();
    stories.value = json.reverse();
  }
  getStories();
</script>