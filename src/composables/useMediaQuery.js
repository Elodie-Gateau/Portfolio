import { onBeforeUnmount, onMounted, ref } from "vue";

export const MD_QUERY = "(min-width: 768px)";

export function useMediaQuery(query) {
  const matches = ref(false);
  let mediaQuery;

  function handleChange(e) {
    matches.value = e.matches;
  }

  onMounted(() => {
    mediaQuery = window.matchMedia(query);
    handleChange(mediaQuery);
    mediaQuery.addEventListener('change', handleChange);
  });

  onBeforeUnmount(() => {
    mediaQuery?.removeEventListener('change', handleChange);
  });

  return matches;
}