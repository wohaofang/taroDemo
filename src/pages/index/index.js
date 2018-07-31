import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  Click1 = ()=>{
    console.log(111)
  Taro.navigateTo({
      url: '/pages/test/index?name=dingming&age=24'
    })
}

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text onClick={this.Click1}>Hello world!</Text>
      </View>
    )
  }
}

