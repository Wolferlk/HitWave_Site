import { motion } from 'framer-motion';
import { Play, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const works = [
  {
    title: "Summer Breeze Album",
    artist: "The Midnight Dreams",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop",
    category: "Album Production",
    year: "2024"
  },
  {
    title: "Electric Sunset",
    artist: "Sarah Blake",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&auto=format&fit=crop",
    category: "Single",
    year: "2023"
  },
  {
    title: "Urban Rhythms",
    artist: "Street Pulse",
    image: "https://images.unsplash.com/photo-1598449356475-b9f71db7d847?w=800&auto=format&fit=crop",
    category: "EP Production",
    year: "2023"
  }
];

export default function Works() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Works</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our portfolio of award-winning productions and collaborations with talented artists.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <span className="text-primary font-medium mb-2">{work.category}</span>
                  <h3 className="text-xl font-semibold text-white mb-1">{work.title}</h3>
                  <p className="text-gray-300">{work.artist}</p>
                  <div className="mt-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button size="sm" className="gap-2">
                      <Play className="w-4 h-4" /> Listen Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" variant="outline" className="gap-2">
              <Award className="w-5 h-5" /> View All Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}