import React from 'react';
import './App.css';
import InfoForm from './Form';
import Infotable from './Table';
import axios from 'axios';

class App extends React.Component
{
constructor()
{
super();
this.state ={
  data:[],
  editData:[]
}
}
create = data =>
{
  if(!data.isEdit)
  {
    axios.post("http://localhost:3001/info1",data).then(res =>{
      //console.log(res)
      this.getAll();
    })
  }
  else
  {
  axios.put("http://localhost:3001/info1/update",data).then(res =>{
    this.getAll();
  })
  }
  
}
componentDidMount()
{
this.getAll();
}
getAll()
{
  axios.get("http://localhost:3001/info1").then(res =>{
    // console.log(res.data)
    this.setState({
      data:res.data
    })
  })
}

update = data =>{
  console.log(data)
  this.setState({
    editData:data
  })
}

del = data =>
{
var option = window.confirm('Are you sure want to delete this???')
if(option)
{
  axios.delete(`http://localhost:3001/info1/delete/${data._id}`).then(res =>{
  console.log(res)
  this.getAll() 
  })
}
}
render()
{
return(
  <div className="container mt-5">
    <div className="row">
      <div className="col-lg-6">
       <InfoForm myData={this.create} setForm={this.state.editData}/>
      </div>
      <div className="col-lg-6">
      <Infotable getData={this.state.data} setData={this.update} del={this.del}/>
      </div>
    </div>
  </div>
)
}
}
export default App;