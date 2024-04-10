import './dashboard.css'
import React from 'react'
import Chart from './chart/linechart/chart.jsx'
import IcomeData from './data/allData.jsx'
import Recent from './recent/recent.jsx'
import MinMax from './minMax/minMax.jsx'
import BarChart from './chart/barchart/barchart.jsx'
import Choose from './choose/choose.jsx'

function Dashboard(){
    
    const [chart,setChart]=React.useState(1)

    
    const choosenChart=()=>{
        switch (chart) {
            case 1:
                return <Chart></Chart>
            case 2:
                return <BarChart></BarChart>
            default:
                return <Chart></Chart>
        }
    }

    return(
        <>
        <div className='home'>
            <h2>All Transctions</h2>
            <div>
                <Choose Chart={chart} setChart={setChart}></Choose>
            </div>
            <div className='dashboard'>
                <div className='dashoard_left'>
                    {choosenChart()}
                    <IcomeData />
                </div>
                <div className='recent_minmax_container'>
                    <div className='recent'>
                        <h3>Recent History</h3>
                        <Recent></Recent>
                    </div>
                    <div className='MIN-MAX'>
                        <MinMax></MinMax>
                    </div>
                </div>
                
            </div>
         
            
           
        </div>
        </>
    )
}

export default Dashboard