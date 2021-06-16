import { Image, Input, Video, View } from '@tarojs/components';
import { AtIcon, AtTabs, AtTabsPane } from 'taro-ui';
import { getSystemInfoSync, navigateTo } from '@tarojs/taro';

import './tutorial.scss';
import { useState } from 'react';
import TutorialVideo from '../../components/TutorialVideo/TutorialVideo';
import { ITutorialVideoProps } from '../../interface';

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

  const videoList: ITutorialVideoProps[] = [
    {
      title: '新手skier初级课程',
      type: '初级',
      time: '1分钟',
      video: 'https://cdn.zeroy.net/video/ski.mp4',
      image: 'https://cdn.zeroy.net/img/weapp/banner/banner.jpg',
    },
    {
      title: '新手skier初级课程',
      type: '初级',
      time: '1分钟',
      video: 'https://cdn.zeroy.net/video/ski.mp4',
      image: 'https://cdn.zeroy.net/img/weapp/banner/banner.jpg',
    },
    {
      title: '新手skier初级课程',
      type: '初级',
      time: '1分钟',
      video: 'https://cdn.zeroy.net/video/ski.mp4',
      image: 'https://cdn.zeroy.net/img/weapp/banner/banner.jpg',
    },
    {
      title: '新手skier初级课程',
      type: '初级',
      time: '1分钟',
      video: 'https://cdn.zeroy.net/video/ski.mp4',
      image: 'https://cdn.zeroy.net/img/weapp/banner/banner.jpg',
    },
    {
      title: '新手skier初级课程',
      type: '初级',
      time: '1分钟',
      video: 'https://cdn.zeroy.net/video/ski.mp4',
      image: 'https://cdn.zeroy.net/img/weapp/banner/banner.jpg',
    },
    {
      title: '新手skier初级课程',
      type: '初级',
      time: '1分钟',
      video: 'https://cdn.zeroy.net/video/ski.mp4',
      image: 'https://cdn.zeroy.net/img/weapp/banner/banner.jpg',
    },
    {
      title: '新手skier初级课程',
      type: '初级',
      time: '1分钟',
      video: 'https://cdn.zeroy.net/video/ski.mp4',
      image: 'https://cdn.zeroy.net/img/weapp/banner/banner.jpg',
    },
    {
      title: '新手skier初级课程',
      type: '初级',
      time: '1分钟',
      video: 'https://cdn.zeroy.net/video/ski.mp4',
      image: 'https://cdn.zeroy.net/img/weapp/banner/banner.jpg',
    },
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
            <View className={'tutorial-video-list'}>
              <View className={'title'}>为你推荐</View>
              {videoList.map((item, index) => {
                return (
                  <>
                    <TutorialVideo
                      title={item.title}
                      type={item.type}
                      time={item.time}
                      video={item.video}
                      image={item.image}
                    />
                    <View className={'spacing'} />
                  </>
                );
              })}
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
