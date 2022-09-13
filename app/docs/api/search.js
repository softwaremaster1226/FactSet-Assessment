export const githubSearch = {
    "/github/search": {
        "get": {
            "tags": [
                "Search"
            ],
            "summary": "signup",
            "parameters": [
                {
                    "in": "query",
                    "name": "stars",
                    "type": "integer",
                    "description": "number of stars"
                },
                {
                    "in": "query",
                    "name": "stars_op",
                    "type": "string",
                    "description": "operator for stars",
                    "enum" : ["lt" , "lte" , "eq" , "gt" , "gte"]
                },
                {
                    "in": "query",
                    "name": "created",
                    "type": "string",
                    "description": "creation date in type of YYYY-MM-DD"
                },
                {
                    "in": "query",
                    "name": "created_op",
                    "type": "string",
                    "description": "operator for created",
                    "enum" : ["lt" , "lte" , "eq" , "gt" , "gte"]
                },
                {
                    "in": "query",
                    "name": "language",
                    "type": "string",
                    "description": "language of repository"
                },
                {
                    "in": "query",
                    "name": "page",
                    "type": "integer",
                    "description": "page number for pagination",
                    "default" : 1
                },
                {
                    "in": "query",
                    "name": "per_page",
                    "type": "integer",
                    "description": "number of results shown in single page",
                    "default" : 30
                },
                {
                    "in": "query",
                    "name": "sort",
                    "type": "string",
                    "description": "sort by number of stars of creation date",
                    "enum" : ["stars" , "created"],
                    "default" : "stars"
                },
                {
                    "in": "query",
                    "name": "order",
                    "type": "string",
                    "description": "ordering results descending or ascending",
                    "enum" : ["asc" , "desc"],
                    "default" : "asc"
                }
            ],
            "produces": [
                "application/json"
            ],
            "responses": {
                "200": {
                    "description": "results"
                }
            }
        }
    },
}