export default async function handler(req, res) {
  if (req.method === 'GET') {

    const { attribute } = req.query

    // Construct the URL with optional attributes parameter
    let url = `${process.env.NEXT_PUBLIC_CORE_URL}/api/items?page=1&q[item_type_id_eq]=2&q[common_starter_weapon_eq]=true`
    if (attribute) {
      url += `&q[sheet_attributes_title_cont]=${encodeURIComponent(attribute)}`
    }

    const request = await fetch(url, { method: 'GET' })

    const response = await request.json();
    res.status(request.status).json(response);
  } else {
    res.status(400).json({ error: 'This request must be GET' })
  }
}
