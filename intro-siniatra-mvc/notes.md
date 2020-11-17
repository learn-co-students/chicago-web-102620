# Intro to Sinatra & MVC

## Objectives

- describe the Model View Controller (MVC) pattern
- define "convention over configuration"
- implement one model < ActiveRecord
- implement one controller
- implement ERB views
- identify the connection between REST and CRUD

## Questions

- DateTime class - how to generate specific date formats?
- shotgun vs rackup
  - shotgun adds features to rack
  - shotgun depends on rack
- when to assign params to an instance variable?
- how to quit existing processes?
  - get a list of running processes on a given port `lsof -i tcp:9393`
  - stop a process by a given id `kill -9 <process_id>`


## Notes

What is MVC

- an architectural or programmatic paradigm 
- Model View Controller
  - model - representing types of objects that will persist
  - view - user facing interface
  - controller - connects user actions to application behavior

REST

- REpresentation State Transfer
- pattern that provides conventions for sending and receiving messages to a server
- works in tandem with MVC
- CRUD
  - create
  - read
  - update
  - delete

### REST


## Icebox

- look for html review material

## Images 

### MVC

![MVC](https://i.stack.imgur.com/jKOn7.jpg)

### REST

![REST](CRUDREST.png)