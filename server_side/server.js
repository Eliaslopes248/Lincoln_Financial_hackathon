//===================================================================
// INCLUDE MODULES
//===================================================================
const express    = require("express");
const dotenv     = require("dotenv");
const bodyParser = require("body-parser");
const cors       = require('cors');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

//===================================================================
// INCLUDE MIDDLEWARE
//===================================================================
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//===================================================================
// INCLUDE ENDPOINTS AND CATCH ALL ROUTE
//===================================================================

// import module routes
const userRoutes = require("./routes/users.js");

// add router modules
app.use("/api/users", userRoutes);

// ----------------------------- CATCH ALL ROUTES ---------------------
app.get('/api/test', (req, res) => {
    res.json({ 
        message: 'Server is working!',
        port: PORT,
        timestamp: new Date().toISOString()
    });
});

app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK',
        message: 'API is healthy',
        timestamp: new Date().toISOString()
    });
});


//===================================================================
// SERVER ENTRY POINT
//===================================================================

// Start server
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
    console.log(`API available at: http://localhost:${PORT}/api/`);
});