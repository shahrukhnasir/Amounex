'use client'
import React, { useEffect } from 'react'

const MainLayout = ({ children }) => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      
      }, []);
    return (
        <>
            <main>{children}</main>


        </>
    )
}

export default MainLayout