import {useState} from "react";
import {switchTab} from '@tarojs/taro'
import {AtTabBar} from "taro-ui"

import "./index.scss"


const CustomTabBar = () => {
  const [current, setCurrent] = useState(0)

  const handleClick = (index) => {
    setCurrent(index)
    switch (index) {
      case 0:
        switchTab({url: "/pages/index/index"}).then()
        break;
      case 1:
        break;
      case 2:
        switchTab({url: "/pages/personal/personal"}).then()
        break;
    }
  }

  const tabList = [
    {title: '自定义图标', iconType: 'clock'},
    {title: '拍照', iconType: 'camera'},
    {title: '文件夹', iconType: 'folder'}
  ]

  return (
    <AtTabBar
      current={current}
      tabList={tabList}
      onClick={handleClick}
    />
  )
}

export default CustomTabBar
