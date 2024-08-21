import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

import GetStarted from "../components/pages/common/get-started/GetStarted"


const AppRoutes = () => {
    return (
        <Router>
            {/*Common Routes */}
            <Routes>
                <Route path="/" element={<GetStarted />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes