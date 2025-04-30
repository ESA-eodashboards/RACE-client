<template>
  <v-btn
    >{{ minesweeper.game.mineCount - minesweeper.game.flagCount }} 💣
    remaining</v-btn
  >

  <!-- :is-enabled="minesweeper.isDialogEnabled" -->
  <MinesweeperDialog
    :mode="minesweeper.mode"
    :game="minesweeper.game"
    :elapsedSeconds="minesweeper.elapsedSeconds"
    is-enabled
    :bbox="minesweeper.bbox"
    :enableSpeciesDisplay="minesweeper.minesweeperOptions.enableSpeciesDisplay"
    @close="minesweeper.isDialogEnabled = false"
  />
</template>
<script setup>
import { watch } from "vue";
import MinesweeperDialog from "./components/MinespweeperDialog.vue";
import { minesweeper, setupMinesweeper, tearDownMinesweeper } from "./methods";

setupMinesweeper();

watch(
  () => minesweeper.minesweeperOptions,
  async () => {
    tearDownMinesweeper();
    await setupMinesweeper();
  },
);
</script>
<style scoped></style>
