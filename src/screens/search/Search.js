import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Header} from '../../components/header/Header';
import {Input} from '../../components/input/Input';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import {COLORS} from '../../theme';

export const SearchScreen = () => {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 16}}>
        <Input
          value={value}
          onChangeText={_value => setValue(_value)}
          right={
            <View style={styles.searchIconContainer}>
              <Icon
                name="magnifying-glass"
                size={30}
                color={COLORS.sun}
                style={styles.icon}
              />
            </View>
          }
        />
        <Header text={'Search Result'} />
      </View>
    </SafeAreaView>
  );
};
