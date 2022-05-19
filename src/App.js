import { Routes, Route } from "react-router-dom";

import CompanyVisualization from './screens/CompanyVisualization';
import Results from './screens/Results';
import Search from './screens/Search';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Routes>
            <Route path="companyVisualization" element={<CompanyVisualization />}>
                <Route path=":companyId" element={<CompanyVisualization />} />
            </Route>
            <Route path="results" element={<Results />}>
                <Route path=":searchTerm" element={<Results />} />
            </Route>
            <Route path="/" element={<Search />} />
        </Routes>
    );
}

export default App;
