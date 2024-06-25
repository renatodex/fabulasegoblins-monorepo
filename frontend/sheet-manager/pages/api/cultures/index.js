export default async function handler(req, res) {
  if (req.method === 'GET') {
    const request = await fetch(`${process.env.NEXT_PUBLIC_CORE_URL}/api/cultures?page=1`, {
      method: 'GET',
    })

    const response = await request.json();
    res.status(request.status).json(response);
  } else {
    res.status(400).json({ error: 'This request must be GET' })
  }
}
