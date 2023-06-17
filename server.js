const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse JSON bodies
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Define API routes
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Handle contact form submission and send email, save to database, etc.
  // Replace this with your own logic
  
  res.json({ success: true });
});
mongoose.connect('mongodb://localhost:27017/my-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Failed to connect to MongoDB:', error);
});
const submissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const submission = new Submission({ name, email, message });
  submission.save()
    .then(() => {
      // Send email notification
      sendEmailNotification(name, email, message);

      res.json({ success: true });
    })
    .catch((error) => {
      console.log('Failed to save submission:', error);
      res.status(500).json({ success: false, error: 'Failed to save submission' });
    });
});
function sendEmailNotification(name, email, message) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'deepanmajumdar2003@gmail.com',
      pass: 'password'
    }
  });

  const mailOptions = {
    from: email,
    to: 'deepanmajumdar2003@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Failed to send email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

const Submission = mongoose.model('Submission', submissionSchema);


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

