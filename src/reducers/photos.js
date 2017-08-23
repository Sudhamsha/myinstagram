import {getPhotos} from '../services/photoService'
import {showMessage} from './messages'

const initState = {
    photos: [],
}

export const PHOTO_LOAD = 'PHOTO_LOAD'

export const loadPhotos = (Photos) => ({type: PHOTO_LOAD, payload: Photos})

export const fetchPhotos = () => {
    return (dispatch) => {
        dispatch(showMessage('Loading Photos'))
        getPhotos()
            .then(Photos => dispatch(loadPhotos(Photos.photos)))
    }
}

export default (state = initState, action) => {
    switch (action.type){
        case PHOTO_LOAD:
            return {...state, photos: action.payload}
        default:
            return state
    }
}