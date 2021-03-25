import markdownStyles from "./markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";
import Avatar from "../components/avatar";

const serializers = {
  marks: {
    link: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
};

export default function PostBody({ content, author }) {
  return (
    <div className="max-w-3xl mx-auto block-content">
      {content && (
        <BlockContent
          blocks={content}
          className={markdownStyles.markdown}
          serializers={serializers}
        />
      )}
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}
