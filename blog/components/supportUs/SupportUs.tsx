import Image from "next/image";
const SupportUs = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/support-us.svg"
        alt="support us"
        width={100}
        height={60}
        className="w-1/4 h-1/4"
      />
      <div className="flex flex-col gap-6">
        <div className="text-wrap font-semibold text-base w-4/6">
          Get Involved in Improving Tech Education in Africa!
        </div>
        <button className="text-white bg-[#264FAD] rounded-xl py-2 px-7 w-fit ">
          Support Us
        </button>
      </div>
    </div>
  );
};

export default SupportUs;
