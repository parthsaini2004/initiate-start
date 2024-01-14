import React from 'react';
import '../student/student.css';
import studimg from '../student/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'


const Student = () => {
    return (
        <>
        <div className="studentpage">
            <div className="studentdata">

            <div className="studentimg">
                        <img className="imgstudent" src={studimg} alt="" />
                    </div>
                    
                <div className="name">
                    <div className="compact">
                    <div className="studentname">
                        Parth Saini 
                    </div>
                    <div className="collegename">
                        Delhi Technical University
                    </div>
                    
                    <div className="interest">
                    <ul>
                                <li>sports</li>
                                <li>technology</li>
                            </ul>
                            </div>
                    {/* <div className="studentimg">
                        <img className="imgstudent" src={studimg} alt="" />
                    </div> */}
                    </div>
                    <div className='applied'>
                        
                            
                            <div id="container">
                            <div id="circle">
                            <div id="small-circle">
                                
                            </div>
                            <div className="aligntext">
                                    18 jobs <br></br>applied
                                </div>
                            </div>
                            </div>
                            
                        </div>

                   
                    </div>
                   
            </div>
        </div>

        </>
    )
}

export default Student
