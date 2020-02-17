import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems:'center', 
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow'
  },
  logo: {
    marginLeft: 14,
    height: 148,
    width: 280,
  },
  header: {
    flex: 1, 
    paddingTop: 60,
  },
  input: {
    width: 260,
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 3,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  button: {
    width: 260,
    height: 40,
    backgroundColor: '#EDB834',
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    width: 260,
    height: 40,
    backgroundColor: '#EDB834',
    marginBottom: 80,
    padding: 10,
    borderRadius: 4,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color:'#EDB834',
    fontSize: 21,
    margin: 8,
    justifyContent: 'center',
    textAlign: 'center',
  },
  text1: {
    color:'#EDB834',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 8,
    justifyContent: 'center',
    textAlign: 'center',
  }
});

export default styles;