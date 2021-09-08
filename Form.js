import React from 'react';
import './App.css';
class InfoForm extends React.Component
{
constructor()
{
super();
this.state = {
    _id:"",
    Username:"",
    City:"",
    Age: "",
    isEdit:false
}
}
infoChange = event => {
    const{name,value} = event.target;
    this.setState({
        [name]:value
    })
}

infoSubmit = event =>
{
    if(!this.state.isEdit)
    {
    let data ={
        isEdit:this.state.isEdit,
        Username:this.state.Username,
        City:this.state.City,
        Age:this.state.Age
    }
    //console.log(data)
    this.props.myData(data);
}
else
{
    let data ={
        isEdit:this.state.isEdit,
        _id:this.state._id,
        Username:this.state.Username,
        City:this.state.City,
        Age:this.state.Age
    }
    this.props.myData(data);

}

}

componentWillReceiveProps(props)
{
if(props.setForm._id!=null)
{
this.setState({
    isEdit:true,
    _id:props.setForm._id,
    Username:props.setForm.Username,
        City:props.setForm.City,
        Age:props.setForm.Age

})
}
}
render()
{
return(
    <form onSubmit={this.infoSubmit} autoComplete="off">
    <div className="form-group">
      <label>User Name:</label>
      <input type="text" className="form-control" onChange={this.infoChange} name="Username" value={this.state.Username}/>
    </div>
    <div className="form-group">
      <label>City:</label>
      <input type="text" className="form-control" onChange={this.infoChange} name="City" value={this.state.City}/>
    </div>
    <div className="form-group">
      <label>Age:</label>
      <input type="number" className="form-control" onChange={this.infoChange} name="Age" value={this.state.Age}/>
    </div><br/>
    <button type="submit" className="btn btn-primary">{this.state.isEdit ? 'Update' : 'Create'}</button>
  </form>
)
}
}
export default InfoForm;