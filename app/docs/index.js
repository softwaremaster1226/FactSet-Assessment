import { githubSearch } from "./api/search";

export const swagger_base = {
    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "title": "Factset",
        "description": "API Documents"
    },
    "host": "localhost:4000",
    "basePath": "/",
    "produces": [
        "application/json"
    ],
    "paths": {
        ...githubSearch
    }
}