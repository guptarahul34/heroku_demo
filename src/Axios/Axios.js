import React, { Component } from 'react';
import axios from 'axios';



class Axios extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    showData = ()=>{
        const url = "https://jsonplaceholder.typicode.com/posts/1";
       axios.get(url).then((response)=>{
           const {id,userId,title,body} = response.data;
           this.setState({userId,id,body,title})
       
       }).catch((error)=>{
            alert("error",error);
       });
    }
    render() {
      
        return (
            <>
               <button className="btn btn-success" onClick={this.showData}>Show Data</button>  
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
                  {/* {
                    data.map((dataShow,index)=>{
                        const {id,userId,body,title} = dataShow;
                        return <tr key={index}>
                          <td>{userId}</td>
                          <td>{id}</td>
                          <td>{title}</td>
                          <td>{body}</td>
                      </tr>;
                    })
               } */}
               <tr>
                          <td> {this.state.userId} </td>
                          <td>{this.state.id}</td>
                          <td>{this.state.title}</td>
                          <td>{this.state.body}</td>
                      </tr>
                  </tbody>
              </table>
              
            </>
        )
    }
}

export default Axios;
