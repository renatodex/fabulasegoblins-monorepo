// POST api/login?email=renatodex@gmail.com&password=123456
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const request = await fetch(`${process.env.NEXT_PUBLIC_CORE_URL}/api/characters`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req?.headers?.authorization,
      },
    })

    const response = await request.json();
    res.status(request.status).json(response);
  } else {
    res.status(400).json({ error: 'This request must be GET' })
  }
}
