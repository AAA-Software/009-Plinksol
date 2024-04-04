import { NewVerificationForm } from "@/components/auth/new-verification-form";
import { Suspense } from "react";

const NewVerificationPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="h-[70vh] flex justify-center items-center">
        <NewVerificationForm />
      </div>
    </Suspense>
  );
};

export default NewVerificationPage;
