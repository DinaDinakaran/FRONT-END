import React from 'react'
import "./Interface.css"
import {Link} from "react-router-dom"
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Interface() {
  return (
    <div>
      {/* navbar */}
      <div className="navbar">
        <div className="postions">
          <div className="right">
            <div className="title">Web Scraping</div>
          </div>
          <div className="left">
            <div className="language"><LanguageIcon/></div>
            <div className="about"><SettingsIcon/></div>
            <div className="setting"><AccountCircleIcon/></div>
          </div>
        </div>
      </div>
    {/* content */}
    <div className='definiton'>
      <div className='def-titel'>Definition :</div>
      <div className="">Web scraping, web harvesting, or web data extraction is data scraping used for extracting data from websites.</div>
   
      <div className='content'>
       <Link to="/flipkart"> <button className="btn-flipkart">Flipkart</button></Link>
        <Link to="/snapdeal"><button className="btn-snapdeal">Snapdeal</button></Link>
        <Link to="/amazon" ><button className="btn-amazon">Amazon</button></Link>
      </div>
      </div>

    </div>
  )
}
