import StartupCard from '@/components/StartupCard';
import SearchForm from '../../components/SearchForm';

export default async function Home( { searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: "John Doe" },
    _id: 1,
    description: "This is a description",
    image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Tech",
    title: "Startup Title",


  }];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br />
        Connect with Entrepreneurs</h1>

        <p className="sub_heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed!</p>

        <SearchForm query={query} />
      </section>
      
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
              <p className="no results">No startups found</p>
          )}

        </ul>

      </section>
      
    </>
  );
}
