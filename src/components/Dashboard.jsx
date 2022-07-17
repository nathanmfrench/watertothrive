import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';
import { render } from '@testing-library/react';
//will need to import the data from the CSV file here to get the general dashboard data
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

export default function Dashboard() {
  render()
  {
    return (
      <>
        
        <><><div className="piechart1" style={{ width: '100%', height: 250 }}>
          <div className='piechart_header1'><h3>Contributions by Location</h3></div>
          <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="value" data={data} fill="#3A86FF" stroke = "#E3DAC9" label />
            </PieChart>
          </ResponsiveContainer>
        </div><div className='org_contributions'>
          <h2>Water to Thrive Contributions</h2>
        
        </div><div className="piechart2" style={{ width: '100%', height: 250 }}>
            <div className='piechart_header1'><h3>Beneficiaries</h3></div>
            <ResponsiveContainer>
              <PieChart>
                <Pie dataKey="value" data={data} stroke ="#E3DAC9" fill="#3A86FF" label />
              </PieChart>
            </ResponsiveContainer>
          </div></><><div className="piechart3" style={{ width: '100%', height: 250 }}>
            <div className='piechart_header1'><h3>Contributions by Location</h3></div>
            <ResponsiveContainer>
              <PieChart>0A1128
                <Pie dataKey="value" data={data} fill="#3A86FF" stroke='#E3DAC9' label />
              </PieChart>
            </ResponsiveContainer>
          </div><div className='personal_contributions'>
        <h2>Your Contributions</h2>
      </div><div className="piechart4" style={{ width: '100%', height: 250 }}>
              <div className='piechart_header1'><h3>Beneficiaries</h3>
              </div>
              <ResponsiveContainer>
                <PieChart>
                  <Pie dataKey="value" data={data} fill="#3A86FF" stroke="#E3DAC9" label />
                </PieChart>
              </ResponsiveContainer>
            </div></></></>

    );
  }
}

