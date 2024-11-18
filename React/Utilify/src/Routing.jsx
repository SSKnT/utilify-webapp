import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import TextSummarize from './pages/textSummarize';

function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App />} >
                    {/* Add child routes */}
                    <Route index element={<Home />} />
                    <Route path="/textSum" element={<TextSummarize />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;