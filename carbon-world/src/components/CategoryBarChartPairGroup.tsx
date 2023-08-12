import React from 'react';
import Category from '@/components/Category';  
import BarChart from '@/components/BarChart';

function CategoryBarChartPairGroup({ data }) {
    return (
        <>
            {data.map((item, index) => (
                <div key={index} className="grid grid-cols-1 grid-flow-col mx-auto mb-6">
                    <div>
                        <Category />
                    </div>
                    <div className="relative left-[2vh]">
                        <BarChart />
                    </div>
                </div>
            ))}
        </>
    );
}

export default CategoryBarChartPairGroup;
