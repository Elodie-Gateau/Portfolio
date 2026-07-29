<script setup>

import Nav from "@/components/ui/Nav.vue";
</script>

<template>
  <header>
    <div class="container">
      <p class="name">Elodie Gateau</p>
      <p class="job">Développeuse Fullstack</p>
    </div>
    <div>
      <Nav />
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "@/assets/style/typography" as *;
@use "@/assets/style/variables" as *;
@use "@/assets/style/glassPanel" as *;

header {
  display: flex;
  position: sticky;
  top: $size-16;
  z-index: 1000;
  justify-content: space-between;
  align-items: center;
  @include glass-default($radius-lg);

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


</style>