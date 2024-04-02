import FaqTextSvg from "../svg/faq-text";
import { FaqItems } from "../ui/faq-items";

const Faq = () => {
  return (
    <div id="faqs" className=" w-full ">
      <div className=" pt-[10rem]" />
      <div className="w-full flex flex-col items-center">
        <div className=" relative flex items-center flex-col">
          <FaqTextSvg />
          <h2 className=" font-sora text-6xl font-bold text-white text-center absolute top-14">
            FAQs
          </h2>
        </div>
        <FaqItems />
      </div>
    </div>
  );
};

export default Faq;
