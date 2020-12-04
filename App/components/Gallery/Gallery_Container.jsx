import React, { useEffect } from 'react'
import Gallery from './Gallery'
import { getGallery } from '../../store/selectors/GallerySelector'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getGalleryThunk, setBigPhoto } from '../../store/reducers/GalleryReducer'

const Gallery_Container = ({ gallery, getGalleryThunk, setBigPhoto, navigation }) => {

    useEffect(() => {
        getGalleryThunk();
    }, []);

    return <Gallery gallery={gallery} setBigPhoto={setBigPhoto} navigation={navigation} />
};

const mapStateToProps = (state) => ({
    gallery: getGallery(state)
});

export default compose(
    connect(mapStateToProps, {
        getGalleryThunk, setBigPhoto
    })
)(Gallery_Container)