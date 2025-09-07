import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

type CardEstoqueProdutoProps = {
  titulo: string;
  quantidade: number;
  tamanho?: 'P' | 'M' | 'G' | 'GG';
};

const CardEstoqueProduto = ({ titulo, quantidade, tamanho }: CardEstoqueProdutoProps) => {
  return (

    <View style={styles.cardContainer}>
        <Text style={styles.tituloCard}>{titulo}</Text>
        <Text style={styles.quantidadeCard}>{quantidade}</Text>
        <Text style={styles.tamanhoCard}>tamanho: {tamanho}</Text>
    </View>

  );
};


const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
  },
  tituloCard: {
    color: '#000000',
  },
  quantidadeCard: {
    color: '#4D4D4D',
  },
  tamanhoCard: {
    color: '#4D4D4D',
  },
});

export default CardEstoqueProduto;
