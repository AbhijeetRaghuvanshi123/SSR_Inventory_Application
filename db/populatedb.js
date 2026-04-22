import { Client } from "pg";
import '../config/dotenv.js'

const SQL = `
-- USERS
CREATE TABLE users(
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT,
    added_at TIMESTAMPTZ DEFAULT NOW()
);

-- BRANDS
CREATE TABLE brands(
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    brandName TEXT NOT NULL,
    brandDescription TEXT,
    added_at TIMESTAMPTZ DEFAULT NOW()
);

-- CATEGORIES
CREATE TABLE categories(
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    categoryName TEXT NOT NULL,
    categoryDescription TEXT,
    added_at TIMESTAMPTZ DEFAULT NOW()
);

-- ITEMS
CREATE TABLE items(
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    itemName TEXT NOT NULL,
    itemDescription TEXT,

    categoryId INTEGER REFERENCES categories(id),
    brandId INTEGER REFERENCES brands(id),
    addedBy INTEGER REFERENCES users(id),

    added_at TIMESTAMPTZ DEFAULT NOW()
);

-- STOCK MOVEMENTS
CREATE TABLE stock_movements(
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    item_id INTEGER REFERENCES items(id),
    quantity INTEGER NOT NULL,  -- +IN / -OUT

    note TEXT,
    created_by INTEGER REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- INSERT USERS
INSERT INTO users(username, email)
VALUES
    ('John Marston', 'armadillo@mail.com'),
    ('Dutch Van Der Linde', 'tumbleweed@mail.com');

-- INSERT BRANDS
INSERT INTO brands(brandName, brandDescription)
VALUES
    ('Apple', 'Electronics brand'),
    ('Nike', 'Sportswear brand');

-- INSERT CATEGORIES
INSERT INTO categories(categoryName, categoryDescription)
VALUES
    ('Electronics', 'Devices and gadgets'),
    ('Clothing', 'Wearable items');

-- INSERT ITEMS
INSERT INTO items(itemName, itemDescription, categoryId, brandId, addedBy)
VALUES
    ('iPhone 15', 'Smartphone', 1, 1, 1),
    ('Running Shoes', 'Comfortable sports shoes', 2, 2, 2);

-- INSERT STOCK MOVEMENTS
INSERT INTO stock_movements(item_id, quantity, note, created_by)
VALUES
    (1, 50, 'Initial stock', 1),
    (1, -5, 'Sold items', 2),
    (2, 30, 'Initial stock', 2),
    (2, -3, 'Damaged items', 1);
`;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function main() {
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Database seeded successfully");
}

main();