"use client";
import { BlogType } from "@/types/blog-data-type";
import AuthorCard from "../authorCard/AuthorCard";
import DOMPurify from "dompurify";
import { IM_Fell_French_Canon } from "next/font/google";
import AuthorCard2 from "../authorCard2/AuthorCard2";

const frenchCannon = IM_Fell_French_Canon({
  subsets: ["latin"],
  weight: "400",
});

const SingleBlog = (props: BlogType) => {
  const dirtyHTMLString = props.description;
  const cleanHTMLString = DOMPurify.sanitize(dirtyHTMLString);
  return (
    <div className="flex flex-col justify-center items-center py-10 gap-4">
      <p className="font-bold text-4xl">{props.title}</p>
      <div className="flex gap-4 text-base font-light">
        {props.tags.map((tag, index) => (
          <div key={index}>{tag.toUpperCase()},</div>
        ))}
        <div>|</div>
        <div> 6 MIN READ</div>
      </div>
      <div className="flex justify-center items-center">
        <img src={props.image} alt="picture" className=" w-4/5 h-1/4" />
      </div>
      <AuthorCard2
        career="Software Engineer"
        name={props.author.name}
        image={props.author.image}
        date={props.createdAt}
      />
      <div className="flex flex-col items-center">
        <div className="w-[60%] flex flex-col gap-5">
          <div className={`${frenchCannon.className} text-black `}>
            <p dangerouslySetInnerHTML={{ __html: cleanHTMLString }} />
          </div>
          <p className="text-[#737373]">
            Irure eu officia sunt adipisicing ad mollit labore esse sunt nisi
            commodo nulla. Laboris laboris cillum officia qui pariatur in. Irure
            ullamco duis elit et veniam eiusmod voluptate occaecat nisi
            excepteur.
          </p>
          <p className="text-[#737373]">
            Lorem cupidatat non officia cupidatat in anim. Ullamco culpa veniam
            reprehenderit deserunt elit dolor officia aute commodo in. Velit
            mollit anim dolor minim mollit elit in cillum culpa in magna
            reprehenderit non. Magna consectetur irure reprehenderit irure enim
            ex reprehenderit consequat anim. Eiusmod voluptate culpa esse tempor
            pariatur commodo laboris velit nisi commodo et proident occaecat
            non. Amet irure ut amet magna nostrud culpa.
          </p>
          <p className="text-[#737373]">
            Ut qui mollit excepteur irure culpa et. Dolor qui magna mollit
            laborum elit magna dolore aliquip qui consequat ut id dolor
            pariatur. Cupidatat sit cillum in dolor excepteur id occaecat eu
            ullamco veniam exercitation aliqua proident. Aute incididunt enim
            dolore sint cillum consectetur minim nisi magna dolor. Irure mollit
            ullamco cillum culpa eu anim dolor nisi ut fugiat reprehenderit.
          </p>
          <p className="text-[#737373]">
            Duis esse ea duis ex incididunt exercitation occaecat. Commodo
            laborum cillum minim ea amet id excepteur ullamco culpa consectetur.
            Consectetur est exercitation commodo dolor sint cupidatat sunt
            excepteur elit et irure exercitation deserunt. Irure in esse est
            quis non nostrud. Enim aliquip ipsum excepteur est adipisicing
            cupidatat consequat adipisicing in officia et. Consequat magna
            mollit incididunt amet dolor non ad sunt id ipsum officia enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
