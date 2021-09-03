define({ "api": [
  {
    "type": "post",
    "url": "/v1/users/login",
    "title": "Login Customer",
    "version": "0.1.0",
    "name": "LoginCustomer",
    "group": "Auth_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>users email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>users password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"customer_data\": {\n            \"id\": 15,\n            \"name\": null,\n            \"email\": \"hung@gmail.com\"\n        },\n        \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC92MVwvdXNlcnNcL2xvZ2luIiwiaWF0IjoxNjMwNDIxOTE1LCJleHAiOjE2MzA0MjU1MTUsIm5iZiI6MTYzMDQyMTkxNSwianRpIjoiQ3o4R3R6TmRTWVkxSkNQWSIsInN1YiI6MTUsInBydiI6IjQxZGY4ODM0ZjFiOThmNzBlZmE2MGFhZWRlZjQyMzQxMzcwMDY5MGMifQ.ufxSp-YJhnuj5_FKBfm36H-7DJvbYDCqo7Rpn9Li95g\",\n        \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/AuthMangaApiDoc.php",
    "groupTitle": "Auth_Management",
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
    "url": "/v1/users/logout",
    "title": "Logout Customer",
    "version": "0.1.0",
    "name": "LogoutCustomer",
    "group": "Auth_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/AuthMangaApiDoc.php",
    "groupTitle": "Auth_Management",
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
    "url": "/v1/users/me",
    "title": "Me Customer",
    "version": "0.1.0",
    "name": "MeCustomer",
    "group": "Auth_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"customer_data\": {\n            \"id\": 15,\n            \"name\": null,\n            \"email\": \"hung1462k@gmail.com\"\n        },\n        \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/AuthMangaApiDoc.php",
    "groupTitle": "Auth_Management",
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
    "type": "post",
    "url": "/v1/users/register",
    "title": "Register Customer",
    "version": "0.1.0",
    "name": "RegisterCustomer",
    "group": "Auth_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>users name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>users email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>users password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password_confirmation",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"customer_data\": {\n            \"id\": 15,\n            \"name\": null,\n            \"email\": \"hung@gmail.com\"\n        },\n        \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC92MVwvdXNlcnNcL2xvZ2luIiwiaWF0IjoxNjMwNDIxOTE1LCJleHAiOjE2MzA0MjU1MTUsIm5iZiI6MTYzMDQyMTkxNSwianRpIjoiQ3o4R3R6TmRTWVkxSkNQWSIsInN1YiI6MTUsInBydiI6IjQxZGY4ODM0ZjFiOThmNzBlZmE2MGFhZWRlZjQyMzQxMzcwMDY5MGMifQ.ufxSp-YJhnuj5_FKBfm36H-7DJvbYDCqo7Rpn9Li95g\",\n        \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/AuthMangaApiDoc.php",
    "groupTitle": "Auth_Management",
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
    "url": "/v1/mangas/chapters/:chapId",
    "title": "Get List Image Chapter",
    "version": "0.1.0",
    "name": "GetListImageChapter",
    "group": "Chapter_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Item in page</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"image_banner\": [\n            {\n                \"id\": 3,\n                \"image_url\": null,\n                \"number_pages\": 16\n            }\n        ],\n        \"image_page\": [\n            {\n                \"id\": 2,\n                \"image_url\": null,\n                \"number_pages\": 82\n            }\n        ],\n        \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/ImageChapterApiDoc.php",
    "groupTitle": "Chapter_Management",
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
    "url": "/v1/mangas/:id",
    "title": "Get Detail Mangas",
    "version": "0.1.0",
    "name": "GetDetailMangas",
    "group": "Mangas_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"post_data\": {\n            \"id\": 5,\n            \"name\": \"Mrs. Tyra Friesen\",\n            \"thumbnail\": \"http://localhost/storage/mangas/Jayce Tillman\",\n            \"another_name\": \"Prof. Florence Davis\",\n            \"public\": true,\n            \"status\": 1,\n            \"approval_status\": 1,\n            \"note\": \"Bernice Hartmann\",\n            \"title\": [],\n            \"author\": [\n                {\n                    \"id\": 4,\n                    \"name\": \"Alec Schoen\",\n                    \"fullname\": \"fullnameCatherine Wyman\",\n                    \"introduce\": \"introduceKaya Gutkowski MD\"\n                }\n            ],\n            \"chapter\": [\n                {\n                    \"id\": 8,\n                    \"name\": \"chapter28\",\n                    \"created_at\": \"2021-08-29\"\n                }\n            ],\n            \"views\": 12,\n            \"follow\": 2,\n            \"created_at\": \"2021-08-23 15:45:39\",\n            \"seo_title\": \"Jocelyn Gaylord\",\n            \"seo_description\": \"Cristian Schmidt PhD\",\n            \"seo_slug\": \"Neil Hane II\"\n        },\n        \"metadata\": {}\n    }\n}",
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
            "description": "<p>search by name, title_mangas_title manga_categories_name</p>"
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search[category_manga_name]",
            "description": "<p>Search by category_mangas name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search[category_manga_id]",
            "description": "<p>Search by category_mangas id</p>"
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
