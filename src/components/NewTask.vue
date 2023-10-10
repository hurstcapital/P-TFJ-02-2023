<template>
  <form class="my-4">
    <div class="mx-auto flex items-center bg-white p-2 rounded-md shadow-md">
      <div class="flex-grow my-2 p-1 items-center">
        <BaseInput placeHolder="Adicione uma tarefa" v-model="text" />
      </div>
      <div class="flex-shrink-0">
        <BaseButton
          @click="createTask"
          :isDisabled="!text.length"
          data-cy="add-task"
        >
          Adicionar
        </BaseButton>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "@/store";
import { ITask } from "@/interfaces/Task";
import { IMutationType } from "@/interfaces/Mutations";
import { v4 as uuidv4 } from "uuid";
import BaseButton from "@/components/common/BaseButton.vue";
import BaseInput from "@/components/common/BaseInput.vue";

export default defineComponent({
  name: "NewTask",
  components: {
    BaseButton,
    BaseInput,
  },
  setup() {
    const text = ref("");
    const store = useStore();

    const createTask = (event: Event) => {
      event.preventDefault();

      if (text.value === "") return;
      const item: ITask = {
        id: uuidv4(),
        description: text.value,
        isComplete: false,
      };

      store.commit(IMutationType.CreateItem, item);
      text.value = "";
    };

    return { createTask, text };
  },
});
</script>
