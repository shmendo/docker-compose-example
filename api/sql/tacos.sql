CREATE TABLE tacos (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  created_at TIMESTAMP not NULL default CURRENT_TIMESTAMP
);

INSERT INTO tacos (name) 
VALUES 
  ('carne asada'),
  ('chicken'),
  ('carnitas'),
  ('lingua'),
  ('birria'),
  ('nom');