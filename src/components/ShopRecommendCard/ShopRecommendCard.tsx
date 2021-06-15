import { Image, View } from '@tarojs/components';

import './ShopRecommendCard.scss';

const ShopRecommendCard = () => {
  return (
    <View className={'shop-recommend-card'}>
      <View className={'shop-recommend-left'} style={{ backgroundImage: 'url(//cdn.zeroy.net/img/weapp/shop/1.jpg)' }}>
        <View className={'left-content'}>
          <View className={'left-title'}>
            万龙国际滑雪场
          </View>
          <View className={'left-text'}>
            <View>双人套餐 +送保险</View>
            <View className={'price'}>￥879起</View>
          </View>
        </View>
      </View>
      <View className={'shop-recommend-right'}>
        <View
          className={'shop-recommend-right-item'}
          style={{ backgroundColor: '#E2EEFF' }}>
          <View className={'right-content'}>
            <View className={'right-text'}>
              <View className={'text'}>乐凯奇专业滑雪板</View>
              <View className={'price'}>￥2368起</View>
            </View>
            <Image src={'//cdn.zeroy.net/img/weapp/shop/2.png'} className={'right-img'} />
          </View>
        </View>
        <View
          className={'shop-recommend-right-item'}
          style={{ backgroundColor: '#F3F1FF' }}>
          <View className={'right-content'}>
            <View className={'right-text'}>
              <View className={'text'}>乐凯奇专业滑雪板</View>
              <View className={'price'}>￥2368起</View>
            </View>
            <Image src={'//cdn.zeroy.net/img/weapp/shop/3.png'} className={'right-img'} />
          </View>
        </View>
        <View
          className={'shop-recommend-right-item'}
          style={{ backgroundColor: '#FFF2F2' }}>
          <View className={'right-content'}>
            <View className={'right-text'}>
              <View className={'text'}>乐凯奇专业滑雪板</View>
              <View className={'price'}>￥2368起</View>
            </View>
            <Image src={'//cdn.zeroy.net/img/weapp/shop/4.png'} className={'right-img'} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ShopRecommendCard;
