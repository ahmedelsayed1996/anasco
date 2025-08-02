import React from 'react'

function Notifications() {
  return (
    <div className="flex flex-col items-end px-8 pt-7 pb-24 mx-auto w-full bg-white rounded-2xl shadow-sm max-md:px-5 max-md:mt-5 max-md:max-w-full grow">
      <div className="flex flex-wrap gap-5 justify-between self-stretch max-md:max-w-full">
        <div className="text-lg font-bold leading-snug text-right text-gray-700">
          آخر المستجدات في منشأتك
        </div>
        <div className="flex flex-col justify-center px-2.5 py-1 my-auto text-xs bg-white rounded-lg border border-solid border-zinc-300 min-h-[22px] text-zinc-600">
          <div className="flex gap-3 justify-center items-center">
            <img
              alt=""
              loading="lazy"
              src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/085dd0fcb525d2f4159587cc90371c04bb2440df?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
              className="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[2]"
            />
            <div className="self-stretch my-auto">الأسبوع الحالي</div>
          </div>
        </div>

      </div>
      <div className="flex gap-8 mt-12 text-sm font-bold leading-snug text-right text-gray-700 max-md:mt-10 max-md:mr-1">
        <img
          alt=""
          loading="lazy"
          src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/570aae2639cb8d06b722ef3f34ce422e050decd7?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
          className="object-contain shrink-0 my-auto w-4 aspect-square"
        />
        <div className="flex-auto text-gray-700">
          تم تسجيل 15 موظفًا جديدًا في دورة &quot;القيادة والإدارة&quot;
        </div>
      </div>
      <div className="flex gap-5 justify-start w-full text-xs font-bold text-slate-400 ps-2">
        <div className="shrink-0 w-0.5 border-2 border-solid bg-slate-200 border-slate-200 h-[57px]" />
        <div className="self-start text-slate-400 pt-2">22 يناير 2025</div>
      </div>
      <div className="flex gap-7 mt-3 text-sm font-bold leading-snug text-right text-gray-700">
        <img
          alt=""
          loading="lazy"
          src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/ab1d93566967ece2ea05ce22ab4a3aab6d807c2f?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
          className="object-contain shrink-0 self-start w-6 aspect-square"
        />
        <div className="flex-auto text-gray-700">
          أكمل 10 موظفين دورة &quot;تحليل البيانات المتقدم&quot;
        </div>
      </div>
      <div className="flex gap-5 justify-start w-full text-xs font-bold text-slate-400 ps-2">
        <div className="shrink-0 w-0.5 border-2 border-solid bg-slate-200 border-slate-200 h-[57px]" />
        <div className="self-start text-slate-400 pt-2">25 يناير 2025</div>
      </div>
      <div className="flex gap-7 mt-2 text-sm font-bold leading-5 text-right text-gray-700 max-md:mt-10 max-md:mr-0.5">
        <img
          alt=""
          loading="lazy"
          src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/14dfcd6b86219f51b05126f83112d58e3f51af5a?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
          className="object-contain shrink-0 my-auto w-5 aspect-[1.11]"
        />
        <div className="flex-auto text-gray-700">
          بعض الموظفين لم يكملوا دوراتهم في الوقت المحدد! مراجعة تقدمهم
          مطلوب
        </div>
      </div>
      <div className="mt-1.5 mr-16 text-xs font-bold text-right text-slate-400 max-md:mr-2.5 self-start">
        19 يناير 2025
      </div>
      <div className="shrink-0 w-0.5 border-2 border-solid bg-slate-200 border-slate-200 h-[30px] self-start ms-2" />
    </div>
  )
}

export default Notifications
