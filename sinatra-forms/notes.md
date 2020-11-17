# Sinatra Forms and Active Record

## Objectives

- review building RESTful routes
- review ERB and HTML forms
- introduce architecture for multiple models
- associate models with a one to many relationship

## Questions

- when do my elements need an id?
  - they don't typically but some tests require them to find the relevant element
- when do I write code in the controller vs the erb file
  - discrete information for display goes in erb
  - everything else should be in an rb file

- do I need HTML boilerplate for every erb file?
  - no, we can use an erb "template"

- delete verb vs post
  - delete, needs method override => more semantic
  - post also works, not as clear

- slug
  - benefits users by creating more descriptive urls

## Deliverables

As a site visitor, I should be able to:

- see a list of authors
  - GET
  - "authors/index"
  - "localhost:9393/authors"
- see a single author
  - GET
  - "authors/show"
  - "localhost:9393/authors/:id"
- create a new author
  - new
    - GET
    - "authors/new"
    - "localhost:9393/authors/new"
  - create
    - POST
    - redirect "authors/:id"
    - "localhost:9393/authors"
- edit an author
  - edit
    - GET
    - "authors/edit"
    - "localhost:9393/authors/:id/edit
  - update
    - POST -> override with PATCH
    - redirect "/authors/:id"
    - "localhost:9393/authors/:id"
- delete an author
  - POST -> override with DELETE
  - redirect "/authors"
  - "localhost:9393/authors/:id/delete"
<!-- - see a list of books -->
<!-- - see a single book -->
- create a new book with an author
- edit a book or change the author
- delete a book

# icebox
- does includes reduce the number of active record queries?
- slugs demo