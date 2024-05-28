import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mocksUrls = [
  "https://utfs.io/f/e90fc876-fc60-4335-a398-5cdf841f0a0a-1jf2fa.webp",
  "https://utfs.io/f/d88c97a2-b9ae-456d-87a8-45698a5f9b10-ca5eja.webp",
  "https://utfs.io/f/9edc99e1-7947-43e1-967c-6a604c3a69f3-mmb2ww.jpg",
  "https://utfs.io/f/30303d65-b758-4c06-8705-16269a79e207-9rugl4.jpg",
];

const mockImages = mocksUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts[0]?.name);

  return (
    <main>
      <div className="flex flex-wrap gap-2">
        Hello t3
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
