import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useQuery } from "react-query";
import { api } from "../../services/service";

const Login = () => {
  const { data, error, isLoading } = useQuery(['todo'], api.getService)

  useEffect(() => {
    console.log(data)
    console.log(error)
  })
  return(
    <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'white'}}>Tela principal</Text>
    </View>
  );
}

export default Login;