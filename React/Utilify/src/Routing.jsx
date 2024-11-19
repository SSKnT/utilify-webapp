import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import PageContent_TS from './pages/text_summarize';
import PageContent_TA from './pages/text_analyze';
import PageContent_TF from './pages/text_fortune';



function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App />} >
                    {/* Add child routes */}
                    <Route index element={<Home />} />
                    <Route path="/text_sum" element={<PageContent_TS />} />
                    <Route path="/text_analyze" element={<PageContent_TA />} />
                    <Route path="/text_fortune" element={<PageContent_TF />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;