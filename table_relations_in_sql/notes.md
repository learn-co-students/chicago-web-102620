# Table Relations in SQL

## Objectives

- discuss persistance and the need for SQL
- differentiate SQLite3 and SQL
- Perform CRUD actions on a table
- Perform CRUD actions across related tables

## Notes

SQL - Structured Query Language

- store and persist info in a database
- manipulate or change that info

sqlite3 - relational database that can be queried with SQL

Relational database

- stores data in tables
- models and tables correlate 1 to 1

### Accessing Datases

- terminal -> sqlite3 CLI
- SQL Browser
- appilaction code

### Conventions

- Models - upcase and camelcase (`UserLikes`)
- tables - lowercase and snake_case (`user_likes`)

### SQL examples

1. Write SQL to return all of the artists

`SELECT * FROM artists;`
> SELECT <columns1, column2, column3> FROM <table_name>;

2. Select the artist with the name "Black Sabbath"

`SELECT * FROM artists WHERE name = 'Black Sabbath';`
> SELECT <column names list> FROM <table name> WHERE <condition to be met>;

3. create a table named fans with an autoincrementing ID that is a primary key and name field of type text
`CREATE TABLE fans (id INTEGER PRIMARY KEY, name TEXT);`

4. add an artist_id column to the fans table.

`ALTER TABLE fans ADD COLUMN artist_id INTEGER;`
> ALTER TABLE <table name> ADD COLUMN <column name> <DATA TYPE>;

5. Add a fan to the fans table (fan of black sabbath)

`INSERT INTO fans (name, artist_id) VALUES ("your name", 12)`
> INSERT INTO <table name> (<columns>) VALUES (<values>)

6. Return fans next to their artists

`SELECT * FROM artists INNER JOIN fans ON fans.artist_id = artists.id;`
> SELECT <column names> FROM <left table name> INNER JOIN <right table name> ON <condition to join>;

### JOIN TABLES

combination of two tables in a relational database

- INNER JOIN - will return only rows for records that share a column across both tables
- LEFT JOIN - will return all records on the left table with additional columns for the joining table where a column is shared across both tables

## Icebox

## Resources
