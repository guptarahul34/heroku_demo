import React, { useEffect,useState } from 'react'
import axios from 'axios';


const Covid = () => {
    const [covidData,setCovidData] = useState([]);
    useEffect(()=>{
            const getData = async ()=>{
                const res = await axios.get("https://data.covid19india.org/data.json");
                setCovidData(res.data.statewise)
                // console.log(res);
            }
            getData();
    },[])
    return (
        <>
             {/* <button className="btn btn-warning" >Show Covid Data</button> */}
                    <div className="row justify-content-center">
                    <h1 className="text-center p-2  ">Covid 19 Tracker </h1>
                        <div className="col-lg-12 col-md-6 col-sm-12">
                        <table className="styled-table">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>dailyconfirmed</th>
                                        <th>active</th>
                                        <th>totalconfirmed</th>
                                        <th>state</th>
                                        <th>totalrecovered</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    covidData.map((data,index)=>{
                                        {/* console.log(data[0]) */}
                                        {/* const {dailyconfirmed,totalconfirmed,totaldeceased,date,totalrecovered} = data; */}
                                        return <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{data.confirmed}</td>
                                                    <td>{data.active}</td>
                                                    <td>{data.confirmed}</td>
                                                    <td>{data.state}</td>
                                                    <td>{data.recovered}</td>
                                                 </tr>
                                    })
                                }
                                    

                                </tbody>
                        </table>     
                         </div>
                      </div>
        </>
    )
}

export default Covid;
