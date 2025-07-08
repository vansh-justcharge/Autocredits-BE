const prisma =require('../config/db');

exports.createQuote=async(req,res)=>{
    try{
        const quote=await prisma.quote.create({
            data:req.body,
        });

        res.status(201).json(quote);

    }
    catch(error){
        console.error("Create Quote Error:", error);
        res.status(500).json({ error: error.message });
    }
}

exports.getAllQuote = async (req, res) => {
  try {
    const quote = await prisma.quote.findMany();
    res.json(quote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getQuoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const quote = await prisma.quote.findUnique({
      where: { id: parseInt(id) },
    });
    if (!quote) {
      return res.status(404).json({ error: 'Insurance not found' });
    }
    res.json(quote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update 
exports.updateQuote = async (req, res) => {
  const { id } = req.params;
  try {
    const quote = await prisma.quote.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(quote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete 
exports.deleteQuote = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.quote.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Insurance deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};