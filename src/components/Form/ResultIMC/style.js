import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 15,
    paddingTop: 30,
    borderRadius: 50,
    alignItems: 'center',
    width: '100%',
  },
  numberImc: {
    fontSize: 48,
    color: '#ff0043',
    fontWeight: 'bold',
  },
  information: {
    fontSize: 18,
  },
  boxShareButton: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  shareButton: {
    backgroundColor: '#ff0043',
    borderRadius: 50,
    paddingTop: 5,
    paddingBottom: 5,
  },
  shareText: {
    color: '#ffffff',
    fontWeight: 'bold',
    paddingHorizontal: 30,
  }
});

export default styles;