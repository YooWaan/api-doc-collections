FORMAT: 1A

# Group Notes

## My Notes [/notes]

### Retrieve a Message [GET]

+ Response 200 (application/json)

      + Body

            [
              { "note": "Hello World!" },
              { "note": "see you" }
            ]

### Update Note [PUT]

+ Request (application/json)

   + Body

            { "note": "Hello World!" }

+ Response 201 (application/json)

            { "message" : "created" }

# Group Users

## Note Editors [/users]

### Retrieve a Users [GET]

+ Response 200 (application/json)

    + Body

            { "name": "tom" }
