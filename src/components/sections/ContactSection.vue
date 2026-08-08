<script setup>
import { ArrowUpRight } from '@lucide/vue';
import CV from "@/components/ui/CV.vue";

const links = [
  { label: 'GitHub', href: 'https://github.com/Elodie-Gateau' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/elodiegateau/' },
];
</script>

<template>
  <section id="contact">
    <div class="main">
      <h2>Contact</h2>
      <h3>Travaillons ensemble.</h3>
      <div class="links">
        <a href="mailto:elodie.gateau.raffeneau@gmail.com">elodie.gateau.raffeneau@gmail.com</a>
        <a href="tel:+33662750535">06 62 75 05 35</a>
      </div>
    </div>
    <div class="side">
      <div class="btn-primary"><CV text="Télécharger le CV"/></div>
      <div class="socials">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener"
          class="link"
        >
          {{ link.label }}<ArrowUpRight />
        </a>
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

section {
  display: flex;
  flex-direction: column;
  margin-top: $size-24;

  .main {
    @include glass-dark($radius-xl, $size-24);

    h2 {
      @include text-kicker();
      color: $color-accent-3;
    }

    h3 {
      @include text-h2();
      margin: $size-10 0 $size-14;
      color: $color-white;
    }

    p {
      @include text-body-lg();
      color: $color-white;
      margin: 0 0 $size-20;
      max-width: 26em;
    }

    .links {
      display: flex;
      flex-direction: column;
      gap: $size-10;

      a {
        display: block;
        width: fit-content;
        text-decoration: none;
        color: inherit;
        font-weight: 700;
        border-bottom: 1px solid rgba(238, 240, 248, 0.2);
        padding-bottom: $size-8;

        &:hover {
          color: #9aa6ff;
        }
      }
    }
  }

  .side {
    @include glass-default($radius-xl, $size-20);
    display: flex;
    flex-direction: column;

    .btn-primary {
      @include button-primary();
      margin-bottom: $size-20;

      button {
        display: flex;
        align-items: center;
      }
    }

    .link {
      @include button-link-glass();
      @include glass-soft($radius-md, $size-14 $size-16, $size-16);

      svg {
        color: $color-accent;
        width: $size-18;
      }
    }

    .infos {
      @include text-caption();
      color: $color-text-soft;
      text-align: center;
      margin-top: $size-4;
    }
  }
}

@media (min-width: $md) {
  section {
    flex-direction: row;
    gap: $size-16;

    .main {
      width: 100%;
    }

    .side {
      width: 70%;
      justify-content: space-around;
    }

    .socials {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
    }
  }
}
</style>