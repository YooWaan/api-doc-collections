define({ "api": [
  {
    "type": "get",
    "url": "/notes",
    "title": "Request User's notes",
    "version": "0.1.0",
    "name": "Notes_List",
    "group": "Notes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>search query.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "notes",
            "description": "<p>notes list</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "notes.message",
            "description": "<p>notes message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"message\": \"Hello\"\n  },\n  {\n    \"message\": \"Hello\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/api.py",
    "groupTitle": "Notes"
  },
  {
    "type": "put",
    "url": "/notes",
    "title": "Update User's notes",
    "version": "0.1.0",
    "name": "Update_Notes",
    "group": "Notes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "messsage",
            "description": "<p>note message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"message\": \"Hello\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>result message</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "result.message",
            "description": "<p>put result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"updated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/api.py",
    "groupTitle": "Notes"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Request User's List",
    "version": "0.1.0",
    "name": "Users_List",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>search query.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>users list</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "users.name",
            "description": "<p>user's name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"name\": \"tom\"\n  },\n  {\n    \"name\": \"sam\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/api.py",
    "groupTitle": "Users"
  }
] });
