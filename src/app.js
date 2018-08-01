import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import Test1 from './pages/test'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/test/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: "pages/index/index",
        text: "首页"
      }, {
        pagePath: "pages/test/index",
        text: "日志"
      }]
    },
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
