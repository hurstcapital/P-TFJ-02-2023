<template>
  <div
    class="flex justify-between items-center bg-white rounded-md shadow-md my-2 p-1 border-4"
    :class="isComplete ? 'border-green-500' : 'border-white'"
    data-cy="task-item"
  >
    <div
      class="flex items-center"
      @click="toggleCompletion()"
      @keydown.enter="toggleCompletion()"
    >
      <div class="flex-shrink-0 ml-3 align-middle">
        <BaseInputCheckBox :isChecked="isComplete" />
      </div>
      <div class="ml-2">
        <h4
          class="text-xl text-gray-900 leading-tight"
          :class="isComplete ? 'line-through' : ''"
        >
          {{ description }}
        </h4>
      </div>
    </div>
    <div class="flex items-center">
      <BaseButton @click="removeTask"> Deletar </BaseButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { IMutationType } from "@/interfaces/Mutations";
import BaseButton from "@/components/common/BaseButton.vue";
import BaseInputCheckBox from "@/components/common/BaseInputCheckBox.vue";

export default defineComponent({
  name: "TaskItem",
  components: {
    BaseButton,
    BaseInputCheckBox,
  },
  props: {
    id: { type: String, required: true },
    description: { type: String, required: true },
    isComplete: { type: Boolean, required: true },
  },
  setup(props) {
    const store = useStore();

    const toggleCompletion = () => {
      store.commit(IMutationType.CompleteItem, {
        id: props.id,
        isComplete: !props.isComplete,
      });
    };

    const removeTask = () => {
      store.commit(IMutationType.RemoveTask, { id: props.id });
    };

    return { toggleCompletion, removeTask };
  },
});
</script>
