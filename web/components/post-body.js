import markdownStyles from "./markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";
import Avatar from "../components/avatar";

export default function PostBody({ content, author }) {
  return (
    <div className="max-w-3xl mx-auto">
      {content && (
        <BlockContent blocks={content} className={markdownStyles.markdown} />
      )}
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}
