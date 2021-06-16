import { Input, View } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import { useState } from 'react';
import { getSystemInfoSync, navigateBack } from '@tarojs/taro';

import './search.scss';

const Search = () => {
  const paddingTop = getSystemInfoSync().statusBarHeight;
  const [state, setState] = useState('');

  const back = () => {
    navigateBack();
  };

  const searchClick = () => {

  };

  return (
    <>
      <View style={{ width: '100%', height: (paddingTop * 2) + 'rpx' }} />
      <View className={'search'}>
        <View className={'search-group'}>
          <AtIcon value={'close-circle'} onClick={back} />
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
      </View>
    </>
  );
};

export default Search;
