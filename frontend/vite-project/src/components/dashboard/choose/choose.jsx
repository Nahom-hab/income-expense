import React from 'react'

function Choose({chart,setChart}) {
  return (
    <div className='choose'>
        <div key={1} onClick={() => setChart(1)} className="nsvbsr">Line Chart</div>
        <div key={2} onClick={() => setChart(2)} className="nsvbsr">Bar Chart</div>
    </div>
  )
}

export default Choose