import { Input, View } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import { getCurrentInstance, getSystemInfoSync, navigateBack } from '@tarojs/taro';
import { useState } from 'react';
import ProductItemCard from '../../../components/ProductItemCard/ProductItemCard';

import './product-list.scss';

const ProductList = () => {
  const data = JSON.parse(getCurrentInstance().router.params.data);

  const [searchValue, setSearchValue] = useState(data.searchValue || '');

  const statusBarHeight = getSystemInfoSync().statusBarHeight;

  const searchClick = () => {

  };


  return (
    <>
      <View className={'shop-search-bar'} style={{ paddingTop: (statusBarHeight * 2) + 'rpx' }}>
        <View className={'search-group'}>
          <AtIcon value={'close-circle'} onClick={() => navigateBack()} />
          <Input value={searchValue} placeholder={'搜索'} />
          <AtIcon value={'search'} onClick={searchClick} />
        </View>
        <View className={'screen-bar'}>
          <View className={'screen-bar-item active'}>推荐</View>
          <View className={'screen-bar-item'}>销量</View>
          <View className={'screen-bar-item'}>价格</View>
          <View className={'screen-bar-item'}>筛选</View>
        </View>
      </View>
      <View style={{ width: '100%', paddingTop: ((statusBarHeight + 40) * 2 + 80) + 'rpx' }} />
      <View className={'products-list'}>
        {data.productList.map((item, index) => {
          return (
            <ProductItemCard
              image={item.image}
              productTitle={item.productTitle}
              productPrice={item.productPrice}
            />
          );
        })}
      </View>
    </>
  );
};

export default ProductList;
