import { getSession } from "next-auth/client";
import UserProfile from "../components/UserProfile";

const Profile = () => {
  return (
    <section>
      <UserProfile />
    </section>
  );
};
export default Profile;

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
