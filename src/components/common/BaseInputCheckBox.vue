<template>
  <input
    data-cy="check-box"
    @input="updateInput"
    type="checkbox"
    :checked="isChecked"
    class="accent-green-500"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseInputCheckBox",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, ctx) {
    const updateInput = (event: Event) => {
      ctx.emit("update:checked", (event.target as HTMLInputElement).value);
    };
    return { updateInput };
  },
});
</script>
