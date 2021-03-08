import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImagePost from "./cover-image-post";
import PostTitle from "../components/post-title";
import Link from "next/link";

export default function PostHeader({ title, coverImage, date, excerpt }) {
  return (
    <div className="mb-8 md:mb-16 mx-0 relative">
      {coverImage && <CoverImagePost title={title} url={coverImage} />}
      <div className="absolute left-0 bottom-0">
        <div className="bg-white m-3 md:m-4 p-4 md:p-5 rounded">
          {title && <PostTitle>{title}</PostTitle>}
          {excerpt && (
            <p className="font-medium text-opacity-50 text-base md:text-xl text-opacity-50 italic font-serif mb-2">
              {excerpt}
            </p>
          )}
          {date && <Date dateString={date} />}
        </div>
      </div>
    </div>
  );
}
