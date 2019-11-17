import React, { Component } from 'react'
import UserLogo from '../../static/images/user.svg';
import { StudentCard } from './StudentCard';

export default function Students({students, dispatchAddStudents}) {
  return (
    <>
      <div className="container">
        <h1>Manage your students</h1>
        <div className="row mt-5 buttonsrow">
          <div className="col-md-4 mb-2">
            <button className={students.isIG3Added? "saveBtn" : "btnBlack"} onClick={() => {
              const toAdd = students.data.filter(student => student.class == "IG3")
              dispatchAddStudents(toAdd, 0);
            }}>
              <UserLogo className="btnBlack-icon"/>
              IG3
            </button>
          </div>
          <div className="col-md-4 mb-2">
            <button className={students.isIG4Added? "saveBtn" : "btnBlack"} onClick={() => {
              const toAdd = students.data.filter(student => student.class == "IG4")
              dispatchAddStudents(toAdd, 1);
            }}>
              <UserLogo className="btnBlack-icon" />
              IG4
            </button>
          </div>
          <div className="col-md-4 mb-2">
            <button className={students.isIG5Added? "saveBtn" : "btnBlack"} onClick={() => {
              const toAdd = students.data.filter(student => student.class == "IG5")
              dispatchAddStudents(toAdd, 2);
            }}>
              <UserLogo className="btnBlack-icon" />
              IG5
            </button>
          </div>
        </div>
        <div className="container">
          <div className="card-group">
            <div className="row">
              {(students.selectedStudents && students.selectedStudents.length > 0) ?
                  students.selectedStudents.map(student => {
                    return <StudentCard key={student.id} idStudent={student.id} firstName={student.firstName} lastName={student.lastName} ig={student.class} email={student.email} />
                  })
                  :
                    <h1>You have added no student to this course yet. </h1>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
