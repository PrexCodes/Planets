import {createBrowserRouter} from 'react-router-dom'
import Layout from '../components/Block/Layout'
import App from '../App'
import Earth from '../pages/Earth'
import Mercury from '../pages/Mercury'
import Venus from '../pages/Venus'
import Mars from '../pages/Mars'
import Jupiter from '../pages/Jupiter'
import Saturn from '../pages/Saturn'
import Uranus from '../pages/Uranus'
import Neptune from '../pages/Neptune'

export const mainRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                // path: 'mercury',
                element: <App/>
            },
            {
                index: true,
                path: 'earth',
                element: <Earth/>
            },
            {
                index: true,
                path: 'mercury',
                element: <Mercury/>
            },
            {
                index: true,
                path: 'venus',
                element: <Venus/>
            },
            {
                index: true,
                path: 'mars',
                element: <Mars/>
            },
            {
                index: true,
                path: 'jupiter',
                element: <Jupiter/>
            },
            {
                index: true,
                path: 'saturn',
                element: <Saturn/>
            },
            {
                index: true,
                path: 'uranus',
                element: <Uranus/>
            },
            {
                index: true,
                path: 'neptune',
                element: <Neptune/>
            },
        ]
    }
])