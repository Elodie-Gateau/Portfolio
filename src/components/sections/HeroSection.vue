<script setup>
import { useSmoothScroll } from "@/composables/useSmoothScroll";
import {ArrowRight} from "@lucide/vue";
import CV from "@/components/ui/CV.vue";

const profileImg = `${import.meta.env.BASE_URL}images/photo-profil.webp`;

const { onAnchorClick } = useSmoothScroll({
  offset: () => document.querySelector('header')?.getBoundingClientRect().bottom ?? 0,
});
</script>

<template>
  <section id="about">
    <div class="container-hero">
      <div class="flash">
        <span></span>
        <p>Disponible prochainement</p>
      </div>
      <h1>Je conçois des apps web qui <span>simplifient le quotidien professionnel.</span></h1>
      <p>Développeuse fullstack, j'aime construire des solutions qui rendent <strong>service</strong> aux professionnels et améliorent leur quotidien.</p>
      <div class="buttons">
        <a href="#projects" @click="onAnchorClick">Voir mes projets</a>
        <CV text="Télécharger le CV" />
      </div>
    </div>
    <div class="container">
      <h2>À propos</h2>
      <h3>Analyser les problèmes, et conçevoir des solutions.</h3>
      <p>Pendant près de huit ans, j'ai accompagné des personnes et des organisations dans mon premier métier de psychologue du travail : analyser des besoins, conçevoir des dispositifs centrés sur les usages, en faciliter l'adoption. Une expérience qui irrigue aujourd'hui mes projets de développement.</p>
      <p>Je me forme actuellement en alternance au titre de <strong>Concepteur Développeur d'Applications</strong>. Front-end soigné, back-end structuré, et un soucis de l'éco-conception et de l'accessibilité.</p>
    </div>
    <div class="sidebar">
      <div class="img-container">
        <img :src="profileImg" alt="Portrait Elodie Gateau">
      </div>
      <div class="resume">
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
          <p>FR, EN(B1)</p>
        </div>
        <hr>
        <a href="#contact" @click="onAnchorClick">Me contacter <ArrowRight /></a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/style/glassPanel" as *;
@use "@/assets/style/variables" as *;
@use "@/assets/style/typography" as *;
@use "@/assets/style/button" as *;
@use "@/assets/style/breakpoint" as *;

  .container-hero {
    @include glass-default($radius-xl);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: $size-16;

    .flash {
      @include glass-default($radius-lg, $size-10, 0);
      padding: $size-8 $size-20;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: $size-14;
      align-self: flex-start;
      span {
        width: $size-12;
        height: $size-12;
        display: inline-block;
        background-color: #0ac10a;
        border-radius: 100%;
        box-shadow: 0 0 $size-4 $size-6 #c0e6c0;
        animation: pulse-halo 1s ease-in-out infinite;
      }

      @keyframes pulse-halo {
        0%, 100% {
          box-shadow: 0 0 0 $size-4 #c0e6c0;
        }
        50% {
          box-shadow: 0 0 $size-4 $size-10 rgba(#c0e6c0, 0.5);
        }
      }
      p {
        font-weight: 700;
        padding: 0;
        margin: 0;
      }
    }

    h1 {
      line-height: $size-32;
      letter-spacing: -0.05em;
      color: $color-text;

      span {
        background: linear-gradient(120deg, $color-accent, $color-accent-2 52%, #1aa6b8);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .buttons {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: $size-16;

      a {
        @include button-primary();
      }

      button {
        @include glass-soft();
        @include button-secondary();
        cursor: pointer;
      }
    }
  }

  .img-container {
    @include glass-default($radius-xl);
    width: 100%;
    display: flex;
    align-items: center;
  }
  img {
    width: 100%;
    border-radius: $radius-lg;
  }
  
  
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
  @include glass-default();
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
    cursor: pointer;
  }
}

@media (min-width: $md) {
  #about {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto;
    align-items: start;
    gap: $size-16;

    .container-hero {
      grid-column: span 8;
      grid-row: 1;
    }

    .container {
      grid-column: span 8;
      grid-row: 2;
      width: 100%;
      margin-bottom: 0;
    }

    .sidebar {
      grid-column: span 4;
      grid-row: 1 / 3;
      align-self: start;
      position: sticky;
      top: calc(var(--header-height, 4rem) + #{$size-32});
      display: flex;
      flex-direction: column;
      gap: $size-16;

      .img-container,
      .resume {
        margin-bottom: 0;
      }
    }
  }
}
</style>