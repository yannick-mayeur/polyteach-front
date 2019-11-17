import React, { Component } from 'react'
import UserLogo from '../../static/images/user.svg';
import { StudentCard } from './StudentCard';

export default class Students extends Component {

    constructor(props) {
        super(props);
        const allStudents = props.getAllStudents()
        this.state = {
            ig3: allStudents.filter(student => student.class === 'IG3'),
            ig4: allStudents.filter(student => student.class === 'IG4'),
            ig5: allStudents.filter(student => student.class === 'IG5'),
        };
    }

    addIG3 = () => {
        this.state.ig3.map(student => this.appendIfNotPresent(this.props.getSelectedStudents(), student))
    }

    addIG4 = () => {
        this.state.ig4.map(student => this.appendIfNotPresent(this.props.getSelectedStudents(), student))
    }

    addIG5 = () => {
        this.state.ig5.map(student => this.appendIfNotPresent(this.props.getSelectedStudents(), student))
    }
    appendIfNotPresent = (array, student) => {
        console.log("append")
        console.log(array)
        array.indexOf(student) === -1 ? array.push(student) : array
        this.props.saveStudents(array)
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1>Manage your students</h1>
                    <div className="row mt-5 buttonsrow">
                        <div className="col-md-4 mb-2">
                            <button className="btnBlack" onClick={() => this.addIG3()}>
                                <UserLogo className="btnBlack-icon" />
                                IG3
                       </button>
                        </div>
                        <div className="col-md-4 mb-2">
                            <button className="btnBlack" onClick={() => this.addIG4()}>
                                <UserLogo className="btnBlack-icon" />
                                IG4
                       </button>
                        </div>
                        <div className="col-md-4 mb-2">
                            <button className="btnBlack" onClick={() => this.addIG5()}>
                                <UserLogo className="btnBlack-icon" />
                                IG5
                       </button>
                        </div>
                    </div>
                    <div className="container">
                        <div className="card-group">
                            <div className="row">
                                {console.log(this.props.getSelectedStudents())}
                                {this.props.getSelectedStudents() && this.props.getSelectedStudents() > 0 ?
                                    this.props.getSelectedStudents().map((student) => {
                                        const studentCard =
                                            <StudentCard key={student.id} idStudent={student.id} firstName={student.firstName} lastName={student.lastName} ig={student.class} email={student.email} />
                                        return studentCard;
                                    })
                                    :
                                    <div style={{ textAlign: "center"}}><h1>You have added no student to this course yet. </h1></div>}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    }

}