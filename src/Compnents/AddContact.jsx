import React from "react";

class AddContact extends React.Component {
    render() {
        return (
            <form>
                <div className="form-group row p-4">
                    <div className="col-xs-3">
                        <label htmlFor="ex2">Name:</label>
                        <input className="form-control w-25" id="name" type="text" />
                    </div>
                    <div className="col-xs-2">
                        <label htmlFor="ex1">Email:</label>
                        <input className="form-control w-25" id="email" type="text" />
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