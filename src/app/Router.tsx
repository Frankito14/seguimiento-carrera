import { BrowserRouter, Routes, Route } from "react-router";

//Pages
import PageInicio from "@pages/mis-carreras/page.tsx";
import PageCarrera from "@pages/mi-cursada/page.tsx";
import PageNuevaCursada from "@pages/nueva-cursada/page.tsx";
import LandingPage from "@pages/landing/page.tsx";

const routes = [
    {
        path: '*',
        element: <PageInicio/>
    },
    {
        path: '/mi-cursada',
        element: <PageCarrera/>
    },
    {
        path: '/nueva-cursada',
        element: <PageNuevaCursada/>
    },
    {
        path: '/landing',
        element: <LandingPage/>
    },
]

export default function Router() {
    return (
        <Routes>
            {
                routes.map(
                    route => <Route path={route.path} element={route.element}/>
                )
            }
        </Routes>
    )
}