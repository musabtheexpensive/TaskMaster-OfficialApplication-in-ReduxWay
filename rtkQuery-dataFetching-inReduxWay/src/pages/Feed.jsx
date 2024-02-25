import PostCard from "../components/layout/PostCard";
// import { useGetPostsQuery } from "../redux/features/api/baseApi";
import { useGetPostByIdQuery } from "../redux/features/api/baseApi";
import useForm from "react-hook-form";

const Feed = () => {
  // this is single data get code
  // const { data: post, isLoading, isError, error } = useGetPostByIdQuery(1);

  //   const { data: posts, isLoading, isError, error } = useGetPostsQuery();
  //Return an Object

  const { register, handleSubmit } = useForm();
  const { isLoading, isError, data: post } = useGetPostByIdQuery(1);

  const onSubmit = (data) => {
    console.log(data);
  };

  if (isLoading) {
    return <p className="text-9xl text-zinc-300">Loading....</p>;
  }

  if (!isLoading && isError) {
    return <p className="text-9xl text-zinc-300">Something went wrong....</p>;
  }

  return (
    <div>
      <h1 className="text-zinc-400">Feed</h1>
      <div className="my-10">
        <form
          className="flex gap-3"
          onSubmit={handleSubmit(onSubmit)}
          action=""
        >
          <input
            className="w-full text-zinc-300 bg-zinc-800 p-3 rounded-md"
            type="text"
            name=""
            id=""
            {...register("post")}
          />
          <button
            type="submit"
            className="bg-zinc-800 text-zinc-300 text-lg p-3 border border-zinc-300 rounded-md"
          >
            Post
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-3">
        {/* {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))} */}

        <PostCard key={post.id} post={post} />
      </div>
    </div>
  );
};

export default Feed;
