<template>
  <input
    data-cy="input"
    :type="type"
    :value="modelValue"
    :placeholder="placeHolder"
    @input="updateInput"
    class="w-full focus:outline-none m-1 ml-3"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseInput",
  props: {
    placeHolder: {
      type: String,
      required: false,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
  },
  setup(_, ctx) {
    const updateInput = (event: Event) => {
      ctx.emit("update:modelValue", (event.target as HTMLInputElement).value);
    };
    return { updateInput };
  },
});
</script>
