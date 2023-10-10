import { shallowMount } from "@vue/test-utils";
import BaseInputCheckBox from "@/components/common/BaseInputCheckBox.vue";

describe("BaseInputCheckBox.vue", () => {
  it("should renders checked", () => {
    const wrapper = shallowMount(BaseInputCheckBox, {
      props: {
        checked: false,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
