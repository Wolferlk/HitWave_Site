import { motion } from 'framer-motion';
import { Award, Users, Music2, Mic2, Star, Trophy } from 'lucide-react';

const stats = [
  { icon: Music2, value: "1000+", label: "Projects Completed" },
  { icon: Trophy, value: "50+", label: "Industry Awards" },
  { icon: Users, value: "200+", label: "Happy Artists" },
  { icon: Star, value: "15+", label: "Years Experience" }
];

const team = [
  {
    name: "John Smith",
    role: "Lead Producer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    bio: "Grammy-nominated producer with 15+ years of experience in the music industry."
  },
  {
    name: "Sarah Johnson",
    role: "Sound Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Specialist in acoustic recording and mixing, with a background in classical music."
  },
  {
    name: "Michael Chen",
    role: "Mastering Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Renowned for his pristine audio mastering and attention to detail."
  },
  {
    name: "Emily Rodriguez",
    role: "Studio Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Keeps the studio running smoothly while ensuring client satisfaction."
  }
];

export default function About() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-background to-card">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&h=1080&fit=crop"
            alt="Studio"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60">
            <div className="container mx-auto px-4 h-full flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Crafting Sound Excellence
                </h1>
                <p className="text-xl text-gray-300">
                  With over 15 years of experience, Hit Wave Productions has been at the forefront 
                  of music production, helping artists bring their vision to life.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20">
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
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our talented team of professionals brings together decades of experience 
                in music production and sound engineering.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Award className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Award-Winning Studio</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our commitment to excellence has been recognized with numerous industry awards 
                and accolades throughout our journey.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}