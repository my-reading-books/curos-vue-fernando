import { ref, computed } from 'vue';

export const useCounter = (initialValue: number = 5) => {
  const counter = ref(initialValue);

  return {
    counter,

    // Read-only
    squareCounter: computed(() => counter.value * counter.value),
  };
};
