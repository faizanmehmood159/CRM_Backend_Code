const forCompanies = require('../../../../models/forCompanies');

const getforCompanies = async (req, res) => {
  try {
    // Retrieve all forCompanie documents
    const forCompaniesList = await forCompanies.findOne();

 

    res.status(200).json(forCompaniesList);
  } catch (err) {
    console.error('Error fetching Further Training :', err);
    res.status(500).json({ error: 'Failed to fetch Further Training ' });
  }
};

module.exports = { getforCompanies };
