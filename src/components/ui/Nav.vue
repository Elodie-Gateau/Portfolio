<script setup>
import { Menu, CircleX } from '@lucide/vue';
import { ref } from "vue";
import DownloadCV from "@/components/ui/DownloadCV.vue";
import { useSmoothScroll } from "@/composables/useSmoothScroll";

const isOpen = ref(false);
const toggle = () => isOpen.value = !isOpen.value;

const { onAnchorClick } = useSmoothScroll({
  offset: () => document.querySelector('header')?.getBoundingClientRect().bottom ?? 0,
});

function onNavLinkClick(event) {
  onAnchorClick(event);
  isOpen.value = false;
}
</script>

<template>
  <div class="mobile-menu">
    <Menu v-if="!isOpen" @click="toggle()"/>
  </div>

  <Teleport to="body">
    <Transition name="nav-pop">
      <nav v-if="isOpen">
        <CircleX @click="toggle()" />
        <ul>
          <li><a href="#about" @click="onNavLinkClick">À propos</a></li>
          <li><a href="#skills" @click="onNavLinkClick">Compétences</a></li>
          <li><a href="#projects" @click="onNavLinkClick">Projets</a></li>
          <li><a href="#background" @click="onNavLinkClick">Parcours</a></li>
          <li><a href="#training" @click="onNavLinkClick">Formations</a></li>
          <li><a href="#contact" @click="onNavLinkClick">Contact</a></li>
          <li class="btn-primary"><DownloadCV /></li>
        </ul>
      </nav>
    </Transition>
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
  z-index: 1999;

  svg {
    display: block;
  }
}

nav {
  @include glass-default($radius: $radius-lg);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2000;
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

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: $size-4;
      }
    }
  }

}

.nav-pop-enter-active,
.nav-pop-leave-active {
  transition: opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1),
  transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-pop-enter-from,
.nav-pop-leave-to {
  opacity: 0;
  transform: scale(0.92) translateY(-16px);
}
</style>