import { useSelector } from "react-redux";
import { NutritiosSection, ProHero } from "../../components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Goals from "../../components/Goals/Goals";
import WaterCalculator from "../../components/waterCalculator/WaterCalculator";
export const PageProLanding = () => {
  const { proStatus } = useSelector((state) => state.ProReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (!proStatus) {
      navigate("/");
    }
  }, [proStatus]);

  return (
    <main>
      <ProHero />
      <Goals />
      <WaterCalculator />
      <NutritiosSection />
    </main>
  );
};
