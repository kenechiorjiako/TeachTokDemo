import {StyleSheet} from 'react-native';

export const TAB_BAR_HEIGHT = 90;
export const TAB_ICON_SIZE = 26;

export const styles = StyleSheet.create({
  defaultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  tabBarButton: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: TAB_BAR_HEIGHT,
    paddingTop: 8,
    backgroundColor: 'black',
  },
});
