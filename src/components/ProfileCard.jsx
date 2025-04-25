import React from 'react'
import { Link } from 'react-router-dom';

function ProfileCard(props) {
    const {data}=props
    const {src, heading, desc}=data;

    const img={
        height:"500px",
        width:"100%",
        objectFit:"cover"
    }
    
    return (
        <>
            <div className="col-3">
                <div className="card my-4" style={{width: "18rem"}}>
                   <Link to={`/about/${props.index}`}>
                   <img src={src} style={img} className="card-img-top" alt="..."/>
                   </Link>
                        <div className="card-body">
                            <h5 className="card-title">{heading.substr(0,20)}...</h5>
                            <p className="card-text">{desc?<i>{desc.substr(0,50)}...</i>:<b>Desc not found</b>}</p>
                            <a href="#" className="btn btn-primary">Add To Card </a>
                        </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCard
