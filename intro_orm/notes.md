# Intro to ORMs

## Objective

- Define Object Relational Mapper (ORM)
- Distinguish between ORMs and SQL
- Demonstrate that an ORM connects a scripting language to a database
- Define persistant CRUD actions on a model

## Questions

## One to Many

- primary_key - unique identifier for a row in a table
- foreign_key - reference that points a row on another table

cats
id | name | age 
1    kitty   3
2    catso   5
3    meowser 11

cats_owners
id | owner_id | cat_id
1       1         1
2       1         2
3       2         3 
4       3         3

owners
id | name
1    frank
2    julie
3    randy

## SQL CRUD Review

- create a record of cat
"INSERT INTO cats name, age VALUE 'Maru', 4;"

- read records from the cat table
"SELECT * FROM cats;"

- update a cat record
"UPDATE cats SET name = 'Mimi' WHERE id = 1;"

- destroy a cat record
"DELETE FROM cats WHERE id = 3;"

- find all of julies cats
"SELECT id FROM owners WHERE name = 'Julie'"
"SELECT cats.name 
 FROM casts 
 INNER cats_owners 
 ON cats.id = cats_owners.cat_id 
 WHERE cats_owners.owner_id = 2"

## Conventions

- join tables are snake cased and plural of the two joining classes
  - cats and owners -> cats_owners

## CRUD review


# ICEBOX
- do the execute method attribute arguments need to be in order