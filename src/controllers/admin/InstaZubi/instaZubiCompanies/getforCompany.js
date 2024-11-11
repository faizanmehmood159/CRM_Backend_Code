const instaZubiCompanies = require('../../../../models/instaZubiCompanies');

const getinstaZubiCompanies = async (req, res) => {
  try {
    // Retrieve all instaZubiCompanie documents
    const instaZubiCompaniesList = await instaZubiCompanies.findOne();

 

    res.status(200).json(instaZubiCompaniesList);
  } catch (err) {
    console.error('Error fetching insta Zubi Company :', err);
    res.status(500).json({ error: 'Failed to fetch insta Zubi Company ' });
  }
};

module.exports = { getinstaZubiCompanies };
