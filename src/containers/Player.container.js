import React, {Component} from 'react';


export default class Player extends Component {
    state = {
      courseID: '',
    }
    componentDidMount () {
      const { courseID } = this.props.match.params
     

      this.setState({
          courseID: courseID,
      });
    }

    render() {
        return (
        <h1>{"This will be the player for "+ this.state.courseID}</h1>
        );
      }
}
  