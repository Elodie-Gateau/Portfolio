<script setup>
import {ArrowDownToLine} from "@lucide/vue";
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="flash">
        <span></span>
        <p>Disponible prochainement</p>
      </div>
      <h1>Je conçois des apps web qui <span>simplifient le quotidien professionnel.</span></h1>
      <p>Développeuse fullstack, j'aime construire des solutions qui rendent <strong>service</strong> aux professionnels et améliorent leur quotidien.</p>
      <a href="#">Voir mes projets</a>
      <button>Télécharger le CV <ArrowDownToLine /></button>
    </div>
    <div class="img-container">
      <img src="/public/images/photo-profil.webp" alt="Portrait Elodie Gateau">
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/style/glassPanel" as *;
@use "@/assets/style/variables" as *;
@use "@/assets/style/typography" as *;
@use "@/assets/style/button" as *;

  .container {
    @include glass-default($radius-xl);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: $size-16;

    .flash {
      @include glass-default($radius-lg, $size-10, 0);
      padding: $size-8 $size-12;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: $size-10;
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

    a {
      @include button-primary();
      align-self: flex-start;
    }

    button {
      @include button-secondary();
      @include glass-soft();
      align-self: flex-start;
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
</style>