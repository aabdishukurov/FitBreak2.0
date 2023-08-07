import React from "react";
import { Button } from "../UI/ButtonHero/Button";
import PlayButton from "../UI/PlayButton";
import AppStoreButton from "../UI/AppStoreButton";
import PlayStoreButton from "../UI/PlayStoreButton";

const Hero = () => {
  return (
    <>
      <div className="container">
        <section className="hero">
          <div className="hero__l">
            <h2>
              Поднимитесь и <span>зарядитесь</span> энергией!
            </h2>
            <p>
              Быстрый и эффективный Express-фитнес в офисе и за рабочим столом
            </p>
            <Button />
          </div>
          <div className="hero__r">
            <div className="hero__r__play">
              <div className="hero__r__play__top">
                <PlayButton />
              </div>
              <div className="hero__r__play__bottom">
                <AppStoreButton />
                <PlayStoreButton />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
