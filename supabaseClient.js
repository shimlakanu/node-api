// import { createClient, SupabaseClient } from '@supabase/supabase-js'

// // Create a single supabase client for interacting with your database
// const supabase = createClient('https://nkzokdmhfgnzxiiznvgi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rem9rZG1oZmduenhpaXpudmdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1OTczNTQsImV4cCI6MTk5NTE3MzM1NH0.8bY8vSA1LBE4_kirl1lIB7xNQM2PCzvLam7BMsXkVH4');

// // exports.supabaseClient = supabaseClient;
// module.exports = supabase;

const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://nkzokdmhfgnzxiiznvgi.supabase.co',
 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rem9rZG1oZmduenhpaXpudmdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1OTczNTQsImV4cCI6MTk5NTE3MzM1NH0.8bY8vSA1LBE4_kirl1lIB7xNQM2PCzvLam7BMsXkVH4');

 module.exports = supabase;