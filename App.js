import React, { useState } from "react";
import { Text, TextInput, Button, View } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('valor inicial');

  const actualizarTexto = (newText) => {
    setTexto(newText);
  }

  const contarLetras = () => {
    setTexto(texto + '.....123');
    console.log(texto);
  }

  return (
    <View>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Contador de letras por palabra</Text>
      <Text style={{ fontSize: 14, marginBottom: 10 }}>Ingresa palabras separadas por espacios</Text>

      <TextInput
        placeholder='INGRESA LAS PALABRAS AQUÍ'
        style={{ marginBottom: 10 }}
        onChangeText={actualizarTexto}
      />

      <Button
        title='Presióname'
        onPress={contarLetras}
      />

      <Text>{texto}</Text>
    </View>
  );
}
