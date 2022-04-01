import { Image, StyleSheet } from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';
 
const OnBoardingScreen = ({navigation}) => (
    <Onboarding
        onDone={() => navigation.navigate('Register')}
        onSkip={() => navigation.navigate('Register')}
        pages={[
            {
                backgroundColor: '#a6e4d0',
                image: <Image
                    resizeMode="contain"
                    style={styles.logo}
                    source={require('./images/KalematLogoTransparent.png')} />,
                title: 'קלימאת',
                subtitle: 'לימוד ערבית מדוברת בחינם ולכולם',
            },
            {
                backgroundColor: '#fdeb93',
                image: <Image
                    resizeMode="contain"
                    style={styles.logo}
                    source={require('./images/KalematLogoTransparent.png')} />,
                title: 'החזון שלנו',
                subtitle: 'חברה בה יותר ישראלים יכולים לתקשר בקלות עם פלסטינים.',
            },
            {
                backgroundColor: '#31572c',
                image: <Image
                    resizeMode="contain"
                    style={styles.logo}
                    source={require('./images/KalematLogoTransparent.png')} />,
                title: 'לעצב את החוויה שלך',
                subtitle: "בקלימאת, המשתמש בוחר איך ומתי ומה ללמוד.",
            },
        ]}
    />
);

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 300,
    },
});

export default OnBoardingScreen;