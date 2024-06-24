export default async function handler(req, res) {
  if (req.method === 'GET') {
    const request = await fetch('http://localhost:5000/api/spells?page=1', {
      method: 'GET',
    })

    const response = await request.json();
    res.status(request.status).json(response);
  } else {
    res.status(400).json({ error: 'This request must be GET' })
  }
}
