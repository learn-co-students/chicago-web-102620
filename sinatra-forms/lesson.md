cd # Sinatra Forms and Active Record

Demo current app:

- two migrations for `books` and `authors`
- `google_books.rb` adapter now seeds `books` and `authors`
- two models `Book` and `Author`
- run `db:create`
- run `db:migrate`
- run `db:seed`
- `rake console` to show Models work
- **`layout.erb`**

## Multiple Controllers

Utilizing a unique controller for each app model is a common practice in MVC applications

- separation of concerns
- we can re-use common filenames for views

### ApplicationController

ApplicationController now serves as an intermediate class between Sinatra::Base and our model controllers.

- configure views
- welcome page route

## New methods or features

- nested params => book[title]
- params.delete("_method")
- if save/update => redirect, else => erb new/edit
- .destroy(params[:id])
- ActiveRecord#includes
  - Authors#Show Author.includes(:books)
  - Books#show @book = Book.includes(:author)

```html
<select name="author_id">
    <% @authors.each do |author| %>
        <option value="<%= author.id %>"><%= author.name %></option>
    <% end  %>
</select>
```

## Things to touch on with extra time

- validation: new => save flow
- bang methods: update vs update!
