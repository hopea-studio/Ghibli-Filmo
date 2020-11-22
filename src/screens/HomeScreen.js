import React, { useEffect, useState } from "react"
import { StyleSheet, Button, Text, View, FlatList } from "react-native"
import axios from "axios"

const URL = "https://ghibliapi.herokuapp.com"

const HomeScreen = ({ navigation }) => {
  const [list, setList] = useState([])

  const renderItem = ({ item }) => {
    const { title } = item
    return (
      <View>
        <Text>{title}</Text>
      </View>
    )
  }

  useEffect(() => {
    axios.get(`${URL}/films`).then((res) => {
      setList(res.data)
    })
  }, [])

  return (
    <View>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button title="Films" onPress={() => navigation.navigate("films")} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
