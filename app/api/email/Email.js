import emailjs from "emailjs-com";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, company, message } = req.body;

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          name,
          email,
          phone,
          company,
          message,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );

      res.status(200).json({ message: "Message sent successfully!", response });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ error: "Failed to send the message. Please try again." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
