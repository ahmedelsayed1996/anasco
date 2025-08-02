"use client"
import React from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

interface TrainingCardProps {
    title: string;
    value: string;
    small: string;
    description: string;
    trend?: 'up' | 'down';
    chartData?: any;
    gradient?: string;
    textColor?: string;
}

function TrainingCard({
    title,
    value,
    small,
    description,
    trend,
    chartData,
    gradient = 'from-white to-white',
    textColor = 'text-black',
}: TrainingCardProps) {
    return (
        <div className={`rounded-xl p-4 shadow-sm bg-gradient-to-b ${gradient}`}>
            <div className="flex justify-between items-start">
                <div>
                    <p className={`text-sm ${textColor}`}>{title}</p>
                    <h3 className={`text-2xl font-bold ${textColor}`}>{value} {" "}<span className='text-xs font-extralight'>{small}</span></h3>
                    
                    <p className="text-xs mt-1">
                        {trend && (
                            <span className={`text-${trend === 'up' ? 'green' : 'red'}-500`}>
                                {trend === 'up' ? '↑' : '↓'}
                            </span>
                        )}
                        {description}
                    </p>
                </div>
            </div>
            {chartData && (
                <div className="mt-4 h-20">
                    <Line
                        data={chartData}
                        options={{
                            responsive: true,
                            plugins: { legend: { display: false } },
                            elements: { point: { radius: 0 } },
                            scales: {
                                x: { display: false },
                                y: { display: false },
                            },
                        }}
                    />
                </div>
            )}
        </div>
    )
}

export default TrainingCard
