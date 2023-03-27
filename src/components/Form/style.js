import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 30,
  },
  form: {
    width: '100%',
    height: 'auto',
    marginTop: 30,
    padding: 10,
  },
  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalculate: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#ff0043',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  textButtonCalculate: {
    fontSize: 20,
    color: '#ffffff',
  },
  errorMessage: {
    color: "red",
    fontSize: 12,
    paddingLeft: 20,
  }

});

export default styles;