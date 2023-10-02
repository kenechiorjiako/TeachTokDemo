import styled from 'styled-components/native';

import BookmarkIcon from '../assets/svgs/bookmark_icon.svg';
import BookmarkGrayIcon from '../assets/svgs/bookmark_icon_gray.svg';
import HomeIcon from '../assets/svgs/home_icon.svg';
import HomeIconGray from '../assets/svgs/home_icon_gray.svg';
import ExploreIcon from '../assets/svgs/explore_icon.svg';
import TimerIcon from '../assets/svgs/timer_icon.svg';
import TimerIconGray from '../assets/svgs/timer_icon_gray.svg';
import TimerIconGray2 from '../assets/svgs/timer_icon_gray2.svg';
import ProfileIcon from '../assets/svgs/profile_icon.svg';
import CommentIcon from '../assets/svgs/comment_icon.svg';
import ShareIcon from '../assets/svgs/share_icon.svg';
import SearchIcon from '../assets/svgs/search_icon.svg';
import LikeIcon from '../assets/svgs/like_icon.svg';
import PlaylistIcon from '../assets/svgs/playlist_icon.svg';
import NextIcon from '../assets/svgs/next_icon.svg';
import AddIcon from '../assets/svgs/add_icon.svg';
import React from 'react';


export enum IconType {
  PROFILE = 'PROFILE',
  HOME = 'HOME',
  HOME_GRAY = 'HOME_GRAY',
  DISCOVER = 'DISCOVER',
  ACTIVITY = 'ACTIVITY',
  ADD = 'ADD',
  ACTIVITY_GRAY = 'ACTIVITY_GRAY',
  ACTIVITY_GRAY2 = 'ACTIVITY_GRAY2',
  BOOKMARK = 'BOOKMARK',
  BOOKMARK_GRAY = 'BOOKMARK_GRAY',
  COMMENT = 'COMMENT',
  LIKE = 'LIKE',
  SHARE = 'SHARE',
  SEARCH = 'SEARCH',
  PLAYLIST = 'PLAYLIST',
  NEXT = 'NEXT',
}

export interface IconProps {
  size?: number;
  type: IconType;
  color?: string;
  bottom?: number;
  left?: number;
  top?: number;
  right?: number;
  vertical?: number;
  horizontal?: number;
  padding?: number;
  strokeWidth?: number;
}

export const IconContainer = styled.View<IconProps>`
  padding-bottom: ${(props: IconProps) => (props.bottom ? props.bottom : 0)}px;
  padding-top: ${(props: IconProps) => (props.top ? props.top : 0)}px;
  padding-right: ${(props: IconProps) => (props.right ? props.right : 0)}px;
  padding-left: ${(props: IconProps) => (props.left ? props.left : 0)}px;
  padding: ${(props: IconProps) => (props.padding ? props.padding : 0)}px;
  padding-vertical: ${(props: IconProps) =>
    props.vertical ? props.vertical : 0}px;
  padding-horizontal: ${(props: IconProps) =>
    props.horizontal ? props.horizontal : 0}px;
  align-items: center;
  justify-content: center;
`;

export const AppIcon = ({
  size,
  type,
  color,
  bottom,
  left,
  top,
  right,
  vertical,
  horizontal,
  padding,
  strokeWidth,
}: IconProps) => {
  const props: IconProps = {
    size: size,
    type: type,
    color: color,
    bottom: bottom,
    left: left,
    top: top,
    right: right,
    vertical: vertical,
    horizontal: horizontal,
    padding: padding,
    strokeWidth: strokeWidth,
  };
  return <IconContainer {...props}>{filterIcon(props)}</IconContainer>;
};


