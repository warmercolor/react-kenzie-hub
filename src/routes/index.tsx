import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'

export function RoutesUrl() {

    return (
    <Routes>
        <Route path='/' element={
            <Login/>
        }>
        </Route>
        <Route path='/register' element={
            <Register/>
        }>
        </Route>
        <Route path='/dashboard' element={
            <Dashboard/>
        }>
        </Route>
    </Routes>
    )
}