// server.js
const express = require('express');
const app = express();
app.use(express.json());

app.post('/submit', (req, res) => {
    const { name, email, password } = req.body;

    // هنا البيانات تصل إليك في الكونسول
    console.log('البيانات المستلمة:', { name, email, password });

    // رجّع رد للفرونت
    res.json({ message: 'تم استقبال البيانات بنجاح!' });
});

// شغل السيرفر
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