export const filterIcon = (props: IconProps) => {
  switch (props.type) {
    case IconType.BOOKMARK:
      return (
        <BookmarkIcon
          fill={props.color ? props.color : 'black'}
          stroke={props.color ? props.color : 'black'}
          width={props.size ? props.size : 20}
          height={props.size ? props.size : 20}
        />
      );
    case IconType.ADD:
      return (
        <AddIcon
          fill={props.color ? props.color : 'black'}
          stroke={props.color ? props.color : 'black'}
          width={props.size ? props.size : 20}
          height={props.size ? props.size : 20}
        />
      );
    case IconType.BOOKMARK_GRAY:
      return (
        <BookmarkGrayIcon
          fill={props.color ? props.color : 'black'}
          stroke={props.color ? props.color : 'black'}
          width={props.size ? props.size : 20}
          height={props.size ? props.size : 20}
        />
      );
    case IconType.LIKE:
      return (
        <LikeIcon
          fill={props.color ? props.color : 'black'}
          stroke={props.color ? props.color : 'black'}
          width={props.size ? props.size : 20}
          height={props.size ? props.size : 20}
        />
      );
    case IconType.HOME:
      return (
        <HomeIcon
          fill={props.color ? props.color : 'black'}
          stroke={props.color ? props.color : 'black'}
          width={props.size ? props.size : 20}
          height={props.size ? props.size : 20}
        />
      );
    case IconType.HOME_GRAY:
      return (
        <HomeIconGray
          fill={props.color ? props.color : 'black'}
          stroke={props.color ? props.color : 'black'}
          width={props.size ? props.size : 20}
          height={props.size ? props.size : 20}
        />
      );
    case IconType.ACTIVITY:
      return (
        <TimerIcon
          fill={props.color ? props.color : 'black'}
          stroke={props.color ? props.color : 'black'}
          width={props.size ? props.size : 20}
          height={props.size ? props.size : 20}
        />
      );
    case IconType.ACTIVITY_GRAY:
      return (
        <TimerIconGray
          fill={props.color ? props.color : 'black'}
          stroke={props.color ? props.color : 'black'}
          width={props.size ? props.size : 20}
          height={props.size ? props.size : 20}
        />
      );
    case IconType.ACTIVITY_GRAY2:
      return (
        <TimerIconGray2
          fill={props.color ? props.color : 'black'}
          stroke={props.color ? props.color : 'black'}
          width={props.size ? props.size : 20}
          height={props.size ? props.size : 20}
        />
      );
    case IconType.PROFILE:
      return (
        <ProfileIcon
          fill={props.color ? props.color : 'black'}
          stroke={props.color ? props.color : 'black'}
          width={props.size ? props.size : 20}
          height={props.size ? props.size : 20}
        />
      );
    case IconType.COMMENT:
      return (
        <CommentIcon
          fill={props.color ? props.color : 'black'}
          stroke={props.color ? props.color : 'black'}
          width={props.size ? props.size : 20}
          height={props.size ? props.size : 20}
        />
      );
    case IconType.SHARE:
      return (
        <ShareIcon
          fill={props.color ? props.color : 'black'}
          stroke={props.color ? props.color : 'black'}
          width={props.size ? props.size : 20}
          height={props.size ? props.size : 20}
        />
      );
    case IconType.DISCOVER:
      return (
        <ExploreIcon
          fill={props.color ? props.color : 'black'}
          stroke={props.color ? props.color : 'black'}
          width={props.size ? props.size : 20}
          height={props.size ? props.size : 20}
        />
      );
    case IconType.SEARCH:
      return (
        <SearchIcon
          fill={props.color ? props.color : 'black'}
          stroke={props.color ? props.color : 'black'}
          width={props.size ? props.size : 20}
          height={props.size ? props.size : 20}
        />
      );
    case IconType.PLAYLIST:
      return (
        <PlaylistIcon
          fill={props.color ? props.color : 'white'}
          width={props.size ? props.size : 20}
          height={props.size ? props.size : 20}
        />
      );
    case IconType.NEXT:
      return (
        <NextIcon
          fill={props.color ? props.color : 'white'}
          width={props.size ? props.size : 20}
          height={props.size ? props.size : 20}
        />
      );
    default:
      return (
        <ExploreIcon
          fill={props.color ? props.color : 'black'}
          stroke={props.color ? props.color : 'black'}
          width={props.size ? props.size : 20}
          height={props.size ? props.size : 20}
        />
      );
  }
};