// POST api/login?email=renatodex@gmail.com&password=123456
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const request = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
          password
        }
      }),
    })

    const response = await request.json();
    res.status(request.status).json(response);
  } else {
    res.status(400).json({ error: 'This request must be POST' })
  }
}