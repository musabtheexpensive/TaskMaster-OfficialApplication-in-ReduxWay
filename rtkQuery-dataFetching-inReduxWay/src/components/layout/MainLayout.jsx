import Feed from '../../pages/Feed';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Feed/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;