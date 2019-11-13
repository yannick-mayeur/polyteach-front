import React, { Component } from 'react';
import { Informations } from './Informations';
import { Videos } from './Videos';
import { Students } from './Students';
  
  class CourseEditor extends Component {

    constructor(props) {
      super(props);
      this.state = {
        index: 0
      }
    }

    data = [
        {
          title: 'Informations',
          component: <Informations/>
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
                        <button className="cancelBtn" >
                        CANCEL
                        </button>  
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