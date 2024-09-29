import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashBoardSideBar from '../components/DashBoardSideBar';
import DashBoardProfile from '../components/DashBoardProfile';
import DashPost from '../components/DashPost';
import DashUsers from '../components/DashUsers';
import DashComments from '../components/DashComments';
import DashboardComp from '../components/DashboardComp';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashBoardSideBar />
      </div>
      {/* profile... */}
      {tab === 'profile' && <DashBoardProfile />}
      {/* posts... */}
      {tab === 'posts' && <DashPost />}
      {/* users */}
      {tab === 'users' && <DashUsers />}
      {/* comments  */}
      {tab === 'comments' && <DashComments />}
      {/* dashboard comp */}
      {tab === 'dash' && <DashboardComp />}
    </div>
  );
}