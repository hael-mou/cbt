
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const pages = [
    { path: '/',         time: 5000 },
    { path: '/page1',    time: 8000 },
    { path: '/page2',    time: 8000 },
    { path: '/page4',    time: 8000 },
];

export const App: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const indexRef = useRef(0);

    useEffect(() => {
        const interval = setTimeout(() => {
          indexRef.current = (indexRef.current + 1) % pages.length;
          navigate(pages[indexRef.current].path);
        }, pages.find(p => p.path === location.pathname)?.time || 5000);
    
        return () => clearTimeout(interval);
    }, [location, navigate]);

    return (
        <main className="w-full h-screen flex items-center justify-center overflow-hidden">
            <Outlet />
        </main>
    );
};

export default App;
