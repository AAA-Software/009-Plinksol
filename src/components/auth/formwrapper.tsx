import React from 'react'
import { ReactNode } from 'react';
const FormWrapper = ({
    children,
  }: {
    className?: string;
    children: ReactNode;
  }) => {
  return (
    <div className="bg-[#121212] w-[480px] p-10 rounded-xl z-10 flex flex-col gap-5">
        {children}
    </div>
  )
}

export default FormWrapper