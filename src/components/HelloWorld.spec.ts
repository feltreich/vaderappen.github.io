import { mount } from '@vue/test-utils';
import { describe, expect, test } from '@jest/globals';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders the correct message', () => {
    const wrapper = mount(HelloWorld);
    const textH1 = wrapper.find('h1');
    expect(textH1.text).toContain('Hello World');
  });
});