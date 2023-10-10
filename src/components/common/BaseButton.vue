<template>
  <button
    data-cy="submit"
    type="submit"
    :disabled="isDisabled"
    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded"
    :class="
      isDisabled
        ? 'focus:outline-none disabled:opacity-50 cursor-not-allowed hover:bg-green-500'
        : ''
    "
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
</script>
