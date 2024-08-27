import { ListTextType } from "@/types/list-text-type";
import SupportUs from "../supportUs/SupportUs";
import ListText from "../listText/ListText";
import Image from "next/image";

const linksList: ListTextType = {
  title: "Links",
  elements: ["Home", "Success Stories", "About Us", "Get Involved"],
};
const teamsList: ListTextType = {
  title: "Teams",
  elements: ["Board Members", "Advisors/Mentors", "Executives", "Staffs"],
};
const blogsList: ListTextType = {
  title: "Blogs",
  elements: ["Recent Blogs", "New Blog"],
};

const Footer = () => {
  return (
    <div className="flex flex-col justify-between h-[300px]">
      <div className="flex justify-center">
        <div className="border-[0.5px] border-[#C7C7C7] w-[88%]"></div>
      </div>
      <div className="flex justify-evenly items-center">
        <SupportUs />
        <ListText title={linksList.title} elements={linksList.elements} />
        <ListText title={teamsList.title} elements={teamsList.elements} />
        <ListText title={blogsList.title} elements={blogsList.elements} />
      </div>
      <div className="flex justify-center">
        <div className="border-[0.5px] border-[#C7C7C7] w-[88%]"></div>
      </div>
      <div className="flex gap-1 px-16">
        <Image src="/copyright.svg" alt="copyright" width={20} height={20} />{" "}
        2020 Africa to Silicon Valley, Inc. All right reserved.
      </div>
    </div>
  );
};

export default Footer;
