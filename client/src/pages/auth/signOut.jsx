import { SignInButton, SignOutButton, useAuth } from "@clerk/clerk-react";

const SignOut = () => {
  const { sessionId } = useAuth();
  if (!sessionId) {
    return <SignInButton />;
  }

  return (
    <SignOutButton afterSignOutUrl="/abc" signOutOptions={{ sessionId }} />
  );
};

export default SignOut;
