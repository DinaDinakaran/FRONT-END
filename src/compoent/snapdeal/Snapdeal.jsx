import React, { useEffect,useState } from 'react'
import "./Snapdeal.css"


import axios from 'axios'

export default function Snapdeal() {
  const [snpdldata, setsnpdldata] = useState([]);
 
  const data1 = async ()=>{
    const data = await (await axios.get("https://hekathon-2.herokuapp.com/snapdeal")).data;
    setsnpdldata(data);

 
 
 
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
      {snpdldata.length &&
            snpdldata.map((snapdeal) => {
              console.log(snapdeal)
              return (
                <tr>
                  <td>{snapdeal.title}</td>
                  <td>{snapdeal.image}</td>
                  <td>{snapdeal.rating}</td>
                  <td>{snapdeal.price}</td>
                </tr>
              );
            })}
      </tbody>
    </table>

  </>
)
}
