import './CommentsItem.scss';
import { View } from '@tarojs/components';
import { AtAvatar, AtDivider } from 'taro-ui';
import { PropsWithChildren } from 'react';
import { ICommentsItemProps } from '../../interface';

const CommentsItem = (props: PropsWithChildren<ICommentsItemProps>) => {
  return (
    <View className={'comments-item'}>
      <View className={'sender-info'}>
        <AtAvatar
          className={'sender-avatar'}
          image={props.headImg ? props.headImg : null}
          text={props.headImg ? null : props.sender}
          size={'small'}
          circle />
        <View className={'sender-other'}>
          <View className={'sender-name'}>{props.sender}</View>
          <View className={'send-time'}>{props.sendTime}</View>
        </View>
      </View>
      <View className={'comments-text'}>
        {props.commentsText}
      </View>
      <AtDivider />
    </View>
  );
};

export default CommentsItem;
