import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import styles from "./googleButton.module.scss";

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  return (
    <button
      className={styles.google__button}
      onClick={() => signIn("google", { callbackUrl })}>
      <img src="/images/googleIcon.png" alt="google" />
    </button>
  );
};

export { GoogleButton };
