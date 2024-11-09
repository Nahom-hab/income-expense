
import React, { useState } from 'react'
import Chart from '../component/chart.jsx'
import IcomeData from '../component/allData.jsx'
import Recent from '../component/recent.jsx'
import MinMax from '../component/minMax.jsx'
import BarChart from '../component/barchart.jsx'
import Navigation from './navigation.jsx'

function Dashboard() {
    const [chart, setChart] = useState(<Chart />)
    const [selected, setSelected] = useState('line_chart')

    return (
        <div className="flex bg-gray-800">
            <Navigation />
            <div className="bg-gray-900 w-full h-screen m-3 rounded-2xl p-5 shadow-md">
                <h2 className="text-white text-2xl font-bold mb-6">All Transactions</h2>
                <div className='flex gap-4 mb-3 items-center'>
                    <div className={`${selected === 'line_chart' ? 'text-green-600' : ''} hover:cursor-pointer`} onClick={() => {
                        setChart(<Chart />)
                        setSelected('line_chart')
                    }}>Line Chart</div>

                    <div className={`${selected === 'bar_chart' ? 'text-green-600' : ''} hover:cursor-pointer`} onClick={() => {
                        setChart(<BarChart />)
                        setSelected('bar_chart')
                    }}>Bar Chart</div>
                </div>
                <div className="flex">
                    <div className="w-3/5 pr-4">
                        {chart}
                        <IcomeData />
                    </div>
                    <div className="w-2/5 pl-4">
                        <div className="mb-10">
                            <h3 className="text-lg font-semibold text-white mb-4">Recent History</h3>
                            <Recent />
                        </div>
                        <div className="mt-10">
                            <MinMax />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
