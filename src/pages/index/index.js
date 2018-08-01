import Taro, { Component } from '@tarojs/taro'
import { View, Text , ScrollView} from '@tarojs/components'
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

        <ScrollView className='scrollview'
          scrollX
          scrollWithAnimation
          scrollTop='0'
          style='height: 150px;width: 100%;box-sizing:border-box;white-space:nowrap'
          lowerThreshold='20'
          upperThreshold='20'
        >
          <View style='height:150px;background-color:rgb(26,173,25);width:300px;display:inline-block;'>A</View>
          <View style='height:150px;background-color:rgb(39,130,215);width:300px;display:inline-block;'>B</View>
          <View style='height:150px;background-color:rgb(241,241,241);color: #333;width:300px;display:inline-block;'>C</View>
        </ScrollView>


        <ScrollView scrollX className='sub-list'>
          <View className='sub'>111111111</View>
          <View className='sub'>222222</View>
          <View className='sub'>333333</View>
          <View className='sub'>4444444</View>
          <View className='sub'>555555</View>
          <View className='sub'>66666</View>
        </ScrollView>
      </View>
    )
  }
}

