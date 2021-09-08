import React from 'react';
import './App.css';
class InfoTable extends React.Component
{
constructor()
{
super()
}
render()
{
return(
    <table className="table">
    <thead>
      <tr>
        <th>UserName</th>
        <th>City</th>
        <th>Age</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
   {
    this.props.getData.length > 0 ? 
    (
    this.props.getData.map(e=>

        <tr key={e._id}> 
        <td>{e.Username}</td>
        <td>{e.City}</td>
        <td>{e.Age}</td>
        <td><button className="btn btn-primary" onClick={event=>{
            this.props.setData(e)
        }}>Edit</button></td>
        <td><button className="btn btn-primary"  onClick={event=>{
            this.props.del(e)
        }}>Delete</button></td>
        </tr>

    )
    )
    :
    (
        <tr> 
        <td>No Data</td>
        </tr>
    )
   }
    </tbody>
  </table>
)
}
}
export default InfoTable;