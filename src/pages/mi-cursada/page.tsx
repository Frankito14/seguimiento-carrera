import TablaCarrera from "./components/TablaCarrera"

export default function PageCarrera() {
    return (
        <>
            <div className='w-full md:w-3/4 m-auto font-sans min-h-screen'>
                <div className="w-full p-2">
                    <TablaCarrera />
                </div>
            </div>
        </>
    )
}