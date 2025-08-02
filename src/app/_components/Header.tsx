"use client"
import React, { useEffect, useState } from 'react'

interface User {
  id: number,
  username: string,
  email: string,
  password: string,
  isLogin: boolean,
  token: string
}
function Header() {
  const [user, setUser] = useState<User>();

  const getUserData = async () => {
    try {
      const res = await fetch("/Data/programs.json"); // ✅ fetch from /public
      const data = await res.json();
      const token = localStorage.getItem("token");
      console.log(data);
      // setPrograms(data.programs);
      const foundUser = data.users.find(
        (user: User) => user.token === token
      );
      setUser(foundUser)
    } catch (error) {
    }
  }
  useEffect(() => {
    getUserData();
  }, [])
  return (
    <header className="relative w-full">
      {/* Background Section */}
      <div className=" text-white rounded-xl p-6 h-48 flex items-center justify-start"
        style={{ backgroundImage: "url('/img/bg.png')" }}>
        <h1 className="text-lg font-semibold">شركة الرؤية المستقبلية للتقنيات</h1>
      </div>

      {/* User Card */}
      <div className="absolute bottom-[-90px] md:bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[96%] max-w-6xl bg-white/90 shadow-md rounded-xl p-4 flex flex-col md:flex-row justify-between items-center gap-4 z-20">

        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="/img/user.png"
              alt="User profile"
              className="w-14 h-14 rounded-lg object-cover"
            />
            <button className="absolute -bottom-2 -right-2 bg-white border p-1 rounded-lg shadow-sm">
              <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.499146 7.73003V9.25003C0.499146 9.39003 0.609145 9.50003 0.749145 9.50003H2.26915C2.33415 9.50003 2.39915 9.47503 2.44415 9.42503L7.90414 3.97003L6.02915 2.09503L0.574146 7.55003C0.524146 7.60003 0.499146 7.66003 0.499146 7.73003ZM9.35414 2.52003C9.54914 2.32503 9.54914 2.01003 9.35414 1.81503L8.18415 0.645029C7.98915 0.450029 7.67414 0.450029 7.47914 0.645029L6.56414 1.56003L8.43914 3.43503L9.35414 2.52003V2.52003Z" fill="#216ED7" />
              </svg>

            </button>
          </div>
          <div className="text-right">
            <h2 className="text-md font-semibold">{user?.username}</h2>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>
        <div className="flex gap-3">

          <button className="bg-white text-sm px-4 py-2 rounded-full flex gap-1.5 items-center justify-center">
            معلومات عامة للمستخدم
            <div ><svg width="16" height="12" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_270)">
                <path d="M1.53123 3.64868V7.87938L5.65623 10.3088V6.0979L1.53123 3.64868Z" fill="#2D3748" />
                <path d="M6.3437 10.3088L10.4687 7.87938V3.64868L6.3437 6.0979V10.3088Z" fill="#2D3748" />
                <path d="M10.125 3.09033L5.99995 0.684082L1.87495 3.09033L5.99995 5.49658L10.125 3.09033Z" fill="#2D3748" />
              </g>
              <defs>
                <clipPath id="clip0_1_270">
                  <rect width="11" height="11" fill="white" transform="translate(0.5 -0.00292969)" />
                </clipPath>
              </defs>
            </svg>
            </div>
          </button>
          <button className=" text-sm px-4 py-2 rounded-full flex gap-1.5 items-center justify-center ">

            التقارير والإحصائيات
            <div>
              <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_262)">
                  <path d="M6.66073 5.32489C6.67766 5.32491 6.69422 5.31992 6.70832 5.31056C6.72243 5.3012 6.73346 5.28788 6.74002 5.27227C6.74658 5.25667 6.74839 5.23947 6.74522 5.22284C6.74204 5.20621 6.73403 5.19089 6.72218 5.1788L5.0378 3.46607C5.02583 3.45391 5.01051 3.4456 4.9938 3.44218C4.97709 3.43875 4.95974 3.44039 4.94395 3.44686C4.92817 3.45333 4.91467 3.46436 4.90518 3.47853C4.89568 3.4927 4.89062 3.50938 4.89063 3.52644V5.06708C4.89063 5.13546 4.9178 5.20103 4.96614 5.24938C5.01449 5.29773 5.08007 5.32489 5.14845 5.32489H6.66073Z" fill="#2D3748" />
                  <path d="M4.48241 5.7334C4.39417 5.64634 4.32405 5.54266 4.27611 5.42834C4.22817 5.31402 4.20336 5.19134 4.20312 5.06738V3.09082H2.65624C2.2919 3.0919 1.94279 3.23711 1.68516 3.49474C1.42753 3.75237 1.28232 4.10148 1.28124 4.46582V9.27832C1.28124 9.64299 1.42611 9.99273 1.68397 10.2506C1.94183 10.5085 2.29157 10.6533 2.65624 10.6533H5.74999C6.11466 10.6533 6.4644 10.5085 6.72226 10.2506C6.98012 9.99273 7.12499 9.64299 7.12499 9.27832V6.01269H5.14843C5.02446 6.01252 4.90175 5.98774 4.78743 5.9398C4.6731 5.89185 4.56943 5.8217 4.48241 5.7334V5.7334Z" fill="#2D3748" />
                  <path d="M8.2422 2.57489H9.75449C9.77142 2.57491 9.78797 2.56992 9.80208 2.56056C9.81619 2.5512 9.82721 2.53788 9.83378 2.52227C9.84034 2.50667 9.84215 2.48947 9.83897 2.47284C9.8358 2.45621 9.82778 2.44089 9.81593 2.4288L8.13156 0.716067C8.11959 0.703913 8.10427 0.695596 8.08756 0.692175C8.07085 0.688754 8.05349 0.690385 8.03771 0.696859C8.02193 0.703334 8.00843 0.714359 7.99894 0.728531C7.98944 0.742702 7.98438 0.759379 7.98439 0.776438V2.31708C7.98439 2.38546 8.01155 2.45103 8.0599 2.49938C8.10825 2.54773 8.17383 2.57489 8.2422 2.57489Z" fill="#2D3748" />
                  <path d="M8.24213 3.26245C7.99201 3.26054 7.75268 3.16033 7.57581 2.98346C7.39894 2.8066 7.29873 2.56726 7.29682 2.31714V0.340576H4.97651C4.63475 0.340974 4.3071 0.476914 4.06544 0.718573C3.82378 0.960233 3.68784 1.28788 3.68745 1.62964V2.40308H4.59237C4.70787 2.40354 4.82215 2.42682 4.92863 2.47158C5.03511 2.51634 5.13169 2.58169 5.21284 2.6639L7.55807 5.04866C7.72168 5.21467 7.81304 5.43862 7.81223 5.67171V8.59057H8.95198C9.65043 8.59057 10.2185 8.01221 10.2185 7.30151V3.26245H8.24213Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_1_262">
                    <rect width="11" height="11" fill="white" transform="translate(0.25 -0.00292969)" />
                  </clipPath>
                </defs>
              </svg>

            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
