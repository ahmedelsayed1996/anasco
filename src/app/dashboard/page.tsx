"use client"
import KPISection from "@/app/_components/KPISection";
import Header from "../_components/Header";
import Notifications from "../_components/Notifications";
import OrganizationInfo from "../_components/OrganizationInfo";
import ProgramsTable from "../_components/ProgramsTable";
import ProtectedRoute from "../_components/ProtectedRoute";
import SideBar from "../_components/SideBar";
import { useState } from "react";

function Dashboard() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    return (
        <>
            <ProtectedRoute>
                <div className="flex bg-gray-50">
                    <button
                        onClick={toggleDrawer}
                        className="lg:hidden p-2 fixed top-4 left-4 z-50 bg-white rounded-md shadow"
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <div className="lg:w-2/12 pt-8 justify-center hidden lg:flex">
                        <SideBar />
                    </div>
                    {isDrawerOpen && (
                        <div

                            className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isDrawerOpen ? "bg-black/50 pointer-events-auto" : "bg-transparent pointer-events-none"
                                }`}
                            onClick={toggleDrawer} // Close on overlay click
                        >
                            <div
                                className={`
        bg-white w-64 h-full p-6 shadow-xl
        transform transition-transform duration-300 ease-in-out
        ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
                                onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
                            >
                                <SideBar />
                            </div>
                        </div>
                    )}
                    <div className="flex overflow-hidden flex-col items-start px-10 pt-8 pb-20  max-md:px-5 w-full lg:w-10/12">
                        <div className="flex flex-wrap gap-4 self-stretch text-sm font-bold text-right text-zinc-600 max-md:max-w-full">
                            <Header />
                        </div>
                        <div className="mt-20 w-full max-md:max-w-full ">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch grid-flow-row auto-rows-max ">
                                <div className="flex flex-col ">
                                    <OrganizationInfo />
                                </div>
                                <div className="flex flex-col ">
                                    <KPISection />
                                </div>
                                <div className="flex flex-col ">
                                    <Notifications />
                                </div>
                            </div>
                        </div>
                        <ProgramsTable />
                    </div>
                </div>
            </ProtectedRoute>
        </>
    );
}

export default Dashboard;
