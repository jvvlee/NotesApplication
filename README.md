# DevChallenge_Jonathan
# Documentation

## About
This is a note-taking app built with a rails API and a react-based. As of 7/31/17, A user can create, read, update, and destroy their own notes. They can also view and edit notes shared with them by other users. The CRUD-interface for managing the permissions of which users can read/write another user's notes is still a work in progress.

In writing this application, I decided to create the react views before the permissions because I want to see what data the front-end would need first. This was my first time using a new front-end framework (React) and I wanted to be able to work with it as quickly as possible to see what it typically would require from the API.

## Features
- Built with Rails 5 in Ruby 2.4.0
- DB used is postgresql
- Note CRUD interface made with React
- User creation/login

## Instructions
- Install Ruby 2.4.0 with RVM
- Bundle install gems
- Run rake db:setup to migrate the database and seed it with test users. NOTE: This assumes that you have a db-user named "root" with no password and db-write permissions. Change this in config/database.yml to fit your own configuration.
- Go to localhost:3000 (or whichever your development port is) and login with username "username" and password "password"

## To-dos
- Need to implement creatable permissions
- Nest Permissions under each note
- Test cases
- Use bootstrap more efficiently

## Bugs
- Need to get rid of annoying warnings about LESS assets
- Permission array in react throws 'missing key' warning despite key prop being supplied.
