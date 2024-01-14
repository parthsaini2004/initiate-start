import React from 'react';
import '../data/data.css';
import dataimg from '../data/christopher-campbell-rDEOVtE7vOs-unsplash.jpg';
import pic1 from '../data/icons8-linkedin-50.png';
import pic2 from '../data/icons8-instagram-50.png';
import pic3 from '../data/icons8-facebook-50.png';
import pic4 from '../data/icons8-email-50.png';
const Data = () => {
    return (
        <>
           <div className="data">
            <div className="data1">
                <div className="imgdata"><img src={dataimg} alt="" /></div>
                <div className="namedata"> USER NAME</div>
                <div className="title">Developer</div>
                <div className="info">i am an avid reader and a competitive programmer i like to solve problem and endure long challenges </div>
                <div className="articles">
                    <div className="art1 art"><b>250+ </b>projects</div>
                    <div className="art2 art"><b>200</b> publications</div>
                    <div className="art3 art"><b>10+ </b> <br></br> referals</div>
                </div>
            </div>
            <div className="data2">
                <div className="data2_sub1">
                    <div className="textdata2">
                       Placeholder
                    </div>
                    <div className="infodata2">
                        this area is for sample testing you can insert any text here that you want
                    </div>
                    <div className="circle">
                    <div class="outer">
                        <div class="inner">
                            <div className="circletext">
                                <b>750+</b> companies applied
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="data2_sub2">
                    <div className="links">
                        <div className="link1"><a href=""><img src={pic1} alt="" /></a></div>
                        <div className="link2"><a href=""><img src={pic2}alt="" /></a></div>
                        <div className="link3"><a href=""><img src={pic3} alt="" /></a></div>
                        <div className="link4"><a href=""><img src={pic4} alt="" /></a></div>
                    </div>
                </div>
            </div>
           </div>
        </>
    )
}

export default Data
