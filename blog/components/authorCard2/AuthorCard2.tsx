import { AuthorCardType } from "@/types/author-card-type";

const AuthorCard2 = (props: AuthorCardType) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <img
        src={props.image}
        alt="profile picture"
        className="rounded-full w-[70px] h-[70px] p-1"
      />
      <div>
        <div className="flex gap-1 justify-center items-center">
          <div className="font-medium text-base">
            {props.name.toUpperCase()}{" "}
          </div>
          <div className="text-[#535353] text-xl"> | </div>
          <div className="font-medium text-base">
            {props.career.toUpperCase()}{" "}
          </div>
        </div>
      </div>
      <div className="text-[#264FAD]">
        @{props.name.toLowerCase().split(" ").join("_")}
      </div>
    </div>
  );
};

export default AuthorCard2;
