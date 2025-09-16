import Providers from "@/app/Providers";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="flex-1">
        <Header />
        <Providers>{children}</Providers>
      </section>
      <Footer />
    </>
  );
}

export default DashboardLayout;
