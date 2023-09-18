import PostSummary from "./summary";

export default function BlogList({posts}) {
  if (posts.length > 0) {
    return (
      <section class="my-16 font-light leading-6">
          <h2 class="text-center lg:text-start">Recent Posts</h2>
          <div className="grid lg:grid-cols-3 justify-center gap-12 mt-8">
            {posts.map((post, i) => (
              <PostSummary post={post} key={i} />
            ))}
          </div>
      </section>
    );
  }
  return;
}
