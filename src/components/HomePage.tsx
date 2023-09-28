import React from "react";
import ThreeButtons from "./ThreeButtons";
import Layout from "./Layouts/Layout";

const HomePage = () => {
  return (
    <div className=" bgs-[#c6fced] bg-gray-200">
      <Layout>
        <div className="font-['Open_Sans'] text-center text-4xl mt-10 ">Hi, it's Tibble. Your offline assistant</div>
        <ThreeButtons />
      </Layout>
    </div>
  );
};

export default HomePage;
