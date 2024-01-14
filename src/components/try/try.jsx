import React from 'react';
import '../try/try.css';
import personimg from './christopher-campbell-rDEOVtE7vOs-unsplash.jpg';

  


const Try = () => {
    return (
        <>
        <div className="card" >
  <img className="card-img-top" src={personimg} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Helina</h5>
    <p className="card-text">Delhi Technical University</p>

    

    <div className="interested">
        <ul>
            <li>technology</li>
            <li>sports</li>
        </ul>
        <button className='aplliedno'>
        <p className="apllied">12</p>
    </button>
    </div>
    
    <a href="#" className="btn btn-primary">Know more</a>
  </div>
</div>
        </>
    )
}

export default Try
