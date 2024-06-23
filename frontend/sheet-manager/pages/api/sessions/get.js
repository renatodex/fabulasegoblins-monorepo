// GET api/sessions
// email: renatodex@gmail.com
export default async function handler(req, res) {
  if (req.method === 'GET') {
    console.log("PINGANDO")
    const { token } = req.query;

    const request = await fetch('http://localhost:5000/api/users/login', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })

    res.status(request.status).json({ login: request.ok });
  } else {
    res.status(400).json({ error: 'This request must be GET' })
  }
}