import axios from 'axios'


export const FETCH_FILMS = 'FETCH_FILMS'

const URL = "https://ghibliapi.herokuapp.com"

export const fetchFilms = () => (dispatch) => {
    axios
      .get(`${URL}/films`)
      .then((res) => {
        dispatch({ type: FETCH_FILMS, payload: res.data })
      })
      .catch((err) => console.log(err))
}