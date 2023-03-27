import React, { useState } from "react";
import { 
  View,
  Text, 
  TextInput, 
  TouchableOpacity,
  Vibration,
} from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./style";

export default function Form () {

  const [imc, setImc] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [messageImc, setMessageImc] = useState("Preencha a altura e o peso");
  const [errorMessage, setErrorMessage] = useState(null);

  function imcCalculator () {
    return setImc((weight/(height*height)).toFixed(2));
  }

  function verificateImc() {
    if(imc == null) {
      Vibration.vibrate();
      setErrorMessage("Campo obrigatório*")
    }
  }

  function validateImc() {
    if(weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC atual é ");
      setTextButton("Calcular novamente");
      setErrorMessage(null);
      return ;
    }
    verificateImc();
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha a altura e o peso");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput 
          onChangeText={setHeight} 
          value={height} 
          style={styles.input}
          placeholder="Ex: 1.75" 
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput 
          onChangeText={setWeight} 
          value={weight} 
          style={styles.input}
          placeholder="Ex: 72.235" 
          keyboardType="numeric"
        />

        <TouchableOpacity
          onPress={() => validateImc()}
          style={styles.buttonCalculate}
        >
          <Text style={styles.textButtonCalculate}>{textButton}</Text>
        </TouchableOpacity>
      </View>

      <ResultIMC messageResultImc={messageImc} resultImc={imc}/>
    </View>
  );
}