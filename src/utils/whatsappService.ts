
interface WhatsAppMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendWhatsAppMessage = async (messageData: WhatsAppMessage) => {
  const { name, email, subject, message } = messageData;
  
  const whatsappMessage = `🌟 *Pesan Baru dari Portfolio Website* 🌟

📝 *Nama:* ${name}
📧 *Email:* ${email}
💬 *Subjek:* ${subject}

📋 *Pesan:*
${message}

✨ _Dikirim otomatis dari website portfolio Fransiska_`;

  console.log("Sending message via Fonte API...");
  
  const response = await fetch('https://api.fonte.com.br/chat/sendText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer pUHPiTDPi4aeGQo9Q4PW'
    },
    body: JSON.stringify({
      phone: "6282115575219",
      message: whatsappMessage
    })
  });

  const result = await response.json();
  console.log("Fonte API response:", result);

  if (!response.ok) {
    throw new Error(result.message || 'Failed to send message');
  }

  return result;
};

export const createFallbackWhatsAppUrl = (messageData: WhatsAppMessage) => {
  const { name, email, subject, message } = messageData;
  
  const fallbackMessage = `Halo Fransiska! 

Nama: ${name}
Email: ${email}
Subjek: ${subject}

Pesan:
${message}

Terima kasih!`;

  return `https://wa.me/6282115575219?text=${encodeURIComponent(fallbackMessage)}`;
};
