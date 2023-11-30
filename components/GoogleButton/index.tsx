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
      Sign in with Google
    </button>
  );
};

export { GoogleButton };
