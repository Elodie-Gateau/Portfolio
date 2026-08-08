<script setup>
import formations from '@/assets/data/formations.json' with { type: 'json'};
import { GraduationCap } from '@lucide/vue';

</script>

<template>
<section id="training">
  <h2>Formations</h2>
  <h3>Apprendre, en continu</h3>
  <div class="grid">
    <div v-for="formation in formations" :key="formation.intitule" class="formation">
      <div class="icon-year">
        <div class="icon"><GraduationCap /></div>
        <div class="year">{{ formation.annee }}</div>
      </div>
      <div>
        <h4>{{ formation.intitule }}</h4>
        <div class="organism">{{ formation.organism }}</div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
@use "@/assets/style/glassPanel" as *;
@use "@/assets/style/variables" as *;
@use "@/assets/style/typography" as *;
@use "@/assets/style/breakpoint" as *;

section {
  h2 {
    @include text-kicker();
    padding: 0 $size-20;
  }

  h3 {
    @include text-h2();
    padding: 0 $size-20;
    margin: 0 0 $size-16;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: $size-8;
  }

  .formation {
    @include glass-default($radius-md, $size-16 $size-20, $size-8);
    display: flex;
    gap: $size-14;
    align-items: flex-start;

    svg {
      color: $color-accent-2;
    }

    .year {
      min-width: $size-48;
      font-weight: 800;
      letter-spacing: -0.02em;
      line-height: 1;
      background: linear-gradient(140deg, $color-accent, $color-accent-2);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h4 {
      @include text-nav-link();
      margin: 0 0 $size-4;
    }

    .organism {
      @include text-caption();
      color: $color-text-soft;
    }
  }

  @media (min-width: $md) {
    .formation {
      @include glass-default($radius-md, $size-14, $size-8);
      flex-direction: column;

      .icon-year {
        align-self: center;
        display: flex;
        align-items: center;
        width: 100%;
        font-size: $size-20;

        .year {
          width: 75%;
          display: flex;
          justify-content: center;
        }

        .icon {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>
