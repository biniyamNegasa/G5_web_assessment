import { ListTextType } from "@/types/list-text-type";
import Link from "next/link";

const ListText = ({ title, elements }: ListTextType) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-base font-semibold">{title}</div>
      <div className="flex flex-col gap-3">
        {elements.map((element, index) => (
          <Link href="#" key={index}>
            {element}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListText;
