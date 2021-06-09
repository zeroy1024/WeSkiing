import { Image, Text, View } from '@tarojs/components';
import './me.scss';
import { getSystemInfoSync } from '@tarojs/taro';
import { AtAvatar, AtDivider } from 'taro-ui';

const Me = () => {
  const statusBarHeight = getSystemInfoSync().statusBarHeight;

  return (
    <>
      <View style={{ width: '100%', paddingTop: ((statusBarHeight + 40) * 2) + 'rpx' }} />
      <View className='personal'>
        <View className={'personal-info'}>
          <AtAvatar text={'ZeroY'} circle image='//cdn.zeroy.net/img/weapp/article/head/head.png' size={'large'} />
          ZeroY
        </View>
        <View className={'personal-detail'}>
          <View className={'personal-detail-item'}>
            <Image className={'img'} src={'//cdn.zeroy.net/img/weapp/icon/vip.png'} />
            <View className={'title'}>会员</View>
          </View>
          <View className={'personal-detail-item'}>
            <Image className={'img'} src={'//cdn.zeroy.net/img/weapp/icon/red_envelope.png'} />
            <View className={'title'}>红包</View>
          </View>
          <View className={'personal-detail-item'}>
            <Image className={'img'} src={'//cdn.zeroy.net/img/weapp/icon/coupon.png'} />
            <View className={'title'}>优惠券</View>
          </View>
          <View className={'personal-detail-item'}>
            <Image className={'img'} src={'//cdn.zeroy.net/img/weapp/icon/wallet.png'} />
            <View className={'title'}>钱包</View>
          </View>
        </View>
        <AtDivider />
        <View className={'other-list'}>
          <View className={'other-list-item'}>
            <View className={'left'}>
              <Image src={'//cdn.zeroy.net/img/weapp/icon/order.png'} /> 我的订单
            </View>
            <View className={'right'}>
              <Image src={'//cdn.zeroy.net/img/weapp/icon/arrow-right.png'} />
            </View>
          </View>
          <View className={'other-list-item'}>
            <View className={'left'}>
              <Image src={'//cdn.zeroy.net/img/weapp/icon/insurance.png'} /> 我的保险
            </View>
            <View className={'right'}>
              <Image src={'//cdn.zeroy.net/img/weapp/icon/arrow-right.png'} />
            </View>
          </View>
          <View className={'other-list-item'}>
            <View className={'left'}>
              <Image src={'//cdn.zeroy.net/img/weapp/icon/settings.png'} /> 设置
            </View>
            <View className={'right'}>
              <Image src={'//cdn.zeroy.net/img/weapp/icon/arrow-right.png'} />
            </View>
          </View>
        </View>
      </View>
    </>


  );
};

export default Me;
