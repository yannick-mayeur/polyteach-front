import React from 'react'
import UserLogo from '../../static/images/user.svg';
import { StudentCard }from './StudentCard';

export function Students() {

      return (
         <>
        <div className="container">
            <h1>Manage your students</h1>
                <div className="row mt-5 buttonsrow">
                        <div className="col-md-4 mb-2">
                        <button className="btnBlack" >
                        <UserLogo className="btnBlack-icon" />
                        IG3
                        </button>  
                        </div>
                        <div className="col-md-4 mb-2">
                        <button className="btnBlack" >
                        <UserLogo className="btnBlack-icon" />
                        IG4
                        </button>  
                        </div>
                        <div className="col-md-4 mb-2">
                        <button className="btnBlack" >
                        <UserLogo className="btnBlack-icon" />
                        IG5
                        </button>  
                        </div>
                </div>
                <div className="container"> 
                    <div className="card-group"> 
                        <div className="row"> 
                            <StudentCard/>
                            <StudentCard/>
                            <StudentCard/>
                            <StudentCard/>
                            <StudentCard/>
                            <StudentCard/>
                            <StudentCard/>
                            <StudentCard/>
                            <StudentCard/>
                            <StudentCard/>
                            <StudentCard/>
                            <StudentCard/>
                            <StudentCard/>
                            <StudentCard/>
                            <StudentCard/>
                            <StudentCard/>
                        </div>
                    </div>
                </div>

		</div>
         </>
      )
}