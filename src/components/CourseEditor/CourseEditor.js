import React, { Component } from 'react';
import { Informations } from './Informations';
import { Videos } from './Videos';
import { Students } from './Students';
import { Link } from 'react-router-dom';
  
  class CourseEditor extends Component {

    constructor(props) {
      super(props);
      this.state = {
        index: 0,
        name: "",
        picture: "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-7.jpg",
        description: ""
      }
    }

    saveName = (name) => {
      this.setState({ 
        name: name
       })
       console.log(this.state)
    }


    getName = () => {
       return this.state.name
    }

    getDescription = () => {
      return this.state.description
   }

    saveDescription = (description) => {
      this.setState({ 
        description: description
       })
    }

    savePicture = (picture) => {
      this.setState({ 
        picture: picture
       })
    }

    data = [
        {
          title: 'Informations',
          component: <Informations saveName={this.saveName} name={this.getName} saveDescription={this.saveDescription} description={this.getDescription}/>
        },
        {
          title: 'Videos',
          component: <Videos/>
        },
        {
           title: 'Students',
           component: <Students/>
        }
      ]
    
    render() {
      return (
        <div className="content">
        <div className="courseShowcase">
            <div className="main">
                <div className="tab">
                <ul className="tab-list">
                    {
                    this.data.map( (tab, i) =>
                        <li key={i}
                        data-active={ this.state.index === i }
                        onClick={() => this.setState({ index: i })} className="mx-auto pannel">
                          <h1 className="tabtitle">{tab.title}</h1>  
                        </li>
                    )
                    }
                </ul>
                <div className="tab-content">
                    <div data-content={this.state.index + 1}>
                    {this.data[this.state.index].component}
                    </div>
                </div>
                </div>

                
                  <div className="row mt-5 menubuttonsrow col-md-6">
                        <div className="col-md-6">
                        <Link to="/">
                        <button className="cancelBtn" >
                        CANCEL
                        </button>  
                        </Link>
                        </div>
                        <div className="col-md-6">
                        <button className="saveBtn" >
                        SAVE
                        </button>  
                        </div>
                  </div>
                
            </div>
        </div>
        </div>
      );
    }
  }
  
export default CourseEditor;