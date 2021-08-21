// import { getSession } from "next-auth/client";
// import { useEffect, useState } from "react";

import ChangePasswordForm from "./change-password";

const UserProfile = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       window.location.href = "/auth";
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return <p>loading...</p>;
  // }
  const onChangePassword = async (passwordData) => {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <section>
      <h1>UserProfile</h1>
      <ChangePasswordForm onChangePassword={onChangePassword} />
    </section>
  );
};
export default UserProfile;
