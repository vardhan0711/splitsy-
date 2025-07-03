"use client";

import { useStoreUser } from "@/hooks/use-store-user";
import React from "react";

const MainLayout = ({ children }) => {
  const { isLoading, isAuthenticated } = useStoreUser();

  if (isLoading) {
    return null;
  }

  return (
    isAuthenticated && (
      <div className="container mx-auto mt-24 mb-20 px-4">{children}</div>
    )
  );
};

export default MainLayout;
