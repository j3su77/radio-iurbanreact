import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const PostItem = ({ post }) => {
    console.log(post + "fsdf");
    const { apiUrlImg } = useContext(Context)

  return (
    <Link to={`/post/${post._id}`}  class="post__content" key={post._id}>
      <img src={apiUrlImg + post.photo} alt="" class="post__img" />
      <div className="description__post">
        <h3 class="post__title">
        {post.title}
        </h3>
      </div>
    </Link>
  );
};

export default PostItem;
