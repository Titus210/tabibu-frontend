import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

import GetStarted from "../components/pages/common/get-started/GetStarted"
import NotFound from "../components/pages/common/not-found/NotFound"
import UserRole from "../components/pages/common/user-role/UserRole"


const AppRoutes = () => {
    return (
        <Router>
            {/*Common Routes */}
            <Routes>
                <Route path="/" element={<GetStarted />} />
                <Route path="/user-role" element={<UserRole />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes