# Intro to ActiveRecord

## Objectives

- define Object Relational Mapper (ORM)
- describe Ruby gems and package management
- describe `rake` and run rake tasks
- implement ActiveRecord

## Questions

## Notes

### ActiveRecord Rake Commands

db:create
db:create_migration - will create a new migration file in the db/migrate/ directory
db:migrate
db:drop
db:rollback

### ActiveRecord::Base Methods

- `Model.new`
- `Model.save`
- `Model.create`
- `Model.all`
- `Model.first`
- `Model.find`
- `Model.find_by(title: "The Lorax")`
- `Model#update()`