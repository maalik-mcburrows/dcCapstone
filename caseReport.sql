CREATE DATABASE capstone;

CREATE TABLE corona_cases(id serial PRIMARY KEY, test_date timestamp, testing_site varchar, state text)