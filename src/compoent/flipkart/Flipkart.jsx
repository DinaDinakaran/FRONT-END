import React, { useEffect ,useState} from 'react'
import "./Flipkart.css"
import axios from 'axios'







// const handledata = async () => {
//   const value = await axios.get("https://hekathon-2.herokuapp.com/flipkart")

// }


export default function Flipkart() {

  const [flpkrtndata, setflpkrtndata] = useState([]);
 
    const data1 = async ()=>{
      const data = await (await axios.get("https://hekathon-2.herokuapp.com/flipkart")).data;
      setflpkrtndata(data);
  
   
   
   
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
        {flpkrtndata.length &&
              flpkrtndata.map((flipkart) => {
                console.log(flipkart)
                return (
                  <tr>
                    <td>{flipkart.title}</td>
                    <td>{flipkart.image}</td>
                    <td>{flipkart.rating}</td>
                    <td>{flipkart.price}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>

    </>
  )
}
