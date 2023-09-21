import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [produto, setProduto] = useState('');
  const [listaDeCompras, setListaDeCompras] = useState([]);

  const adicionarProduto = () => {
    if (produto.trim() === '') {
      return;
    }

    const novaLista = [...listaDeCompras, produto];
    setListaDeCompras(novaLista);
    setProduto('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>Lista de compras</Text>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>

        <TextInput style={styles.input} value={produto}
        onChangeText={(text) => setProduto(text)}
        placeholder="Nome do produto..."
          placeholderTextColor="grey"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={adicionarProduto}>
          <Text style={styles.buttonText}>ADICIONAR</Text>
        </TouchableOpacity>
        <Text style={styles.produtoText}>Produto</Text>
        </View>

        <View>
        <Text style={styles.texto1}>Lista de Compras:</Text>
        {listaDeCompras.map((item, index) => (
          <Text key={index} style={styles.produtoText}>
            {item}
          </Text>
        
        ))}
        
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center', 
    marginTop:20,
  },
  input: {
    backgroundColor: "#1c1c1c",
    width: 330,
    height: 50,
    marginBottom: 20,
    paddingLeft: 10,
    color:'grey',
  },
  texto1: {
    color: "lightgray",
    fontSize: 25,
    alignSelf: 'flex-start',
    margin:20,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    borderColor: 'green',
    borderWidth: 2,
    padding: 20,
  },
  button: {
    backgroundColor: 'green',
    width: 330,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
