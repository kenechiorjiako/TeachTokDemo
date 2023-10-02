import {Dimensions, StyleSheet} from 'react-native';
import {TAB_BAR_HEIGHT} from '../../main.screen.styles';
import {FontWeight} from '../../../../shared/appText';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundImage: {
    opacity: 0.6,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - TAB_BAR_HEIGHT,
  },
  page: {
    width: '100%',
    height: '100%',
  },
  actionsColumn: {
    flexDirection: 'column',
    marginStart: 16,
    marginEnd: 8,
    marginBottom: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 400,
    borderWidth: 1,
    borderColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 4,
  },
  headerTitleLine: {
    backgroundColor: 'white',
    height: 4,
    marginTop: 6,
    marginHorizontal: 12,
  },
  headerTitleContainer: {
    flexDirection: 'column',
    position: 'absolute',
    alignSelf: 'center',
    width: SCREEN_WIDTH - 32,
    alignItems: 'center',
  },
  timerContainer: {flexDirection: 'row', alignItems: 'center'},
  listFooterViewContainer: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loadingErrorContainer: {
    flex: 1,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageContainer: {marginBottom: 8},
  followIconContainer: {
    backgroundColor: '#57AE91',
    width: 24,
    height: 24,
    justifyContent: 'center',
    borderRadius: 200,
    position: 'absolute',
    bottom: -12,
    left: 13,
  },
  contentContainer: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    paddingTop: 80,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - TAB_BAR_HEIGHT,
  },
  mainScreenHeaderContainer: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - TAB_BAR_HEIGHT,
  },
  optionText: {
    fontSize: 18,
    fontFamily: 'Proxima',
    color: '#FFFFFF',
  },
  optionContainer: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginTop: 10,
    borderRadius: 10,
  },
  playlistContainer: {
    flexDirection: 'row',
    backgroundColor: '#161616',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  optionsColumn: {
    flexDirection: 'column-reverse',
    flex: 1,
    paddingBottom: 16,
  },
  playlistDot: {
    backgroundColor: 'white',
    borderRadius: 200,
    width: 4,
    height: 4,
    marginHorizontal: 4,
  },
  optionsAndActionsContainer: {flexDirection: 'row', paddingStart: 16},
  questionContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    lineHeight: 40,
    fontWeight: `${FontWeight.SemiBold}`,
    alignSelf: 'flex-start',
    fontSize: 24,
  },
  actionButtonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 16,
  },
});

export default styles;
