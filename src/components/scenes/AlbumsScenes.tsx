import * as React from 'react'
import Scene from '../Scene/Scene'
import { Link } from 'react-router-dom';
import { albums } from '../../data/data';
import { GravatarImage } from './ImagesMoqs';

export const AlbumsScene = (props: any) => (
    <Scene {...props} title='Albums' back="Library">
        <div>
            <ul className="list albums">
                {albums.map(album => 
                <li key={album.id}>
                    <Link to={`/albums/${album.id}`}>
                        <GravatarImage name={album.name} set='retro'/>
                        {album.name}
                    </Link>
                </li>)}
            </ul>
        </div>
    </Scene>)

export const AlbumScene = (props: any) => {
    const album = albums.find(x => x.id == props.id) || { name: 'Album Not Found'}
    return (<Scene {...props} title={album.name} back="Albums"/>)
}
