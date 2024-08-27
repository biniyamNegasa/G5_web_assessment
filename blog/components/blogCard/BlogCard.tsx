import AuthorCard from "../authorCard/AuthorCard";
import SkillButton from "../skillButton/SkillButton";

const BlogCard = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-[80%]">
        <div className="border-[#D7D7D7] border"></div>
        <AuthorCard
          career="Software Engineer"
          name="Abebe Ayele"
          image="https://res.cloudinary.com/djtkzulun/image/upload/v1684307248/Portfolio/dgxjqlgpys1imwnw2bhq.png"
          date="02/02/2023"
        />
        <div className="flex items-center">
          <div className="flex flex-col gap-3 text-wrap items-center">
            <p className="font-bold text-4xl">
              The essential guide to competitive programming tab system on react
              3: ways to do it.
            </p>
            <p>
              {" "}
              Consequat ut esse minim velit velit occaecat dolor dolor occaecat.
              Nulla minim velit laborum consectetur anim nisi ipsum commodo ut
              excepteur duis. Voluptate et eiusmod exercitation magna aliquip
              fugiat.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/djtkzulun/image/upload/v1684307248/Portfolio/dgxjqlgpys1imwnw2bhq.png"
            alt="picture"
            className="w-1/4 h-1/5"
          />
        </div>
        <div className="flex gap-4">
          <SkillButton text="Development" />
          <SkillButton text="UI/UX" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
