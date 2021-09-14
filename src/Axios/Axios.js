import React, { Component } from 'react'
import axios from 'axios';



class Axios extends Component {
    constructor(props){
        super(props);
        this.state = {data:[]}
    }
    showData = ()=>{
        const url = "https://jsonplaceholder.typicode.com/posts";
       axios.get(url).then((response)=>{
           this.setState({data:response.data})
       
       }).catch((error)=>{
            alert("error",error);
       });
    }
    render() {
        const data = this.state.data;
        return (
            <>
               <button className="btn btn-success" onClick={this.showData}>Show Data</button>  
               <br/><br/>
               
              <table className="table">
                  <thead>
                      <tr>
                        <th>userId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                      </tr>
                  </thead>
                  <tbody>
                  {
                    data.map((dataShow,index)=>{
                        const {id,userId,body,title} = dataShow;
                        return <tr key={index}>
                          <td>{userId}</td>
                          <td>{id}</td>
                          <td>{title}</td>
                          <td>{body}</td>
                      </tr>;
                    })
                  }
                      
                  </tbody>
              </table>
              
            </>
        )
    }
}

export default Axios;
