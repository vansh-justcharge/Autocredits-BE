const prisma =require('../config/db');

// CREATE a new lead
exports.createLead = async (req, res) => {
  try {
    const lead = await prisma.lead.create({
      data: req.body,
    });
    res.status(201).json(lead);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create lead' });
  }
};

// GET all leads
exports.getAllLeads = async (req, res) => {
  try {
    const { service } = req.query;

    const leads = await prisma.lead.findMany({
      where: service ? { service } : undefined,
    });

    res.status(200).json(leads);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
};

// GET a single lead by ID
exports.getLeadById = async (req, res) => {
  try {
    const lead = await prisma.lead.findUnique({
      where: { id: parseInt(req.params.id) },
    });

    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }

    res.status(200).json(lead);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch lead' });
  }
};

// UPDATE lead
exports.updateLead = async (req, res) => {
  try {
    const updatedLead = await prisma.lead.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });

    res.status(200).json(updatedLead);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update lead' });
  }
};

// DELETE lead
exports.deleteLead = async (req, res) => {
  try {
    await prisma.lead.delete({
      where: { id: parseInt(req.params.id) },
    });

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete lead' });
  }
};
