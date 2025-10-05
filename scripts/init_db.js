import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
const DB_PATH = path.join(dataDir, 'app.db');

async function init(){
  const db = await open({ filename: DB_PATH, driver: sqlite3.Database });
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT,
      name TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS site_meta (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS portfolio (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT,
      image_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS services (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      short_desc TEXT,
      content TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS team (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      role TEXT,
      photo TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS about (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  // insert sample site meta if empty
  const row = await db.get('SELECT id FROM site_meta LIMIT 1');
  if(!row){
    await db.run('INSERT INTO site_meta (title, description) VALUES (?, ?)', ['FreakBrids', 'A sample site meta created by backend init']);
  }
  // insert sample portfolio if empty
  const p = await db.get('SELECT id FROM portfolio LIMIT 1');
  if(!p){
    await db.run('INSERT INTO portfolio (title, description, image_url) VALUES (?,?,?)', ['Sample project','This is a sample portfolio item','/uploads/sample.jpg']);
  }
  // sample services
  const s = await db.get('SELECT id FROM services LIMIT 1');
  if(!s){
    await db.run('INSERT INTO services (title, short_desc, content) VALUES (?,?,?)', ['Web Development','Modern responsive websites','We build performant React + Node.js applications.']);
    await db.run('INSERT INTO services (title, short_desc, content) VALUES (?,?,?)', ['Mobile Apps','iOS and Android apps','Cross-platform mobile development using React Native and Flutter.']);
  }
  // sample team
  const t = await db.get('SELECT id FROM team LIMIT 1');
  if(!t){
    await db.run('INSERT INTO team (name, role, photo) VALUES (?,?,?)', ['Jane Doe','Founder','/uploads/jane.jpg']);
    await db.run('INSERT INTO team (name, role, photo) VALUES (?,?,?)', ['John Smith','Lead Developer','/uploads/john.jpg']);
  }
  // sample about
  const a = await db.get('SELECT id FROM about LIMIT 1');
  if(!a){
    await db.run('INSERT INTO about (content) VALUES (?)', ['FreakBrids is a creative agency crafting beautiful websites and apps.']);
  }
  console.log('DB initialized at', DB_PATH);
  await db.close();
}

init();
