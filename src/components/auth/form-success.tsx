import { FaCheckCircle } from "react-icons/fa";
interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/10 font-sora font-light py-3 px-4 rounded-lg mt-4 mb-2 flex items-center gap-x-2 text-base text-[#3DAB03]">
      <FaCheckCircle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
