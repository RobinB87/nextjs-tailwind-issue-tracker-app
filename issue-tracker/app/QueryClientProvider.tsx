"use client";

import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient(); // contains cache for storing data from backend

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>;
};

export default QueryClientProvider;
