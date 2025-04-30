<template>
  <v-btn
    >{{ minesweeper?.game?.mineCount - minesweeper.game?.flagCount }} 💣
    remaining</v-btn
  >

  <MinesweeperDialog
    :mode="minesweeper.mode"
    :game="minesweeper.game"
    :elapsedSeconds="minesweeper.elapsedSeconds"
    :is-enabled="minesweeper.isDialogEnabled"
    :bbox="minesweeper.bbox"
    :enableSpeciesDisplay="minesweeper.minesweeperOptions.enableSpeciesDisplay"
    @close="minesweeper.isDialogEnabled = false"
  />
</template>
<script setup>
import { watch } from "vue";
import MinesweeperDialog from "./components/MinespweeperDialog.vue";
import { minesweeper, setupMinesweeper, tearDownMinesweeper } from "./methods";

await setupMinesweeper();

watch(
  () => minesweeper.minesweeperOptions,
  async () => {
    tearDownMinesweeper();
    await setupMinesweeper();
  },
);
</script>
<style scoped></style>
