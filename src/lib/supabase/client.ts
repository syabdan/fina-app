import { Environment } from '@/config/environment';
import { createBrowserClient } from '@supabase/ssr';

export const createClient = () =>
  createBrowserClient(Environment.supabaseUrl!, Environment.supabaseKey!);
