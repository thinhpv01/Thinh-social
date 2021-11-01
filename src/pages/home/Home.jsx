import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightBar/Rightbar';
import Sidebar from '../../components/sideBar/SideBar';
import TopBar from '../../components/topbar/TopBar';
import './home.css';
export default function Home() {
    return (
        <>
            <TopBar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    );
}
