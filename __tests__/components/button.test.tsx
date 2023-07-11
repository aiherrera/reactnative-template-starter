import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'
import MyButton from '../../src/components/button'

describe('<MyButton />', () => {
  it('should render the button text', () => {
    const { getByText } = render(<MyButton text="Press Me" />)

    const label = getByText('Press Me')
    expect(label).toBeTruthy()
  })
})
