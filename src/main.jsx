import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Home, Login} from './pages/index.js'
import { Provider } from 'react-redux'
import store from './app/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route index element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={route}>
                <App />
            </RouterProvider>
        </Provider>
    </StrictMode>
)
