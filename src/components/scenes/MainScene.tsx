import * as React from 'react'
import Scene from '../Scene/Scene'
import { Link } from 'react-router-dom';

const mainMenu = [
    { path: '/artists', title: 'Artists' },
    { path: '/albums', title: 'Albums' },
    { path: '/songs', title: 'Songs' },
]

export const MainScreen = (props: any) => (
    <Scene {...props} title='Library' isActive={true}>
        <ul className="list">
            {mainMenu.map(link => 
            <li key={link.path}>
                <Link to={link.path}>{link.title}</Link>
            </li>)}
        </ul>
    </Scene>)