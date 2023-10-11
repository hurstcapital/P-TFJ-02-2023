import { shallowMount } from "@vue/test-utils";
import BaseInputVue from "@/components/common/BaseInput.vue";

describe("BaseInput.vue", () => {
  it("should renders placeholder", () => {
    const placeHolder = "Place holder example";

    const wrapper = shallowMount(BaseInputVue, {
      props: {
        placeHolder: placeHolder,
      },
    });

    expect(wrapper.find("input").attributes("placeholder")).toMatch(
      placeHolder
    );
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should update v-model", async () => {
    const text = "text example";

    const wrapper = shallowMount(BaseInputVue, {
      props: {
        modelValue: "initialText",
        "onUpdate:modelValue": (e: Event) =>
          wrapper.setProps({ modelValue: e }),
      },
    });

    await wrapper.find("input").setValue(text);

    expect(wrapper.props("modelValue")).toBe(text);
    expect(wrapper.element).toMatchSnapshot();
  });
});
