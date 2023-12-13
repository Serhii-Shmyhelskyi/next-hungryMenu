import Link from "next/link";
import "../../scss/style.scss";

export default function Home() {
  return (
    <>
      <div className="home">
        <div
          className="home__top"
          style={{ backgroundImage: "url(/images/headerBg.jpg)" }}>
          <div className="home__inner container">
            <div className="home__logo">
              <img className="home__logo-img" src="images/home-logo.png" />
            </div>
            <div className="home__inner-center">
              <div className="home__box-left">
                <p className="home__left-text">
                  Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM
                </p>
              </div>
              <div className="home__box-center">
                <p className="home__suptitle">RESTAURANT</p>
                <h1 className="home__title">HUNGRY PEOPLE</h1>
                <div className="heder__title-bottom line-bottom"></div>
                <div className="home__buttons">
                  <button className="home__button home__buttonActive">
                    <Link className="home__buttonLink" href="/booking">
                      BOOK TABLE
                    </Link>
                  </button>
                  <button className="home__button">
                    <Link className="home__buttonLink" href="/menu">
                      MENU
                    </Link>
                  </button>
                </div>
              </div>
              <div className="home__box-right">
                <div className="home__right-media">
                  <div className="home__media">
                    <a className="home__media-facebook" href="#">
                      <img
                        className="home__media-img"
                        src="images/facebook.svg"
                        alt=""
                      />
                    </a>
                    <a className="home__media-twitter" href="#">
                      <img
                        className="home__media-img"
                        src="images/twitter.svg"
                        alt=""
                      />
                    </a>
                    <a className="home__media-instagram" href="#">
                      <img
                        className="home__media-img"
                        src="images/instagram.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
