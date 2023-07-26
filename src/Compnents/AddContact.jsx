import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    }
    add=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("Fields are mandetory")
            return
        }
        this.props.addContactHandler(this.state)
        this.setState({name:"",email:""})

    }
    render() {
        // console.log(this.props);

        return (
            <form onSubmit={this.add}>
                <div className="form-group row p-4" >
                    <div className="col-xs-3">
                        <label htmlFor="ex2">Name:</label>
                        <input className="form-control w-25" id="name" type="text" onChange={(e)=>this.setState({name:e.target.value})} value={this.state.name} />
                    </div>
                    <div className="col-xs-2">
                        <label htmlFor="ex1">Email:</label>
                        <input className="form-control w-25" id="email" type="text" onChange={(e)=>this.setState({email:e.target.value})} value={this.state.email} />
                    </div>
                    <div className="col-xs-2">
                        <button className="btn btn-primary mt-1 btn-sm">Add</button>
                    </div>


                </div>

            </form>

        )
    }
}

export default AddContact;