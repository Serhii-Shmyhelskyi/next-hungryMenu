import Link from "next/link";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <div
          className={styles.home__top}
          style={{ backgroundImage: "url(/images/headerBg.jpg)" }}>
          <div className={styles.home__container}>
            <div className={styles.home__logo}>
              <img
                className={styles.home__logoImg}
                src="images/home-logo.png"
              />
            </div>
            <div className={styles.home__innerCenter}>
              <div className={styles.home__boxLeft}>
                <p className={styles.home__leftText}>
                  Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM
                </p>
              </div>
              <div className={styles.home__boxCenter}>
                <p className={styles.home__suptitle}>RESTAURANT</p>
                <h1 className={styles.home__title}>HUNGRY PEOPLE</h1>
                <div className={styles.heder__titleBottom}></div>
                <div className={styles.home__buttons}>
                  <button className={styles.home__button}>
                    <Link className={styles.home__buttonLink} href="/booking">
                      BOOK TABLE
                    </Link>
                  </button>
                  <button className={styles.home__button}>
                    <Link className={styles.home__buttonLink} href="/menu">
                      MENU
                    </Link>
                  </button>
                </div>
              </div>
              <div className={styles.home__boxRight}>
                <div className={styles.home__rightMedia}>
                  <div className={styles.home__media}>
                    <a
                      className={styles.home__mediaFacebook}
                      href="https://www.facebook.com/?locale=uk_UA"
                      target="_blank">
                      <img
                        className={styles.home__mediaImg}
                        src="images/facebook.svg"
                        alt="facebook"
                      />
                    </a>
                    <a
                      className={styles.home__mediaTwitter}
                      href="https://twitter.com/i/flow/login"
                      target="_blank">
                      <img
                        className={styles.home__mediaImg}
                        src="images/twitter.svg"
                        alt="twitter"
                      />
                    </a>
                    <a
                      className={styles.home__mediaInstagram}
                      href="https://www.instagram.com/"
                      target="_blank">
                      <img
                        className={styles.home__mediaImg}
                        src="images/instagram.svg"
                        alt="instagram"
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
