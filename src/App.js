// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';


import Navbar from './component/navbar';

function App() {
const [currentPage, setCurrentPage]= useState('Home');

function renderAll(){
if(currentPage==="about"){
  return 
}
if(currentPage==="portfolio"){
  return
}
if(currentPage==="contact"){
  return
}
if(currentPage==="resume"){
  return
}
else{
  return
}
}

const pageChange= (page)=>{
setCurrentPage(page);
}
  return (
    <div className="App">
   <div>
    <Navbar  currentPage= {currentPage}  pageChange={pageChange} />

    {renderAll()}
   </div>
    </div>
  );
}

export default App;
