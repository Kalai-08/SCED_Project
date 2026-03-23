const { sql } = require('../config/sql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// 🔐 Generate Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
    });
};

// 📝 Register
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    if (password.length < 8) {
        return res.status(400).json({ message: "Password must be at least 8 characters" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await sql.query`
            INSERT INTO Users (name, email, password)
            VALUES (${name}, ${email}, ${hashedPassword})
        `;

        res.status(201).json({ message: "User registered" });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// 🔓 Login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await sql.query`
            SELECT * FROM Users WHERE email = ${email}
        `;

        const user = result.recordset[0];

        if (!user) {
            return res.status(401).json({ message: "Invalid email" });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = generateToken(user.id);

        res.json({ token });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { registerUser, loginUser };
