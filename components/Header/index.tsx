import React, { FC } from "react";
import { HeaderButton } from "../HeaderButton";
import styles from "./header.module.scss";
import { useTranslations } from "next-intl";

interface HeaderProps {}

interface MenuItem {
  href: string;
  text: string;
}

const Header: FC<HeaderProps> = () => {
  const t = useTranslations();

  const signInText: string = t(`dataMenu2.signIn.text`);
  const profile: string = t(`dataMenu2.profile.text`);
  const signOutText: string = t(`dataMenu2.signOut.text`);

  const keys1 = ["home", "about", "team", "booking"] as const;
  const keys2 = ["menu", "gallery", "contact"] as const;

  const combinedArray1: MenuItem[] = keys1.map((key) => ({
    href: t(`dataMenu1.${key}.href`),
    text: t(`dataMenu1.${key}.text`),
  }));

  const combinedArray2: MenuItem[] = keys2.map((key) => ({
    href: t(`dataMenu2.${key}.href`),
    text: t(`dataMenu2.${key}.text`),
  }));

  return (
    <header>
      <div className={styles.header__innerMenu}>
        <HeaderButton
          combinedArray1={combinedArray1}
          combinedArray2={combinedArray2}
          signInText={signInText}
          profile={profile}
          signOutText={signOutText}
        />
      </div>
    </header>
  );
};

export { Header };

// import React, { FC } from "react";
// import { HeaderButton } from "../HeaderButton";
// import styles from "./header.module.scss";
// import { useTranslations } from "next-intl";

// interface HeaderProps {}

// const Header: FC<HeaderProps> = () => {
//   const t = useTranslations("dataMenu1");
//   const t2 = useTranslations("dataMenu2");

//   const keys1 = ["home", "about", "team", "booking"] as const;
//   const keys2 = ["menu", "gallery", "contact"] as const;

//   let keys1arr = keys1.map((key) => t(`${key}.href`));
//   let keys1arr2 = keys1.map((key) => t(`${key}.text`));

//   let keys2arr = keys2.map((key) => t2(`${key}.href`));
//   let keys2arr2 = keys2.map((key) => t2(`${key}.text`));

//   const combinedArray1 = keys1arr.map((href, index) => ({
//     href,
//     text: keys1arr2[index],
//   }));
//   const combinedArray2 = keys2arr.map((href, index) => ({
//     href,
//     text: keys2arr2[index],
//   }));

//   return (
//     <header>
//       <div className={styles.header__innerMenu}>
//         <HeaderButton
//           combinedArray1={combinedArray1}
//           combinedArray2={combinedArray2}
//         />
//       </div>
//     </header>
//   );
// };

// export { Header };
