import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPhotos} from '../reducers/photos'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

class PhotosList extends Component {
    componentDidMount(){
        this.props.fetchPhotos()
    }
    render() {
        return (
            <div>
                <GridList
                    cellHeight={320}
                    cols={3}
                >
                    <Subheader>Latest 20 Pictures</Subheader>
                    {this.props.photos.map((photo, index) =>
                        <GridTile
                            key={photo.id}
                            title={photo.caption.text}
                            actionIcon={<IconButton><FavoriteBorder color="white" /></IconButton>}
                        >
                            <img src={photo.images.standard_resolution.url} alt={photo.caption.text} />
                        </GridTile>
                    )}

                </GridList>
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => ({photos: state.photo.photos}),
    {fetchPhotos}
)(PhotosList)