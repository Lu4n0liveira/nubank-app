import { StatusBar } from 'expo-status-bar';
import { TextInput, Pressable, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <Image source={require('./nubank-logo-branco.png')} style={styles.image} />

      <View >
        <Text style={styles.ola}>Olá, Luan Queiroz</Text>
      </View>
      <View style={styles.procurar}>
        <TextInput placeholder="Procurar" />
      </View>
      <View style={styles.container2}>
        <Text style={styles.color5}>Cartão de crédito</Text>
        <Text>Fatura</Text>
        <Text style={styles.color3}>R$1.500,00</Text>
        <View>
          <Pressable style={styles.pagar}>
            <Text style={styles.color2}>Pagar Fatura</Text>
          </Pressable>
        </View>
      </View>
      <View>

      </View>
      <View style={styles.container2}>
        <View >
          <Text style={styles.color5}>Conta</Text>
        </View>
        <View>
          <Text>Saldo Disponível</Text>
          <View>
            <Text style={styles.color4}>R$ 300,00</Text>
          </View>
          <Pressable style={styles.pagar}>
            <Text style={styles.color2}>Transferir</Text>
          </Pressable>
        </View>

      </View>
      <View style={styles.cartoes}>
        <Pressable>
          <Text style={styles.cartoes2}>Meus Cartões</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B03BB',
    justifyContent: 'center',
    padding:30,
    alignItems:'center',
  },
  ola: {
    color: '#FFF',
    marginBottom: 30,
    fontSize: 20,

  },
  container2: {
    backgroundColor: '#FFF',
    padding: 30,
    borderRadius: 20,
    marginBottom: 30,
    width:'100%',
  },
  procurar: {
    Color: '#FFF',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FFF',
    marginBottom: 30,
    height: 50,
    justifyContent: 'center',
    width:'100%',
  },
  image: {
    width: 120,
    height:50,
    marginBottom:30,


  },
  pagar: {
    borderColor: '#8B03BB',
    color: '#8B03BB',
    borderWidth: 2,
    borderRadius: 100,
    width: 130,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  cartoes: {
    backgroundColor: '#0099CC',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    fontWeight: 'bold',
    width:'100%',

  },
  cartoes2: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
   
  },

  color2: {
    color: '#8B03BB',
  },
  color3: {
    color: '#0099CC',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  color4: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold'
  },
  color5: {
    fontWeight: 'bold',
    fontSize: 15,
  }
});
