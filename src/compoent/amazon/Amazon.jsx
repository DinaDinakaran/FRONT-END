
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Amazon.css"





export default function Amazon() {
  const [bookings, setbookings] = useState([]);
 
    const data1 = async ()=>{
      const data = await (await axios.get("https://hekathon-2.herokuapp.com/amazon")).data;
      setbookings(data);
  
   
   
   
  }
 
  useEffect( () => {
 data1();
  },[]);
 


  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">TITLE</th>
            <th scope="col">IMAGE</th>
            <th scope="col">RATING</th>
            <th scope="col">PRICE</th>
          </tr>
        </thead>
        <tbody>
        {bookings.length &&
              bookings.map((amazon) => {
                console.log(amazon)
                return (
                  <tr>
                    <td className='warp'>{amazon.title}</td>
                    <td>{amazon.image}</td>
                    <td>{amazon.rating}</td>
                    <td>Rs :{amazon.price}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>

    </>
  )
}
