import axios from 'axios'

export const photoAPI = {
    getPhotosAPI() {
        const photos = 'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

        return axios
            .get(photos)
            .then(response => response.data)
    }
};