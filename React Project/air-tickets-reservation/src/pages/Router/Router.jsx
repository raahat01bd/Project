import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([

    {
        path: "/",
        element: <Root></Root>,
        children: [
            { path: "/", element: <Home /> },
            { path: "../About", element: <About /> },
            { path: "../Content", element: <Contact /> }
        ]
       
    },

    
    
])