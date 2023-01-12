import Head from "next/head";
import React from "react";
import { ContentArea, Sidebar } from "../../components";

const Dashboard = ({ user }: { user: string }) => {
  return (
    <>
      <Head>
        <title>Dashboard | Administrator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"w-full h-[100vh] flex items-center justify-center"}>
        {/* 25% width for sidebar */}
        <Sidebar user={user} />
        {/* 75% width for content */}
        <ContentArea />
      </main>
    </>
  );
};

export default Dashboard;