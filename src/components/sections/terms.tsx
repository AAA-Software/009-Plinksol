import Image from "next/image";

const Terms = () => {
  return (
    <div className=" w-full flex flex-col items-center mb-[10rem] md:mb-[15rem] -mt-[50vh]">
      <div className="flex flex-col items-start w-full px-3 max-w-full md:max-w-2xl mt-4">
        <div className="flex flex-row items-start gap-4 mt-4">
          <Image
            width={20}
            quality={100}
            height={20}
            src="/img/asterisk.png"
            alt="Asterisk"
          />
          <p className="text-base font-normal font-sora text-white">
            The content of the pages of this website is for your general
            information and use only. It is subject to change without notice.
          </p>
        </div>
        <div className="flex flex-row items-start gap-4 mt-4">
          <Image
            width={20}
            quality={100}
            height={20}
            src="/img/asterisk.png"
            alt="Asterisk"
          />
          <p className="text-base font-normal font-sora text-white">
            This website uses cookies to monitor browsing preferences. If you do
            allow cookies to be used, the following personal information may be
            stored by us for use by third parties.
          </p>
        </div>
        <div className="flex flex-row items-start gap-4 mt-4">
          <Image
            width={20}
            quality={100}
            height={20}
            src="/img/asterisk.png"
            alt="Asterisk"
          />
          <p className="text-base font-normal font-sora text-white">
            Neither we nor any third parties provide any warranty or guarantee
            as to the accuracy, timeliness, performance, completeness or
            suitability of the information and materials found or offered on
            this website for any particular purpose. You acknowledge that such
            information and materials may contain inaccuracies or errors and we
            expressly exclude liability for any such inaccuracies or errors to
            the fullest extent permitted by law.
          </p>
        </div>
        <div className="flex flex-row items-start gap-4 mt-4">
          <Image
            width={20}
            quality={100}
            height={20}
            src="/img/asterisk.png"
            alt="Asterisk"
          />
          <p className="text-base font-normal font-sora text-white">
            Your use of any information or materials on this website is entirely
            at your own risk, for which we shall not be liable. It shall be your
            own responsibility to ensure that any products, services or
            information available through this website meet your specific
            requirements.
          </p>
        </div>
        <div className="flex flex-row items-start gap-4 mt-4">
          <Image
            width={20}
            quality={100}
            height={20}
            src="/img/asterisk.png"
            alt="Asterisk"
          />
          <p className="text-base font-normal font-sora text-white">
            This website contains material which is owned by or licensed to us.
            This material includes, but is not limited to, the design, layout,
            look, appearance and graphics. Reproduction is prohibited other than
            in accordance with the copyright notice, which forms part of these
            terms and conditions.
          </p>
        </div>
        <div className="flex flex-row items-start gap-4 mt-4">
          <Image
            width={20}
            quality={100}
            height={20}
            src="/img/asterisk.png"
            alt="Asterisk"
          />
          <p className="text-base font-normal font-sora text-white">
            All trade marks reproduced in this website which are not the
            property of, or licensed to, the operator are acknowledged on the
            website.
          </p>
        </div>
        <div className="flex flex-row items-start gap-4 mt-4">
          <Image
            width={20}
            quality={100}
            height={20}
            src="/img/asterisk.png"
            alt="Asterisk"
          />
          <p className="text-base font-normal font-sora text-white">
            Unauthorised use of this website may give rise to a claim for
            damages and/or be a criminal offence.
          </p>
        </div>
        <div className="flex flex-row items-start gap-4 mt-4">
          <Image
            width={20}
            quality={100}
            height={20}
            src="/img/asterisk.png"
            alt="Asterisk"
          />
          <p className="text-base font-normal font-sora text-white">
            From time to time this website may also include links to other
            websites. These links are provided for your convenience to provide
            further information. They do not signify that we endorse the
            website(s). We have no responsibility for the content of the linked
            website(s).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
