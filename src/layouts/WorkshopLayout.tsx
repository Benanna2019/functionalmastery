import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/app-sidebar";
import { FofX } from "@/components/Icons";
import React from "react";

export default function WorkshopLayout({
  children,
  data,
  breadcrumbs,
}: {
  children: React.ReactNode;
  data: any;
  breadcrumbs: any;
}) {
  return (
    <SidebarProvider>
      <AppSidebar data={data} />
      <SidebarInset>
        <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">
                  <Button variant="ghost" className="text-black" size="icon">
                    <FofX />
                  </Button>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              {breadcrumbs.map((breadcrumb: any, index: any) => (
                <React.Fragment key={breadcrumb.path}>
                  <BreadcrumbItem
                    key={breadcrumb.path}
                    className="hidden md:block"
                  >
                    <BreadcrumbLink href={breadcrumb.path}>
                      {breadcrumb.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {index !== breadcrumbs.length - 1 && (
                    <BreadcrumbSeparator
                      key={index}
                      className="hidden md:block"
                    />
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
