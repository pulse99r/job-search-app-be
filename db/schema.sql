\c data_wharehouse_dev;

DROP TABLE IF EXISTS jobs_users;
CREATE TABLE jobs_users (
  id SERIAL PRIMARY KEY,
  fname VARCHAR(20),
  lname VARCHAR(20),
  email VARCHAR(50),
  phone VARCHAR(15),
  street VARCHAR(40),
  city VARCHAR(40),
  state VARCHAR(2),
  zip VARCHAR(9),
  jobs_role BOOLEAN,
  pwd TEXT,
  create_dt TIMESTAMP DEFAULT NOW(),
  last_updated TIMESTAMP DEFAULT NOW()
);

DROP TABLE IF EXISTS jobs_user_profile;
CREATE TABLE jobs_user_profile (
  id SERIAL PRIMARY KEY,
  users_id INT,
  profile_img TEXT,
  jobs_favorites INT[],
  resume_doc TEXT,
  preferred_phone TEXT,
  preferred_email TEXT,
  create_dt TIMESTAMP DEFAULT NOW(),
  last_updated TIMESTAMP DEFAULT NOW()
);

DROP TABLE IF EXISTS jobs_listings;
CREATE TABLE jobs_listings (
  id SERIAL PRIMARY KEY,
  users_id int,
  company TEXT,
  city TEXT,
  state TEXT,
  zip TEXT,
  work_remote BOOLEAN,
  work_in_person BOOLEAN,
  work_hybrid BOOLEAN,
  about_the_company TEXT,
  main_industry TEXT,
  secondary_industry TEXT,
  tertiary_industry TEXT,
  headline TEXT,
  job_description TEXT,
  required_skills TEXT[],
  Qualifications TEXT[],
  we_look_for TEXT[],
  compensation_range TEXT,
  job_status TEXT,
  create_dt TEXT,
  post_until_dt TEXT
);

DROP TABLE IF EXISTS jobs_likes;
CREATE TABLE jobs_likes (
  id SERIAL PRIMARY KEY,
  user_id integer,
  jobs_id integer,
  create_dt TEXT
);