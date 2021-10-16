define({ "api": [
  {
    "type": "get",
    "url": "/v1/admin/customers/:customerId",
    "title": "Detail Customer Admin Mangas",
    "version": "0.1.0",
    "name": "DetailCustomerAdminMangas",
    "group": "Admin_Customer_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"user_data\": {\n            \"id\": 51,\n            \"name\": \"hung pham a\",\n            \"avatar_url\": \"http://localhost:8000/storage/users/abc\",\n            \"nick_name\": null,\n            \"email\": \"hung1462k@gmail.com\",\n            \"gender\": null,\n            \"birth_day\": null,\n            \"phone\": null,\n            \"number_manga\": 2,\n            \"number_manga_wait\": 0,\n            \"number_manga_approve\": 1,\n            \"number_manga_not\": 1\n        },\n       \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/CustomerAdminMangaApiDoc.php",
    "groupTitle": "Admin_Customer_Management",
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
    "type": "put",
    "url": "/v1/admin/customers/:customerId",
    "title": "Detail Customer Admin Mangas",
    "version": "0.1.0",
    "name": "DetailCustomerAdminMangas",
    "group": "Admin_Customer_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/CustomerAdminMangaApiDoc.php",
    "groupTitle": "Admin_Customer_Management",
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
    "url": "/v1/admin/customers/export",
    "title": "Export Customer Admin Mangas",
    "version": "0.1.0",
    "name": "ExportCustomerAdminMangas",
    "group": "Admin_Customer_Management",
    "filename": "apidoc/CustomerAdminMangaApiDoc.php",
    "groupTitle": "Admin_Customer_Management",
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
    "url": "/v1/admin/customers/list",
    "title": "List Customer Admin Mangas",
    "version": "0.1.0",
    "name": "ListCustomerAdminMangas",
    "group": "Admin_Customer_Management",
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
            "description": "<p>search by name, nick_name, email, phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort[created_at]",
            "description": "<p>Sort by customer_created_at: ASC - Up, DESC - Down</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort[birth_day]",
            "description": "<p>Sort by customer_created_at: ASC - Up, DESC - Down</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "filter[gender]",
            "description": "<p>filter by customer_gender  Girl:0, Boy:1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"user_list\": [\n            {\n                \"id\": 51,\n                \"name\": \"hung pham a\",\n                \"avatar_url\": \"http://localhost:8000/storage/users/abc\",\n                \"nick_name\": null,\n                \"email\": \"hung1462k@gmail.com\",\n                \"gender\": null,\n                \"birth_day\": null,\n                \"phone\": null\n            }\n        ],\n        \"metadata\": {\n            \"current_page\": 1,\n            \"limit\": 10,\n            \"total\": 1\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/CustomerAdminMangaApiDoc.php",
    "groupTitle": "Admin_Customer_Management",
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
    "url": "/v1/admin/sliders/",
    "title": "Create Slider Mangas",
    "version": "0.1.0",
    "name": "CreatedSliderMangas",
    "group": "Admin_Slider_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image_path",
            "description": "<p>image_path sliders</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title sliders</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "public",
            "description": "<p>public sliders public:1 unPublic:0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "seo_title",
            "description": "<p>seo_title sliders</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "seo_description",
            "description": "<p>seo_description sliders</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "seo_slug",
            "description": "<p>seo_slug sliders</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/SliderAdminMangaApiDoc.php",
    "groupTitle": "Admin_Slider_Management",
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
    "url": "/v1/admin/sliders/:sliderId",
    "title": "Detail Slider Mangas",
    "version": "0.1.0",
    "name": "DetailSliderMangas",
    "group": "Admin_Slider_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"data_list\": {\n            \"id\": 1,\n            \"image_url\": \"http://localhost:8000/storage/sliders/hjhjhjhj\",\n            \"title\": \"hjhjhjh\",\n            \"public\": true,\n            \"seo_title\": \"fdfdsf\",\n            \"seo_description\": \"fdfdfd\",\n            \"seo_slug\": null\n        },\n        \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/SliderAdminMangaApiDoc.php",
    "groupTitle": "Admin_Slider_Management",
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
    "url": "/v1/admin/sliders/list",
    "title": "Get List Slider Mangas",
    "version": "0.1.0",
    "name": "GetListSliderMangas",
    "group": "Admin_Slider_Management",
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
            "description": "<p>search by title, id_slider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "filter[public]",
            "description": "<p>filter by public slider  Public:1, UnPublic:0</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort[created_at]",
            "description": "<p>Sort by sliderCreated_at: ASC - Up, DESC - Down</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"data_list\": [\n            {\n                \"id\": 2,\n                \"image_url\": \"http://localhost:8000/storage/sliders/abc\",\n                \"title\": \"abc\",\n                \"public\": false,\n                \"seo_title\": \"abc\",\n                \"seo_description\": \"abc\",\n                \"seo_slug\": \"abc\"\n            }\n        ],\n        \"metadata\": {\n            \"current_page\": 1,\n            \"limit\": 10,\n            \"total\": 2\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/SliderAdminMangaApiDoc.php",
    "groupTitle": "Admin_Slider_Management",
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
    "type": "patch",
    "url": "/v1/admin/sliders",
    "title": "Update Public Slider Mangas",
    "version": "0.1.0",
    "name": "UpdatePublicSliderMangas",
    "group": "Admin_Slider_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "ids",
            "description": "<p>id sliders</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "public",
            "description": "<p>public sliders public:1 unPublic:0</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/SliderAdminMangaApiDoc.php",
    "groupTitle": "Admin_Slider_Management",
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
    "type": "put",
    "url": "/v1/admin/sliders/:sliderId",
    "title": "Update Slider Mangas",
    "version": "0.1.0",
    "name": "UpdateSliderMangas",
    "group": "Admin_Slider_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image_path",
            "description": "<p>image_path sliders</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title sliders</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "public",
            "description": "<p>public sliders public:1 unPublic:0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "seo_title",
            "description": "<p>seo_title sliders</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "seo_description",
            "description": "<p>seo_description sliders</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "seo_slug",
            "description": "<p>seo_slug sliders</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/SliderAdminMangaApiDoc.php",
    "groupTitle": "Admin_Slider_Management",
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
    "url": "/v1/admin/sliders/upload",
    "title": "Upload Image Slider Mangas",
    "version": "0.1.0",
    "name": "UploadImageSliderManga",
    "group": "Admin_Slider_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": true,
            "field": "file",
            "description": "<p>Current page</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"image_path\": \"1631117385_zIE5tl0fyi.jpg\",\n        \"image_url\": \"http://localhost:8000/storage/sliders/1631117385_zIE5tl0fyi.jpg\",\n        \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/SliderAdminMangaApiDoc.php",
    "groupTitle": "Admin_Slider_Management",
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
    "url": "/v1/users/check-otp",
    "title": "CheckOtp Customer",
    "version": "0.1.0",
    "name": "CheckOtpCustomer",
    "group": "Auth_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>customer_otp email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "otp",
            "description": "<p>customer_otp otp</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"id\": 5,\n        \"email\": \"hung1462k@gmail.com\",\n        \"metadata\": {}\n    }\n}",
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
    "url": "/v1/users/forgot",
    "title": "Forgot Customer",
    "version": "0.1.0",
    "name": "ForgotCustomer",
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
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"id\": 5,\n        \"email\": \"hung1462k@gmail.com\",\n        \"metadata\": {}\n    }\n}",
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
    "type": "put",
    "url": "/v1/users/refresh",
    "title": "Refresh Customer",
    "version": "0.1.0",
    "name": "RefreshCustomer",
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
    "group": "Chapter_Image_Management",
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
    "groupTitle": "Chapter_Image_Management",
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
    "url": "/v1/mangas/:mangaId/chapters/:chapId/upload/image",
    "title": "Upload Image Chapter",
    "version": "0.1.0",
    "name": "UploadImageChapter",
    "group": "Chapter_Image_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>Images chapter</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "images.file",
            "description": "<p>file Images chapter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"images\": [\n            {\n                \"image_path\": \"1/2/1633802118_SXRjjgxNnI.jpg\",\n                \"image_url\": \"http://localhost:8000/storage/image-chapter/1/2/1633802118_SXRjjgxNnI.jpg\",\n                \"number_pages\": 1\n            },\n            {\n                \"image_path\": \"1/2/1633802118_cLRBPQdHy1.jpg\",\n                \"image_url\": \"http://localhost:8000/storage/image-chapter/1/2/1633802118_cLRBPQdHy1.jpg\",\n                \"number_pages\": 2\n            }\n        ],\n        \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/ImageChapterApiDoc.php",
    "groupTitle": "Chapter_Image_Management",
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
    "url": "/v1/mangas/:mangaId/chapter",
    "title": "Create Chapter Managa Customer",
    "version": "0.1.0",
    "name": "CreateChapterManagaCustomer",
    "group": "Chapter_Mangas_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name chapter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "index",
            "description": "<p>index chapter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>title chapter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"chapter\": {\n            \"id\": 22,\n            \"name\": \"chapter3\",\n            \"index\": 2,\n            \"title\": \"kkkk\"\n        },\n        \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/ChapterMangaApiDoc.php",
    "groupTitle": "Chapter_Mangas_Management",
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
    "type": "put",
    "url": "/v1/mangas/:mangaId/chapter/:chapterId",
    "title": "Update Chapter Managa Customer",
    "version": "0.1.0",
    "name": "CreateChapterManagaCustomer",
    "group": "Chapter_Mangas_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name chapter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>title chapter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/ChapterMangaApiDoc.php",
    "groupTitle": "Chapter_Mangas_Management",
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
    "type": "put",
    "url": "/v1/mangas/:mangaId/chapter/:chapterId",
    "title": "Update Chapter Managa Customer",
    "version": "0.1.0",
    "name": "CreateChapterManagaCustomer",
    "group": "Chapter_Mangas_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name chapter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>title chapter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/ChapterMangaApiDoc.php",
    "groupTitle": "Chapter_Mangas_Management",
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
    "type": "delete",
    "url": "/v1/mangas/:mangaId/chapter/:chapterId",
    "title": "Delete Chapter Managa Customer",
    "version": "0.1.0",
    "name": "DeleteChapterManagaCustomer",
    "group": "Chapter_Mangas_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/ChapterMangaApiDoc.php",
    "groupTitle": "Chapter_Mangas_Management",
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
    "type": "patch",
    "url": "v1/mangas/:mangaId/favorite",
    "title": "Create Favorite Mangas",
    "version": "0.1.0",
    "name": "CreateFavoriteMangas",
    "group": "Favorite_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"like_status\": 1,\n        \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/FavoriteMangaApiDoc.php",
    "groupTitle": "Favorite_Management",
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
    "url": "v1/mangas/:mangaId/flow",
    "title": "Create Flow Mangas",
    "version": "0.1.0",
    "name": "CreateFlowMangas",
    "group": "Flow_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"flow_status\": 1,\n        \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/FlowMangaApiDoc.php",
    "groupTitle": "Flow_Management",
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
    "url": "v1/profile/:profileId/flow",
    "title": "Create Flow User Mangas",
    "version": "0.1.0",
    "name": "CreateFlowUserMangas",
    "group": "Flow_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"flow_status\": 1,\n        \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/FlowMangaApiDoc.php",
    "groupTitle": "Flow_Management",
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
    "url": "/v1/mangas",
    "title": "Create Managa Customer",
    "version": "0.1.0",
    "name": "CreateManagaCustomer",
    "group": "Mangas_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "thumbnail",
            "description": "<p>Managa thumbnail</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Managa name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "note",
            "description": "<p>Managa note</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "seo_title",
            "description": "<p>SEO title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "seo_description",
            "description": "<p>SEO description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "seo_slug",
            "description": "<p>SEO slug</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "public",
            "description": "<p>Public public</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "categories",
            "description": "<p>array category ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Status status</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "chapters",
            "description": "<p>array chapter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chapters.name",
            "description": "<p>name chapter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "chapters.index",
            "description": "<p>index chapter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "chapters.title",
            "description": "<p>title chapter</p>"
          }
        ]
      }
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
    "success": {
      "examples": [
        {
          "title": "Success-Example",
          "content": "{\n    \"code\": 200,\n    \"data\": {}\n}",
          "type": "json"
        }
      ]
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
    "type": "delete",
    "url": "/v1/mangas/:mangaId",
    "title": "Delete Managa Customer",
    "version": "0.1.0",
    "name": "DeleteManagaCustomer",
    "group": "Mangas_Management",
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
    "success": {
      "examples": [
        {
          "title": "Success-Example",
          "content": "{\n    \"code\": 200,\n    \"data\": {}\n}",
          "type": "json"
        }
      ]
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
  },
  {
    "type": "put",
    "url": "/v1/mangas/:mangaId",
    "title": "Update Managa Customer",
    "version": "0.1.0",
    "name": "UpdateManagaCustomer",
    "group": "Mangas_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "thumbnail",
            "description": "<p>Managa thumbnail</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Managa name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "note",
            "description": "<p>Managa note</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "seo_title",
            "description": "<p>SEO title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "seo_description",
            "description": "<p>SEO description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "seo_slug",
            "description": "<p>SEO slug</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "public",
            "description": "<p>Public public</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "categories",
            "description": "<p>array category ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Status status</p>"
          }
        ]
      }
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
    "success": {
      "examples": [
        {
          "title": "Success-Example",
          "content": "{\n    \"code\": 200,\n    \"data\": {}\n}",
          "type": "json"
        }
      ]
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
    "url": "/v1/mangas/upload/thumbnail",
    "title": "Upload Thumbnail Manga",
    "version": "0.1.0",
    "name": "UploadThumbnailManga",
    "group": "Mangas_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": true,
            "field": "file",
            "description": "<p>Current page</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"image_path\": \"thumbnail/51/1633447161_de97lT6jf0.jpg\",\n        \"image_url\": \"http://localhost:8000/storage/mangas/thumbnail/51/1633447161_de97lT6jf0.jpg\",\n        \"metadata\": {}\n    }\n}",
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
    "url": "/v1/masters/home",
    "title": "Master Home Mangas",
    "version": "0.1.0",
    "name": "MasterHomeMangas",
    "group": "Master_Mangas_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit_slider",
            "description": "<p>Item in limit_slider</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit_manga_new",
            "description": "<p>Item in limit_manga_new</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit_manga_top",
            "description": "<p>Item in limit_manga_top</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"slider\": [\n            {\n                \"id\": 1,\n                \"image_url\": \"http://localhost/storage/sliders/hjhjhjhj\",\n                \"title\": \"hjhjhjh\",\n                \"public\": true,\n                \"seo_title\": \"fdfdsf\",\n                \"seo_description\": \"fdfdfd\",\n                \"seo_slug\": null\n            }\n        ],\n        \"manga_new\": [\n            {\n                \"id\": 9,\n                \"name\": \"Meaghan Bogisich\",\n                \"thumbnail\": \"http://localhost/storage/mangas/Alessandra Schowalter Sr.\",\n                \"another_name\": \"Wilhelm Carroll\",\n                \"public\": true,\n                \"status\": 1,\n                \"approval_status\": 1,\n                \"note\": \"Mrs. Elta Gutmann\",\n                \"title\": [],\n                \"chapter\": {\n                    \"id\": 12,\n                    \"name\": \"fsdf\"\n                },\n                \"period_time\": 12,\n                \"type_period_time\": 2,\n                \"views\": 0,\n                \"follow\": 2,\n                \"created_at\": \"2021-08-23 15:45:39\",\n                \"seo_title\": \"Tracy Stokes DDS\",\n                \"seo_description\": \"Brendon Fisher\",\n                \"seo_slug\": \"Aryanna Carter\"\n            },\n            {\n                \"id\": 9,\n                \"name\": \"Meaghan Bogisich\",\n                \"thumbnail\": \"http://localhost/storage/mangas/Alessandra Schowalter Sr.\",\n                \"another_name\": \"Wilhelm Carroll\",\n                \"public\": true,\n                \"status\": 1,\n                \"approval_status\": 1,\n                \"note\": \"Mrs. Elta Gutmann\",\n                \"title\": [],\n                \"chapter\": {\n                    \"id\": 11,\n                    \"name\": \"dfdsfdfd\"\n                },\n                \"period_time\": 12,\n                \"type_period_time\": 2,\n                \"views\": 0,\n                \"follow\": 2,\n                \"created_at\": \"2021-08-23 15:45:39\",\n                \"seo_title\": \"Tracy Stokes DDS\",\n                \"seo_description\": \"Brendon Fisher\",\n                \"seo_slug\": \"Aryanna Carter\"\n            }\n        ],\n        \"manga_top\": [\n            {\n                \"id\": 1,\n                \"name\": \"abc\",\n                \"thumbnail\": \"http://localhost/storage/mangas/abc\",\n                \"another_name\": \"abc\",\n                \"public\": true,\n                \"status\": 1,\n                \"approval_status\": 1,\n                \"note\": \"abc\",\n                \"title\": [],\n                \"chapter\": {\n                    \"id\": 2,\n                    \"name\": \"chapter53\"\n                },\n                \"period_time\": 26,\n                \"type_period_time\": 2,\n                \"views\": 3,\n                \"follow\": 2,\n                \"created_at\": \"2021-08-10 00:00:00\",\n                \"seo_title\": \"abc\",\n                \"seo_description\": \"abc\",\n                \"seo_slug\": null\n            }\n        ],\n        \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/MasterHomeApiDoc.php",
    "groupTitle": "Master_Mangas_Management",
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
    "url": "api/v1/profile/:profileId/manga_create",
    "title": "List Manga Create Profile Mangas",
    "version": "0.1.0",
    "name": "ListMangaCreateProfileMangas",
    "group": "Profile_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>search by name, title_mangas_title manga_categories_name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"code\": 200,\n    \"data\": {\n        \"manga_create\": [\n            {\n                \"id\": 59,\n                \"name\": \"bav\",\n                \"thumbnail\": \"http://localhost:8000/storage/mangas/abv\",\n                \"another_name\": null,\n                \"public\": true,\n                \"status\": null,\n                \"approval_status\": 1,\n                \"note\": null,\n                \"title\": [],\n                \"chapter\": {\n                    \"id\": 15,\n                    \"name\": \"chapter1\"\n                },\n                \"period_time\": 3,\n                \"type_period_time\": 2,\n                \"views\": 0,\n                \"follow\": 0,\n                \"flow_status\": 0,\n                \"created_at\": \"2021-09-18 14:18:40\",\n                \"seo_title\": null,\n                \"seo_description\": null,\n                \"seo_slug\": null\n            },\n            {\n                \"id\": 60,\n                \"name\": \"bav\",\n                \"thumbnail\": \"http://localhost:8000/storage/mangas/lolll\",\n                \"another_name\": null,\n                \"public\": true,\n                \"status\": null,\n                \"approval_status\": 1,\n                \"note\": null,\n                \"title\": [],\n                \"chapter\": {\n                    \"id\": 17,\n                    \"name\": \"chapter1\"\n                },\n                \"period_time\": 3,\n                \"type_period_time\": 2,\n                \"views\": 0,\n                \"follow\": 0,\n                \"flow_status\": 0,\n                \"created_at\": \"2021-09-18 14:21:17\",\n                \"seo_title\": null,\n                \"seo_description\": null,\n                \"seo_slug\": null\n            }\n        ],\n        \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/ProfileMangaApiDoc.php",
    "groupTitle": "Profile_Management",
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
    "url": "api/v1/profile/:profileId/manga_flow",
    "title": "List Manga Flow Profile Mangas",
    "version": "0.1.0",
    "name": "ListMangaFlowProfileMangas",
    "group": "Profile_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>search by name, title_mangas_title manga_categories_name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"manga_flow\": [\n            {\n                \"id\": 1,\n                \"name\": \"abc\",\n                \"thumbnail\": \"http://localhost:8000/storage/mangas/abc\",\n                \"another_name\": \"abc\",\n                \"public\": true,\n                \"status\": 1,\n                \"approval_status\": 1,\n                \"note\": \"abc\",\n                \"title\": [],\n                \"chapter\": {\n                    \"id\": 2,\n                    \"name\": \"chapter53\"\n                },\n                \"period_time\": 1,\n                \"type_period_time\": 1,\n                \"views\": 3,\n                \"follow\": 1,\n                \"flow_status\": 0,\n                \"created_at\": \"2021-08-10 00:00:00\",\n                \"seo_title\": \"abc\",\n                \"seo_description\": \"abc\",\n                \"seo_slug\": null\n            }\n        ],\n        \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/ProfileMangaApiDoc.php",
    "groupTitle": "Profile_Management",
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
    "url": "api/v1/profile/:profileId/user_flow",
    "title": "List User Flow Profile Mangas",
    "version": "0.1.0",
    "name": "ListUserFlowProfileMangas",
    "group": "Profile_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>search by name, title_mangas_title manga_categories_name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"user_flow\": [\n            {\n                \"id\": 13,\n                \"name\": null,\n                \"avatar_url\": null,\n                \"nick_name\": null,\n                \"flow_status\": null\n            },\n            {\n                \"id\": 51,\n                \"name\": \"hung pham\",\n                \"avatar_url\": null,\n                \"nick_name\": null,\n                \"flow_status\": null\n            },\n            {\n                \"id\": 54,\n                \"name\": \"fdfhdsjfhnkdsfd\",\n                \"avatar_url\": null,\n                \"nick_name\": null,\n                \"flow_status\": null\n            }\n        ],\n        \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/ProfileMangaApiDoc.php",
    "groupTitle": "Profile_Management",
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
    "url": "api/v1/profile/:profileId",
    "title": "Profile Detail Mangas",
    "version": "0.1.0",
    "name": "ProfileDetailFlowMangas",
    "group": "Profile_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"profile\": {\n            \"id\": 1,\n            \"name\": null,\n            \"email\": \"\",\n            \"avatar_url\": null,\n            \"nick_name\": null,\n            \"phone\": null,\n            \"birth_day\": null,\n            \"gender\": null,\n            \"proflie_flow\": {\n                \"proflie_list\": [\n                    {\n                        \"id\": 13,\n                        \"name\": null,\n                        \"avatar_url\": null,\n                        \"nick_name\": null,\n                        \"flow_status\": 1\n                    },\n                    {\n                        \"id\": 54,\n                        \"name\": \"fdfhdsjfhnkdsfd\",\n                        \"avatar_url\": null,\n                        \"nick_name\": null,\n                        \"flow_status\": 0\n                    }\n                ],\n                \"profile_count\": 3\n            },\n            \"manga_flow\": {\n                \"manga_list\": [\n                    {\n                        \"id\": 1,\n                        \"name\": \"abc\",\n                        \"thumbnail\": \"http://localhost:8000/storage/mangas/abc\",\n                        \"another_name\": \"abc\",\n                        \"public\": true,\n                        \"status\": 1,\n                        \"approval_status\": 1,\n                        \"note\": \"abc\",\n                        \"title\": [],\n                        \"chapter\": {\n                            \"id\": 2,\n                            \"name\": \"chapter53\"\n                        },\n                        \"period_time\": 1,\n                        \"type_period_time\": 1,\n                        \"views\": 3,\n                        \"follow\": 2,\n                        \"flow_status\": 1,\n                        \"created_at\": \"2021-08-10 00:00:00\",\n                        \"seo_title\": \"abc\",\n                        \"seo_description\": \"abc\",\n                        \"seo_slug\": null\n                    }\n                ],\n                \"manga_count\": 1\n            }\n        },\n        \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/ProfileMangaApiDoc.php",
    "groupTitle": "Profile_Management",
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
    "url": "/v1/profile/upload/avatar",
    "title": "Upload Image Avatar Profile",
    "version": "0.1.0",
    "name": "UploadImageAvatarProfile",
    "group": "Profile_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": true,
            "field": "file",
            "description": "<p>Current page</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"data\": {\n        \"image_path\": \"51/1633014240_xGsRyDtYgr.jpg\",\n        \"image_url\": \"http://localhost:8000/storage/users/51/1633014240_xGsRyDtYgr.jpg\",\n        \"metadata\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/ProfileMangaApiDoc.php",
    "groupTitle": "Profile_Management",
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
