// POST api/sessions
// email: renatodex@gmail.com
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const request = await fetch(`${process.env.CORE_API_URL}/api/users/logout?token=${req?.headers?.authorization}`, {
      method: 'DELETE',
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
