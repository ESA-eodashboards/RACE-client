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
        minesweeper.minesweeperOptions.enableSpeciesDisplay
      "
      @close="minesweeper.isDialogEnabled = false"
    />
  </span>
</template>
<script setup>
import { watch, computed, onUnmounted } from "vue";
import MinesweeperDialog from "./components/MinespweeperDialog.vue";
import { minesweeper, setupMinesweeper, tearDownMinesweeper } from "./methods";

await setupMinesweeper();
const minesLeft = computed(() =>
  minesweeper.game
    ? minesweeper.game.mineCount - minesweeper.game.flagCount
    : 0,
);

watch(
  () => minesweeper.minesweeperOptions,
  async () => {
    tearDownMinesweeper();
    await setupMinesweeper();
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
