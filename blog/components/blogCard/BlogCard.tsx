import { BlogType } from "@/types/blog-data-type";
import AuthorCard from "../authorCard/AuthorCard";
import SkillButton from "../skillButton/SkillButton";
import DOMPurify from "dompurify";

const BlogCard = (props: BlogType) => {
  const dirtyHTMLString = props.description;
  const cleanHTMLString = DOMPurify.sanitize(dirtyHTMLString);
  return (
    <div className="flex justify-center py-10">
      <div className="w-[80%] flex flex-col gap-6">
        <div className="border-[#D7D7D7] border"></div>
        <AuthorCard
          career="Software Engineer"
          name={props.author.name}
          image={props.author.image}
          date={props.createdAt}
        />
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3 text-wrap items-center">
            <p className="font-bold text-4xl">{props.title}</p>
            <p dangerouslySetInnerHTML={{ __html: cleanHTMLString }} />
          </div>
          <img src={props.image} alt="picture" className="w-1/3 h-2/3" />
        </div>
        <div className="flex gap-4">
          {props.skills.map((text, index) => (
            <SkillButton key={index} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
