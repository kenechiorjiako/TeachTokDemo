import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from 'react-native';
import styles, {SCREEN_HEIGHT} from './home.tab.styles';
import {TAB_BAR_HEIGHT} from '../../main.screen.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText, FontWeight, TextSize} from '../../../../shared/appText';
import {getQuestionAnswer, getQuestionData} from '../../../../api/apiClient';
import {AnswerResponse, QuestionType} from '../../../../api/types';
import {selectAppTimeState} from '../../../../state/selector';
import {useSelector} from 'react-redux';
import {convertTime} from '../../../../util/time.util';
import {AppIcon, IconType} from '../../../../shared/icons';
import {TextStroke} from './textStroke';

type ListDataType = {
  question: QuestionType;
  answer: AnswerResponse;
  selectedAnswerId: string | null;
};

const HomeScreen = () => {
  const controller = new AbortController();
  const timeSpentSec = useSelector(selectAppTimeState)?.timeSpent;

  const [questions, setQuestions] = useState<ListDataType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(0);
  const [pageLoading, setPageLoading] = useState(true);
  const [pageLoadError, setPageLoadError] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);
  const [timeSpentFormatted, setTimeSpent] = useState<string>('');

  const onAnswerPress = (questionIndex: number, selectedAnswerId: string) => {
    const updatedData = questions.map((value, index) => {
      if (index == questionIndex) {
        console.log('updating answer for question index --> ', questionIndex);
        return {...value, selectedAnswerId: selectedAnswerId};
      }
      return value;
    });
    setQuestions(updatedData);
  };

  const loadNext = async () => {
    setLoadingNext(true);

    try {
      const question: QuestionType = await getQuestionData(controller.signal);
      const questionAnswer: AnswerResponse = await getQuestionAnswer(
        question.id,
        controller.signal,
      );

      setQuestions(current => {
        return current.concat({
          question: question,
          answer: questionAnswer,
          selectedAnswerId: null,
        });
      });
    } catch (e) {
      console.log(e);
    }

    setLoadingNext(false);
  };

  const loadInitial = async () => {
    setPageLoading(true);
    setPageLoadError(false);

    try {
      const question: QuestionType = await getQuestionData(controller.signal);
      const questionAnswer: AnswerResponse = await getQuestionAnswer(
        question.id,
        controller.signal,
      );

      setQuestions([
        {
          question: question,
          answer: questionAnswer,
          selectedAnswerId: null,
        },
      ]);
    } catch (error) {
      console.error(error);
      setPageLoadError(true);
    }

    setPageLoading(false);
  };

  const viewAbilityConfigCallbackPairs = useRef(
    ({
      changed,
      viewableItems,
    }: {
      viewableItems: Array<ViewToken>;
      changed: Array<ViewToken>;
    }) => {
      if (viewableItems.length > 0 && viewableItems[0].isViewable) {
        console.log(
          'current question changed to index --> ',
          viewableItems[0].index,
        );
        setCurrentQuestion(viewableItems[0].index);
      }
    },
  );

  // Page load effect
  useEffect(() => {
    loadInitial();
    return () => {
      controller.abort();
    };
  }, []);

  // Load more effect
  useEffect(() => {
    if (currentQuestion == questions.length - 1 && !loadingNext) {
      console.log(
        'loading more data because user has reached the last question',
      );
      loadNext();
    }
  }, [questions, currentQuestion]);

  // timer use effect
  useEffect(() => {
    setTimeSpent(convertTime(timeSpentSec));
  }, [timeSpentSec]);

  const OptionButton = ({
    text,
    enabled,
    onPress,
    showError,
    showCorrect,
  }: {
    text: string;
    enabled: boolean;
    onPress: () => void;
    showError: boolean;
    showCorrect: boolean;
  }) => {
    return (
      <TouchableOpacity
        disabled={!enabled}
        onPress={onPress}
        activeOpacity={0.7}>
        <View
          style={[
            styles.optionContainer,
            {
              backgroundColor: showError
                ? 'rgba(166, 71, 62, 0.7)'
                : showCorrect
                ? 'rgba(87, 174, 145, 0.7)'
                : 'rgba(255, 255, 255, 0.5)',
            },
          ]}>
          <TextStroke stroke={1} color={'#000'}>
            <Text style={styles.optionText}>{text}</Text>
          </TextStroke>
        </View>
      </TouchableOpacity>
    );
  };

  const UserActionButton = ({
    text,
    iconType,
  }: {
    text: string;
    iconType: IconType;
  }) => {
    return (
      <View style={styles.actionButtonContainer}>
        <AppIcon type={iconType} color="white" size={32} />
        <AppText
          color={'white'}
          size={TextSize.CaptionLarge}
          weight={FontWeight.Bold}>
          {text}
        </AppText>
      </View>
    );
  };

  const renderQuestion = ({
    item,
    index,
  }: {
    item: ListDataType;
    index: number;
  }) => {
    const description = item.question.description;
    const descriptions = description.split('#');

    return (
      <View style={{height: SCREEN_HEIGHT - TAB_BAR_HEIGHT}}>
        {/* Background Image */}
        <Image
          style={styles.backgroundImage}
          source={{
            uri: item.question.image,
          }}
        />
        <SafeAreaView edges={['top']} style={styles.contentContainer}>
          {/* Question View */}
          <View
            style={{
              marginHorizontal: 16,
              alignSelf: 'flex-start',
            }}>
            <Text style={styles.questionContainer}>
              {item.question.question}
            </Text>
          </View>

          <View style={{flexDirection: 'column-reverse'}}>
            {/* Playlist view */}
            <View style={styles.playlistContainer}>
              <AppIcon type={IconType.PLAYLIST} size={20} />
              <AppText
                marginLeft={4}
                size={TextSize.BodySmall}
                weight={FontWeight.SemiBold}
                color={'white'}>
                Playlist
              </AppText>
              <View style={styles.playlistDot} />
              <AppText
                size={TextSize.BodySmall}
                weight={FontWeight.SemiBold}
                color={'white'}>
                {item.question.playlist}
              </AppText>

              <View style={{flex: 1}} />
              <AppIcon type={IconType.NEXT} size={16} />
            </View>

            <View style={styles.optionsAndActionsContainer}>
              {/* Question Options and description view */}
              <View style={styles.optionsColumn}>
                <AppText
                  color={'white'}
                  size={TextSize.BodySmall}
                  weight={FontWeight.Regular}
                  marginTop={4}>
                  {descriptions[0]}{' '}
                  {descriptions.map((value, index) => {
                    if (index != 0) {
                      return (
                        <AppText
                          color={'white'}
                          size={TextSize.BodySmall}
                          weight={FontWeight.Bold}
                          marginTop={4}>
                          #{value}
                        </AppText>
                      );
                    }
                  })}
                </AppText>

                <AppText
                  color={'white'}
                  size={TextSize.BodyLarge}
                  weight={FontWeight.Bold}
                  marginTop={20}>
                  {item.question.user.name}
                </AppText>

                {item.question.options.map((value, _) => {
                  return (
                    <OptionButton
                      text={value.answer}
                      enabled={item.selectedAnswerId == null}
                      onPress={() => {
                        onAnswerPress(index, value.id);
                      }}
                      showCorrect={
                        item.selectedAnswerId != null &&
                        value.id == item.answer.correct_options[0].id
                      }
                      showError={
                        value.id == item.selectedAnswerId &&
                        item.selectedAnswerId !=
                          item.answer.correct_options[0].id
                      }
                    />
                  );
                })}
              </View>

              <View style={styles.actionsColumn}>
                <View style={styles.profileImageContainer}>
                  <Image
                    style={styles.profileImage}
                    source={{
                      uri: item.question.user.avatar,
                    }}
                  />
                  <View style={styles.followIconContainer}>
                    <AppIcon type={IconType.ADD} size={14} />
                  </View>
                </View>

                <UserActionButton text="87" iconType={IconType.LIKE} />
                <UserActionButton text="2" iconType={IconType.COMMENT} />
                <UserActionButton text="203" iconType={IconType.BOOKMARK} />
                <UserActionButton text="17" iconType={IconType.SHARE} />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {pageLoading ? (
        <View style={styles.loadingErrorContainer}>
          <ActivityIndicator />
        </View>
      ) : !pageLoadError ? (
        <FlatList
          data={questions}
          renderItem={renderQuestion}
          style={styles.page}
          keyExtractor={(item, _) => item.question.id.toString()}
          pagingEnabled
          scrollEventThrottle={16}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 95,
          }}
          onViewableItemsChanged={viewAbilityConfigCallbackPairs.current}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={styles.listFooterViewContainer}>
              <ActivityIndicator />
            </View>
          }
          onEndReachedThreshold={0}
          onEndReached={() => {
            if (!loadingNext) {
              console.log('end has been reached, loading next');
              loadNext();
            }
          }}
        />
      ) : (
        <View style={styles.loadingErrorContainer}></View>
      )}
      <SafeAreaView
        pointerEvents={'none'}
        style={styles.mainScreenHeaderContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.timerContainer}>
            <AppIcon type={IconType.ACTIVITY_GRAY2} color="#B5B5B2" size={22} />
            <AppText marginLeft={4} color={'#B5B5B2'}>
              {timeSpentFormatted}
            </AppText>
          </View>

          <View style={styles.headerTitleContainer}>
            <View>
              <AppText
                size={TextSize.Heading7}
                color={'white'}
                weight={FontWeight.SemiBold}>
                For You
              </AppText>
              <View style={styles.headerTitleLine} />
            </View>
          </View>

          <AppIcon type={IconType.SEARCH} color="transparent" size={24} />
        </View>
      </SafeAreaView>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
    </View>
  );
};

export default HomeScreen;
