<template>
  <div class="species-list mt-3">
    <p>
      These are the species found in biodiversity hotspots for the chosen area.
      <br />
      Click on the images to enlarge them and learn more about each species.
    </p>
    <dl>
      <div
        class="species v-row"
        v-for="s in species"
        :key="s.species"
        style="margin-bottom: 16px"
      >
        <img
          v-if="
            s.image_url &&
            /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i.test(s.image_url)
          "
          :src="s.image_url"
        />

        <div v-else class="placeholder">?</div>

        <a :href="s.image_url" class="names" target="_blank">
          <dt>
            <b>{{
              s.species.replace(/(?:^|\s)\S/g, (match) => match.toUpperCase())
            }}</b>
          </dt>
          <dd>({{ s.common_name }})</dd>
        </a>
        <div class="d-flex row align-center" style="max-width: 80px">
          <div
            :title="s.conservation_status"
            :class="`iucn ${s.conservation_status}`"
            :style="{
              background: getIucnBackgroundColor(s.conservation_status),
              color: getIucnTextColor(s.conservation_status),
            }"
          >
            {{ getIucnShorthand(s.conservation_status) }}
          </div>
          <span v-if="s.count > 1" class="count">
            {{ s.count }}
          </span>
        </div>
      </div>
    </dl>
    <p>The conservation status indicates how endangered each species is.</p>
    <img
      style="max-width: 60%; margin: 0 20%"
      src="iucn_status.svg"
      alt="IUCN Endangered Species Index legend"
    />
  </div>
</template>

<script setup>
import {
  getIucnBackgroundColor,
  getIucnShorthand,
  getIucnTextColor,
} from "../methods/species-list";
const props = defineProps({
  species: {
    /**
     * @type {import("vue").PropType<import("../../types").Species>}
     */
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.species {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  min-width: 280px;

  img,
  .placeholder {
    height: 64px;
    width: 64px;
    border-radius: 4px;
    margin-right: 12px;
    border: 2px solid #99a;
  }

  .placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    background: #00417011;
  }

  .names {
    width: 200px;
    font-size: 15px;
  }
}

.count {
  height: 22px;
  padding: 0 9px;
  border-radius: 11px;
  margin-left: 9px;
  background: #00417044;
  color: #004170;
}

.iucn {
  font-family: "Arial", sans-serif;
  font-size: 14px;
  font-weight: 600;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}
</style>
