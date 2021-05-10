import { Image, Swiper, SwiperItem, View } from '@tarojs/components';
import ArticleDetail from '../../components/ArticleDetail/ArticleDetail';

import './circle.scss';
import SearchNavbar from '../../components/SearchNavbar/SearchNavbar';
import { AtDivider, AtTabsPane } from 'taro-ui';
import { useState } from 'react';
import { IArticleListItemProps, ICircleItem } from '../../interface';

const Circle = () => {
  const [current, setCurrent] = useState(0);
  const tabList = [
    { title: '滑雪圈' },
    { title: '摄影圈' },
    { title: '更多' },
  ];

  const c1: IArticleListItemProps[] = [
    {
      author: 'ZeroY',
      releaseTime: '2021-05-01 19:20:00',
      title: 'EasyTitle',
      tags: ['滑雪', '摄影'],
      detail: 'Very happy travel',
    },
    {
      author: 'ZeroY',
      releaseTime: '2021-05-01 19:20:00',
      title: 'EasyTitle',
      tags: ['滑雪', '摄影'],
      detail: 'Very happy travel',
    },
    {
      author: 'ZeroY',
      releaseTime: '2021-05-01 19:20:00',
      title: 'EasyTitle',
      tags: ['滑雪', '摄影'],
      detail: 'Very happy travel',
    },
    {
      author: 'ZeroY',
      releaseTime: '2021-05-01 19:20:00',
      title: 'EasyTitle',
      tags: ['滑雪', '摄影'],
      detail: 'Very happy travel',
    },
    {
      author: 'ZeroY',
      releaseTime: '2021-05-01 19:20:00',
      title: 'EasyTitle',
      tags: ['滑雪', '摄影'],
      detail: 'Very happy travel',
    },
    {
      author: 'ZeroY',
      releaseTime: '2021-05-01 19:20:00',
      title: 'EasyTitle',
      tags: ['滑雪', '摄影'],
      detail: 'Very happy travel',
    },
  ];
  const c2: IArticleListItemProps[] = [
    {
      author: 'ZeroY',
      releaseTime: '2019-01-01 19:20:00',
      title: 'EasyTitle',
      tags: ['好物推荐', '种草'],
      detail: '这玩意真的是太棒了',
    },
    {
      author: 'ZeroY',
      releaseTime: '2021-05-01 19:20:00',
      title: 'EasyTitle',
      tags: ['好物推荐', '种草'],
      detail: '这玩意真的是太棒了',
    },
    {
      author: 'ZeroY',
      releaseTime: '2020-03-01 19:20:00',
      title: 'EasyTitle',
      tags: ['好物推荐', '种草'],
    },
    {
      author: 'ZeroY',
      releaseTime: '2021-02-01 19:20:00',
      title: 'EasyTitle',
    },
    {
      author: 'ZeroY',
      releaseTime: '2020-08-01 19:20:00',
      title: 'EasyTitle',
      tags: ['好物推荐', '种草'],
      detail: '这玩意真的是太棒了',
    },
  ];

  const circleList: ICircleItem[] = [
    { circleName: '交友圈', about: '交友圈', images: '//cdn.zeroy.net/img/weapp/banner/banner.jpg' },
    { circleName: '约拍圈', about: '约拍圈', images: '//cdn.zeroy.net/img/weapp/banner/banner1.jpg' },
    { circleName: '约滑圈', about: '约滑圈', images: '//cdn.zeroy.net/img/weapp/banner/banner.jpg' },
    { circleName: '约拍圈', about: '约拍圈', images: '//cdn.zeroy.net/img/weapp/banner/banner1.jpg' },
    { circleName: '约滑圈', about: '约滑圈', images: '//cdn.zeroy.net/img/weapp/banner/banner.jpg' },
    { circleName: '约拍圈', about: '约拍圈', images: '//cdn.zeroy.net/img/weapp/banner/banner1.jpg' },
    { circleName: '约滑圈', about: '约滑圈', images: '//cdn.zeroy.net/img/weapp/banner/banner.jpg' },
    { circleName: '约拍圈', about: '约拍圈', images: '//cdn.zeroy.net/img/weapp/banner/banner1.jpg' },
    { circleName: '约滑圈', about: '约滑圈', images: '//cdn.zeroy.net/img/weapp/banner/banner.jpg' },
    { circleName: '约拍圈', about: '约拍圈', images: '//cdn.zeroy.net/img/weapp/banner/banner1.jpg' },
    { circleName: '约滑圈', about: '约滑圈', images: '//cdn.zeroy.net/img/weapp/banner/banner.jpg' },
  ];

  return (
    <>
      <SearchNavbar
        current={current}
        setCurrent={setCurrent}
        tabList={tabList}
      >
        <AtTabsPane current={current} index={0}>
          <View className={'circle'}>
            {c1.map((item, index) => {
              return (
                <>
                  <ArticleDetail
                    author={item.author}
                    releaseTime={item.releaseTime}
                    title={item.title}
                    tags={(item.tags ? item.tags : [])}
                    detail={(item.detail ? item.detail : null)}
                    imageGroup={(item.imageGroup ? item.imageGroup : [])}
                    pageJump
                  />
                  <AtDivider />
                </>
              );
            })}
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View className={'circle'}>
            {c2.map((item, index) => {
              return (
                <>
                  <ArticleDetail
                    author={item.author}
                    releaseTime={item.releaseTime}
                    title={item.title}
                    tags={(item.tags ? item.tags : [])}
                    detail={(item.detail ? item.detail : null)}
                    imageGroup={(item.imageGroup ? item.imageGroup : [])}
                    pageJump
                  />
                  <AtDivider />
                </>
              );
            })}
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View className={'circle'}>
            {circleList.map((item, index) => {
              return (
                <View className={'circle-item'} style={{ backgroundImage: 'url(' + item.images + ')' }}>
                  <View className={'circle-content'}>
                    <View className={'circle-text'}>
                      <View className={'circle-name'}>{item.circleName}</View>
                      <View className={'circle-about'}>{item.about}</View>
                    </View>
                    <View className={'circle-add'}>添加</View>
                  </View>
                </View>
              );
            })}
          </View>
        </AtTabsPane>
      </SearchNavbar>
    </>
  );
};

export default Circle;
