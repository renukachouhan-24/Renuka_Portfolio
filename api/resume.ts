import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  const resumeUrl = 'https://docs.google.com/document/d/1D959tBa4way7VrkQ_T4NTj0uc9eWKXS9JZ-6ElQtLRk/export?format=pdf';

  try {
    const response = await fetch(resumeUrl);

    if (!response.ok) {
      // Log the error for debugging on Vercel
      console.error(`Failed to fetch resume: ${response.status} ${response.statusText}`);
      // Send a generic error to the client
      res.status(500).send('Error fetching resume');
      return;
    }

    const pdfBuffer = await response.arrayBuffer();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Renuka_Chouhan_Resume.pdf"');

    // Send the PDF buffer as the response
    res.send(Buffer.from(pdfBuffer));
  } catch (error) {
    console.error('Error in resume handler:', error);
    res.status(500).send('Error processing request');
  }
}
