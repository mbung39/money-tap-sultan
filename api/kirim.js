export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { target, message } = req.body;
  const FONNTE_TOKEN = "8BrJG3zsBmCxwcqLAa9J"; // TARUH TOKEN DI SINI BIAR AMAN

  try {
    const response = await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: { 
        "Authorization": FONNTE_TOKEN,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `target=${target}&message=${encodeURIComponent(message)}`
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
