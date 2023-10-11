import { shallowMount } from "@vue/test-utils";
import BaseButton from "@/components/common/BaseButton.vue";

describe("BaseButton.vue", () => {
  it("should render slot", () => {
    const slot = "slot example";

    const wrapper = shallowMount(BaseButton, {
      slots: {
        default: slot,
      },
    });

    const textSlot = wrapper.find("button").text();

    expect(textSlot).toBe(slot);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("shloud be disabled", () => {
    const wrapper = shallowMount(BaseButton, {
      props: {
        isDisabled: true,
      },
    });

    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
    expect(wrapper.element).toMatchSnapshot();
  });
});
