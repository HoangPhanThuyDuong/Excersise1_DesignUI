import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Alert, Image, Switch, FlatList, ImageBackground } from 'react-native';
import { useState } from 'react';

function App() {
  const [username, setUserName]=useState("");
  const [password, setPassWord]=useState("");
  const onPress=()=>
  {
    Alert.alert(`Chào mừng ${username} đã đăng nhập thành công`);
  }
    return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex:1}}
        source={{uri:"https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/426464190_1876114959483854_742511543404826718_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zZ9tB_v-plIAb5tUMzA&_nc_ht=scontent.fsgn8-2.fna&oh=00_AfCEyKJDocu1E99dzGGzZFUmc_pX9phiE4ROZohnbYIyyQ&oe=66155422"}}
        resizeMode="cover">
        <Image
          source={{uri:"https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/426464190_1876114959483854_742511543404826718_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zZ9tB_v-plIAb5tUMzA&_nc_ht=scontent.fsgn8-2.fna&oh=00_AfCEyKJDocu1E99dzGGzZFUmc_pX9phiE4ROZohnbYIyyQ&oe=66155422"}}
          style={{
            borderWidth:1,
            width: "100%",
            height: null,
            aspectRatio: 750 / 460,
            resizeMode: "contain",
            marginTop:220,
          }}
        />
        <Text
          style={{
            color:"red",
            textAlign: 'right',
            marginRight:80,
            fontSize:16,
          }}>
          REGISTER
        </Text>
        <TextInput 
          style ={styles.box}
          onChangeText={setUserName}
          placeholder="Nhap user name"
          value={username}
        />
        <TextInput 
          style ={styles.box}
          onChangeText={setPassWord}
          placeholder="Nhap password"
          secureTextEntry
          value={password}
        />
        <TouchableHighlight
          style={{...styles.box,backgroundColor:"#339933",}}
          onPress={onPress}
          >
            <Text style={styles.buttontext}>
              Login
            </Text>
        </TouchableHighlight>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: "blue",
    fontWeight:"bold",

  },
  box: {
    backgroundColor:"#CCCCCC",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    marginStart:80,
    marginEnd:80,
  },
});

export default App