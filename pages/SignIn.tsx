import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from 'react-native'
import React, { useState } from 'react'
import { userService } from '../services/user/userService'

export const SignIn = (props: any) => {
  const [username, setUsername] = useState('guest123')
  const [password, setPassword] = useState('1234')

  const login = async () => {
    try {
      const user = await userService.login({ username, password })
      console.log({ user })

      setUsername('')
      setPassword('')
      //   props.navigation.navigate('Feed')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>T</Text>
      <Text style={styles.title}>Welcome to your traveler's community</Text>
      <TextInput
        placeholder="Enter your user-name"
        editable
        multiline
        onChangeText={(text) => setUsername(text)}
        value={username}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter your password"
        editable
        multiline
        onChangeText={(text) => setPassword(text)}
        value={password}
        style={styles.input}
      />
      <Button onPress={login} title="Sign in" />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 60,
    position: 'absolute',
    top: 0,
    left: 15,
    color: '#0073b1',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
  input: {
    width: '90%',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 5,
    padding: 5,
  },
})
