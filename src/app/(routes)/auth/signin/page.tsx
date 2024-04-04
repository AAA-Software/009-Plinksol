import LoginForm from "@/components/auth/login-form";
import { Suspense } from "react";

const SignIn = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm registerUrl="/auth/register" signinLabel="" signinUrl="" />;
    </Suspense>
  );
};

export default SignIn;
