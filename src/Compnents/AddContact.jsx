import React from "react";

class AddContact extends React.Component {
    render() {
        return (
            <form>
                <div class="form-group row p-4">
                    <div class="col-xs-3">
                        <label for="ex2">Name:</label>
                        <input class="form-control w-25" id="name" type="text" />
                    </div>
                    <div class="col-xs-2">
                        <label for="ex1">Email:</label>
                        <input class="form-control w-25" id="email" type="text" />
                    </div>
                    <div class="col-xs-2">
                    <button className="btn btn-primary mt-1 btn-sm">Add</button>
                    </div>

                    
                </div>
                
            </form>

        )
    }
}

export default AddContact;