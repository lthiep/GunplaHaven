import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Guide() {
  const videos = [
    {
      id: 'pv_LZrrmwYo',
      title: "How to Build Your First Gunpla | The Ultimate Beginner's Guide",
      url: 'https://www.youtube.com/watch?v=pv_LZrrmwYo'
    },
    {
      id: 'GrBOa6_E7xM',
      title: 'BEST TOOLS FOR GUNPLA BUILDING - BASIC TO ADVANCE TOOLS',
      url: 'https://www.youtube.com/watch?v=GrBOa6_E7xM'
    },
    {
      id: 'tRHydafruv4',
      title: 'How to Panel Line Gunpla | Beginner Guide',
      url: 'https://www.youtube.com/watch?v=tRHydafruv4'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Getting Started with Gunpla</h1>
          <p className="text-lg text-muted-foreground">
            Your comprehensive guide to the fascinating world of Gundam model kits
          </p>
        </div>

        {/* What is Gunpla? Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What is Gunpla?</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              Gunpla, a portmanteau of "Gundam plastic model," represents the model kits based on the 
              mobile suits and vehicles from the Gundam anime series. The hobby began in 1980 when 
              Bandai released the first plastic model kit based on the original Mobile Suit Gundam 
              series.
            </p>
            <p>
              Since then, Gunpla has evolved into a global phenomenon, with kits ranging from simple 
              beginner-friendly models to complex masterpieces that can take weeks to complete. The 
              hobby combines elements of model building, artistic expression, and engineering, making 
              it appealing to people of all ages and skill levels.
            </p>
          </div>
        </section>

        {/* Grades Explanation */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Understanding Gunpla Grades</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-semibold mb-2">High Grade (HG) - 1/144 Scale</h3>
              <p className="text-sm text-muted-foreground">
                Entry-level kits with good detail and articulation. Perfect for beginners and quick builds.
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Real Grade (RG) - 1/144 Scale</h3>
              <p className="text-sm text-muted-foreground">
                Advanced detail and mechanics in a small scale. Combines complexity with affordability.
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Master Grade (MG) - 1/100 Scale</h3>
              <p className="text-sm text-muted-foreground">
                Larger scale with intricate inner frames and excellent detail. Great for experienced builders.
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Perfect Grade (PG) - 1/60 Scale</h3>
              <p className="text-sm text-muted-foreground">
                The pinnacle of Gunpla engineering. Massive size with ultimate detail and features.
              </p>
            </div>
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Video Tutorials</h2>
          <div className="grid gap-6">
            {videos.map((video) => (
              <div key={video.id} className="space-y-2">
                <h3 className="font-semibold">{video.title}</h3>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative aspect-video rounded-lg overflow-hidden bg-black/5 hover:bg-black/10 transition-colors"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 text-black px-4 py-2 rounded-full font-medium">
                      Watch on YouTube
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Started */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Ready to Start?</h2>
          <div className="bg-accent/10 p-6 rounded-lg">
            <p className="mb-4">
              Now that you understand the basics, why not start your Gunpla journey?
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link to="/catalog">Browse Kits</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}