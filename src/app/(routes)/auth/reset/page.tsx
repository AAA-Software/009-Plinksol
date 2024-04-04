import { ResetForm } from "@/components/auth/reset-form";
import { Suspense } from "react";

const ResetPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className=" h-[50vh] md:h-[70vh] flex justify-center items-center">
        <ResetForm />
      </div>
    </Suspense>
  );
};

export default ResetPage;
