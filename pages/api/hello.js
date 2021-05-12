export default function handler(req, res) {
  res.status(200).json({ text: "Hello, I am the response from an API!" });
}
