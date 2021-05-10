import { getCurrentInstance } from '@tarojs/taro';

import './article.scss';
import { Button, Input, View } from '@tarojs/components';
import { AtAvatar, AtDivider, AtIcon } from 'taro-ui';
import { IArticleListItemProps } from '../../../interface';
import ArticleDetail from '../../../components/ArticleDetail/ArticleDetail';
import CommentsItem from '../../../components/CommentsItem/CommentsItem';

const Article = () => {
  const data = JSON.parse(getCurrentInstance().router.params.data) as IArticleListItemProps;


  return (
    <View className={'article'}>
      <ArticleDetail
        author={data.author}
        releaseTime={data.releaseTime}
        title={data.title}
        tags={data.tags ? data.tags : null}
        detail={data.detail ? data.detail : null}
        imageGroup={data.imageGroup ? data.imageGroup : null}
      />
      <AtDivider />
      <View className={'comments-content'}>
        <View className={'comments-title'}>
          全部评论
        </View>
        <View className={'comments-list'}>
          <CommentsItem
            sender={'ZeroY'}
            sendTime={'2020-09-18 20:15:00'}
            commentsText={'不错这个，在哪里呀？？'}
          />
          <CommentsItem
            sender={'SuperMan'}
            sendTime={'2020-09-18 20:15:00'}
            commentsText={'挺好的看起来'}
          />
          <CommentsItem
            sender={'Zed'}
            sendTime={'2020-09-18 20:15:00'}
            commentsText={'6666'}
          />
          <CommentsItem
            sender={'JT'}
            sendTime={'2020-09-18 20:15:00'}
            commentsText={'强啊烙铁'}
          />
        </View>
      </View>
      <View className={'send-comments'}>
        <Input className={'comments-input'} placeholder={'请输入...'} />
        <Button className={'comments-submit'}>发送</Button>
      </View>
      {/*<View className={'article-recommend'}>
        <View className={'comments-title'}>
          好文推荐
        </View>
        <ArticleDetail
          author={data.author}
          releaseTime={data.releaseTime}
          title={data.title}
          tags={data.tags ? data.tags : null}
          detail={data.detail ? data.detail : null}
          imageGroup={data.imageGroup ? data.imageGroup : null}
          pageJump
        />
      </View>*/}
    </View>
  );
};
export default Article;
