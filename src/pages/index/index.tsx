import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index' bg="#333" p="x-6 y-10" w100 h200>
      <Text>Hello world!</Text>
    </View>
  )
}
