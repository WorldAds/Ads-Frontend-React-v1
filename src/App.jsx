import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Management from './pages/Management';
import NFTMarket from './pages/NFTMarket';
import UserManagement from './pages/Management/User';
import DeviceManagement from './pages/Management/Device';
import AdvertiserManagement from './pages/Management/Advertiser';
import DeveloperManagement from './pages/Management/Developer';
import ReviewerManagement from './pages/Management/Reviewer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="nft-market" element={<NFTMarket />} />
          <Route path="management" element={<Management />}>
            <Route path="user" element={<UserManagement />} />
            <Route path="device" element={<DeviceManagement />} />
            <Route path="advertiser" element={<AdvertiserManagement />} />
            <Route path="developer" element={<DeveloperManagement />} />
            <Route path="reviewer" element={<ReviewerManagement />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
