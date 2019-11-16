import React from 'react'
import {Bar, Line, Doughnut} from 'react-chartjs-2'

export function Dashboard() {
    const values =  {
        id: '1',
        labels: ['07-06-19', '08-06-19', '09-06-19', '10-06-19', '11-06-19', '12-06-19'],
        datasets: [{
            label: 'Next period',
            data: [18910, 125890, 79860, 45623, 35463, 54673],
            backgroundColor: "#240FF3"
            
          },{
            label: 'Previous period',
            data: [14286, 13227, 19245, 63728, 43562, 36472],
            backgroundColor: "#240FF3"

          }
        ]
    }

    const values2 =  {
        id: '1',
        labels: ['07-06-19', '08-06-19', '09-06-19', '10-06-19', '11-06-19', '12-06-19'],
        datasets: [{
            label: 'Next period',
            data: [18910, 125890, 79860, 45623, 35463, 54673],
            borderColor: "#240FF3"
            
          },{
            label: 'Previous period',
            data: [14286, 13227, 19245, 63728, 43562, 36472],
            borderColor: "#240FF3"

          }
        ]
    }
    return(
        <div className="content">
        <div className="courseShowcase ml-5">
            <h1>Dashboard</h1>
            <div className="row mt-5">
                <div className="col-md-6">
                <Bar
                data={values}
                width={100}
                height={300}
                options={{ maintainAspectRatio: false}}
                />
                </div>
                <div className="col-md-6">
                <Line
                data={values2}
                width={100}
                height={300}
                options={{ maintainAspectRatio: false}}
                />
                </div>
            </div>
        </div>
        </div>
    )
}