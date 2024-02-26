"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
// const url = process.env.SUPABASE_URL as string
// const key = process.env.SUPABASE_ANON_KEY as string
const url = 'https://rtpoziwmyvjihhsfomym.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0cG96aXdteXZqaWhoc2ZvbXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxMDE4MzIsImV4cCI6MjAxODY3NzgzMn0.QjRayszrJ4C22dFFXK4aCfQfOqv-RSYDW9Ny5zmgBEc';
const supabase = (0, supabase_js_1.createClient)(url, key);
exports.default = supabase;
//# sourceMappingURL=supabaseClient.js.map