import * as React from 'react'
import Scene from '../Scene/Scene'
import { Link } from 'react-router-dom';
import { songs } from '../../data/data';
import { GravatarImage } from './ImagesMoqs';

export const SongsScene = (props: any) => (
    <Scene {...props} title='Playlits' back="Library">
        <div>
            <ul className="list playlists">
                {songs.map(song => 
                <li key={song.id}>
                    <Link to={`/songs/${song.id}`}>
                        <GravatarImage name={song.name} set='monsterid'/>
                        {song.name}
                    </Link>
                </li>)}
            </ul>
        </div>
    </Scene>)

export const SongScene = (props: any) => {
    const playlist = songs.find(x => x.id == props.id) || { name: 'Song Not Found'}
    return (<Scene {...props} title={playlist.name} back="Playlists"/>)
}
