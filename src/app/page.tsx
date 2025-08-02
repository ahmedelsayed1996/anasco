"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [TogglePassword, setTogglePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const myRoute = useRouter();
  const handleTogglePassword = () => {
    setTogglePassword(!TogglePassword);
  };

  const handelSumbition = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(email, password);
    try {
      const res = await fetch("/Data/programs.json");
      const data = await res.json();
      // console.log(data);

      const foundUser = data.users.find(
        (user: any) => user.email === email && user.password === password
      );

      // console.log(foundUser);

      if (foundUser) {
        localStorage.setItem("token", foundUser.token);
        myRoute.push("/dashboard");
      }
    } catch (error) {
      setError("البريد الالكتروني او كلمه المرور غير صحيحة");
    }
  };

  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-dvh">
        <div className="wrapper-form flex items-center justify-center">
          <form
            onSubmit={(eve) => handelSumbition(eve)}
            className="w-[65%] border-2 border-secondary rounded-3xl px-10 py-7 bg-white shadow-lg flex flex-col gap-3"
          >
            <div>
              <Image
                src={"/img/logo.png"}
                alt="Logo Of A Company"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <h2 className="text-secondary text-[clamp(.9rem,1.6vw,4rem)] font-semibold text-center my-4">
              تسجيل دخول
            </h2>
            {/* Email */}
            <div className="w-full relative overflow-hidden">
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="البريد الإلكتروني"
                className="bg-bgGrayColor w-full  px-10 py-3 md:px-14 md:py-4 rounded-3xl outline-none text-ellipsis text-overflow-hidden "
              />
              <svg
                className="absolute top-1/2 right-4 -translate-y-1/2"
                width="20"
                height="17"
                viewBox="0 0 23 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.57157 2.64286L9.55172 7.91402L9.55405 7.91595C10.3291 8.48433 10.7169 8.76868 11.1416 8.87853C11.517 8.97563 11.9116 8.97563 12.287 8.87853C12.7121 8.76858 13.1009 8.4834 13.8774 7.91402C13.8774 7.91402 18.3545 4.47822 20.8573 2.64286M1.42871 13.8431V5.15737C1.42871 3.87725 1.42871 3.23671 1.67784 2.74777C1.89698 2.31768 2.24639 1.96827 2.67648 1.74913C3.16542 1.5 3.80596 1.5 5.08608 1.5H18.3432C19.6233 1.5 20.2625 1.5 20.7514 1.74913C21.1815 1.96827 21.5321 2.31768 21.7513 2.74777C22.0001 3.23623 22.0001 3.87599 22.0001 5.15361V13.8469C22.0001 15.1246 22.0001 15.7634 21.7513 16.2519C21.5321 16.682 21.1815 17.032 20.7514 17.2511C20.263 17.5 19.6241 17.5 18.3465 17.5H5.08232C3.8047 17.5 3.16494 17.5 2.67648 17.2511C2.24639 17.032 1.89698 16.682 1.67784 16.2519C1.42871 15.7629 1.42871 15.1232 1.42871 13.8431Z"
                  stroke="#666666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Password */}
            <div className="w-full relative overflow-hidden">
              <input
                type={`${TogglePassword ? "text" : "password"}`}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="كلمة المرور"
                className="bg-bgGrayColor w-full  px-10 py-3 md:px-14 md:py-4 rounded-3xl outline-none"
              />
              {/* Password */}
              <svg
                className="absolute top-1/2 right-5 -translate-y-1/2"
                width="15"
                height="21"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.23047 7.66667H4.2002C3.08009 7.66667 2.51962 7.66667 2.0918 7.90887C1.71547 8.12193 1.40973 8.46164 1.21799 8.87977C1 9.35513 1 9.97788 1 11.2224V17.4447C1 18.6892 1 19.3112 1.21799 19.7865C1.40973 20.2047 1.71547 20.545 2.0918 20.758C2.5192 21 3.07902 21 4.19694 21H13.8031C14.921 21 15.48 21 15.9074 20.758C16.2837 20.545 16.5905 20.2047 16.7822 19.7865C17 19.3116 17 18.6905 17 17.4484V11.2188C17 9.97666 17 9.35467 16.7822 8.87977C16.5905 8.46164 16.2837 8.12193 15.9074 7.90887C15.4796 7.66667 14.9203 7.66667 13.8002 7.66667H11.7689M6.23047 7.66667H11.7689M6.23047 7.66667C6.10302 7.66667 6 7.55187 6 7.41026V4.33333C6 2.49238 7.34315 1 9 1C10.6569 1 12 2.49238 12 4.33333V7.41026C12 7.55187 11.8964 7.66667 11.7689 7.66667"
                  stroke="#666666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* Eye */}
              <svg
                onClick={handleTogglePassword}
                className="absolute top-1/2 left-5 -translate-y-1/2"
                width="25"
                height="20"
                viewBox="0 0 31 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Vector">
                  <path
                    d="M3.35946 12.6683C6.02863 15.3219 10.6836 19 15.9796 19C21.2756 19 25.9297 15.3219 28.5989 12.6683C29.3028 11.9685 29.656 11.6174 29.8802 10.9302C30.0401 10.44 30.0401 9.56016 29.8802 9.06991C29.656 8.38276 29.3029 8.0316 28.5989 7.33171C25.9297 4.67815 21.2756 1 15.9796 1C10.6836 1 6.02863 4.67815 3.35946 7.33171C2.65496 8.03209 2.30268 8.38252 2.07844 9.06991C1.91851 9.56016 1.91851 10.44 2.07844 10.9302C2.30268 11.6176 2.65496 11.9679 3.35946 12.6683Z"
                    stroke="#666666"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.9793 10.0001C12.9793 11.6569 14.3225 13.0001 15.9793 13.0001C17.6362 13.0001 18.9794 11.6569 18.9794 10.0001C18.9794 8.3432 17.6362 7.00004 15.9793 7.00004C14.3225 7.00004 12.9793 8.3432 12.9793 10.0001Z"
                    stroke="#666666"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div className="w-full ">
              <small className="text-redColor text-[clamp(.8rem,1vw,2rem)] text-start ps-2 font-semibold">
                <a href="#">نسيت كلمة المرور ؟</a>
              </small>
            </div>
            <button className="bg-redColor text-white text-[clamp(1rem,1vw,2.5rem)] px-10 py-2 rounded-3xl">
              إنشاء حساب
            </button>
            {/* Set Error Email & Password */}
            {error && (
              <p className="text-redColor text-[clamp(.8rem,1vw,2rem)] font-semibold text-center">
                {error}
              </p>
            )}
            <div>
              <div className="flex flex-wrap gap-6 items-center mt-3 w-full text-base font-medium tracking-wide whitespace-nowrap text-stone-500 max-md:max-w-full">
                <div className="flex flex-1 shrink self-stretch basis-0 my-auto h-[0.120rem] rounded-3xl bg-[#949393]/30 w-[216px]" />
                <div className="self-stretch my-auto"> سجل الدخول عبر</div>
                <div className="flex flex-1 shrink self-stretch basis-0 my-auto h-[0.120rem] rounded-3xl bg-[#949393]/30 w-[216px]" />
              </div>
            </div>
            <ul className="flex items-center justify-center gap-5">
              <li className="">
                <a
                  href="https://www.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary w-[40px] h-[40px] rounded-full flex items-center justify-center"
                >
                  <svg
                    width="25"
                    height="28"
                    viewBox="0 0 29 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.4639 25.7174C26.9649 26.8703 26.3742 27.9316 25.6897 28.9073C24.7568 30.2374 23.9929 31.1582 23.4043 31.6694C22.4917 32.5087 21.514 32.9385 20.4669 32.9629C19.7153 32.9629 18.8088 32.749 17.7537 32.3152C16.6951 31.8833 15.7222 31.6694 14.8327 31.6694C13.8997 31.6694 12.8992 31.8833 11.829 32.3152C10.7571 32.749 9.89364 32.9751 9.23345 32.9975C8.22943 33.0403 7.22867 32.5983 6.22973 31.6694C5.59216 31.1133 4.79469 30.16 3.83935 28.8095C2.81434 27.3673 1.97165 25.695 1.31147 23.7884C0.604433 21.729 0.25 19.7348 0.25 17.8041C0.25 15.5926 0.727874 13.6852 1.68505 12.0868C2.4373 10.8029 3.43806 9.79008 4.6906 9.04658C5.94313 8.30308 7.2965 7.92421 8.75395 7.89997C9.55142 7.89997 10.5972 8.14664 11.8968 8.63144C13.1927 9.11787 14.0248 9.36455 14.3896 9.36455C14.6624 9.36455 15.5868 9.07611 17.1538 8.50108C18.6357 7.9678 19.8864 7.74699 20.911 7.83397C23.6874 8.05804 25.7733 9.1525 27.1604 11.1243C24.6774 12.6288 23.4491 14.7361 23.4735 17.4393C23.4959 19.5449 24.2598 21.2972 25.761 22.6884C26.4414 23.3341 27.2012 23.8332 28.0465 24.1876C27.8632 24.7193 27.6697 25.2285 27.4639 25.7174V25.7174ZM21.0964 0.660554C21.0964 2.31093 20.4934 3.85188 19.2916 5.27817C17.8413 6.97375 16.087 7.95354 14.1847 7.79893C14.1605 7.60094 14.1464 7.39256 14.1464 7.17358C14.1464 5.58922 14.8361 3.89364 16.061 2.50728C16.6725 1.80533 17.4502 1.22168 18.3933 0.756087C19.3344 0.297442 20.2245 0.0438011 21.0617 0.000366211C21.0862 0.220996 21.0964 0.441639 21.0964 0.660533V0.660554Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary w-[40px] h-[40px] rounded-full flex items-center justify-center"
                >
                  <svg
                    width="25"
                    height="28"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9998 13.5V19.89H24.6106C24.2325 21.945 23.0978 23.6851 21.3961 24.8551L26.5888 29.0101C29.6142 26.1302 31.3597 21.9001 31.3597 16.8752C31.3597 15.7052 31.2579 14.5801 31.0687 13.5002L15.9998 13.5Z"
                      fill="white"
                    />
                    <path
                      d="M7.03298 19.6405L5.86183 20.565L1.71631 23.895C4.34903 29.2799 9.74499 33 15.9995 33C20.3194 33 23.9411 31.53 26.5885 29.01L21.3958 24.855C19.9703 25.845 18.1521 26.445 15.9995 26.445C11.8395 26.445 8.30507 23.5501 7.03952 19.65L7.03298 19.6405Z"
                      fill="white"
                    />
                    <path
                      d="M1.71624 9.10498C0.625389 11.3249 0 13.8299 0 16.4999C0 19.1698 0.625389 21.6749 1.71624 23.8948C1.71624 23.9097 7.03997 19.6348 7.03997 19.6348C6.71997 18.6448 6.53082 17.5949 6.53082 16.4997C6.53082 15.4046 6.71997 14.3546 7.03997 13.3646L1.71624 9.10498Z"
                      fill="white"
                    />
                    <path
                      d="M15.9998 6.57C18.3562 6.57 20.4507 7.40997 22.1235 9.03L26.7052 4.30506C23.927 1.6351 20.3199 0 15.9998 0C9.74532 0 4.34903 3.70499 1.71631 9.10501L7.03987 13.365C8.30525 9.46497 11.8398 6.57 15.9998 6.57Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary w-[40px] h-[40px] rounded-full flex items-center justify-center"
                >
                  <svg
                    width="25"
                    height="28"
                    viewBox="0 0 34 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 0C7.88738 0 0.5 7.38738 0.5 16.5C0.5 24.2378 5.82752 30.7309 13.0143 32.5142V21.5424H9.61196V16.5H13.0143V14.3273C13.0143 8.71134 15.5559 6.1083 21.0696 6.1083C22.115 6.1083 23.9188 6.31356 24.6567 6.51816V11.0887C24.2673 11.0477 23.5908 11.0273 22.7506 11.0273C20.0452 11.0273 18.9998 12.0523 18.9998 14.7167V16.5H24.3894L23.4634 21.5424H18.9998V32.8792C27.1699 31.8925 33.5007 24.9361 33.5007 16.5C33.5 7.38738 26.1126 0 17 0Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <p className=" text-[clamp(1.1rem,1vw,4rem)] mt-3">
              ليس لديك حساب ؟{" "}
              <span className="text-redColor text-[clamp(1.1rem,1vw,4rem)] font-medium">
                أنشاء حساب
              </span>
            </p>
          </form>
        </div>
        <div className="wrapper-content bg-bgMainColor relative flex items-center justify-center">
          <h1 className="text-white text-[clamp(1rem,4vw,5rem)] font-semibold  w-[50%] text-left">
            Learning Management Platform
          </h1>
          <div className="text-secondary text-[clamp(1.5rem,3vw,3rem)] font-semibold  bg-white px-6 py-3 sm:px-8 sm:py-6 md:px-12 md:py-10 absolute bottom-0 left-0  flex justify-center items-center ">
            إبدء
          </div>
        </div>
      </main>
    </>
  );
}
