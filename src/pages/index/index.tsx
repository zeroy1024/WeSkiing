import { View,  Swiper, SwiperItem, Image } from '@tarojs/components';

import './index.scss';
import ArticleDetail from '../../components/ArticleDetail/ArticleDetail';
import { AtDivider, AtTabs, AtTabsPane } from 'taro-ui';
import SearchNavbar from '../../components/SearchNavbar/SearchNavbar';
import { useState } from 'react';
import { IArticleListItemProps } from '../../interface';

const Index = () => {
  const [current, setCurrent] = useState(0);
  const tabList = [
    { title: '推荐' },
    { title: '关注' },
  ];

  const recommendArticle: IArticleListItemProps[] = [
    {
      author: 'ZeroY',
      releaseTime: '2021-05-01 19:20:00',
      title: 'EasyTitle',
      tags: ['滑雪', '摄影'],
      detail: 'Very happy travel',
      imageGroup: [
        '//cdn.zeroy.net/img/weapp/banner/banner.jpg',
        '//cdn.zeroy.net/img/weapp/banner/banner1.jpg',
        '//cdn.zeroy.net/img/weapp/banner/banner.jpg',
        '//cdn.zeroy.net/img/weapp/banner/banner1.jpg',
        '//cdn.zeroy.net/img/weapp/banner/banner.jpg',
        '//cdn.zeroy.net/img/weapp/banner/banner1.jpg',
      ],
    },
    {
      author: 'ZeroY',
      releaseTime: '2021-05-01 19:20:00',
      title: 'EasyTitle',
      tags: ['滑雪', '摄影'],
      detail: 'Very happy travel',
      imageGroup: [
        '//cdn.zeroy.net/img/weapp/banner/banner.jpg',
        '//cdn.zeroy.net/img/weapp/banner/banner1.jpg',
      ],
    },
    {
      author: 'ZeroY',
      releaseTime: '2021-05-01 19:20:00',
      title: 'EasyTitle',
      tags: ['滑雪', '摄影'],
      detail: 'Very happy travel',
      imageGroup: [
        '//cdn.zeroy.net/img/weapp/banner/banner.jpg',
        '//cdn.zeroy.net/img/weapp/banner/banner1.jpg',
      ],
    },
    {
      author: 'ZeroY',
      releaseTime: '2021-05-01 19:20:00',
      title: 'EasyTitle',
      tags: ['滑雪', '摄影'],
      detail: 'Very happy travel',
      imageGroup: [
        '//cdn.zeroy.net/img/weapp/banner/banner.jpg',
        '//cdn.zeroy.net/img/weapp/banner/banner1.jpg',
      ],
    },
    {
      author: 'ZeroY',
      releaseTime: '2021-05-01 19:20:00',
      title: 'EasyTitle',
      tags: ['滑雪', '摄影'],
      detail: 'Very happy travel',
      imageGroup: [
        '//cdn.zeroy.net/img/weapp/banner/banner.jpg',
        '//cdn.zeroy.net/img/weapp/banner/banner1.jpg',
      ],
    },
    {
      author: 'ZeroY',
      releaseTime: '2021-05-01 19:20:00',
      title: 'EasyTitle',
      tags: ['滑雪', '摄影'],
      detail: 'Very happy travel',
      imageGroup: [
        '//cdn.zeroy.net/img/weapp/banner/banner.jpg',
        '//cdn.zeroy.net/img/weapp/banner/banner1.jpg',
      ],
    },
  ];
  const followArticle: IArticleListItemProps[] = [
    {
      author: 'ZeroY',
      releaseTime: '2019-01-01 19:20:00',
      title: 'EasyTitle',
      tags: ['好物推荐', '种草'],
      detail: '这玩意真的是太棒了',
      imageGroup: [
        '//cdn.zeroy.net/img/weapp/banner/banner.jpg',
        '//cdn.zeroy.net/img/weapp/banner/banner1.jpg',
      ],
    },
    {
      author: 'ZeroY',
      releaseTime: '2021-05-01 19:20:00',
      title: 'EasyTitle',
      tags: ['好物推荐', '种草'],
      detail: '这玩意真的是太棒了',
      imageGroup: [
        '//cdn.zeroy.net/img/weapp/banner/banner.jpg',
        '//cdn.zeroy.net/img/weapp/banner/banner1.jpg',
      ],
    },
    {
      author: 'ZeroY',
      releaseTime: '2020-03-01 19:20:00',
      title: 'EasyTitle',
      tags: ['好物推荐', '种草'],
      imageGroup: [
        '//cdn.zeroy.net/img/weapp/banner/banner.jpg',
        '//cdn.zeroy.net/img/weapp/banner/banner1.jpg',
      ],
    },
    {
      author: 'ZeroY',
      releaseTime: '2021-02-01 19:20:00',
      title: 'EasyTitle',
      imageGroup: [
        '//cdn.zeroy.net/img/weapp/banner/banner.jpg',
        '//cdn.zeroy.net/img/weapp/banner/banner1.jpg',
      ],
    },
    {
      author: 'ZeroY',
      releaseTime: '2020-08-01 19:20:00',
      title: 'EasyTitle',
      tags: ['好物推荐', '种草'],
      detail: '这玩意真的是太棒了',
      imageGroup: [
        '//cdn.zeroy.net/img/weapp/banner/banner.jpg',
        '//cdn.zeroy.net/img/weapp/banner/banner1.jpg',
      ],
    },
  ];

  return (
    <>
      <SearchNavbar
        current={current}
        setCurrent={setCurrent}
        tabList={tabList}
      >
        <AtTabsPane current={current} index={0}>
          <View className='index'>
            <Swiper
              className='swiper-banner'
              indicatorColor='#999'
              indicatorActiveColor='#333'
              easingFunction='linear'
              circular
              indicatorDots
              autoplay
            >
              <SwiperItem className='swiper-item'>
                <Image src={'//cdn.zeroy.net/img/weapp/banner/banner.jpg'} style={{ width: '100%' }} />
              </SwiperItem>
              <SwiperItem className='swiper-item'>
                <Image src={'//cdn.zeroy.net/img/weapp/banner/banner1.jpg'} style={{ width: '100%' }} />
              </SwiperItem>
            </Swiper>
            <AtDivider />
            <View className={'article-list'}>
              {recommendArticle.map((item, index) => {
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
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View className='index'>
            <View className={'article-list'}>
              {followArticle.map((item, index) => {
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
          </View>
        </AtTabsPane>
      </SearchNavbar>
    </>
  );
};

export default Index;
