

const Hero = () => {
    return (
        <>
            <section className="hero w-full flex flex-col justify-center items-center">
                <div className="hero__container h-96 bg-slate-500 w-full flex flex-col justify-center items-center">
                    <div className="hero__content">
                        <h1 className="hero__title">Welcome to the Patient Portal</h1>
                        <p className="hero__description">Your health is our priority. We are here to help you.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero