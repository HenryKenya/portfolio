import React from "react";
import RenderHTML from "../common/RenderHTML";

const SingleArticleItem = (props) => {
  const { title, content } = props.article;
  const { image } = props.media;
  const imageUrl = image.data.media_details.sizes.full.source_url;
  return (
    <div>
      <img src={imageUrl} alt={title.rendered} style={{ width: "800px" }} />
      <h2>{title.rendered}</h2>
      <RenderHTML html={content.rendered} />
    </div>
  );
};

export default SingleArticleItem;