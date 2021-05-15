import { TabItem } from 'taro-ui/types/tabs';

export interface IArticleListItemProps {
  author: string
  releaseTime: string
  title: string
  headImg?: string
  tags?: string[]
  detail?: string
  imageGroup?: string[]
  pageJump?: boolean
}

export interface ICommentsItemProps {
  sender: string
  sendTime: string
  commentsText: string
  headImg?: string
}


export interface ITabBarProps {
  current: number
  setCurrent: Function
  tabList: TabItem[]
}

export interface ICircleItem {
  circleName: string
  about: string
  images: string
}

export interface IProductList {
  image: string
  productTitle: string
  productPrice: string | number
}

export interface IProductSearch {
  searchValue: string
  productList: IProductList[]
}
