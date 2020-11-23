import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { StyleSheet, Button, Text, View, Image } from "react-native"
import { fetchFilms } from "../store/actions"

const generateRandom = (films) => {
  return Math.floor(Math.random() * films.length)
}

const HomeScreen = ({ navigation }) => {
  
  const films = useSelector(state => state.films)
  const dispatch = useDispatch()
  
  const [pick, setPick] = useState(null)


  useEffect(() => {
    dispatch(fetchFilms())
    console.log(films)
    setPick(films[generateRandom(films)])
    console.log(pick)
  }, [dispatch])

  return (
    <View>
      
      {pick && <View>
        <Text>{pick.title}</Text>
      </View>}
      <Button title="Films" onPress={() => navigation.navigate("films")} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
