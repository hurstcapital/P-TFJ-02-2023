import { shallowMount } from "@vue/test-utils";
import TaskItem from "@/components/TaskItem.vue";

const description = "description example";
const id = "123";

const optionsWrapper = (isComplete = false) => {
  return {
    stubs: ["baseinput-check-box", "base-button"],
    props: {
      description: description,
      id: id,
      isComplete: isComplete,
    },
  };
};

describe("TaskItem.vue", () => {
  it("should renders a description", () => {
    const description = "description example";

    const wrapper = shallowMount(TaskItem, {
      ...optionsWrapper(),
    });

    expect(wrapper.find("h4").text()).toMatch(description);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should be completed", async () => {
    const wrapper = shallowMount(TaskItem, {
      ...optionsWrapper(true),
    });

    expect(wrapper.find("h4").classes()).toContain("line-through");
    expect(wrapper.find(".border-green-500").exists()).toBeTruthy();

    expect(wrapper.element).toMatchSnapshot();
  });
});
