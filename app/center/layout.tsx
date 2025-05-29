"use client";

import { AppSidebar } from "@/components/app-sidebar";
import Loader from "@/components/Loader";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ dashboard }: { dashboard: React.ReactNode }) {
  const { isSidebarOpen, setSidebarOpen } = useAuthStore();
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    } else if (user.role !== "CENTER") {
      router.replace("/unauthorized");
    }
  }, [user, router]);

  if (!user || user.role !== "CENTER") return <Loader />;

  return (
    <SidebarProvider open={isSidebarOpen} onOpenChange={setSidebarOpen}>
      <SidebarTrigger className="fixed top-0 left-0 z-50" />

      <div className="flex w-screen">
        <AppSidebar />

        <main className="w-screen gap-4 pt-5">{dashboard}</main>
      </div>
    </SidebarProvider>
  );
}
