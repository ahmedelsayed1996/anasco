"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
        <div>Please log in to access this content.</div>
      )}
    </>
  );
}
