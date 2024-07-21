// POST api/login?email=renatodex@gmail.com&password=123456
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // try {
    console.log(req?.headers?.authorization)
      const body = req.body; // Parse the incoming request body

      const request = await fetch(`${process.env.CORE_API_URL}/api/characters`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': req?.headers?.authorization,
        },
        body: JSON.stringify(body), // Include the parsed body in the request
      });

      const response = await request.json();
      res.status(request.status).json(response);
    // } catch (error) {
    //   res.status(500).json({ error: 'Failed to process the request' });
    // }
  } else {
    res.status(400).json({ error: 'This request must be POST' });
  }
}
