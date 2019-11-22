import React from 'react'
import UserLogo from '../../static/images/user.svg';
import { StudentCard } from './StudentCard';
export default function Students({allStudents, newCourseStudents, dispatchAddStudents, dispatchRemoveStudents, dispatchRemoveStudent}) {
  return (
    <>
      <div className="container">
        <h1>Manage your students</h1>
        <div className="row mt-5 buttonsrow">
          <div className="col-md-4 mb-2">
            <button className={newCourseStudents.isIG3Added? "saveBtn" : "btnBlack"} onClick={() => {
              const IG3 = allStudents.data.filter(student => student.class == "IG3")
              newCourseStudents.isIG3Added? dispatchRemoveStudents(IG3, 0) : dispatchAddStudents(IG3, 0);
            }}>
              <UserLogo className="btnBlack-icon"/>
              IG3
            </button>
          </div>
          <div className="col-md-4 mb-2">
            <button className={newCourseStudents.isIG4Added? "saveBtn" : "btnBlack"} onClick={() => {
              const IG4 = allStudents.data.filter(student => student.class == "IG4")
              newCourseStudents.isIG4Added? dispatchRemoveStudents(IG4, 1) : dispatchAddStudents(IG4, 1);
            }}>
              <UserLogo className="btnBlack-icon" />
              IG4
            </button>
          </div>
          <div className="col-md-4 mb-2">
            <button className={newCourseStudents.isIG5Added? "saveBtn" : "btnBlack"} onClick={() => {
              const IG5 = allStudents.data.filter(student => student.class == "IG5")
              newCourseStudents.isIG5Added? dispatchRemoveStudents(IG5, 2) : dispatchAddStudents(IG5, 2);
            }}>
              <UserLogo className="btnBlack-icon" />
              IG5
            </button>
          </div>
        </div>
        <div className="container">
          <div className="card-group">
            <div className="row">
              {console.log(newCourseStudents)}
              {(newCourseStudents.selectedStudents && newCourseStudents.selectedStudents.length > 0) ?
                  newCourseStudents.selectedStudents.map(student => {
                    return <StudentCard key={student.id} dispatchRemoveStudent={dispatchRemoveStudent} student={student} />
                  })
                  :
                   <div className="mx-auto text-center"> <h1>You have added no student to this course yet. </h1> </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
