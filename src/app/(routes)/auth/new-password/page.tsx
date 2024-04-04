import { NewPasswordForm } from "@/components/auth/new-password-form";
import { Suspense } from "react";

const NewPasswordPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="h-[100vh] flex justify-center items-center">
        <NewPasswordForm />
      </div>
    </Suspense>
  );
};

export default NewPasswordPage;
