import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('ProfileStatuss component:', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe('SUBSCRIBE TO BASIC')
  })

  test('after creation <span> should be displayed', () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />)
    const instance = component.root
    let span = instance.findByType('span')
    expect(span).not.toBeNull()
  })

  test("after creation <span> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />)
    const instance = component.root

    expect(() => {
      instance.findByType('input')
    }).toThrow()
  })

  test('after creation <span> should contains correct status', () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />)
    const root = component.root
    let span = root.findByType('span')
    expect(span.children[0]).toBe('SUBSCRIBE TO BASIC')
  })

  test('input should be displayed in editMode instead of span', () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />)
    const root = component.root
    let span = root.findByType('span')
    span.props.onDoubleClick()
    let input = root.findByType('input')
    expect(input.props.value).toBe('SUBSCRIBE TO BASIC')
  })
})
