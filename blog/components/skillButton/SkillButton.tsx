import { TextType } from "@/types/text-type";

const SkillButton = ({ text }: TextType) => {
  return (
    <div className="bg-[#F5F5F5] rounded-3xl text-[#8E8E8E] font-semibold text-center py-2 px-7 w-fit">
      {text}
    </div>
  );
};

export default SkillButton;
