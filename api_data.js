define({ "api": [
  {
    "type": "get",
    "url": "/v1/mangas/categories",
    "title": "Get List Category Mangas",
    "version": "0.1.0",
    "name": "GetListCategoryMangas",
    "group": "Category_Mangas_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Current page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Item in page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>search by name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search[name]",
            "description": "<p>search by name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"data_list\": [\n            {\n                \"id\": 1,\n                \"name\": \"aaa\",\n                \"public\": true,\n                \"created_at\": \"2021-08-28 09:16:55\",\n                \"seo_title\": \"Remington Bruen\",\n                \"seo_description\": \"Miss Allie Hermann Sr.\",\n                \"seo_slug\": \"Prof. Greta Schultz Sr.\"\n            }\n        ],\n        \"metadata\": {\n            \"current_page\": 1,\n            \"limit\": 1,\n            \"total\": 1\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/CategoryMangaApiDoc.php",
    "groupTitle": "Category_Mangas_Management",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer <code>token</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "system_error",
            "description": "<p>System Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Example",
          "content": "{\n    \"code\": 500,\n    \"messages\": [\n        \"System error\"\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/v1/mangas",
    "title": "Get List Mangas",
    "version": "0.1.0",
    "name": "GetListMangas",
    "group": "Mangas_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Current page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Item in page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>search by name, title_mangas_title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "filter[manga_status]",
            "description": "<p>filter by mangas status  NORMAL:0, HOST:1, NEWS:2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort[manga_name]",
            "description": "<p>Sort by mangasname: ASC - Up, DESC - Down</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort[manga_created_at]",
            "description": "<p>Sort by mangas created_at: ASC - Up, DESC - Down</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"data_list\": [\n            {\n                \"id\": 12,\n                \"name\": \"Marietta Howe\",\n                \"thumbnail\": \"http://localhost/storage/mangas/Dennis Pacocha\",\n                \"another_name\": \"Concepcion Hyatt\",\n                \"public\": true,\n                \"status\": 1,\n                \"approval_status\": 1,\n                \"note\": \"Mr. Jarod Carroll\",\n                \"title\": [],\n                \"period_time\": 2,\n                \"type_period_time\": 2,\n                \"views\": 12,\n                \"follow\": 2,\n                \"created_at\": \"2021-08-23 16:45:39\",\n                \"seo_title\": \"Miss Makenzie Swaniawski V\",\n                \"seo_description\": \"Carolina Herman\",\n                \"seo_slug\": \"Mr. Connor Erdman\"\n            }\n        ],\n        \"metadata\": {\n            \"current_page\": 1,\n            \"limit\": 1,\n            \"total\": 12\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/MangaCustomerApiDoc.php",
    "groupTitle": "Mangas_Management",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer <code>token</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "system_error",
            "description": "<p>System Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Example",
          "content": "{\n    \"code\": 500,\n    \"messages\": [\n        \"System error\"\n    ]\n}",
          "type": "json"
        }
      ]
    }
  }
] });
