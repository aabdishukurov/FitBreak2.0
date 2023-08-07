import React, { useEffect, useState } from "react";
import Hero from "../../components/Landing/Hero";
import Devider from "../../components/Landing/Devider";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { ProSection } from "../../components/ProSection/ProSection";
import Cookies from "js-cookie";
import { Categories } from "../../components/categories/Categories";
import WaterCalculator from "../../components/waterCalculator/WaterCalculator";
import CategoriesDemo from "../../components/Landing/CategoriesDemo";
import About from "../../components/About";
const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const { proStatus } = useSelector((state) => state.ProReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (proStatus) {
      navigate("/pro");
    }
  }, [proStatus]);

  useEffect(() => {
    Cookies.get("userName") && Cookies.get("user_token") && setIsLogin(true);
    window.scrollTo(0, 0);
  }, []);
  const isPremium = false;

  let content = isLogin ? (
    <>
      <Hero />
      <Devider />
      <About />
      <WaterCalculator />
      <Devider />
      <ProSection />
      <Devider />
    </>
  ) : isPremium ? (
    <div>Premium</div>
  ) : (
    <>
      <Hero />
      <Devider />
      <About />
      <WaterCalculator />
      <Devider />
      <ProSection />
      <Devider />
    </>
  );

  return content;
};

export default LandingPage;
