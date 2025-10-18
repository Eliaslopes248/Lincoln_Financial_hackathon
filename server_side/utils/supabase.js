//============================================================================
// SUPABASE CLIENT (Import across server side routes)
//============================================================================

const { createClient } = require('@supabase/supabase-js');
const dotenv           = require("dotenv");

// expose environment variables
dotenv.config();

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL || null;
const supabaseKey = process.env.SUPABASE_ANON_KEY || null;

// Validate configuration
if (!supabaseUrl || supabaseUrl === 'your_supabase_url_here') {
    console.error(' SUPABASE_URL is not configured. Please update your .env file with your actual Supabase URL.');
    process.exit(1);
}

if (!supabaseKey || supabaseKey === 'your_supabase_anon_key_here') {
    console.error(' SUPABASE_ANON_KEY is not configured. Please update your .env file with your actual Supabase anon key.');
    process.exit(1);
}

// Create the Supabase client
const supabase = createClient(supabaseUrl, supabaseKey)

// Export for use in other server-side files
module.exports = supabase
module.exports.supabase = supabase
