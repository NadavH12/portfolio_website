import { Routes, Route } from 'react-router'
import HomePage from '../HomePage/HomePage'

export default function RoutingComponent(){
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    )
}
