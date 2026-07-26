<script setup>
import { computed } from 'vue';
import { Diamond } from '@lucide/vue';
import skills from '@/assets/data/skills.json' with { type: 'json'};

const categories = computed(() =>
  skills.reduce((groups, { name, category }) => {
    const group = groups.find((g) => g.category === category);
    if (group) {
      group.items.push(name);
    } else {
      groups.push({ category, items: [name] });
    }
    return groups;
  }, [])
);
</script>

<template>
<section>
  <h2>Compétences</h2>
  <h3>Une stack complète, des outils pertinents</h3>
  <div v-for="group in categories" :key="group.category" class="skill">
    <h4><Diamond /> {{ group.category }}</h4>
    <div>
      <span v-for="item in group.items" :key="item">{{ item }}</span>
    </div>
  </div>
  <p>* Compétences en cours d'apprentissage en formation CDA</p>
</section>
</template>

<style scoped lang="scss">
@use "@/assets/style/glassPanel" as *;
@use "@/assets/style/variables" as *;
@use "@/assets/style/typography" as *;
@use "@/assets/style/button" as *;
  section {
    @include glass-default($size-22, $size-24, $size-24);
    display: flex;
    flex-direction: column;
    gap: $size-20;

    h2 {
      @include text-kicker;
    }
    h3 {
      @include text-h2;
    }

    .skill {
      @include glass-soft($size-22, $size-12, 0);
      display: flex;
      flex-direction: column;
      gap: $size-14;

      h4 {
        @include text-nav-link;
        display: flex;
        align-items: center;
        gap: $size-12;
        margin: 0;

        svg {
          width: $size-14;
          height: $size-14;
          color: $color-accent-2;
          fill: currentColor;
          stroke: none;
        }
      }
      div {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: $size-12;
        row-gap: $size-8;

        span {
          @include button-secondary();
          @include glass-soft($size-24, $size-6 $size-14, 0);
          font-weight: 600;
        }
      }
    }
  }
</style>