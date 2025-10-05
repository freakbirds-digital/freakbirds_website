import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ChevronDown,
  Paperclip 
} from "lucide-react";

import supportImage from "@/assets/support-character.png";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });
  const [file, setFile] = useState<File | null>(null); 
  const [sending, setSending] = useState(false);
  const [timer, setTimer] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Missing fields", description: "Please provide your name, email, and message." });
      return;
    }

    try {
      setSending(true);

      let sendingTime = 16; // simulate 16s sending
      setTimer(sendingTime);

      const countdown = setInterval(() => {
        sendingTime -= 1;
        setTimer(sendingTime);
        if (sendingTime <= 0) clearInterval(countdown);
      }, 1000);

      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));
      if (file) data.append("file", file);

      const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/contact`, {
        method: "POST",
        body: data,
      });

      const json = await res.json();

      if (res.ok && json.ok) {
        toast({ title: "Message Sent Successfully!", description: "Our team will respond within 24 hours." });
        setFormData({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
        setFile(null);
      } else {
        toast({ title: "Failed to send", description: json?.error || "Unexpected error. Try again later." });
      }
    } catch (err) {
      console.error(err);
      toast({ title: "Network error", description: "Couldn't send message. Check your connection or try again later." });
    } finally {
      setSending(false);
      setTimer(0);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    { icon: Mail, title: "Email Us", content: "Hello@freakbirds.com", description: "Send us your queries anytime." },
    { icon: Phone, title: "Call Us", content: "+91 9952491705", description: "Mon-Fri 9AM-6PM IST." },
    { icon: MapPin, title: "Visit Us", content: "Global services, India", description: "Head office address." },
    { icon: Clock, title: "Business Hours", content: "Mon - Fri: 9AM - 6PM IST", description: "Weekend support available." }
  ];

  const services = [
    "Website Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "Bookkeeping & CA Services",
    "AI & LLM Training",
    "Branding & Graphic Design",
    "Stock Market Education",
    "Immigration Document Support",
    "Other"
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000",
    "Let's Discuss"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#031273] via-[#1e3a8a] to-[#2563eb] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
          <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
          <div className="absolute w-48 h-48 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>
        </div>

        <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Let’s Build Your Digital Future
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-xl mx-auto lg:mx-0">
              Connect with <strong>Freakbirds Digital</strong>, your trusted partner for web, mobile, AI, branding, and business solutions. Our experts deliver results-driven strategies to grow your business online.
            </p>
            <div className="pt-4">
            <a href="tel:+919952491705">
              <Button size="lg" className="font-semibold shadow-lg bg-yellow-400 text-[#031273] hover:bg-yellow-500">
                <Phone className="w-5 h-5 mr-2" /> Talk to an Expert
              </Button>
            </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <img src={supportImage} alt="Customer Support" className="max-w-md w-full" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-foreground text-center lg:text-left">Tell Us About Your Project</h2>
            <p className="text-muted-foreground mb-8 text-center lg:text-left">
              Share your goals, challenges, and vision. We’ll craft a <strong>custom digital solution</strong> that drives growth and success.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input placeholder="Full Name *" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} required />
                <Input type="email" placeholder="Email Address *" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} required />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Input placeholder="Phone Number" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} />
                <Input placeholder="Company Name" value={formData.company} onChange={(e) => handleChange("company", e.target.value)} />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Service *" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(service => <SelectItem key={service} value={service}>{service}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map(range => <SelectItem key={range} value={range}>{range}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <Textarea placeholder="Project Details *" value={formData.message} onChange={(e) => handleChange("message", e.target.value)} required rows={6} />

              {/* File Attachment */}
              <div className="flex flex-col gap-2">
                <label className="font-medium text-foreground flex items-center gap-2">
                  <Paperclip className="w-4 h-4" /> Attach Requirement Document
                </label>
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
                {file && <p className="text-sm text-muted-foreground">Selected: <span className="font-medium">{file.name}</span></p>}
              </div>

              {/* Send Button */}
              <Button type="submit" size="lg" className="w-full bg-yellow-400 text-[#031273] hover:bg-yellow-500 shadow-lg" disabled={sending}>
                <Send className="w-5 h-5 mr-2" /> {sending ? `Sending... ${timer}s` : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-foreground text-center lg:text-left">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      {info.title === 'Call Us' ? (
                        <a href="tel:+919952491705" className="text-accent font-medium block">{info.content}</a>
                      ) : (
                        <p className="text-accent font-medium">{info.content}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-center lg:text-left">Need Immediate Assistance?</h3>
              <p className="mb-6 text-white/90 text-center lg:text-left">
                For urgent matters, call us directly for <strong>24/7 support</strong>.
              </p>
              <a href="tel:+919952491705">
                <Button className="w-full bg-yellow-400 text-[#031273] hover:bg-yellow-500 font-semibold shadow-md">
                  <Phone className="w-4 h-4 mr-2" /> Call Now: +91 9952491705
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground animate-fade-in">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up">
            Find quick answers to common questions about our services, pricing, and process.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How long does a typical project take?", a: "Simple websites: 2-4 weeks. Complex apps: 2-6 months, depending on scope." },
              { q: "Do you provide ongoing support?", a: "Yes, we offer affordable maintenance & support packages." },
              { q: "What’s included in your pricing?", a: "Design, development, testing, deployment, and training. No hidden costs." },
              { q: "Can you work with our existing systems?", a: "Absolutely! We specialize in seamless system integrations." }
            ].map((faq, i) => (
              <div key={i} className={`bg-white p-5 rounded-xl shadow-md text-left transition-all duration-300 ease-in-out ${openFAQ === i ? "scale-[1.02] shadow-lg" : ""}`}>
                <button onClick={() => setOpenFAQ(openFAQ === i ? null : i)} className="flex justify-between items-center w-full font-semibold text-foreground">
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 transform transition-transform duration-300 ${openFAQ === i ? "rotate-180 text-primary" : ""}`} />
                </button>
                <div className={`grid transition-all duration-500 ease-in-out ${openFAQ === i ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


