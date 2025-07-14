//Image
import Logo from '@assets/img/logo.png'

export default function LandingPage() {
    return (
        <>
            <section className="w-full bg-white lg:grid h-screen place-content-center z-20 ">
                <div
                    className="mx-auto w-full p-4 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8"
                >
                    <div className="max-w-prose text-center sm:text-left">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            Understand user flow and
                            <strong className="text-indigo-600"> increase </strong>
                            conversions
                        </h1>

                        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
                            accusamus impedit minima harum corporis iusto.
                        </p>

                        <div className="mt-4 flex gap-4 sm:mt-6 justify-center sm:justify-start">
                            <a
                                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                                href="#"
                            >
                                Get Started
                            </a>

                            <a
                                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                                href="#"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className='px-8 py-2 h-full w-auto'>
                        <img src={Logo}/>
                    </div>
                </div>
            </section>
        </>
    )
}