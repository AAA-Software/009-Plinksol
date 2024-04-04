import RegisterForm from "@/components/auth/register-form";
import { Suspense } from "react";

const SignUp = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterForm registerLabel="" registerUrl="" signinUrl="/auth/signin" />
    </Suspense>
  );
};

export default SignUp;
