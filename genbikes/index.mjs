import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

import randomInteger from 'random-int';
import { customAlphabet } from 'nanoid';
const nanoId = customAlphabet('1234567890abcdef', 24);
const nanoSerialNumber = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6);
const lng = 2.349014;
const lat = 48.864716;
const sigma = 5;
const spread = 0.2;

// __filename and __dirname shims in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function randomCoordinates(lat, lng) {
  const radius = Math.exp(- 1 * ((Math.random() * 10 - 5) - 0.5) ** 2 / sigma) * spread;
  const angle = Math.random() * 2 * Math.PI;
  const newLat = lat + radius * Math.cos(angle);
  const newLng = lng + radius * Math.sin(angle) * 1.5;
  return [newLat, newLng];
}

function randomBike() {
  const id = nanoId();
  const serial_number = nanoSerialNumber();
  const coordinates = randomCoordinates(lat, lng);
  const service_status = randomInteger(1, 3);
  const in_order = service_status > 1 || Math.random() > 0.5;
  const battery_level = randomInteger(100);

  return {
    id,
    serial_number,
    coordinates,
    in_order,
    service_status,
    battery_level,
  };
}

function genBikes(number) {
  const bikes = [];
  for (let i = 0; i < number; i++) {
    bikes.push(randomBike());
  }
  return bikes;
}

fs.writeFileSync(
  path.join(__dirname, 'bikes.json'),
  JSON.stringify(genBikes(50), null, 2)
);
