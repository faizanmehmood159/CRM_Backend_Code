const instaZubis = require('../../../../models/instaZubi');

const getinstaZubis = async (req, res) => {
  try {
    // Retrieve all instaZubi documents
    const instaZubisList = await instaZubis.findOne();
    res.status(200).json(instaZubisList);
  } catch (err) {
    console.error('Error fetching insta Zubi  :', err);
    res.status(500).json({ error: 'Failed to fetch insta Zubi  ' });
  }
};

module.exports = { getinstaZubis };
