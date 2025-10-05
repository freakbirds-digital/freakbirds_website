import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "+918870192041"; // Replace with actual WhatsApp number
  const message = "Hello! I'm interested in your services. Can we discuss my project?";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 p-0 shadow-lg animate-bounce"
      size="icon"
    >
      <MessageCircle size={24} />
    </Button>
  );
};

export default WhatsAppButton;