import * as React from 'react'
import Scene from '../Scene/Scene'
import { Link } from 'react-router-dom';
import { artists } from '../../data/data';
import { GravatarImage } from './ImagesMoqs';

export const ArtistsScene = (props: any) => (
    <Scene {...props} title='Artists' back="Library">
        <div>
            <ul className="list artists">
                {artists.map(artist => 
                <li key={artist.id}>
                    <Link to={`/artists/${artist.id}`}>
                        <GravatarImage name={artist.name} set='robohash'/>
                        {artist.name}
                    </Link>
                </li>)}
            </ul>
        </div>
    </Scene>)

export const ArtistScene = (props: any) => {
    const artist = artists.find(x => x.id == props.id) || { name: 'Artist Not Found'}
    return (<Scene {...props} title={artist.name} back="Artists"/>)
}
