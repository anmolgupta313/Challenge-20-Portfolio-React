import React, { useState } from 'react';

import Navbar from './navbar';
import Footer from './footer';
import Home from './pages/home';

import About from './pages/about-me';



function Container() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderAll = () => {
        if (currentPage === "Home") {
            return <Home currentPage={currentPage} pageChange={pageChange} />
        }
        if(currentPage==="About"){
          return <About />
        }
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
            </div>
            <div>
            {renderAll()}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Container;