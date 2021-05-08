export default {
  pages: [
    'pages/index/index',
    'pages/personal/personal',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/index/index',
        text: '最新'
      },
      {
        pagePath: 'pages/personal/personal',
        text: '个人中心'
      },
    ]
  }
}
