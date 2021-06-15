import { Image, Input, View } from '@tarojs/components';
import { AtIcon, AtTabs, AtTabsPane } from 'taro-ui';
import { getSystemInfoSync, navigateTo } from '@tarojs/taro';

import './tutorial.scss';
import { useState } from 'react';

const Tutorial = () => {
  const statusBarHeight = getSystemInfoSync().statusBarHeight;
  const searchClick = () => {
    navigateTo({
      url: '/pages/sub-page/search/search',
    });
  };

  const [current, setCurrent] = useState(0);
  const tabList = [
    { title: '推荐' },
    { title: '会员精选' },
  ];

  return (
    <>
      <View className={'shop-search-bar'} style={{ paddingTop: (statusBarHeight * 2) + 'rpx' }}>
        <View className={'shop-search'} onClick={searchClick}>
          <AtIcon className={'shop-search-icon'} value={'search'} size={14} />
          <Input className={'shop-search-input'} placeholder={'请输入...'} disabled />
        </View>
      </View>
      <View style={{ width: '100%', paddingTop: ((statusBarHeight + 40) * 2) + 'rpx' }} />
      <AtTabs current={current} tabList={tabList} onClick={(value) => setCurrent(value)}>
        <AtTabsPane current={current} index={0}>
          <View className={'tutorial'}>
            <View className={'tutorial-items'}>
              <View className={'tutorial-item'}>
                <Image mode={'heightFix'} src={'//cdn.zeroy.net/img/weapp/icon/course-advanc.png'} />
                进阶课
              </View>
              <View className={'tutorial-item'}>
                <Image mode={'heightFix'} src={'//cdn.zeroy.net/img/weapp/icon/course-live.png'} />
                直播课
              </View>
              <View className={'tutorial-item'}>
                <Image mode={'heightFix'} src={'//cdn.zeroy.net/img/weapp/icon/course-teacher.png'} />
                教练
              </View>
              <View className={'tutorial-item'}>
                <Image mode={'heightFix'} src={'//cdn.zeroy.net/img/weapp/icon/course-shop.png'} />
                商城
              </View>
            </View>
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View className={'tutorial'}>

          </View>
        </AtTabsPane>
      </AtTabs>
    </>
  );
};
export default Tutorial;
