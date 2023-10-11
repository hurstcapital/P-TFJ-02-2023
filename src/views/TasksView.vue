<template>
  <div class="container mx-auto p-5">
    <h1 class="text-3xl text-center p-2 font-bold">Lista de Tarefas</h1>
    <div>
      <h2 class="text-center mt-2">
        {{ completedCount }} de {{ totalCount }} completas.
      </h2>
      <NewTask />
      <TaskList />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import { IActionTypes } from "@/interfaces/Actions";
import { useStore } from "@/store";
import NewTask from "@/components/NewTask.vue";
import TaskList from "@/components/TaskList.vue";

export default defineComponent({
  name: "TaskView",
  components: {
    NewTask,
    TaskList,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const completedCount = computed(() => store.getters.completedCount);
    const totalCount = computed(() => store.getters.totalCount);

    const setTasks = () => {
      const localStorageValue = localStorage.getItem("tasks");

      if (localStorageValue) {
        store.dispatch(
          IActionTypes.SetTaskItems,
          JSON.parse(localStorageValue)
        );
      }
    };

    const redirect = () => {
      const localStorageValue = localStorage.getItem("user") || "";

      if (
        !JSON.parse(localStorageValue).passport &&
        !JSON.parse(localStorageValue).password
      ) {
        router.push("/");
      }
    };

    onMounted(() => {
      setTasks();
      redirect();
    });
    return { completedCount, totalCount };
  },
});
</script>
