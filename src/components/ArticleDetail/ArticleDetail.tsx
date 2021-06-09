import {Image, View} from '@tarojs/components';

import './ArticleDetail.scss';
import {AtAvatar, AtDivider, AtIcon} from 'taro-ui';
import {PropsWithChildren} from 'react';

import {navigateTo} from '@tarojs/taro';
import {IArticleListItemProps} from '../../interface';


const ArticleDetail = (props: PropsWithChildren<IArticleListItemProps>) => {

  const articleDetails = () => {
    if (props.pageJump) {
      const data = {
        id: '1',
        author: props.author,
        releaseTime: props.releaseTime,
        title: props.title,
        detail: props.detail,
        tags: props.tags,
        imageGroup: props.imageGroup,
      };
      navigateTo({
        url: '/pages/sub-page/article/article?data=' + JSON.stringify(data),
      });
    }
  };

  return (
    <View className={'article-detail'}>
      <View className={'author-info'}>
        <AtAvatar
          className={'author-avatar'}
          image={'//cdn.zeroy.net/img/weapp/article/head/head.png'}
          size={'small'}
          circle/>
        <View className={'author-other'}>
          <View className={'author-name'}>{props.author}</View>
          <View className={'release-time'}>{props.releaseTime}</View>
        </View>
      </View>
      <View className={'article-content'} onClick={articleDetails}>
        <View className={'article-title'}>{props.title}</View>
        <View className={'article-detail'}>
          {props.detail}
        </View>
        <View className={'article-img-group'}>
          {props.imageGroup.map((item, index) => {
            return (
              <Image src={item} mode={"aspectFill"} className={'article-img'}/>
            );
          })}
        </View>
      </View>
      <View className={'article-footer'}>
        <View className={'article-topic'}>
          {props.tags.map((item, index) => {
            return (
              <View className={'article-topic-item'}>
                <AtIcon value={'tag'} color={'#1E90FF'} size={'12px'}/> {item}
              </View>
            );
          })}
        </View>
        <View className={'article-toolbar'}>
          <View className={'article-watch'} onClick={articleDetails}>
            <AtIcon value={'eye'} color={'#8a8a8a'} size={'16px'}/> 30
          </View>
          <View className={'article-comments'} onClick={articleDetails}>
            <AtIcon value={'message'} color={'#8a8a8a'} size={'16px'}/> 30
          </View>
          <View className={'article-heart'}>
            <AtIcon value={'heart'} color={'#8a8a8a'} size={'16px'}/> 30
          </View>
        </View>
      </View>
    </View>
  );
};

export default ArticleDetail;
