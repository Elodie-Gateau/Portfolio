<script setup>
import experiences from '@/assets/data/experiences.json' with { type: 'json'};
</script>

<template>
<section>
  <h2>Parcours Professionnel</h2>
  <h3>Écouter, comprendre, coder</h3>
  <div class="timeline">
    <div v-for="experience in experiences" :key="experience.periode" class="tl-row">
      <div class="date">{{ experience.periode }}</div>
      <h4>{{ experience.poste }}</h4>
      <div v-if="experience.entreprise" class="org">{{ experience.entreprise }}</div>
      <ul>
        <li v-for="point in experience.realisations" :key="point">{{ point }}</li>
      </ul>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
@use "@/assets/style/glassPanel" as *;
@use "@/assets/style/variables" as *;
@use "@/assets/style/typography" as *;

section {
  @include glass-default($radius-xl, $size-24);

  h2 {
    @include text-kicker();
  }

  h3 {
    @include text-h2();
    margin: 0 0 $size-24;
  }

  .tl-row {
    display: flex;
    flex-direction: column;
    gap: $size-8;
    padding: $size-20 0;
    border-top: 1px solid rgba(90, 100, 150, 0.15);

    &:first-child {
      border-top: none;
      padding-top: 0;
    }

    .date {
      @include text-caption();
      color: $color-accent;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    h4 {
      @include text-h3();
      margin: 0;
      display: flex;
      align-items: center;
      gap: $size-10;

      &::before {
        content: "";
        width: $size-10;
        height: $size-10;
        flex-shrink: 0;
        border-radius: 100%;
        background: linear-gradient(140deg, $color-accent, $color-accent-2);
        box-shadow: 0 0 0 $size-4 rgba(91, 99, 230, 0.15);
      }
    }

    .org {
      @include text-caption();
      color: $color-text-soft;
      margin-bottom: $size-4;
    }

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: $size-6;

      li {
        @include text-body();
        position: relative;
        padding-left: $size-16;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: $size-8;
          width: $size-6;
          height: $size-6;
          border-radius: 100%;
          background: $color-text-soft;
        }
      }
    }
  }
}
</style>
