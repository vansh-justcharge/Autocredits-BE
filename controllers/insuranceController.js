const prisma =require('../config/db');

// Create 
exports.createInsurance = async (req, res) => {
  try {
    const { buyerName, mobileNumber } = req.body;

    if (!buyerName || !mobileNumber) {
      return res.status(400).json({ error: "Missing required fields: buyerName and mobileNumber are required." });
    }

    const insurance = await prisma.insurance.create({
      data: req.body,
    });

    res.status(201).json(insurance);
  } catch (error) {
    console.error("Create Insurance Error:", error);
    res.status(500).json({ error: error.message });
  }
};


// get 
exports.getAllInsurances = async (req, res) => {
  try {
    const insurances = await prisma.insurance.findMany();
    res.json(insurances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get by id 
exports.getInsuranceById = async (req, res) => {
  const { id } = req.params;
  try {
    const insurance = await prisma.insurance.findUnique({
      where: { id: parseInt(id) },
    });
    if (!insurance) {
      return res.status(404).json({ error: 'Insurance not found' });
    }
    res.json(insurance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update 
exports.updateInsurance = async (req, res) => {
  const { id } = req.params;
  try {
    const insurance = await prisma.insurance.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(insurance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete 
exports.deleteInsurance = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.insurance.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Insurance deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};