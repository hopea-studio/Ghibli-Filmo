import React, {useEffect} from "react"
import { StyleSheet, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { useSelector, useDispatch } from "react-redux"
import { fetchFilms } from "../store/actions"


const renderItem = ({ item }) => {
  const { title } = item
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

const FilmScreen = () => {

const dispatch = useDispatch()
const films = useSelector(state => state.films)

  useEffect(() => {
    dispatch(fetchFilms())
  },[dispatch])

  return (
    <View>
      <FlatList data={films} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  )
}
const styles = StyleSheet.create({})


export default FilmScreen


