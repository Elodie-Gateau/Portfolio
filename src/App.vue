<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
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
      <AboutSection />
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
  overflow-x: clip;
  min-height: 100vh;
  background:
    radial-gradient(circle at 14% 16%, rgba(74, 140, 255, 0.42), transparent 42%),
    radial-gradient(circle at 86% 12%, rgba(255, 180, 30, 0.4), transparent 40%),
    radial-gradient(circle at 82% 88%, rgba(255, 107, 61, 0.4), transparent 44%),
    radial-gradient(circle at 16% 90%, rgba(178, 58, 38, 0.34), transparent 46%),
    radial-gradient(circle at 58% 48%, rgba(120, 92, 220, 0.22), transparent 52%),
    linear-gradient(160deg, #eaf0fb 0%, #e6e9f4 55%, #eef0f6 100%);
}


@keyframes drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(26px, -20px) scale(1.08); }
}
</style>