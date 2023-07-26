import React from "react";

import img from "../Images/img.png"

const ContactCard = (props) => {
    const { id, name, email } = props.contact;

    return (
        <div className="card" style={{ width: "300px" }} key={id}>
            <img className="card-img-top w-25" src={img} alt="Card image" />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <h4 className="card-title">{email}</h4>
                <button className="btn btn-primary ml-1">edit</button>
                <button className="btn btn-danger ml-2">delete</button>


            </div>
        </div>
    )
}

export default ContactCard;
