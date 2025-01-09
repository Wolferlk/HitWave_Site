import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Monday to Friday, 9am to 6pm"
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@hitwaveproductions.com",
      description: "Online support 24/7"
    },
    {
      icon: MapPin,
      title: "Studio Location",
      details: "123 Music Street, Los Angeles",
      description: "CA 90001, United States"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Fri: 9:00 - 18:00",
      description: "Weekend sessions available"
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to start your next project? Contact us for a free consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card p-6 rounded-lg"
                  >
                    <item.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="font-medium mb-1">{item.details}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <iframe
                  title="Studio Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203737237!2d-118.2413!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA3LjkiTiAxMTjCsDE0JzI4LjciVw!5e0!3m2!1sen!2sus!4v1635959562000!5m2!1sen!2sus"
                  className="w-full h-[300px] rounded-lg"
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Message subject" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-[150px]"
                  />
                </div>

                <Button className="w-full gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}