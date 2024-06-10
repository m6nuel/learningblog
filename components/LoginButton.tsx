import { signIn, useSession, signOut } from "next-auth/react";
const LoginButton = () => {
  const { data: session, status } = useSession();

  return (session?.user ? (
      <>
      <button onClick={() => signOut()} className="bg-red-400 hover:bg-red-500 px-3 py-2 m-2 rounded">
        Logout
      </button>
      </>
    ) : (
        <button onClick={() => signIn()} className="bg-sky-400 hover:bg-sky-500 px-3 py-2 m-2 rounded">
          Login
        </button>
    )
  )
};
export default LoginButton;
