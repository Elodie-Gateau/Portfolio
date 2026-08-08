<script setup>
defineProps({
  hasMore: {
    type: Boolean,
    required: true,
  },
});

defineEmits(['see-more']);
</script>

<template>
  <button v-if="hasMore" @click="$emit('see-more')">Voir plus</button>
</template>

<style scoped lang="scss">
@use "@/assets/style/glassPanel" as *;
@use "@/assets/style/variables" as *;
@use "@/assets/style/button" as *;

button {
  @include button-secondary();
  @include glass-soft($size-12, $size-8 $size-12, $size-32);
  align-self: center;
  cursor: pointer;
}
</style>