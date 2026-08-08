<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import SkillsSection from "@/components/sections/SkillsSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import BackgroundSection from "@/components/sections/BackgroundSection.vue";
import TrainingSection from "@/components/sections/TrainingSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
</script>

<template>
  <div class="app-root">
      <AppHeader />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <BackgroundSection />
      <TrainingSection />
      <ContactSection />
      <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/style/variables" as *;

.app-root {
  padding: $size-16;
  position: relative;
  min-height: 100vh;
}


@keyframes drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(26px, -20px) scale(1.08); }
}
</style>