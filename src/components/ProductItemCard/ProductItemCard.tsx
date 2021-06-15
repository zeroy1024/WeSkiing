import './ProductItemCard.scss';
import { Image, View } from '@tarojs/components';
import { PropsWithChildren } from 'react';
import { IProductList } from '../../interface';

const ProductItemCard = (props: PropsWithChildren<IProductList>) => {

  const toProductList = () => {
    const data = {
      id: '1',
      // author: props.author,
      // releaseTime: props.releaseTime,
      // title: props.title,
      // detail: props.detail,
      // tags: props.tags,
      // imageGroup: props.imageGroup,
    };
    /*navigateTo({
      url: '/pages/sub-page/product-list/product-list?data=' + JSON.stringify(data),
    });*/
  };

  return (
    <View className={'product-item'} onClick={toProductList}>
      <Image src={props.image} />
      <View className={'product-title'}>{props.productTitle}</View>
      <View className={'product-price'}>￥{props.productPrice}起</View>
    </View>
  );
};

export default ProductItemCard;
