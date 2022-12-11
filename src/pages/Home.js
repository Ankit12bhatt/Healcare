import React from 'react';
import './Homestyle.css';
import fare from './images/fare.jpg'

function Home() {
  return (
    <>
    <div className="cards">
    <div className="card-single">
    <div>
      <img style={{height:105, width:105}} src={fare} alt="profile"/>
    </div>
    <div className="content" style={{fontFamily: 'Cursive'}}>
      <h2 style={{fontFamily: 'Cursive'}}> Ankit Bhatt</h2>
      <h3 style={{fontFamily: 'Cursive'}}> DOB:- 01-11-99</h3>
      <h4 style={{fontFamily: 'Cursive'}}> Gender:- Male</h4>

    </div>
    </div>
    </div>
    <div className="INFO">
      <div className="add">
      <div>
      <label style={{fontSize:"24px"}}>Address :- </label>
      {/* <input type="text" id="house number" placeholder="enter house number" value="plot no.324"/> */}
      <h3 style={{fontFamily: 'Cursive'}}> <span>       </span>plot no. 324</h3>
      </div>
      <div>
      {/* <input type="text" id="house number" placeholder="street, area" value="lane no. 6, Banjarawala"/> */}
      <h3 style={{fontFamily: 'Cursive'}}> <span>       </span>Lane no 6,bhagirathi puram</h3>
      </div>
      <div>
      {/* <input type="text" id="house number" placeholder="City" value="Dehradun"/> */}
      <h3 style={{fontFamily: 'Cursive'}}> <span>       </span>Banjarawala, Dehradun</h3>
      <h3 style={{fontFamily: 'Cursive'}}> <span>       </span>Uttrakhand, <span style={{fontFamily: 'Cursive'}}>248001</span></h3>
      </div>
      </div>
    
      </div>
    
    <div>
    <div className="INFO">
      <div className="add">
      <label> Mobile number:-</label>
      <h2 className="INFO" style={{fontFamily: 'Cursive'}}>9119095546</h2>
      <label>Email:- </label>
      <h2 className="INFO" style={{fontFamily: 'Cursive'}}>ankitbhatt640@gmail.com</h2>
      </div>
      </div>
    </div>


    <div>

      
    </div>
    

    

    
    </>
  );
}

export default Home;