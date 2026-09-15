export default async function handler(req, res) {
  const { target, message } = req.body;
  const FONNTE_TOKEN = "8BrJG3zsBmCxwcqLAa9J"; // TOKEN TARUH SINI
  await fetch("https://api.fonnte.com/send", { method: "POST", headers: { "Authorization": FONNTE_TOKEN, "Content-Type": "application/x-www-form-urlencoded" }, body: `target=${target}&message=${encodeURIComponent(message)}`});
  res.status(200).json({status: true});
}
