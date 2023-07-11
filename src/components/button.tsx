import React, { FC } from 'react'
import { TouchableOpacity, Text } from 'react-native'

interface MyButtonProps {
  text?: string
}

const MyButton: FC<MyButtonProps> = ({ text = 'Press Me' }) => {
  return (
    <TouchableOpacity>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default MyButton
