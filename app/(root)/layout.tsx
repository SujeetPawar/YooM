import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";


export const metadata: Metadata = {
  title: "YooM",
  description: "Connect To Bettter World",
  icons:{
    icon: '/icons/logo.svg'
  }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
