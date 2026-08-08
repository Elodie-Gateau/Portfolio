import { computed, ref } from "vue";

export function usePagination(total, step = 3) {
  const count = ref(step);
  const hasMore = computed(() => count.value < total);

  function seeMore() {
    count.value += step;
  }

  return { count, hasMore, seeMore };
}