<template>
  <span class="d-flex flex-column align-strech fill-height fill-width">
    <v-btn color="primary" height="50%" class="btn-open"
      >{{ minesLeft }} 💣 remaining</v-btn
    >

    <MinesweeperDialog
      :mode="minesweeper.mode"
      :game="minesweeper.game"
      :elapsedSeconds="minesweeper.elapsedSeconds"
      :is-enabled="minesweeper.isDialogEnabled"
      :bbox="minesweeper.bbox"
      :enableSpeciesDisplay="
        minesweeper.minesweeperOptions?.enableSpeciesDisplay
      "
      @close="minesweeper.isDialogEnabled = false"
    />
  </span>
</template>
<script setup>
import { watch, computed, onUnmounted } from "vue";
import { store } from "@eodash/eodash";

import MinesweeperDialog from "./components/MinesweeperDialog.vue";
import { minesweeper, setupMinesweeper, tearDownMinesweeper } from "./methods";
const { minesweeperOptions } = defineProps({
  minesweeperOptions: {
    /** @type {import("vue").PropType<import("../types").MinesweeperOptions>} */
    type: Object,
    required: true,
  },
});
setTimeout(() => {
  setupMinesweeper(minesweeperOptions);
}, 250);

const minesLeft = computed(() =>
  minesweeper.game
    ? minesweeper.game.mineCount - minesweeper.game.flagCount
    : 0,
);

watch(
  [() => minesweeperOptions, () => store.states.datetime.value],
  async () => {
    tearDownMinesweeper();
    setTimeout(() => {
      setupMinesweeper(minesweeperOptions);
    }, 1000);
  },
);
onUnmounted(() => {
  tearDownMinesweeper();
});
</script>
<style scoped>
.btn-open {
  border-radius: 4px 4px 0px 0px !important;
}
</style>
