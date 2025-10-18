//===================================================================
// INCLUDE MODULES
//===================================================================
const express               = require("express");
const router                = express.Router();
const supabase              = require("../utils/supabase.js")
const { RC_CODES }          = require('../utils/errors.js');
const { RC_RESPONSE }       = require('../utils/errors.js');

//===================================================================
// ROUTE HELPER METHODS
//===================================================================

// get all users from supabase database in users table
async function getUser(user){
    try {
        console.log("Attempting to fetch users from database...");
        
        let { data: users, error } = await supabase
            .from('users')
            .select('*')
            .eq("email", user.email)
            .eq("password", user.password);

        if (error) {
            console.error("Database error:", error);
            return null;
        }

        return users[0];

    } catch (err) {
        console.error("Unexpected error:", err);
        return null;
    }
}

async function verifyUser(req, res, next){
    const { credentials } = req.body;
    // attempt to get user account from DB
    const found_user = await getUser(credentials);

    if (found_user){
        // add to request packet
        req.found_user = found_user;
        next();
    }else{
        return res.json(RC_RESPONSE(RC_CODES.NOT_FOUND));
    }
}






//===================================================================
// USER ROUTES
//===================================================================



// Test route to check database connection
router.get("/test-db", async (req, res) => {
    try {
        console.log("Testing database connection...");
        console.log("Supabase client:", supabase ? "Initialized" : "Not initialized");
        
        let { data: users, error } = await supabase
            .from('users')
            .select('*');

        console.log("Query result - data:", users);
        console.log("Query result - error:", error);

        if (error) {
            console.error("Database error:", error);
            return res.status(500).json({ 
                error: "Database connection failed", 
                details: error.message 
            });
        }

        res.json({ 
            success: true, 
            message: "Database connection successful",
            users: users,
            count: users ? users.length : 0
        });
    } catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).json({ 
            error: "Internal server error", 
            details: err.message 
        });
    }
});

router.post("/auth/login/attempt", verifyUser, (req, res) => {
    // send back response with user account with status 200
    return res.json(
        RC_RESPONSE(RC_CODES.SUCCESS, {
            session: req.found_user
        })
    );

});


//===================================================================
// EXPORT ROUTER
//===================================================================
module.exports = router;