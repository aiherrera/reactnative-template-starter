import React, { FC } from 'react'
import { TouchableOpacity, Text } from 'react-native'

interface LinkProps {
  text?: string
}

const Link: FC<LinkProps> = ({ text = 'Go to' }) => {
  return (
    <TouchableOpacity>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default Link