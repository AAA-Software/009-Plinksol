import Image from "next/image";

const PrivacyPolicyContent = () => {
  return (
    <div className=" w-full flex flex-col items-center mb-[10rem] md:mb-[15rem]">
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
            What personally identifiable information is collected from you
            through the website, how it is used and with whom it may be shared.
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
            What choices are available to you regarding the use of your data.
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
            The security procedures in place to protect the misuse of your
            information.
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
            How you can correct any inaccuracies in the information.
          </p>
        </div>
        <h1 className=" font-sora text-4xl md:text-5xl font-bold text-white text-center mt-8 md:mt-10">
          Information Collection, Use, and Sharing
        </h1>
        <p className="text-base font-normal font-sora text-white mt-8">
          We are the sole owners of the information collected on this site. We
          only have access to/collect information that you voluntarily give us
          via email or other direct contact from you. We will not sell or rent
          this information to anyone.
        </p>
        <p className="text-base font-normal font-sora text-white mt-4">
          We will use your information to respond to you, regarding the reason
          you contacted us. We will not share your information with any third
          party outside of our organization, other than as necessary to fulfill
          your request, e.g. to ship an order.
        </p>
        <p className="text-base font-normal font-sora text-white mt-4">
          Unless you ask us not to, we may contact you via email in the future
          to tell you about specials, new products or services, or changes to
          this privacy policy.
        </p>

        <h1 className=" font-sora text-4xl md:text-5xl font-bold text-white text-center mt-8 md:mt-10">
          What information is collected
        </h1>
        <p className="text-base font-normal font-sora text-white mt-8">
          We store data about individuals in order to create an account for our
          customers on our platform. We store the name (nickname), e-mail
          address, avatar (if provided) and language (if provided).
        </p>

        <h1 className=" font-sora text-4xl md:text-5xl font-bold text-white text-center mt-8 md:mt-10">
          Your Access to and Control Over Information
        </h1>
        <p className="text-base font-normal font-sora text-white/70 mt-8">
          You may opt out of any future contacts from us at any time. You can do
          the following at any time by contacting us via the email address or
          phone number given on our website:
        </p>

        <div className="flex flex-row items-start gap-4 mt-4">
          <Image
            width={20}
            quality={100}
            height={20}
            src="/img/asterisk.png"
            alt="Asterisk"
          />
          <p className="text-base font-normal font-sora text-white">
            See what data we have about you, if any.
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
            Change/correct any data we have about you.
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
            Have us delete any data we have about you.
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
            Express any concern you have about our use of your data.
          </p>
        </div>

        <h1 className=" font-sora text-4xl md:text-5xl font-bold text-white text-center mt-8 md:mt-10">
          Security
        </h1>
        <p className="text-base font-normal font-sora text-white/70 mt-8">
          We take precautions to protect your information. When you submit
          sensitive information via the website, your information is protected
          both online and offline.
        </p>

        <p className="text-base font-normal font-sora text-white/70 mt-4">
          Wherever we collect sensitive information (such as credit card data),
          that information is encrypted and transmitted to us in a secure way.
          You can verify this by looking for a lock icon in the address bar and
          looking for &apos;https&apos; at the beginning of the address of the
          Web page.
        </p>
        <p className="text-base font-normal font-sora text-white/70 mt-4">
          While we use encryption to protect sensitive information transmitted
          online, we also protect your information offline. Only employees who
          need the information to perform a specific job (for example, billing
          or customer service) are granted access to personally identifiable
          information. The computers/servers in which we store personally
          identifiable information are kept in a secure environment.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;
