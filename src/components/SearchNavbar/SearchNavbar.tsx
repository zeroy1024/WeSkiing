import { Input, View } from '@tarojs/components';
import { AtTabs, AtDrawer, AtIcon, AtTabsPane } from 'taro-ui';
import { PropsWithChildren, useState } from 'react';

import './SearchNavbar.scss';
import { getSystemInfoSync, hideTabBar, showTabBar } from '@tarojs/taro';
import { ITabBarProps } from '../../interface';

const SearchNavbar = (props: PropsWithChildren<ITabBarProps>) => {
  const [state, setState] = useState('');
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);

  const paddingTop = getSystemInfoSync().statusBarHeight;

  const textChange = (v) => {
    console.log(v);
  };

  const searchClick = () => {
    setShow(true);
    hideTabBar();
  };

  const closeSearch = () => {
    setShow(false);
    showTabBar();
  };

  const switchTab = (value) => {
    props.setCurrent(value);
  };

  return (
    <>
      <View className={'navbar-search'} style={{ paddingTop: (paddingTop * 2) + 'rpx' }}>
        <View className={'navbar-content'}>
          <AtIcon value={'search'} onClick={searchClick} />
        </View>
      </View>
      <AtDrawer
        show={show}
        width={'100%'}
        right
        mask
      >
        <View style={{ width: '100%', height: (paddingTop * 2) + 'rpx' }} />
        <View className={'search-group'}>
          <AtIcon value={'close-circle'} onClick={closeSearch} />
          <Input value={state} placeholder={'搜索'} />
          <AtIcon value={'search'} onClick={searchClick} />
        </View>
        <View className={'hot-search'}>
          <View className={'hot-search-title'}>热门搜索</View>
          <View className={'hot-search-list'}>
            <View className={'hot-search-item'}>滑雪场</View>
            <View className={'hot-search-item'}>套餐</View>
            <View className={'hot-search-item'}>教练</View>
            <View className={'hot-search-item'}>雪景</View>
            <View className={'hot-search-item'}>滑雪场哪个好</View>
          </View>
        </View>
      </AtDrawer>
      <View style={{ width: '100%', height: ((paddingTop + 40) * 2) + 'rpx' }} />
      <AtTabs current={props.current} tabList={props.tabList} onClick={switchTab}>
        {props.children}
      </AtTabs>
    </>
  );
};

export default SearchNavbar;
