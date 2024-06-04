import "jest";
import { shallowMount } from "@vue/test-utils";
import WeatherView from "../weatherCard/WeatherCard.vue";

describe("WeatherView.vue", () => {
  test("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(WeatherView, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
