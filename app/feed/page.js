import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

// export async function generateMetadata() {
//   const posts = await getPosts();
//   const count = posts.length;
//   return {
//     title: `Posts (${count})`,
//     description: 'This is the feeds section',
//   };
// }

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
