"use client";
import { useEffect, useState } from "react";
type Program = {
  id: number;
  programName: string;
  status: string;
  trainees: string;
  date: string;
  category: string;
};
function ProgramsTable() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [programFilter, setProgramFilter] = useState<Program[]>([]);
  const getAllProgram = async () => {
    try {
      const res = await fetch("/Data/programs.json"); // ✅ fetch from /public
      const data = await res.json();
      console.log(data.programs);
      setPrograms(data.programs);
      setProgramFilter(data.programs);
    } catch (error) {
      console.log(error);
    }
  };

  // Filteration Function
  const filterationDataOfProgram = (value: string) => {
    console.log("programs", programs);
    const lastPrograms = programs?.filter((newPrograms) => {
      return (
        newPrograms.programName.toLowerCase().includes(value.toLowerCase()) ||
        newPrograms.status.toLowerCase().includes(value.toLowerCase()) ||
        newPrograms.category.toLowerCase().includes(value.toLowerCase()) ||
        newPrograms.date.toLowerCase().includes(value)
      );
    });
    console.log(lastPrograms);
    setPrograms(lastPrograms);
    // setPrograms(
    //   programs?.filter((newPrograms) => {
    //     return (
    //       newPrograms.programName.toLowerCase().includes(value.toLowerCase()) ||
    //       newPrograms.status.toLowerCase().includes(value.toLowerCase()) ||
    //       newPrograms.category.toLowerCase().includes(value.toLowerCase()) ||
    //       newPrograms.date.includes(value)
    //     );
    //   })
    // );
  };

  useEffect(() => {
    getAllProgram();
  }, []);
  return (
    <>
      {/* <div className="flex flex-col items-end px-20 pt-4 pb-7 mt-5 max-w-full font-bold text-right bg-white rounded-2xl shadow-sm w-[1593px] max-md:px-5"> */}
      <div className="flex flex-col items-end bg-white px-10 py-7 my-5 rounded-lg shadow-md ">
        <div className="flex flex-col  ">
          <form>
            <div className="text-lg text-gray-700 max-md:max-w-full">
              البرامج التدريبية :
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {/* التاريخ */}
              <div className="flex items-center border border-gray-300 rounded-lg bg-white p-3 text-start ">
                <label htmlFor="history">الترتيب حسب : </label>
                <select
                  name="history"
                  id="history"
                  onChange={(e) => {
                    filterationDataOfProgram(e.target.value);
                  }}
                >
                  <option value="date" disabled selected>
                    التاريخ
                  </option>
                  {programFilter?.map((program) => (
                    <option key={program.id} value={program.date}>
                      {program.date}
                    </option>
                  ))}
                </select>
              </div>
              {/* جميع البرامج */}
              <div className="flex items-center border border-gray-300 rounded-lg bg-white p-3 text-start">
                <label
                  className="text-zinc-600 text-nowrap  "
                  htmlFor="allPrograms"
                >
                  عرض :
                </label>
                <select
                  name="allPrograms"
                  id="allPrograms"
                  onChange={(e) => {
                    filterationDataOfProgram(e.target.value);
                  }}
                >
                  <option value="allPrograms" disabled selected>
                    جميع البرامج{" "}
                  </option>
                  {programFilter?.map((program) => (
                    <option key={program.id} value={program.programName}>
                      {program.programName}
                    </option>
                  ))}
                </select>
              </div>
              {/* الحالة */}
              <div className="flex items-center border border-gray-300 rounded-lg bg-white p-3 text-start">
                <label className="text-zinc-600 text-nowrap " htmlFor="status">
                  الحالة :
                </label>
                <select
                  name="status"
                  id="status"
                  onChange={(e) => {
                    filterationDataOfProgram(e.target.value);
                  }}
                >
                  <option value="status" disabled selected>
                    نشطه
                  </option>
                  {programFilter?.map((program) => (
                    <option key={program.id} value={program.status}>
                      {program.status}
                    </option>
                  ))}
                </select>
              </div>
              {/* المجال */}
              <div className="flex items-center border border-gray-300 rounded-lg bg-white p-3 text-start">
                <label
                  className="text-zinc-600 text-nowrap  "
                  htmlFor="category"
                >
                  المجال :
                </label>
                <select
                  name="category"
                  id="category"
                  onChange={(e) => {
                    filterationDataOfProgram(e.target.value);
                  }}
                >
                  <option value="category" disabled selected>
                    دورات تقنية
                  </option>
                  {programFilter?.map((program) => (
                    <option key={program.id} value={program.category}>
                      {program.category}
                    </option>
                  ))}
                </select>
              </div>
              {/* البحث عن اسم البرنامج */}
              <div className="flex flex-col justify-center  self-stretch p-3 my-auto  bg-white rounded-lg border border-solid border-neutral-200  text-zinc-600 ">
                <div className="flex gap-3 items-center text-start">
                  <img
                    alt=""
                    loading="lazy"
                    src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/a74829c3b4e3f3c3b09448a404dffc7d7f2dc35b?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                  />
                  <input
                    type="search"
                    name="search"
                    onChange={(e) => {
                      filterationDataOfProgram(e.target.value);
                    }}
                    className="outline-none w-full text-gray-700"
                    placeholder="البحث عن أسم برنامج ........."
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col md:px-10 pt-12 pb-6 mt-5 w-full text-sm font-bold text-gray-700  rounded-2xl shadow-sm max-w-full">
        <div className="w-full md:px-10 pt-12 pb-6 mt-5 bg-white rounded-2xl shadow-sm text-sm font-bold text-gray-700 max-w-[1593px]">
          {/* <div className="grid grid-cols-5 gap-4 px-10 text-slate-400 text-center max-md:grid-cols-2">
            <div>اسم البرنامج</div>
            <div>حالة البرنامج</div>
            <div>عدد المشاركين</div>
            <div>تاريخ البدء</div>
            <div>الإجراءات</div>
          </div>

          <div className="border-t border-slate-200 my-4 w-full"></div>

          <div className="grid grid-cols-5 gap-4 items-center text-center px-10 max-md:grid-cols-2">
            <div className="text-right">تدريب مهارات القيادة</div>
            <div className="px-4 py-1.5 bg-green-400 text-white rounded-xl">
              مكتمل
            </div>
            <div>40 متدرب</div>
            <div>14/06/21</div>

            <div className="flex gap-4 items-center justify-center text-xs">
              <div className="flex items-center gap-1 text-red-500">
                <svg
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.13677 10.875C1.13677 11.5625 1.75729 12.125 2.5157 12.125H8.0314C8.7898 12.125 9.41032 11.5625 9.41032 10.875V4.625C9.41032 3.9375 8.7898 3.375 8.0314 3.375H2.5157C1.75729 3.375 1.13677 3.9375 1.13677 4.625V10.875ZM9.41032 1.5H7.68666L7.19715 1.05625C7.07304 0.94375 6.89378 0.875 6.71452 0.875H3.83257C3.65331 0.875 3.47405 0.94375 3.34995 1.05625L2.86043 1.5H1.13677C0.757569 1.5 0.447311 1.78125 0.447311 2.125C0.447311 2.46875 0.757569 2.75 1.13677 2.75H9.41032C9.78952 2.75 10.0998 2.46875 10.0998 2.125C10.0998 1.78125 9.78952 1.5 9.41032 1.5Z"
                    fill="#E53E3E"
                  />
                </svg>
                <span>DELETE</span>
              </div>
              <div className="flex items-center gap-1">
                <span>EDIT</span>
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.636841 7.47905V8.99905C0.636841 9.13905 0.758186 9.24905 0.912626 9.24905H2.5894C2.6611 9.24905 2.73281 9.22405 2.78245 9.17405L8.80559 3.71905L6.7372 1.84405L0.719576 7.29905C0.664419 7.34905 0.636841 7.40905 0.636841 7.47905ZM10.4051 2.26905C10.6203 2.07405 10.6203 1.75905 10.4051 1.56405L9.11447 0.394053C8.89936 0.199053 8.55187 0.199053 8.33675 0.394053L7.32738 1.30905L9.39577 3.18405L10.4051 2.26905V2.26905Z"
                    fill="#2D3748"
                  />
                </svg>
              </div>
            </div>
          </div> */}

          {/* {programs &&
            programs?.map((program: Program, index: number) => {
              const isLast = index === programs.length - 1;
              return (
                <div
                  key={program.id}
                  className="grid grid-cols-5 gap-4 items-center text-center px-10 max-md:grid-cols-2 my-3"
                >
                  <div className="text-right">{program?.programName}</div>
                  <div className="px-4 py-1.5 bg-green-400 text-white rounded-xl">
                    مكتمل
                  </div>
                  <div>{program?.trainees}</div>
                  <div>{program?.date}</div>

                  <div className="flex gap-4 items-center justify-center text-xs">
                    <div className="flex items-center gap-1 text-red-500">
                      <svg
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.13677 10.875C1.13677 11.5625 1.75729 12.125 2.5157 12.125H8.0314C8.7898 12.125 9.41032 11.5625 9.41032 10.875V4.625C9.41032 3.9375 8.7898 3.375 8.0314 3.375H2.5157C1.75729 3.375 1.13677 3.9375 1.13677 4.625V10.875ZM9.41032 1.5H7.68666L7.19715 1.05625C7.07304 0.94375 6.89378 0.875 6.71452 0.875H3.83257C3.65331 0.875 3.47405 0.94375 3.34995 1.05625L2.86043 1.5H1.13677C0.757569 1.5 0.447311 1.78125 0.447311 2.125C0.447311 2.46875 0.757569 2.75 1.13677 2.75H9.41032C9.78952 2.75 10.0998 2.46875 10.0998 2.125C10.0998 1.78125 9.78952 1.5 9.41032 1.5Z"
                          fill="#E53E3E"
                        />
                      </svg>
                      <span>DELETE</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>EDIT</span>
                      <svg
                        width="11"
                        height="10"
                        viewBox="0 0 11 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.636841 7.47905V8.99905C0.636841 9.13905 0.758186 9.24905 0.912626 9.24905H2.5894C2.6611 9.24905 2.73281 9.22405 2.78245 9.17405L8.80559 3.71905L6.7372 1.84405L0.719576 7.29905C0.664419 7.34905 0.636841 7.40905 0.636841 7.47905ZM10.4051 2.26905C10.6203 2.07405 10.6203 1.75905 10.4051 1.56405L9.11447 0.394053C8.89936 0.199053 8.55187 0.199053 8.33675 0.394053L7.32738 1.30905L9.39577 3.18405L10.4051 2.26905V2.26905Z"
                          fill="#2D3748"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })} */}
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full text-sm text-center ">
              <thead className="bg-gray-100 text-slate-500 px-1">
                <tr>
                  <th className="px-4 py-3 whitespace-nowrap">اسم البرنامج</th>
                  <th className="px-4 py-3 whitespace-nowrap">حالة البرنامج</th>
                  <th className="px-4 py-3 whitespace-nowrap">عدد المشاركين</th>
                  <th className="px-4 py-3 whitespace-nowrap">تاريخ البدء</th>
                  <th className="px-4 py-3 whitespace-nowrap">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {programs.map((program, index) => (
                  <tr key={program.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-right">{program.programName}</td>
                    <td>
                      <span
                        className={`px-4 py-1.5 text-white rounded-xl text-xs ${program.status === "مكتمل"
                            ? "bg-green-400"
                            : program.status === "قيد التنفيذ"
                              ? "bg-blue-500"
                              : program.status === "لم يبدأ بعد"
                                ? "bg-gray-400"
                                : "bg-red-500"
                          }`}
                      >
                        {program.status}
                      </span>
                    </td>
                    <td>{program.trainees}</td>
                    <td>{program.date}</td>
                    <td>
                      <div className="flex gap-4 items-center justify-center text-xs">
                        <div className="flex items-center gap-1 text-red-500">
                          <svg
                            width="11"
                            height="13"
                            viewBox="0 0 11 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.13677 10.875C1.13677 11.5625 1.75729 12.125 2.5157 12.125H8.0314C8.7898 12.125 9.41032 11.5625 9.41032 10.875V4.625C9.41032 3.9375 8.7898 3.375 8.0314 3.375H2.5157C1.75729 3.375 1.13677 3.9375 1.13677 4.625V10.875ZM9.41032 1.5H7.68666L7.19715 1.05625C7.07304 0.94375 6.89378 0.875 6.71452 0.875H3.83257C3.65331 0.875 3.47405 0.94375 3.34995 1.05625L2.86043 1.5H1.13677C0.757569 1.5 0.447311 1.78125 0.447311 2.125C0.447311 2.46875 0.757569 2.75 1.13677 2.75H9.41032C9.78952 2.75 10.0998 2.46875 10.0998 2.125C10.0998 1.78125 9.78952 1.5 9.41032 1.5Z"
                              fill="#E53E3E"
                            />
                          </svg>
                          <span>DELETE</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>EDIT</span>
                          <svg
                            width="11"
                            height="10"
                            viewBox="0 0 11 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.636841 7.47905V8.99905C0.636841 9.13905 0.758186 9.24905 0.912626 9.24905H2.5894C2.6611 9.24905 2.73281 9.22405 2.78245 9.17405L8.80559 3.71905L6.7372 1.84405L0.719576 7.29905C0.664419 7.34905 0.636841 7.40905 0.636841 7.47905ZM10.4051 2.26905C10.6203 2.07405 10.6203 1.75905 10.4051 1.56405L9.11447 0.394053C8.89936 0.199053 8.55187 0.199053 8.33675 0.394053L7.32738 1.30905L9.39577 3.18405L10.4051 2.26905V2.26905Z"
                              fill="#2D3748"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-end mt-5 gap-2 text-blue-600 text-sm pr-10">
            <span>عرض المزيد من البرامج</span>
            <img
              src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/8613a85d21799d89326600a69659def42ce2f351?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
              className="w-2.5"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgramsTable;
