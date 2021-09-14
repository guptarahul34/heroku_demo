import React, { Component } from 'react'
import axios from 'axios';


class CovidApi extends Component {
    constructor(props){
        super(props);
        this.state = {UPresponse:[]}
    }
    showCovidData = ()=>{
        axios.get("https://data.covid19india.org/data.json")
        .then((response)=>{
         console.log(response.data);
        this.setState({UPresponse:response.data.statewise})
        }).catch((error)=>{
            console.log("error is cooming",error);
        })
    }
    
    render() {
     console.log(this.state);
    //  const dta = this.state.UPresponse;
        return (
            <>
           
             <button className="btn btn-warning  m-2" onClick={()=>{
                  this.showCovidData();
              }}>Show Covid Data</button>
                    <div className="row justify-content-center">
                        <div className="col-12">
                        <table className="styled-table">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Active</th>
                                        <th>confirmed</th>
                                        <th>Deaths</th>
                                        <th>State</th>
                                        <th>Recovered</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.UPresponse.map((data,index)=>{
                                       {/* const {dailyconfirmed,totalconfirmed,totaldeceased,date,totalrecovered} = data; */}
                                        return <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{data.active}</td>
                                                    <td>{data.confirmed}</td>
                                                    <td>{data.deaths}</td>
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
}

export default CovidApi;
