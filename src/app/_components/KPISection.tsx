"use client"
import React from 'react'
// import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const dummyChart = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [65, 70, 75, 68, 74, 79],
      borderColor: '#3B82F6',
      tension: 0.4,
    },
  ],
};
function KPISection() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-4xl mx-auto">
      <div className="flex flex-col gap-2 xl:flex-row justify-between items-center mb-6">
        <h2 className="text-xl font-bold">مؤشرات أداء التدريب</h2>
        <select className="bg-white px-3 py-2 rounded-xl text-sm border border-gray-200 focus:outline-none">
          <option>الشهر الحالي</option>
          <option>الشهر الماضي</option>
        </select>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className={`rounded-xl p-4 shadow-sm bg-gradient-to-b from-[#151D48] to-[#434BC9]`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm text-white`}>{"عدد المتدربين الإجمالي"}</p>
              <h3 className={`text-2xl font-bold text-white`}>{112} {" "}<span className='text-xs font-extralight'>{"متدرب"}</span></h3>

              <p className="text-xs mt-1 bg-gray-500 rounded w-12 px-1">

                <span className={`text-white`}>
                  {'↓'}
                </span>
                9%+
              </p>
            </div>
          </div>
          <div className="mt-4 h-20">
            <Line
              data={dummyChart}
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
        </div>
        <div className={`rounded-xl p-4 shadow-sm bg-gradient-to-b border`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm text-black`}>{"الشهادات المصدرة"}</p>
              <h3 className={`text-2xl font-bold text-black`}>{68} {" "}<span className='text-xs font-extralight'>شهادة</span></h3>

              <p className="text-xs mt-1 text-green-500">
                <span className={``}>
                </span>
                {"+12% من الشهر الماضي"}
              </p>
            </div>
          </div>
        </div>
        <div className={`rounded-xl p-4 shadow-sm bg-gradient-to-b from-[#3077F1] to-[#6BB8FF]`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm text-white`}>{"البرامج التدريبية المكتملة"}</p>
              <h3 className={`text-2xl font-bold text-white`}>{43} {" "}<span className='text-xs font-extralight'>برنامج</span></h3>

              <p className="text-xs mt-1 text-white bg-white/25 rounded w-12 px-1 py-px">
                {'↑'}
                {"+12%"}
              </p>
            </div>
          </div>

          <div className="mt-4 h-20">
            <Line
              data={dummyChart}
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
        </div>
        <div className={`rounded-xl p-4 shadow-sm bg-gradient-to-b`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm text-black`}>{"نسبة التفاعل مع البرامج"}</p>
              <h3 className={`text-2xl font-bold text-black`}>{"79%"}</h3>

              <p className="text-xs mt-1 text-red-500">
                {"-6% من الشهر الماضي"}
              </p>
            </div>
          </div>
          <div className="mt-4 h-20">
            <Line
              data={dummyChart}
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
        </div>
      </div>
    </div>
  )
}

export default KPISection
