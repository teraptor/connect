import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '@/components/ui/Button/Button.vue'

describe('Button.spec.ts', () => {
  test('Show test text inside', () => {
    const wrapper = mount(Button)
    expect(wrapper.text()).toBe('Test Ant Design Button')
  })
})
