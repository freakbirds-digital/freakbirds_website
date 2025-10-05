import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  ArrowRight
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const VisionMission = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      const message = `Hi! I would like to book an appointment for ${format(selectedDate, "PPP")} at ${selectedTime}`;
      const whatsappUrl = `https://wa.me/+1234567890?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Our Vision & Mission
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Discover what drives us to deliver exceptional digital solutions 
              and how we're shaping the future of business transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-center space-x-4 mb-6">
                <Eye className="w-12 h-12 text-accent" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To be the global leader in comprehensive digital transformation, 
                helping businesses of all sizes thrive in the digital age through 
                innovative solutions and unparalleled service excellence.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Key Vision Points:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Empowering businesses with cutting-edge technology</li>
                  <li>• Creating sustainable digital ecosystems</li>
                  <li>• Building long-term partnerships based on trust</li>
                  <li>• Driving innovation in every project we undertake</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 shadow-medium animate-scale-in">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <Eye className="w-10 h-10 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Future-Ready Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a world where technology seamlessly integrates with business 
                  operations, creating opportunities for growth and innovation at every level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-medium animate-scale-in order-2 lg:order-1">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Client-Centered Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is rooted in understanding client needs and delivering 
                  solutions that not only meet but exceed expectations, creating lasting value.
                </p>
              </div>
            </div>
            
            <div className="space-y-8 animate-fade-in order-1 lg:order-2">
              <div className="flex items-center space-x-4 mb-6">
                <Target className="w-12 h-12 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To empower businesses with cutting-edge digital solutions that drive growth, 
                enhance efficiency, and create lasting value. We believe technology should 
                simplify complexities and open new opportunities for success.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Mission Pillars:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Delivering innovative and reliable solutions</li>
                  <li>• Maintaining transparency in all communications</li>
                  <li>• Providing exceptional customer service</li>
                  <li>• Continuously evolving with technology trends</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Book Your Appointment
              </h2>
              <p className="text-xl text-muted-foreground">
                Schedule a consultation to discuss how we can help transform your business 
                with our digital solutions.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-medium">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Date Selection */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground flex items-center space-x-2">
                    <CalendarIcon className="w-5 h-5 text-accent" />
                    <span>Select Date</span>
                  </h3>
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border shadow-soft"
                    />
                  </div>
                </div>

                {/* Time Selection */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <span>Select Time</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "p-3 rounded-lg border text-sm font-medium transition-colors",
                          selectedTime === time
                            ? "bg-accent text-accent-foreground border-accent"
                            : "bg-background text-foreground border-input hover:bg-accent/10 hover:border-accent"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4 mt-8">
                    <h4 className="text-lg font-semibold text-foreground">Contact Information</h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-3">
                        <Phone size={16} className="text-accent" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail size={16} className="text-accent" />
                        <span>info@freakbirdsdigital.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <User size={16} className="text-accent" />
                        <span>Available Monday - Friday, 9:00 AM - 6:00 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Book Button */}
                  <Button 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={handleBookAppointment}
                    disabled={!selectedDate || !selectedTime}
                  >
                    <span>Book Appointment via WhatsApp</span>
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Let's work together to bring your vision to life with our 
              comprehensive digital solutions and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;