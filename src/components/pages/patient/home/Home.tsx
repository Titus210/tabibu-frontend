import { FaWhatsapp } from "react-icons/fa"
import Categories from "../../../layouts/categories/Categories"
import DoctorSlider from "../../../layouts/doctors-slider/DoctorSlider"
import Hero from "../../../layouts/hero/Hero"
import NavBar from "../../../layouts/navbar/NavBar"
import Footer from "../../../layouts/footer/Footer"

const Homepage = () => {
    return (
        <>
            <div className="flex flex-col gap-12 lg:w-screen relative">
                <div className="flex flex-col gap-4 md:gap-12 lg:w-10/12 mx-auto">
                    {/* Navbar */}
                    <NavBar />

                    {/* Hero Section */}
                    <section className="hidden md:flex">
                        <Hero />
                    </section>

                    {/* categories */}
                    <section className="flex flex-col gap-3 w-full">
                        <div className="section-heading">
                            <h2 className="text-xl font-bold">Our categories</h2>
                        </div>
                        <Categories />
                    </section>

                    {/* categories */}
                    <section className="flex flex-col gap-3 w-full ">
                        <div className="section-heading">
                            <h2 className="text-xl font-bold">Search By</h2>
                            <div className="flex flex-row gap-2 buttons category-buttons">
                                <button className="px-2 py-1 border border-r-1 border-slate-200 rounded-full">Profession</button>
                                <button className="px-2 py-1 border border-r-1 border-slate-200 rounded-full">Price</button>
                                <button className="px-2 py-1 border border-r-1 border-slate-200 rounded-full">Location</button>
                                <button className="px-2 py-1 border border-r-1 border-slate-200 rounded-full">Hospital</button>
                            </div>
                        </div>
                        <DoctorSlider />
                    </section>

                    {/* categories */}
                    <section className="flex flex-col gap-3 w-full ">
                        <div className="section-heading flex justify-between">
                            <h2 className="text-xl font-bold">Top Rated</h2>
                            <p>See all</p>
                        </div>
                        <DoctorSlider />
                    </section>

                    {/* Hero Section */}
                    <section className="hidden md:flex">
                        <Hero />
                    </section>
                </div>
                <div className="chat fixed right-4 bottom-4 lg:right 
                -12">
                    <p className="bg-green flex justify-center items-center p-2 rounded-full w-20 h-20">
                        <FaWhatsapp className="text-6xl text-white" />
                    </p>
                </div>

                {/* footer */}
                <footer className="bg-slate-900 text-white text-center p-4">
                    <Footer/>
                    <p>&copy; 2021 All Rights Reserved</p>
                </footer>
            </div>
        </>
    )
}

export default Homepage
