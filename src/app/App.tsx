
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Router from './Router'

function App() {
  return (
    <>
      <div className="w-full inset-0 -z-10 h-auto bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <Header />
        <Router />
        <Footer />
      </div >
    </>
  )
}

export default App
