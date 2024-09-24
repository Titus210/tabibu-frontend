import DoctorCards from "../../ui/cards/DoctorCards"


const DoctorSlider = () => {
    return (
        <>
            <div className="flex flex-row gap-4 md:gap-12 py-4 w-screen lg:w-full overflow-hidden ">
                <DoctorCards />
                <DoctorCards />
                <DoctorCards />
                <DoctorCards />
                <DoctorCards />
                <DoctorCards />
                <DoctorCards />
            </div>
        </>
    )
}

export default DoctorSlider