import React from 'react'
import BigPhoto from './BigPhoto'
import { getBigPhoto } from '../../store/selectors/GallerySelector'
import { compose } from 'redux'
import { connect } from 'react-redux'

const BigPhoto_Container = ({ bigPhoto }) => {
    return <BigPhoto bigPhoto={bigPhoto} />
};

const mapStateToProps = (state) => ({
    bigPhoto: getBigPhoto(state)
});

export default compose(
    connect(mapStateToProps, {})
)(BigPhoto_Container)