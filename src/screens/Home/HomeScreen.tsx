import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import HomeCard from '../../components/common/HomeCard/HomeCard';
import Navbar from '../../components/layout/Navbar/Navbar';
import Header from '../../components/layout/Header/Header';
import BotaoDeAcao from '../../components/common/BotaoDeAcao/BotaoDeAcao';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type CardData = {
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  count: number;
  color: string;
};

const cardData: CardData[] = [
  { title: 'Pouco Estoque', icon: 'package-variant', count: 2, color: '#f5a623' },
  { title: 'Esgotado', icon: 'package-variant-closed', count: 4, color: '#d0021b' },
  { title: 'Boa quantidade', icon: 'package-variant', count: 5, color: '#7ed321' },
  { title: 'Requisitados', icon: 'package-up', count: 7, color: '#4a90e2' },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <ScrollView contentContainerStyle={styles.mainContent}>
        <BotaoDeAcao />
        <View style={styles.cardContainer}>
          {cardData.map((card, index) => (
            <HomeCard
              key={index}
              icon={card.icon}
              title={card.title}
              count={card.count}
              color={card.color}
            />
          ))}
        </View>
      </ScrollView>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  mainContent: {
    padding: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

export default HomeScreen;
