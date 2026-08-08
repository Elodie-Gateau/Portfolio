<script setup>

import { onBeforeUnmount, onMounted, ref } from "vue";
import Nav from "@/components/ui/Nav.vue";

const headerEl = ref(null);
let resizeObserver;

function updateHeaderHeight() {
  if (headerEl.value) {
    document.documentElement.style.setProperty("--header-height", `${headerEl.value.offsetHeight}px`);
  }
}

onMounted(() => {
  updateHeaderHeight();
  resizeObserver = new ResizeObserver(updateHeaderHeight);
  resizeObserver.observe(headerEl.value);
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
});
</script>

<template>
  <header ref="headerEl">
    <div class="container">
      <p class="name">Elodie Gateau</p>
      <p class="job">Développeuse Fullstack</p>
    </div>
    <Nav />
  </header>
</template>

<style scoped lang="scss">
@use "@/assets/style/typography" as *;
@use "@/assets/style/variables" as *;
@use "@/assets/style/breakpoint" as *;
@use "@/assets/style/glassPanel" as *;

header {
  display: flex;
  position: sticky;
  top: $size-16;
  z-index: 1000;
  justify-content: space-between;
  align-items: center;
  @include glass-default($radius-lg, $hover: false);

  .container {
    display: flex;
    flex-direction: column;

    .name {
      @include text-h3;
      margin: 0;
    }

    .job {
      @include text-label;
      margin: 0;
    }
  }
}

@media(min-width: $md) {
  header {
    @include glass-default($radius-lg, $size-18, $size-32);
    gap: $size-20;
  }
}


</style>