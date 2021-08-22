define({ "api": [
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
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"data_list\": [\n            {\n                \"id\": 3,\n                \"pid\": \"1234567892\",\n                \"name\": \"banh kem\",\n                \"image_url\": \"http://localhost/abc.jpg\",\n                \"shop\": {\n                    \"id\": 1,\n                    \"name\": \"happy candy\"\n                },\n                \"sku\": \"FF1000\",\n                \"sale_price\": 1000000,\n                \"price_include_tax\": 1000000,\n                \"inventory_number\": 100,\n                \"subscription_status\": true,\n                \"public\": true,\n                \"variation_status\": true,\n                \"variation\": [\n                    {\n                        \"id\": 1,\n                        \"sku\": \"FF1111\",\n                        \"image_url\": \"http://localhost/abc.jpg\",\n                        \"sale_price\": 1000000,\n                        \"price_include_tax\": 1000000,\n                        \"inventory_number\": 100,\n                        \"attribute_values\": [\n                            {\n                                \"id\": 1,\n                                \"title\": \"đỏ\"\n                            }\n                        ]\n                    }\n                ],\n                \"created_at\": \"2021-01-05 02:07:57\",\n                \"updated_at\": \"2021-01-05 02:07:57\"\n            }\n        ],\n        \"total\": 1,\n        \"current_page\": 1,\n        \"limit\": 10\n    }\n}",
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
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"data_list\": [\n            {\n                \"id\": 3,\n                \"pid\": \"1234567892\",\n                \"name\": \"banh kem\",\n                \"image_url\": \"http://localhost/abc.jpg\",\n                \"shop\": {\n                    \"id\": 1,\n                    \"name\": \"happy candy\"\n                },\n                \"sku\": \"FF1000\",\n                \"sale_price\": 1000000,\n                \"price_include_tax\": 1000000,\n                \"inventory_number\": 100,\n                \"subscription_status\": true,\n                \"public\": true,\n                \"variation_status\": true,\n                \"variation\": [\n                    {\n                        \"id\": 1,\n                        \"sku\": \"FF1111\",\n                        \"image_url\": \"http://localhost/abc.jpg\",\n                        \"sale_price\": 1000000,\n                        \"price_include_tax\": 1000000,\n                        \"inventory_number\": 100,\n                        \"attribute_values\": [\n                            {\n                                \"id\": 1,\n                                \"title\": \"đỏ\"\n                            }\n                        ]\n                    }\n                ],\n                \"created_at\": \"2021-01-05 02:07:57\",\n                \"updated_at\": \"2021-01-05 02:07:57\"\n            }\n        ],\n        \"total\": 1,\n        \"current_page\": 1,\n        \"limit\": 10\n    }\n}",
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
