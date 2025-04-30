const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configure Nodemailer transport (Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sachin931920@gmail.com',  
    pass: 'hbqy kkbu nled lmwv'  
  }
});


app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  
  const mailOptions = {
    from: email, 
    to: 'sachin931920@gmail.com', 
    subject: `New message from ${name}`,  
    text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}` 
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error occurred:', error);  
      return res.status(200).json({ message: 'Failed to send message', error: error.message });
    }
    console.log('Email sent: ' + info.response);
    return res.status(200).json({ message: 'Email sent successfully!' });
  });
});


const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
