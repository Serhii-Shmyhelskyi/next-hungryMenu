"use client";
import { useSession } from "next-auth/react";
import styles from "./profile.module.scss";

const Profile = () => {
  const session = useSession();
  return (
    <div
      className={styles.profile}
      style={{
        backgroundImage: "url(/images/specialties-bg.jpg)",
        backgroundSize: "cover",
      }}>
      <h1>Profile</h1>
      {session.data?.user?.image ? (
        <img src={String(session.data?.user?.image)} alt="User" />
      ) : (
        <img src="./images/user.gif" alt="User" />
      )}

      <h3>Email: {session.data?.user?.email}</h3>
      <h3>Name: {session.data?.user?.name}</h3>
    </div>
  );
};
export default Profile;
