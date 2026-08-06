<script setup>
import {ArrowDownToLine} from "@lucide/vue";
function downloadCV() {
  const link = document.createElement("a");
  link.href = `${import.meta.env.BASE_URL}upload/CV_ElodieGateau.pdf`;
  link.download = "CV_ElodieGateau.pdf";
  link.click();
}
</script>

<template>
  <button @click="downloadCV()">Télécharger le CV <ArrowDownToLine /></button>
</template>

<style scoped lang="scss">
@use "@/assets/style/variables" as *;
button {
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
}

svg {
  width: $size-20;
}
</style>