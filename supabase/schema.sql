-- AirComfort Database Schema
-- Run this ONCE in Supabase Dashboard > SQL Editor
-- URL: https://supabase.com/dashboard/project/onhmujgfqfhgqcylttsq/sql

-- Drop existing tables (they have wrong schema)
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS settings;

-- Products table
CREATE TABLE products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT,
  category_id TEXT,
  price NUMERIC,
  rating NUMERIC DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  images JSONB DEFAULT '[]',
  description TEXT,
  characteristics JSONB DEFAULT '{}',
  in_stock BOOLEAN DEFAULT true,
  is_new BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  brand TEXT,
  tags JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Orders table
CREATE TABLE orders (
  id TEXT PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  customer_name TEXT,
  customer_phone TEXT,
  customer_email TEXT,
  address TEXT,
  comment TEXT,
  items JSONB DEFAULT '[]',
  total NUMERIC DEFAULT 0,
  status TEXT DEFAULT 'new'
);

-- Settings table (for admin password and other config)
CREATE TABLE settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Products: anyone can read
CREATE POLICY "products_public_read" ON products FOR SELECT TO anon USING (true);
-- Products: service role full access
CREATE POLICY "products_service_all" ON products FOR ALL TO service_role USING (true);

-- Orders: service role only
CREATE POLICY "orders_service_all" ON orders FOR ALL TO service_role USING (true);

-- Settings: service role only
CREATE POLICY "settings_service_all" ON settings FOR ALL TO service_role USING (true);

-- Set initial admin password (will be updated by seed script)
INSERT INTO settings (key, value) VALUES ('admin_password', '17041999');
