"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const myRoute = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      myRoute.push("/");
    }
  }, []);

  return (
    <>
      {isAuthenticated ? (
        children
      ) : (
        <div><Loader /></div>
      )}
    </>
  );
}
