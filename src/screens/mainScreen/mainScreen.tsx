import React from 'react';
import {Pressable, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './mainScreenTabs/HomeTab/home.tab';
import DiscoverScreen from './mainScreenTabs/discover.tab';
import ActivityScreen from './mainScreenTabs/activity.tab';
import BookmarkScreen from './mainScreenTabs/bookmark.tab';
import {TAB_BAR_HEIGHT, TAB_ICON_SIZE, styles} from './main.screen.styles';
import {AppIcon, IconType} from '../../shared/icons';
import {AppText, TextSize} from '../../shared/appText';
import {Colors} from '../../util/colors.util';
import ProfileScreen from './mainScreenTabs/profile.tab';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: '#000',
    height: TAB_BAR_HEIGHT,
  },
  headerShown: false,
  tabBarShowLabel: true,
};

enum TabRoutes {
  HOME = 'Home',
  DISCOVER = 'Discover',
  ACTIVITY = 'Activity',
  BOOKMARKS = 'Bookmarks',
  PROFILE = 'Profile',
}

const renderTabIcon = (label: string, isFocused: boolean): JSX.Element => {
  switch (label) {
    case TabRoutes.HOME:
      return !isFocused ? (
        <AppIcon size={TAB_ICON_SIZE} type={IconType.HOME_GRAY} />
      ) : (
        <AppIcon size={TAB_ICON_SIZE} type={IconType.HOME} />
      );
    case TabRoutes.DISCOVER:
      return (
        <AppIcon
          color={isFocused ? 'white' : Colors.INACTIVE_GRAY}
          size={TAB_ICON_SIZE}
          type={IconType.DISCOVER}
        />
      );
    case TabRoutes.ACTIVITY:
      return !isFocused ? (
        <AppIcon size={TAB_ICON_SIZE} type={IconType.ACTIVITY_GRAY} />
      ) : (
        <AppIcon size={TAB_ICON_SIZE} type={IconType.ACTIVITY} />
      );
    case TabRoutes.BOOKMARKS:
      return !isFocused ? (
        <AppIcon size={TAB_ICON_SIZE} type={IconType.BOOKMARK_GRAY} />
      ) : (
        <AppIcon size={TAB_ICON_SIZE} type={IconType.BOOKMARK} />
      );
    case TabRoutes.PROFILE:
      return (
        <AppIcon
          color={isFocused ? 'white' : Colors.INACTIVE_GRAY}
          size={TAB_ICON_SIZE}
          type={IconType.PROFILE}
        />
      );

    default:
      return <View />;
  }
};
function MyTabBar({state, descriptors, navigation}: any) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarButton}>
            {renderTabIcon(label, isFocused)}
            <AppText
              marginTop={2}
              size={TextSize.Footer}
              color={isFocused ? 'white' : Colors.INACTIVE_GRAY}>
              {label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const renderLabel = (focused: boolean) => {};
const MainScreen = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      {...{screenOptions}}>
      <Tab.Screen name={TabRoutes.HOME} component={HomeScreen} />
      <Tab.Screen name={TabRoutes.DISCOVER} component={DiscoverScreen} />
      <Tab.Screen name={TabRoutes.ACTIVITY} component={ActivityScreen} />
      <Tab.Screen name={TabRoutes.BOOKMARKS} component={BookmarkScreen} />
      <Tab.Screen name={TabRoutes.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainScreen;
