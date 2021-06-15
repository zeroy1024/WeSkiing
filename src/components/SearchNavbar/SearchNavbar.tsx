import {Input, View} from '@tarojs/components';
import {AtTabs, AtIcon, AtTabsPane} from 'taro-ui';
import {PropsWithChildren} from 'react';

import './SearchNavbar.scss';
import {getSystemInfoSync, navigateTo} from '@tarojs/taro';
import {ITabBarProps} from '../../interface';

const SearchNavbar = (props: PropsWithChildren<ITabBarProps>) => {

  const paddingTop = getSystemInfoSync().statusBarHeight;

  const searchClick = () => {
    navigateTo({
      url: "/pages/sub-page/search/search"
    })
  };

  const switchTab = (value) => {
    props.setCurrent(value);
  };

  return (
    <>
      <View className={'navbar-search'} style={{paddingTop: (paddingTop * 2) + 'rpx'}}>
        <View className={'navbar-content'}>
          <AtIcon value={'search'} onClick={searchClick}/>
        </View>
      </View>
      <View style={{width: '100%', height: ((paddingTop + 40) * 2) + 'rpx'}}/>
      <AtTabs current={props.current} tabList={props.tabList} onClick={switchTab}>
        {props.children}
      </AtTabs>
    </>
  );
};

export default SearchNavbar;
