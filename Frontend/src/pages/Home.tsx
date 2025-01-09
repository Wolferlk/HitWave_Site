import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Music, Mic2 } from 'lucide-react';
import { Button } from '@/components/ui/button';



export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const features = [
    {
      icon: Music,
      title: "Professional Studio",
      description: "State-of-the-art equipment and acoustically treated rooms for perfect sound."
    },
    {
      icon: Mic2,
      title: "Expert Engineers",
      description: "Experienced sound engineers who understand your vision and bring it to life."
    },
    {
      icon: Music,
      title: "Modern Production",
      description: "Latest production techniques and software for contemporary sound."
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "50+", label: "Awards Won" },
    { value: "200+", label: "Happy Artists" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <>
    
      <div className="relative h-screen ">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/7586160/7586160-hd_1080_1920_24fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60">
          <div className="container mx-auto px-4 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Where Sound Meets{' '}
                <span className="text-primary">Excellence</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Professional recording, mixing, and mastering services for artists
                who demand the best.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="gap-2">
                  <Play className="w-4 h-4" /> Get Started
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  View Our Work
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine technical excellence with creative vision to deliver outstanding results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-card hover:bg-card/80 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}