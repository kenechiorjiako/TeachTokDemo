import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText, TextSize } from '../../../shared/appText';
import { styles } from '../main.screen.styles';

const ActivityScreen = () => {
  return (
    <SafeAreaView style={styles.defaultContainer}>
      <AppText lineHeight={32} color={'white'} size={TextSize.Heading1}>
        Activity Screen
      </AppText>
    </SafeAreaView>
  );
};


export default ActivityScreen;
