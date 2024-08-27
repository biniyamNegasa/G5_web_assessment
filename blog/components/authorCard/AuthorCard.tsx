import { AuthorCardType } from "@/types/author-card-type";

const AuthorCard = (props: AuthorCardType) => {
  return (
    <div className="flex gap-3 items-center">
      <img
        src={props.image}
        alt="profile picture"
        className="rounded-full w-[90px] h-[90px]"
      />
      <div>
        <div className="flex gap-1 justify-center items-center">
          <div className="font-semibold text-2xl">{props.name} </div>
          <div className="text-[#535353] text-4xl">.</div>
          <div className="font-medium text-[#868686]">{props.date} </div>
        </div>
        <div className="font-medium text-base text-[#9C9C9C]">
          {props.career.toUpperCase()}{" "}
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
