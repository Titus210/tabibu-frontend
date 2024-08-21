import { useState } from "react";
import doctorImage_1 from "../../../../assets/images/doctor-patient-1.png";
import doctorImage_2 from "../../../../assets/images/doctor-patient-2.png";
import doctorImage_3 from "../../../../assets/images/doctor-patient-3.png";

const welcomeInfo = [
    {
        id: 1,
        image: doctorImage_1,
        title: "Secure Payment",
        description: "Our platform ensures all transactions are safe and secure, protecting your sensitive information with advanced encryption."
    },
    {
        id: 2,
        image: doctorImage_2,
        title: "Online Consultation",
        description: "Consult with certified doctors from the comfort of your home. Get instant medical advice through our online platform."
    },
    {
        id: 3,
        image: doctorImage_3,
        title: "24/7 Doctors",
        description: "Access to medical professionals around the clock. Our team of doctors is available 24/7 to assist you with any health concerns."
    },
    {
        id: 4,
        image: doctorImage_1,
        title: "AI-Powered Chatbot",
        description: "Our intelligent chatbot provides quick responses to your health-related queries, guiding you to the right resources."
    }
];

const GetStarted = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    // When button is clicked we want to simulate changing image and text and also loading button
    const handleGetStarted = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % welcomeInfo.length);
        }, 1000);
    };

    const currentInfo = welcomeInfo[currentIndex];

    return (
        <div className="flex items-center h-screen justify-center w-full ">
            <div className="md:w-6/12   mx-auto h-full flex flex-col gap-4 items-center justify-center ">
                {/* Display current info */}
                <div className="text-center flex flex-col items-center ">
                    <div className="flex items-center justify-center image h-3/12 w-full">
                        {currentInfo.image && <img src={currentInfo.image} alt={currentInfo.title} className="h-" />}
                    </div>
                    <div className="">
                        <h2 className="text-2xl font-bold mb-2">{currentInfo.title}</h2>
                        <p className="text-lg">{currentInfo.description}</p>
                    </div>
                </div>

                {/* Button */}
                <button
                    onClick={handleGetStarted}
                    className={`px-6 py-2 bg-blue-500 text-white bg-slate-700 font-semibold rounded-lg ${loading ? "opacity-70" : ""}`}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Get Started"}
                </button>
            </div>
        </div>
    );
};

export default GetStarted;
