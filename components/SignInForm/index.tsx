"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";

import styles from "./signInForm.module.scss";

const SignInForm = () => {
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      console.log(res);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.singInForm}>
      <input
        className={styles.singInForm__input}
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <input
        className={styles.singInForm__input}
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <button className={styles.singInForm__button} type="submit">
        Sign In
      </button>
    </form>
  );
};

export { SignInForm };
