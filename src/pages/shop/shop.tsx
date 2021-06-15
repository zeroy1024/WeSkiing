import { Input, View, Swiper, SwiperItem, Image } from '@tarojs/components';
import './shop.scss';
import { AtDivider, AtIcon } from 'taro-ui';
import { getSystemInfoSync, navigateTo } from '@tarojs/taro';
import ShopRecommendCard from '../../components/ShopRecommendCard/ShopRecommendCard';
import ProductItemCard from '../../components/ProductItemCard/ProductItemCard';
import { IProductList, IProductSearch } from '../../interface';

const Shop = () => {
  const statusBarHeight = getSystemInfoSync().statusBarHeight;


  const productList: IProductList[] = [
    { image: '//cdn.zeroy.net/img/weapp/shop/4.png', productTitle: 'Uspayfit单板滑雪板套装', productPrice: 1799 },
    { image: '//cdn.zeroy.net/img/weapp/shop/2.png', productTitle: 'NOBADAY×零夏 滑雪单板', productPrice: 2780 },
    { image: '//cdn.zeroy.net/img/weapp/shop/3.png', productTitle: '乐凯奇专业滑雪板单板', productPrice: 2368 },
    { image: '//cdn.zeroy.net/img/weapp/shop/4.png', productTitle: 'Uspayfit单板滑雪板套装', productPrice: 1799 },
    { image: '//cdn.zeroy.net/img/weapp/shop/2.png', productTitle: 'NOBADAY×零夏 滑雪单板', productPrice: 2780 },
    { image: '//cdn.zeroy.net/img/weapp/shop/3.png', productTitle: '乐凯奇专业滑雪板单板', productPrice: 2368 },
    { image: '//cdn.zeroy.net/img/weapp/shop/4.png', productTitle: 'Uspayfit单板滑雪板套装', productPrice: 1799 },
    { image: '//cdn.zeroy.net/img/weapp/shop/2.png', productTitle: 'NOBADAY×零夏 滑雪单板', productPrice: 2780 },
    { image: '//cdn.zeroy.net/img/weapp/shop/3.png', productTitle: '乐凯奇专业滑雪板单板', productPrice: 2368 },
    { image: '//cdn.zeroy.net/img/weapp/shop/4.png', productTitle: 'Uspayfit单板滑雪板套装', productPrice: 1799 },
    { image: '//cdn.zeroy.net/img/weapp/shop/2.png', productTitle: 'NOBADAY×零夏 滑雪单板', productPrice: 2780 },
    { image: '//cdn.zeroy.net/img/weapp/shop/3.png', productTitle: '乐凯奇专业滑雪板单板', productPrice: 2368 },
    { image: '//cdn.zeroy.net/img/weapp/shop/4.png', productTitle: 'Uspayfit单板滑雪板套装', productPrice: 1799 },
    { image: '//cdn.zeroy.net/img/weapp/shop/2.png', productTitle: 'NOBADAY×零夏 滑雪单板', productPrice: 2780 },
    { image: '//cdn.zeroy.net/img/weapp/shop/3.png', productTitle: '乐凯奇专业滑雪板单板', productPrice: 2368 },
  ];


  const toProductList = (searchValue) => {
    const data: IProductSearch = {
      // id: '1',
      searchValue: searchValue,
      productList: productList,
      // author: props.author,
      // releaseTime: props.releaseTime,
      // title: props.title,
      // detail: props.detail,
      // tags: props.tags,
      // imageGroup: props.imageGroup,
    };
    navigateTo({
      url: '/pages/sub-page/product-list/product-list?data=' + JSON.stringify(data),
    });
  };

  const searchClick = () => {
    navigateTo({
      url: '/pages/sub-page/search/search',
    });
  };


  return (
    <>
      <View className={'shop-search-bar'} style={{ paddingTop: (statusBarHeight * 2) + 'rpx' }}>
        <View className={'shop-search'} onClick={searchClick}>
          <AtIcon className={'shop-search-icon'} value={'search'} size={14} />
          <Input className={'shop-search-input'} placeholder={'请输入...'} disabled />
        </View>
      </View>
      <View style={{ width: '100%', paddingTop: ((statusBarHeight + 40) * 2) + 'rpx' }} />
      <View className={'shop-content'}>
        <Swiper
          className='shop-banner'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          easingFunction='linear'
          circular
          indicatorDots
          autoplay>
          <SwiperItem>
            <Image src={'//cdn.zeroy.net/img/weapp/banner/banner.jpg'} />
          </SwiperItem>
          <SwiperItem>
            <Image src={'//cdn.zeroy.net/img/weapp/banner/banner1.jpg'} />
          </SwiperItem>
        </Swiper>
        <AtDivider />
        <View className={'shop-classification'}>
          <View className={'shop-classification-item'} onClick={() => toProductList('场地')}>
            <Image src={require('/src/assets/img/icon/ski-resort.png')} />
            场地
          </View>
          <View className={'shop-classification-item'} onClick={() => toProductList('用具')}>
            <Image src={require('/src/assets/img/icon/ski-outfit.png')} />
            用具
          </View>
          <View className={'shop-classification-item'} onClick={() => toProductList('教练')}>
            <Image src={require('/src/assets/img/icon/coach.png')} />
            教练
          </View>
          <View className={'shop-classification-item'} onClick={() => toProductList('酒店')}>
            <Image src={require('/src/assets/img/icon/hotel.png')} />
            酒店
          </View>
          <View className={'shop-classification-item'} onClick={() => toProductList('保险')}>
            <Image src={require('/src/assets/img/icon/insurance.png')} />
            保险
          </View>
        </View>
        <AtDivider />
        <View className={'shop-recommend'}>
          <View className={'title'}>推荐</View>
          <View className={'shop-recommend-content'}>
            <ShopRecommendCard />
          </View>
        </View>
        <AtDivider />
        <View className={'shop-products-list'}>
          {productList.map((item, index) => {
            return (
              <ProductItemCard
                image={item.image}
                productTitle={item.productTitle}
                productPrice={item.productPrice}
              />
            );
          })}
        </View>
      </View>
    </>
  );
};

export default Shop;
