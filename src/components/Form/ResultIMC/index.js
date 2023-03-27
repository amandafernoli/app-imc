import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultIMC (props) {
  const onShare = async () => {
    const result = await Share.share({
      message: `Meu IMC atual é: ${props.resultImc}`
    });
  }

  return (
    <View style={styles.resultImc}>
      <Text style={styles.information}>{props.messageResultImc}</Text>
      <Text style={styles.numberImc}>{props.resultImc}</Text>
      <View style={styles.boxShareButton}>
        { 
          props.resultImc != null ?
          <TouchableOpacity 
            onPress={onShare}
            style={styles.shareButton}
          >
            <Text style={styles.shareText}>Share</Text>
          </TouchableOpacity>
          : <View/>
        }
      </View>
    </View>
  );
}