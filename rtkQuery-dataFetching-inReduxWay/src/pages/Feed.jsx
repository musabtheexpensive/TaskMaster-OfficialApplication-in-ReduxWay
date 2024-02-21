import PostCard from "../components/layout/PostCard";
import { useGetPostsQuery } from "../redux/features/api/baseApi";

const Feed = () => {
  const { data: posts, isLoading, isError, error } = useGetPostsQuery(); //Return an Object
  return (
    <div>
      <h1>Feed</h1>
      <div className="flex flex-col gap-3">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
