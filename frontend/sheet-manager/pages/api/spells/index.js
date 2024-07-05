export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Extract the query string from the request URL
    const queryString = req.url.split('?')[1] || '';

    const apiUrl = `${process.env.CORE_API_URL}/api/spells?${queryString}`;

    try {
      const request = await fetch(apiUrl, {
        method: 'GET',
      });

      if (!request.ok) {
        throw new Error(`Error: ${request.status}`);
      }

      const response = await request.json();
      res.status(request.status).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(400).json({ error: 'This request must be GET' });
  }
}
