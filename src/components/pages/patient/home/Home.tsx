import Categories from "../../../layouts/categories/Categories"
import Hero from "../../../layouts/hero/Hero"
import NavBar from "../../../layouts/navbar/NavBar"

const Homepage = () => {
    return (
        <>
            <div className="flex flex-col gap-12 w-screen">
                <div className="flex flex-col gap-4 md:gap-12 lg:w-10/12 mx-auto">
                    {/* Navbar */}
                    <NavBar />

                    {/* Hero Section */}
                    <section className="hidden md:flex">
                    <Hero />
                    </section>

                    {/* categories */}
                    <section className="flex flex-col gap-3 w-screen bg-slate-200">
                        <div className="section-heading">
                            <h2 className="text-xl font-bold">Our categories</h2>
                        </div>
                        <Categories />
                    </section>
                </div>
            </div>
        </>
    )
}

export default Homepage
