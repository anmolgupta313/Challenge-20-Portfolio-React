import React, { useState } from 'react';

import Navbar from './navbar';

import Home from './pages/home';


function Container() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderAll = () => {
        if (currentPage === "Home") {
            return <Home />
        }
        // if(currentPage==="about"){
        //   return 
        // }
        // if(currentPage==="portfolio"){
        //   return
        // }
        // if(currentPage==="contact"){
        //   return
        // }
        // if(currentPage==="resume"){
        //   return
        // }
        // else{
        //   return
        // }
    }

    const pageChange = (page) => {
        setCurrentPage(page);
    }
    return (
        <div className="App">
            <div>
                <Navbar currentPage={currentPage} pageChange={pageChange} />
                {renderAll()}
            </div>
        </div>
    );
}

export default Container