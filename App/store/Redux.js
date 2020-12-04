import { applyMiddleware, combineReducers, createStore } from 'redux'
import GalleryReducer from './reducers/GalleryReducer'
import thunkMiddleware from 'redux-thunk'

let reducersBox = combineReducers({
    galleryReducer: GalleryReducer
});
let Store = createStore(reducersBox, applyMiddleware(thunkMiddleware));

export default Store;