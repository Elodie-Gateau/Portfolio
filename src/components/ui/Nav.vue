<script setup>
import { Menu, CircleX, ArrowDownToLine } from '@lucide/vue';
import { ref } from "vue";

const isOpen = ref(false);
const toggle = () => isOpen.value = !isOpen.value;
</script>

<template>
  <div class="mobile-menu">
    <Menu v-if="!isOpen" @click="toggle()"/>
  </div>

  <Teleport to="body">
    <nav v-if="isOpen">
      <CircleX @click="toggle()" />
      <ul>
        <li><a href="#">À propos</a></li>
        <li><a href="#">Compétences</a></li>
        <li><a href="#">Projets</a></li>
        <li><a href="#">Parcours</a></li>
        <li><a href="#">Formations</a></li>
        <li><a href="#">Contact</a></li>
        <li class="btn-primary"><a href="#">Télécharger le CV <ArrowDownToLine /></a></li>
      </ul>
    </nav>
  </Teleport>
</template>

<style scoped lang="scss">
@use "@/assets/style/typography" as *;
@use "@/assets/style/variables" as *;
@use "@/assets/style/glassPanel" as *;
@use "@/assets/style/button" as *;

.mobile-menu {
  @include glass-soft($radius-md, $size-16, 0);
  display: flex;

  svg {
    display: block;
  }
}

nav {
  @include glass-soft($radius: $radius-lg);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ul {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: $size-10;
    @include text-h3;

    li {
      width: 100%;
      text-align: center;
      padding: $size-16;
      border-radius: $size-16;
      transition: background 0.2s;
      &:hover {
        @include glass-soft;
      }
    }

    .btn-primary {
      @include button-primary();

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: $size-4;
      }
    }
  }

}
</style>