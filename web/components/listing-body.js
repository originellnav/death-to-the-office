import markdownStyles from "./markdown-styles.module.css";

import BlockContent from "@sanity/block-content-to-react";

export default function ListingBody({ content }) {
  return (
    <div className="max-w-3xl mx-auto">
      {content && (
        <BlockContent blocks={content} className={markdownStyles.markdown} />
      )}
    </div>
  );
}
