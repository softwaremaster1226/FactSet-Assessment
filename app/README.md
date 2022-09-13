# Fetch repositories from Github

#### Simple app to fetch repositories and filter them from Github 

## Installation
Within root of project run 
`npm install`

To run the project
`npm run dev`

app will be available : http://localhost:4000

## API usage guid
This app contains single route. By providing query parameters you can fetch and filter data

endpoint is available http://localhost:4000/github/search 

documentation http://localhost:4000/apidocs

## List of params

| name          | type          | required | note                       |
| ------------- |:-------------:| -------: | -------------------------: |
| stars         | number      | False      |                            |
| stars_op      | string      | False      | default value : lte        |
| created       | string      | False      | with format of YYYY-MM-DD  |
| created_op    | string      | False      | default value : lte        |
| language      | string      | False      |                            |
| page          | number      | False      | default value : 1          |
| per_page      | number      | False      | default value : 30         |
| sort          | string      | False      | 'stars' or 'created'       |
| order         | string      | False      | 'asc' or 'desc'            |
