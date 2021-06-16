import './TutorialVideo.scss';
import { Image, Video, View } from '@tarojs/components';
import { PropsWithChildren } from 'react';
import { ITutorialVideoProps } from '../../interface';

const TutorialVideo = (props: PropsWithChildren<ITutorialVideoProps>) => {
  return (
    <>
      <View className={'tutorial-video-group'}>
        <View className={'tutorial-video'}>
          <Video
            src={props.video}
            objectFit={'cover'}
            showFullscreenBtn={false}
            showPlayBtn={false}
            enableProgressGesture={false}
            autoplay={false}
            showMuteBtn={true}
            controls={false}
            loop
          />
        </View>
        <View className={'tutorial-video-bar'}>
          <Image src={props.image} mode={'aspectFill'} />
          <View className={'tutorial-video-info'}>
            <View className={'tutorial-video-title'}>{props.title}</View>
            <View className={'tutorial-video-time'}>{props.time}</View>
          </View>
          <View className={'tutorial-video-collection'}>
            <Image src={'https://cdn.zeroy.net/img/weapp/icon/collection.png'} />
            <View className={'collection-text'}>收藏</View>
          </View>
        </View>
      </View>
    </>
  );
};

export default TutorialVideo;
