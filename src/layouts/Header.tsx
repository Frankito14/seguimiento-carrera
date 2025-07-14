//Components
import { NavLink } from "react-router";

//Logo
import Logo from '@assets/img/logo_seguihur.png'

export default function Header() {
    return (
        <header className="w-full sticky top-0 z-10 text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
            <div className="container flex  items-start justify-between p-6 mx-auto flex-row">
                <div className="hidden sm:flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                    <img src={Logo} className="w-32"/>
                </div>
                <nav className="flex flex-wrap items-center justify-center pl-6 ml-6 text-base border-l border-gray-200 md:mr-auto">
                    {/*<a href="#_" className="mr-5 font-medium hover:text-gray-900">Home</a>*/}
                </nav>
                <div className="flex gap-2 flex-row flex-wrap justify-center items-center w-auto h-full">
                    <NavLink to="/" className="mr-5 font-medium hover:text-gray-900">Mis carreras</NavLink>
                    <NavLink to="/nueva-cursada"
                        className="px-4 py-2 text-sm font-bold text-white uppercase transition-all duration-150 bg-emerald-600 rounded shadow outline-none active:bg-teal-600 hover:bg-teal-700 focus:outline-none ease">
                        Nueva cursada
                    </NavLink>
                </div>
            </div>
        </header>
    )
}