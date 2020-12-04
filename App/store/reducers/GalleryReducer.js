import { photoAPI } from '../../API/API'

const SET_BIG_PHOTO = 'gallery/SET_LARGE_PHOTO';
const SET_GALLERY = 'gallery/SET_GALLERY';
const CLEAR = 'gallery/CLEAR';

let initialState = {
    gallery: [],
    bigPhoto: ''
};

const GalleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BIG_PHOTO: {
            return {
                ...state,
                bigPhoto: action.photoUrl
            }
        }

        case SET_GALLERY: {
            return {
                ...state,
                gallery: [...state.gallery, {id: action.id, photo: action.photo, userName: action.userName}]
            }
        }

        case CLEAR: {
            return {
                ...state,
                gallery: []
            }
        }

        default: return state
    }
};

//AC
export const setBigPhoto = (photoUrl) => ({type: SET_BIG_PHOTO, photoUrl});
export const setGallery = (id, photo, userName) => ({type: SET_GALLERY, id, photo, userName});
export const clear = () => ({type: CLEAR});

//Thunks
export const getGalleryThunk = () => {
    return async (dispatch) => {
        let response = await photoAPI.getPhotosAPI();
        dispatch(clear());
        for (let entry of response) {
            dispatch(setGallery(entry.id, entry.urls.full, entry.user.name))
        }
    }
};

export default GalleryReducer