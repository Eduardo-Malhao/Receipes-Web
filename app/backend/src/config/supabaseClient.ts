import { createClient } from '@supabase/supabase-js'

const url = 'https://rtpoziwmyvjihhsfomym.supabase.co'
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0cG96aXdteXZqaWhoc2ZvbXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxMDE4MzIsImV4cCI6MjAxODY3NzgzMn0.QjRayszrJ4C22dFFXK4aCfQfOqv-RSYDW9Ny5zmgBEc'

const supabase = createClient(url, key);

export default supabase;