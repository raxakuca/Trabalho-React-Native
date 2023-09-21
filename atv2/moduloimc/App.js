import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    if (!peso || !altura) {
      alert('preencha ambos os campos de peso e altura.');
      return;
    }

    const imc = (parseFloat(peso) / Math.pow(parseFloat(altura), 2)).toFixed(2);
    setResultado(imc);
  };

  return (
    <View style={styles.container}>
      <Text>Calculadora IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        onChangeText={(text) => setPeso(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        onChangeText={(text) => setAltura(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text>Calcular</Text>
      </TouchableOpacity>
      {resultado && <Text>Seu IMC: {resultado}</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#85e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: 150,
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
});