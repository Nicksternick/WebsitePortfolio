// ===== | Node Imports | =====
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Routing
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import { Index } from './routes'
import { Test1 } from './routes/test1'
import { Test2 } from './routes/test2'

// ===== | Style Imports | =====
//import './index.css'

// Create routes
const Router = createBrowserRouter([
    {
        path: "/",
        element: <Index />
    },
    {
        path: "/test1",
        element: <Test1 />
    },
    {
        path: "/test2",
        element: <Test2 />
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={Router} />
    </StrictMode>,
)
