<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <span class="name">Elodie Gateau</span>
    <span class="meta">© {{ year }} · Conçu avec soin · Vue.js</span>
  </footer>
</template>

<style scoped lang="scss">
@use "@/assets/style/glassPanel" as *;
@use "@/assets/style/variables" as *;
@use "@/assets/style/typography" as *;

footer {
  @include glass-soft($radius-lg, $size-16 $size-20);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: $size-10;

  .name {
    @include text-nav-link();
    font-weight: 700;
  }

  .meta {
    @include text-caption();
    color: $color-text-soft;
  }
}
</style>