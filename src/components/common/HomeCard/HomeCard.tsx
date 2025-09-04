import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type HomeCardProps = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
  count: number;
  color: string;
};

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

const HomeCard = ({ icon, title, count, color }: HomeCardProps) => {
  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <MaterialCommunityIcons name={icon} size={24} color="white" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>
        Todos os produtos que estao com estoque Baixo
      </Text>
      <Text style={[styles.count, { color: color }]}>{count} Itens</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    minHeight: 30,
  },
  count: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
  },
});

export default HomeCard;
