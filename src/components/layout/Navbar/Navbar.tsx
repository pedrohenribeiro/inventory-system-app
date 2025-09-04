import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Navbar = () => {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity style={styles.navButton}>
        <MaterialCommunityIcons name="home-variant" size={28} color="#C13BFF" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <MaterialCommunityIcons name="format-list-bulleted" size={28} color="#ffffffff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton}>
        <MaterialCommunityIcons name="plus" size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <MaterialCommunityIcons name="chart-bar" size={28} color="#ffffffff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <MaterialCommunityIcons name="cog" size={28} color="#ffffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#241191',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#241191',
    elevation: 8,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#241191',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    borderWidth: 3,
    borderColor: '#f0f2f5',
  },
});

export default Navbar;
