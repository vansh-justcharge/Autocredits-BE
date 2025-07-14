const cloudinary = require('../cloudinary/cloudinary'); 
const PDFDocument = require('pdfkit'); 
const streamifier = require('streamifier'); 
const prisma = require('../config/db');

// CREATE QUOTE
exports.createQuote = async (req, res) => {
  try {
    const {
      insurer,
      premium,
      coverage,
      ncb,
      quoteInsuranceDuration,
      quoteIDV,
      quoteTotalPremium,
      features,
    } = req.body;

    // 1. Generate PDF
    const doc = new PDFDocument();
    let buffers = [];

    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', async () => {
      const pdfBuffer = Buffer.concat(buffers);

      // 2. Upload PDF to Cloudinary
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: 'raw', folder: 'quotes_pdfs' },
        async (error, result) => {
          if (error) {
            return res.status(500).json({ error: 'Cloudinary upload failed' });
          }

          // 3. Save quote with PDF URL
          const quote = await prisma.quote.create({
            data: {
              insurer,
              premium,
              coverage,
              ncb,
              quoteInsuranceDuration,
              quoteIDV,
              quoteTotalPremium,
              features,
              pdfUrl: result.secure_url,
            },
          });

          res.status(201).json(quote);
        }
      );

      streamifier.createReadStream(pdfBuffer).pipe(uploadStream);
    });

    // PDF content
    doc.fontSize(16).text(`Insurance Quote`, { align: 'center' });
    doc.moveDown();
    doc.text(`Insurer: ${insurer}`);
    doc.text(`Premium: ${premium}`);
    doc.text(`Coverage: ${coverage}`);
    doc.text(`NCB: ${ncb}`);
    doc.text(`Duration: ${quoteInsuranceDuration}`);
    doc.text(`IDV: ${quoteIDV}`);
    doc.text(`Total Premium: ${quoteTotalPremium}`);
    doc.moveDown();
    doc.text(`Features:`);
    features?.forEach((f, i) => doc.text(`  ${i + 1}. ${f}`));
    doc.end();
  } catch (error) {
    console.error('Create Quote Error:', error);
    res.status(500).json({ error: error.message });
  }
};

// ✅ ADD THESE TO FIX YOUR ERROR
exports.getAllQuote = async (req, res) => {
  try {
    const quotes = await prisma.quote.findMany();
    res.status(200).json(quotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getQuoteById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const quote = await prisma.quote.findUnique({ where: { id } });
    res.status(200).json(quote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateQuote = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updated = await prisma.quote.update({
      where: { id },
      data: req.body,
    });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteQuote = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.quote.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
