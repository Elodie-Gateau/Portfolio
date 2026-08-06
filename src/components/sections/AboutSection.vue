<script setup>
import { ArrowRight } from '@lucide/vue';
import { useSmoothScroll } from "@/composables/useSmoothScroll";

const { onAnchorClick } = useSmoothScroll({
  offset: () => document.querySelector('header')?.getBoundingClientRect().bottom ?? 0,
});
</script>

<template>
<section id="about">
  <div class="container">
    <h2>À propos</h2>
    <h3>Analyser les problèmes, et conçevoir des solutions.</h3>
    <p>Pendant près de huit ans, j'ai accompagné des personnes et des organisations dans mon premier métier de psychologue du travail : analyser des besoins, conçevoir des dispositifs centrés sur les usages, en faciliter l'adoption. Une expérience qui irrigue aujourd'hui mes projets de développement.</p>
    <p>Je me forme actuellement en alternance au titre de <strong>Concepteur Développeur d'Applications</strong>. Front-end soigné, back-end structuré, et un soucis de l'éco-conception et de l'accessibilité.</p>
  </div>
  <div class="container resume">
    <div>
      <p>Localisation</p>
      <p>Vendée (85)</p>
    </div>
    <hr>
    <div>
      <p>Statut</p>
      <p>Alternante</p>
    </div>
    <hr>
    <div>
      <p>Disponible</p>
      <p>Février 2027</p>
    </div>
    <hr>
    <div>
      <p>Langues</p>
      <p>FR, EN B1</p>
    </div>
    <hr>
    <a href="#contact" @click="onAnchorClick">Me contacter <ArrowRight /></a>
  </div>
</section>
</template>

<style scoped lang="scss">
@use "@/assets/style/glassPanel" as *;
@use "@/assets/style/variables" as *;
@use "@/assets/style/typography" as *;
@use "@/assets/style/button" as *;

.container {
  @include glass-default()
}

h2 {
  @include text-kicker();
}

h3 {
  @include text-h2;
}

.resume {
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p:nth-child(1) {
      @include text-label;
    }
    p:nth-child(2) {
      @include text-nav-link;
    }
  }

  hr {
    border: none;
    border-top: 1px solid $color-text-soft;
    opacity: 0.3;
    margin: 0;
  }

  a {
    @include button-ghost-accent();
    margin-top: $size-20;
  }
}
</style>