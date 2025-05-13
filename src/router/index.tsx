
import { createBrowserRouter } from "react-router-dom";
import { Intro } from "@/pages/Intro";
import App from "@/pages/App";
import { Page1 } from "@/pages/Services/Page1";
import { Page2 } from "@/pages/Services/Page2";
import ClientPage from "@/pages/Clients";

export const router = createBrowserRouter([
    {
        path        : "/",
        element     : <App />,
        children    : [
            {
                path: "/",
                element: <Intro />
            },
            {
                path: "/page1",
                element: <Page1 />
            },
            {
                path: "/page2",
                element: <Page2 />
            },
            {
                path: "/page4",
                element: <ClientPage />
            },
            {
                path: "*",
                element: <Intro />
            }
        ]
    }
]);