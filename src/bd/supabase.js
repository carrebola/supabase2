
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tYWhkcnhzZmV2YndoY2l2ZnpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3NTk2MDEsImV4cCI6MTk5MTMzNTYwMX0.aGY_diFyEkSY3V3QgxP2ZhMQ8mLkYrFRkPVvNnYC0kE'

const SECRET = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tYWhkcnhzZmV2YndoY2l2ZnpsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NTc1OTYwMSwiZXhwIjoxOTkxMzM1NjAxfQ.eu_aZzNoSRihs7D1mMDj2lD8fDC8AdWjxh4u48tZ4R0'


import { createClient } from "@supabase/supabase-js"
const supabaseUrl = 'https://mmahdrxsfevbwhcivfzl.supabase.co'
const supabaseKey = API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)





export { supabase }