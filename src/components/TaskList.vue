<template>
  <div data-cy="task-list">
    <TaskItem v-for="task in tasks" :key="task.id" v-bind="task" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useStore } from "@/store";
import TaskItem from "./TaskItem.vue";

export default defineComponent({
  components: { TaskItem },
  setup() {
    const store = useStore();
    const tasks = computed(() => store.state.tasks || []);
    return { tasks };
  },
});
</script>
