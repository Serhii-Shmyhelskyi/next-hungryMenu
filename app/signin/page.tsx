"use client";
import { GoogleButton } from "@/components/GoogleButton";
import { SignInForm } from "@/components/SignInForm";

export default async function SignIn() {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundImage: "url(/images/private-bg.jpg)",
        backgroundSize: "cover",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}>
      <div>
        <h1 style={{ margin: "0", padding: "0 0 25px 0" }}>SignIn</h1>
        <GoogleButton />
        <div>or</div>
        <SignInForm />
      </div>
    </div>
  );
}
