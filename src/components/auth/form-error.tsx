import { FaExclamationTriangle } from "react-icons/fa";
interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-destructive/10 font-sora py-3 px-4 rounded-lg mt-4 mb-2 font-light flex items-center gap-x-2 text-base text-destructive w-full">
      <FaExclamationTriangle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
