import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import PageContent_TS from '@/pages/text_summarize';
import PageContent_TA from '@/pages/text_analyze';
import PageContent_TF from '@/pages/text_fortune';
import PageContent_IBR from '@/pages/img_bg_removal';
import PageContent_IC from '@/pages/img_compress';
import PageContent_IMD from '@/pages/img_metadata';
import PageContent_IM from './pages/img_merge';

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
                    <Route path='/img_bg_removal' element={<PageContent_IBR />} />
                    <Route path='/img_compress' element={<PageContent_IC />} />
                    <Route path ='/img_merge' element={<PageContent_IM />} />
                    <Route path='/img_metadata' element={<PageContent_IMD />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;