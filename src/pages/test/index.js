import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Test extends Component {
  config = {
    navigationBarTitleText: '测试'
  }


  componentWillMount () {
    console.log(this.$router.params)
   }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world 测试!</Text>
      </View>
    )
  }
}

