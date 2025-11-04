import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bemhftqlcftuykeocyhx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlbWhmdHFsY2Z0dXlrZW9jeWh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNzA5NDIsImV4cCI6MjA3Nzg0Njk0Mn0.PRqiMMamOyjJlqKEZ4RdM1XIV6t6DCt147FGQteZjks'

export const supabase = createClient(supabaseUrl, supabaseKey)