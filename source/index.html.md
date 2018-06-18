---
title: Basic Swagger Combine Example
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - javascript--nodejs: Node.JS
  - ruby: Ruby
  - python: Python
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="Basic-Swagger-Combine-Example">Basic Swagger Combine Example v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

* API Key (access_token)
    - Parameter Name: **Authorization**, in: header. Copy 'Bearer ' + valid acccess token into field

- oAuth2 authentication. 

    - Flow: implicit
    - Authorization URL = [https://petstore.swagger.io/oauth/dialog](https://petstore.swagger.io/oauth/dialog)

|Scope|Scope Description|
|---|---|
|write:pets|modify pets in your account|
|read:pets|read your pets|

* API Key (api_key)
    - Parameter Name: **api_key**, in: header. 

<h1 id="Basic-Swagger-Combine-Example-Car">Car</h1>

## Car_GetAll

<a id="opIdCar_GetAll"></a>

`GET /api/Car`

*Get all car filings*

> Example responses

> 200 Response

<h3 id="car_getall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="car_getall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» registrationNumber|string|true|none|The registration number of the car|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## Car_Post

<a id="opIdCar_Post"></a>

`POST /api/Car`

*Add a new car filing*

> Body parameter

```json
{
  "type": "object",
  "additionalProperties": false,
  "required": [
    "registrationNumber"
  ],
  "properties": {
    "registrationNumber": {
      "type": "string",
      "description": "The registration number of the car\n            "
    }
  },
  "allOf": [
    {
      "type": "object",
      "x-abstract": true,
      "additionalProperties": false,
      "required": [
        "userId",
        "platformId",
        "transactionId",
        "amount",
        "startTime",
        "endTime",
        "paymentTime"
      ],
      "properties": {
        "userId": {
          "type": "string"
        },
        "platformId": {
          "type": "string"
        },
        "transactionId": {
          "type": "string"
        },
        "amount": {
          "type": "number",
          "format": "decimal",
          "minimum": 0.01
        },
        "startTime": {
          "type": "string",
          "format": "date-time"
        },
        "endTime": {
          "type": "string",
          "format": "date-time"
        },
        "paymentTime": {
          "type": "string",
          "format": "date-time"
        }
      }
    }
  ]
}
```

<h3 id="car_post-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Car item that needs to be added|
|» registrationNumber|body|string|true|The registration number of the car|

> Example responses

> 200 Response

<h3 id="car_post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|string|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## Car_GetUserFilings

<a id="opIdCar_GetUserFilings"></a>

`GET /api/Car/user/{userId}`

*Get car filings by User ID*

<h3 id="car_getuserfilings-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of user|

> Example responses

> 200 Response

<h3 id="car_getuserfilings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns a list of car filings by User ID|Inline|

<h3 id="car_getuserfilings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» registrationNumber|string|true|none|The registration number of the car|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## Car_Get

<a id="opIdCar_Get"></a>

`GET /api/Car/{id}`

*Get car filing by ID*

<h3 id="car_get-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of car filing to return|

> Example responses

> 200 Response

<h3 id="car_get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="car_get-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» registrationNumber|string|true|none|The registration number of the car|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

<h1 id="Basic-Swagger-Combine-Example-pet">pet</h1>

## addPet

<a id="opIdaddPet"></a>

`POST /pet`

*Add a new pet to the store*

> Body parameter

```json
{
  "type": "object",
  "required": [
    "name",
    "photoUrls"
  ],
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64"
    },
    "category": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        }
      },
      "xml": {
        "name": "Category"
      }
    },
    "name": {
      "type": "string",
      "example": "doggie"
    },
    "photoUrls": {
      "type": "array",
      "xml": {
        "name": "photoUrl",
        "wrapped": true
      },
      "items": {
        "type": "string"
      }
    },
    "tags": {
      "type": "array",
      "xml": {
        "name": "tag",
        "wrapped": true
      },
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "name": {
            "type": "string"
          }
        },
        "xml": {
          "name": "Tag"
        }
      }
    },
    "status": {
      "type": "string",
      "description": "pet status in the store",
      "enum": [
        "available",
        "pending",
        "sold"
      ]
    }
  },
  "xml": {
    "name": "Pet"
  }
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Pet>
  <type>object</type>
  <required>name</required>
  <required>photoUrls</required>
  <properties>
    <id>
      <type>integer</type>
      <format>int64</format>
    </id>
    <category>
      <type>object</type>
      <properties>
        <id>
          <type>integer</type>
          <format>int64</format>
        </id>
        <name>
          <type>string</type>
        </name>
      </properties>
      <xml>
        <name>Category</name>
      </xml>
    </category>
    <name>
      <type>string</type>
      <example>doggie</example>
    </name>
    <photoUrls>
      <type>array</type>
      <xml>
        <name>photoUrl</name>
        <wrapped>true</wrapped>
      </xml>
      <items>
        <type>string</type>
      </items>
    </photoUrls>
    <tags>
      <type>array</type>
      <xml>
        <name>tag</name>
        <wrapped>true</wrapped>
      </xml>
      <items>
        <type>object</type>
        <properties>
          <id>
            <type>integer</type>
            <format>int64</format>
          </id>
          <name>
            <type>string</type>
          </name>
        </properties>
        <xml>
          <name>Tag</name>
        </xml>
      </items>
    </tags>
    <status>
      <type>string</type>
      <description>pet status in the store</description>
      <enum>available</enum>
      <enum>pending</enum>
      <enum>sold</enum>
    </status>
  </properties>
  <xml>
    <name>Pet</name>
  </xml>
</Pet>
```

<h3 id="addpet-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[addPetBody](#schemaaddpetbody)|true|Pet object that needs to be added to the store|
|» id|body|integer(int64)|false|none|
|» category|body|object|false|none|
|»» id|body|integer(int64)|false|none|
|»» name|body|string|false|none|
|» name|body|string|true|none|
|» photoUrls|body|[string]|true|none|
|» tags|body|[object]|false|none|
|»» id|body|integer(int64)|false|none|
|»» name|body|string|false|none|
|» status|body|string|false|pet status in the store|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|available|
|» status|pending|
|» status|sold|

<h3 id="addpet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Invalid input|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## updatePet

<a id="opIdupdatePet"></a>

`PUT /pet`

*Update an existing pet*

> Body parameter

```json
{
  "type": "object",
  "required": [
    "name",
    "photoUrls"
  ],
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64"
    },
    "category": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        }
      },
      "xml": {
        "name": "Category"
      }
    },
    "name": {
      "type": "string",
      "example": "doggie"
    },
    "photoUrls": {
      "type": "array",
      "xml": {
        "name": "photoUrl",
        "wrapped": true
      },
      "items": {
        "type": "string"
      }
    },
    "tags": {
      "type": "array",
      "xml": {
        "name": "tag",
        "wrapped": true
      },
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "name": {
            "type": "string"
          }
        },
        "xml": {
          "name": "Tag"
        }
      }
    },
    "status": {
      "type": "string",
      "description": "pet status in the store",
      "enum": [
        "available",
        "pending",
        "sold"
      ]
    }
  },
  "xml": {
    "name": "Pet"
  }
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Pet>
  <type>object</type>
  <required>name</required>
  <required>photoUrls</required>
  <properties>
    <id>
      <type>integer</type>
      <format>int64</format>
    </id>
    <category>
      <type>object</type>
      <properties>
        <id>
          <type>integer</type>
          <format>int64</format>
        </id>
        <name>
          <type>string</type>
        </name>
      </properties>
      <xml>
        <name>Category</name>
      </xml>
    </category>
    <name>
      <type>string</type>
      <example>doggie</example>
    </name>
    <photoUrls>
      <type>array</type>
      <xml>
        <name>photoUrl</name>
        <wrapped>true</wrapped>
      </xml>
      <items>
        <type>string</type>
      </items>
    </photoUrls>
    <tags>
      <type>array</type>
      <xml>
        <name>tag</name>
        <wrapped>true</wrapped>
      </xml>
      <items>
        <type>object</type>
        <properties>
          <id>
            <type>integer</type>
            <format>int64</format>
          </id>
          <name>
            <type>string</type>
          </name>
        </properties>
        <xml>
          <name>Tag</name>
        </xml>
      </items>
    </tags>
    <status>
      <type>string</type>
      <description>pet status in the store</description>
      <enum>available</enum>
      <enum>pending</enum>
      <enum>sold</enum>
    </status>
  </properties>
  <xml>
    <name>Pet</name>
  </xml>
</Pet>
```

<h3 id="updatepet-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[addPetBody](#schemaaddpetbody)|true|Pet object that needs to be added to the store|
|» id|body|integer(int64)|false|none|
|» category|body|object|false|none|
|»» id|body|integer(int64)|false|none|
|»» name|body|string|false|none|
|» name|body|string|true|none|
|» photoUrls|body|[string]|true|none|
|» tags|body|[object]|false|none|
|»» id|body|integer(int64)|false|none|
|»» name|body|string|false|none|
|» status|body|string|false|pet status in the store|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|available|
|» status|pending|
|» status|sold|

<h3 id="updatepet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Pet not found|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Validation exception|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## findPetsByStatus

<a id="opIdfindPetsByStatus"></a>

`GET /pet/findByStatus`

*Finds Pets by status*

Multiple status values can be provided with comma separated strings

<h3 id="findpetsbystatus-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|array[string]|true|Status values that need to be considered for filter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<type>array</type>
<items>
  <type>object</type>
  <required>name</required>
  <required>photoUrls</required>
  <properties>
    <id>
      <type>integer</type>
      <format>int64</format>
    </id>
    <category>
      <type>object</type>
      <properties>
        <id>
          <type>integer</type>
          <format>int64</format>
        </id>
        <name>
          <type>string</type>
        </name>
      </properties>
      <xml>
        <name>Category</name>
      </xml>
    </category>
    <name>
      <type>string</type>
      <example>doggie</example>
    </name>
    <photoUrls>
      <type>array</type>
      <xml>
        <name>photoUrl</name>
        <wrapped>true</wrapped>
      </xml>
      <items>
        <type>string</type>
      </items>
    </photoUrls>
    <tags>
      <type>array</type>
      <xml>
        <name>tag</name>
        <wrapped>true</wrapped>
      </xml>
      <items>
        <type>object</type>
        <properties>
          <id>
            <type>integer</type>
            <format>int64</format>
          </id>
          <name>
            <type>string</type>
          </name>
        </properties>
        <xml>
          <name>Tag</name>
        </xml>
      </items>
    </tags>
    <status>
      <type>string</type>
      <description>pet status in the store</description>
      <enum>available</enum>
      <enum>pending</enum>
      <enum>sold</enum>
    </status>
  </properties>
  <xml>
    <name>Pet</name>
  </xml>
</items>
```

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "required": [
      "name",
      "photoUrls"
    ],
    "properties": {
      "id": {
        "type": "integer",
        "format": "int64"
      },
      "category": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "name": {
            "type": "string"
          }
        },
        "xml": {
          "name": "Category"
        }
      },
      "name": {
        "type": "string",
        "example": "doggie"
      },
      "photoUrls": {
        "type": "array",
        "xml": {
          "name": "photoUrl",
          "wrapped": true
        },
        "items": {
          "type": "string"
        }
      },
      "tags": {
        "type": "array",
        "xml": {
          "name": "tag",
          "wrapped": true
        },
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            }
          },
          "xml": {
            "name": "Tag"
          }
        }
      },
      "status": {
        "type": "string",
        "description": "pet status in the store",
        "enum": [
          "available",
          "pending",
          "sold"
        ]
      }
    },
    "xml": {
      "name": "Pet"
    }
  }
}
```

<h3 id="findpetsbystatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid status value|None|

<h3 id="findpetsbystatus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|integer(int64)|false|none|none|
|» category|object|false|none|none|
|»» id|integer(int64)|false|none|none|
|»» name|string|false|none|none|
|» name|string|true|none|none|
|» photoUrls|[string]|true|none|none|
|» tags|[object]|false|none|none|
|»» id|integer(int64)|false|none|none|
|»» name|string|false|none|none|
|» status|string|false|none|pet status in the store|

#### Enumerated Values

|Property|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## findPetsByTags

<a id="opIdfindPetsByTags"></a>

`GET /pet/findByTags`

*Finds Pets by tags*

Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

<h3 id="findpetsbytags-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|tags|query|array[string]|true|Tags to filter by|

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<type>array</type>
<items>
  <type>object</type>
  <required>name</required>
  <required>photoUrls</required>
  <properties>
    <id>
      <type>integer</type>
      <format>int64</format>
    </id>
    <category>
      <type>object</type>
      <properties>
        <id>
          <type>integer</type>
          <format>int64</format>
        </id>
        <name>
          <type>string</type>
        </name>
      </properties>
      <xml>
        <name>Category</name>
      </xml>
    </category>
    <name>
      <type>string</type>
      <example>doggie</example>
    </name>
    <photoUrls>
      <type>array</type>
      <xml>
        <name>photoUrl</name>
        <wrapped>true</wrapped>
      </xml>
      <items>
        <type>string</type>
      </items>
    </photoUrls>
    <tags>
      <type>array</type>
      <xml>
        <name>tag</name>
        <wrapped>true</wrapped>
      </xml>
      <items>
        <type>object</type>
        <properties>
          <id>
            <type>integer</type>
            <format>int64</format>
          </id>
          <name>
            <type>string</type>
          </name>
        </properties>
        <xml>
          <name>Tag</name>
        </xml>
      </items>
    </tags>
    <status>
      <type>string</type>
      <description>pet status in the store</description>
      <enum>available</enum>
      <enum>pending</enum>
      <enum>sold</enum>
    </status>
  </properties>
  <xml>
    <name>Pet</name>
  </xml>
</items>
```

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "required": [
      "name",
      "photoUrls"
    ],
    "properties": {
      "id": {
        "type": "integer",
        "format": "int64"
      },
      "category": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "name": {
            "type": "string"
          }
        },
        "xml": {
          "name": "Category"
        }
      },
      "name": {
        "type": "string",
        "example": "doggie"
      },
      "photoUrls": {
        "type": "array",
        "xml": {
          "name": "photoUrl",
          "wrapped": true
        },
        "items": {
          "type": "string"
        }
      },
      "tags": {
        "type": "array",
        "xml": {
          "name": "tag",
          "wrapped": true
        },
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            }
          },
          "xml": {
            "name": "Tag"
          }
        }
      },
      "status": {
        "type": "string",
        "description": "pet status in the store",
        "enum": [
          "available",
          "pending",
          "sold"
        ]
      }
    },
    "xml": {
      "name": "Pet"
    }
  }
}
```

<h3 id="findpetsbytags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid tag value|None|

<h3 id="findpetsbytags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|integer(int64)|false|none|none|
|» category|object|false|none|none|
|»» id|integer(int64)|false|none|none|
|»» name|string|false|none|none|
|» name|string|true|none|none|
|» photoUrls|[string]|true|none|none|
|» tags|[object]|false|none|none|
|»» id|integer(int64)|false|none|none|
|»» name|string|false|none|none|
|» status|string|false|none|pet status in the store|

#### Enumerated Values

|Property|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## getPetById

<a id="opIdgetPetById"></a>

`GET /pet/{petId}`

*Find pet by ID*

Returns a single pet

<h3 id="getpetbyid-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|petId|path|integer(int64)|true|ID of pet to return|

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Pet>
  <type>object</type>
  <required>name</required>
  <required>photoUrls</required>
  <properties>
    <id>
      <type>integer</type>
      <format>int64</format>
    </id>
    <category>
      <type>object</type>
      <properties>
        <id>
          <type>integer</type>
          <format>int64</format>
        </id>
        <name>
          <type>string</type>
        </name>
      </properties>
      <xml>
        <name>Category</name>
      </xml>
    </category>
    <name>
      <type>string</type>
      <example>doggie</example>
    </name>
    <photoUrls>
      <type>array</type>
      <xml>
        <name>photoUrl</name>
        <wrapped>true</wrapped>
      </xml>
      <items>
        <type>string</type>
      </items>
    </photoUrls>
    <tags>
      <type>array</type>
      <xml>
        <name>tag</name>
        <wrapped>true</wrapped>
      </xml>
      <items>
        <type>object</type>
        <properties>
          <id>
            <type>integer</type>
            <format>int64</format>
          </id>
          <name>
            <type>string</type>
          </name>
        </properties>
        <xml>
          <name>Tag</name>
        </xml>
      </items>
    </tags>
    <status>
      <type>string</type>
      <description>pet status in the store</description>
      <enum>available</enum>
      <enum>pending</enum>
      <enum>sold</enum>
    </status>
  </properties>
  <xml>
    <name>Pet</name>
  </xml>
</Pet>
```

```json
{
  "type": "object",
  "required": [
    "name",
    "photoUrls"
  ],
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64"
    },
    "category": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        }
      },
      "xml": {
        "name": "Category"
      }
    },
    "name": {
      "type": "string",
      "example": "doggie"
    },
    "photoUrls": {
      "type": "array",
      "xml": {
        "name": "photoUrl",
        "wrapped": true
      },
      "items": {
        "type": "string"
      }
    },
    "tags": {
      "type": "array",
      "xml": {
        "name": "tag",
        "wrapped": true
      },
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "name": {
            "type": "string"
          }
        },
        "xml": {
          "name": "Tag"
        }
      }
    },
    "status": {
      "type": "string",
      "description": "pet status in the store",
      "enum": [
        "available",
        "pending",
        "sold"
      ]
    }
  },
  "xml": {
    "name": "Pet"
  }
}
```

<h3 id="getpetbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Pet not found|None|

<h3 id="getpetbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|integer(int64)|false|none|none|
|» category|object|false|none|none|
|»» id|integer(int64)|false|none|none|
|»» name|string|false|none|none|
|» name|string|true|none|none|
|» photoUrls|[string]|true|none|none|
|» tags|[object]|false|none|none|
|»» id|integer(int64)|false|none|none|
|»» name|string|false|none|none|
|» status|string|false|none|pet status in the store|

#### Enumerated Values

|Property|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updatePetWithForm

<a id="opIdupdatePetWithForm"></a>

`POST /pet/{petId}`

*Updates a pet in the store with form data*

> Body parameter

```yaml
type: object
properties:
  name:
    description: Updated name of the pet
    type: string
  status:
    description: Updated status of the pet
    type: string

```

<h3 id="updatepetwithform-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|petId|path|integer(int64)|true|ID of pet that needs to be updated|
|body|body|object|false|none|
|» name|body|string|false|Updated name of the pet|
|» status|body|string|false|Updated status of the pet|

<h3 id="updatepetwithform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Invalid input|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## deletePet

<a id="opIddeletePet"></a>

`DELETE /pet/{petId}`

*Deletes a pet*

<h3 id="deletepet-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|header|string|false|none|
|petId|path|integer(int64)|true|Pet id to delete|

<h3 id="deletepet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Pet not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## uploadFile

<a id="opIduploadFile"></a>

`POST /pet/{petId}/uploadImage`

*uploads an image*

> Body parameter

```yaml
type: object
properties:
  additionalMetadata:
    description: Additional data to pass to server
    type: string
  file:
    description: file to upload
    type: string
    format: binary

```

<h3 id="uploadfile-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|petId|path|integer(int64)|true|ID of pet to update|
|body|body|object|false|none|
|» additionalMetadata|body|string|false|Additional data to pass to server|
|» file|body|string(binary)|false|file to upload|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "integer",
      "format": "int32"
    },
    "type": {
      "type": "string"
    },
    "message": {
      "type": "string"
    }
  }
}
```

<h3 id="uploadfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="uploadfile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» type|string|false|none|none|
|» message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

<h1 id="Basic-Swagger-Combine-Example-store">store</h1>

## getInventory

<a id="opIdgetInventory"></a>

`GET /store/inventory`

*Returns pet inventories by status*

Returns a map of status codes to quantities

> Example responses

> 200 Response

```json
{
  "type": "object",
  "additionalProperties": {
    "type": "integer",
    "format": "int32"
  }
}
```

<h3 id="getinventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getinventory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» **additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## placeOrder

<a id="opIdplaceOrder"></a>

`POST /store/order`

*Place an order for a pet*

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64"
    },
    "petId": {
      "type": "integer",
      "format": "int64"
    },
    "quantity": {
      "type": "integer",
      "format": "int32"
    },
    "shipDate": {
      "type": "string",
      "format": "date-time"
    },
    "status": {
      "type": "string",
      "description": "Order Status",
      "enum": [
        "placed",
        "approved",
        "delivered"
      ]
    },
    "complete": {
      "type": "boolean",
      "default": false
    }
  },
  "xml": {
    "name": "Order"
  }
}
```

<h3 id="placeorder-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|order placed for purchasing the pet|
|» id|body|integer(int64)|false|none|
|» petId|body|integer(int64)|false|none|
|» quantity|body|integer(int32)|false|none|
|» shipDate|body|string(date-time)|false|none|
|» status|body|string|false|Order Status|
|» complete|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|placed|
|» status|approved|
|» status|delivered|

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Order>
  <type>object</type>
  <properties>
    <id>
      <type>integer</type>
      <format>int64</format>
    </id>
    <petId>
      <type>integer</type>
      <format>int64</format>
    </petId>
    <quantity>
      <type>integer</type>
      <format>int32</format>
    </quantity>
    <shipDate>
      <type>string</type>
      <format>date-time</format>
    </shipDate>
    <status>
      <type>string</type>
      <description>Order Status</description>
      <enum>placed</enum>
      <enum>approved</enum>
      <enum>delivered</enum>
    </status>
    <complete>
      <type>boolean</type>
      <default>false</default>
    </complete>
  </properties>
  <xml>
    <name>Order</name>
  </xml>
</Order>
```

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64"
    },
    "petId": {
      "type": "integer",
      "format": "int64"
    },
    "quantity": {
      "type": "integer",
      "format": "int32"
    },
    "shipDate": {
      "type": "string",
      "format": "date-time"
    },
    "status": {
      "type": "string",
      "description": "Order Status",
      "enum": [
        "placed",
        "approved",
        "delivered"
      ]
    },
    "complete": {
      "type": "boolean",
      "default": false
    }
  },
  "xml": {
    "name": "Order"
  }
}
```

<h3 id="placeorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid Order|None|

<h3 id="placeorder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|integer(int64)|false|none|none|
|» petId|integer(int64)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» shipDate|string(date-time)|false|none|none|
|» status|string|false|none|Order Status|
|» complete|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|placed|
|status|approved|
|status|delivered|

<aside class="success">
This operation does not require authentication
</aside>

## getOrderById

<a id="opIdgetOrderById"></a>

`GET /store/order/{orderId}`

*Find purchase order by ID*

For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions

<h3 id="getorderbyid-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|path|integer(int64)|true|ID of pet that needs to be fetched|

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Order>
  <type>object</type>
  <properties>
    <id>
      <type>integer</type>
      <format>int64</format>
    </id>
    <petId>
      <type>integer</type>
      <format>int64</format>
    </petId>
    <quantity>
      <type>integer</type>
      <format>int32</format>
    </quantity>
    <shipDate>
      <type>string</type>
      <format>date-time</format>
    </shipDate>
    <status>
      <type>string</type>
      <description>Order Status</description>
      <enum>placed</enum>
      <enum>approved</enum>
      <enum>delivered</enum>
    </status>
    <complete>
      <type>boolean</type>
      <default>false</default>
    </complete>
  </properties>
  <xml>
    <name>Order</name>
  </xml>
</Order>
```

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64"
    },
    "petId": {
      "type": "integer",
      "format": "int64"
    },
    "quantity": {
      "type": "integer",
      "format": "int32"
    },
    "shipDate": {
      "type": "string",
      "format": "date-time"
    },
    "status": {
      "type": "string",
      "description": "Order Status",
      "enum": [
        "placed",
        "approved",
        "delivered"
      ]
    },
    "complete": {
      "type": "boolean",
      "default": false
    }
  },
  "xml": {
    "name": "Order"
  }
}
```

<h3 id="getorderbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Order not found|None|

<h3 id="getorderbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|integer(int64)|false|none|none|
|» petId|integer(int64)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» shipDate|string(date-time)|false|none|none|
|» status|string|false|none|Order Status|
|» complete|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|placed|
|status|approved|
|status|delivered|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrder

<a id="opIddeleteOrder"></a>

`DELETE /store/order/{orderId}`

*Delete purchase order by ID*

For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

<h3 id="deleteorder-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|path|integer(int64)|true|ID of the order that needs to be deleted|

<h3 id="deleteorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Order not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="Basic-Swagger-Combine-Example-user">user</h1>

## createUser

<a id="opIdcreateUser"></a>

`POST /user`

*Create user*

This can only be done by the logged in user.

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64"
    },
    "username": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "password": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    },
    "userStatus": {
      "type": "integer",
      "format": "int32",
      "description": "User Status"
    }
  },
  "xml": {
    "name": "User"
  }
}
```

<h3 id="createuser-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Created user object|
|» id|body|integer(int64)|false|none|
|» username|body|string|false|none|
|» firstName|body|string|false|none|
|» lastName|body|string|false|none|
|» email|body|string|false|none|
|» password|body|string|false|none|
|» phone|body|string|false|none|
|» userStatus|body|integer(int32)|false|User Status|

<h3 id="createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## createUsersWithArrayInput

<a id="opIdcreateUsersWithArrayInput"></a>

`POST /user/createWithArray`

*Creates list of users with given input array*

> Body parameter

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "format": "int64"
      },
      "username": {
        "type": "string"
      },
      "firstName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "email": {
        "type": "string"
      },
      "password": {
        "type": "string"
      },
      "phone": {
        "type": "string"
      },
      "userStatus": {
        "type": "integer",
        "format": "int32",
        "description": "User Status"
      }
    },
    "xml": {
      "name": "User"
    }
  }
}
```

<h3 id="createuserswitharrayinput-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[createUsersWithArrayInputBody](#schemacreateuserswitharrayinputbody)|true|List of user object|

<h3 id="createuserswitharrayinput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## createUsersWithListInput

<a id="opIdcreateUsersWithListInput"></a>

`POST /user/createWithList`

*Creates list of users with given input array*

> Body parameter

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "format": "int64"
      },
      "username": {
        "type": "string"
      },
      "firstName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "email": {
        "type": "string"
      },
      "password": {
        "type": "string"
      },
      "phone": {
        "type": "string"
      },
      "userStatus": {
        "type": "integer",
        "format": "int32",
        "description": "User Status"
      }
    },
    "xml": {
      "name": "User"
    }
  }
}
```

<h3 id="createuserswithlistinput-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[createUsersWithArrayInputBody](#schemacreateuserswitharrayinputbody)|true|List of user object|

<h3 id="createuserswithlistinput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## loginUser

<a id="opIdloginUser"></a>

`GET /user/login`

*Logs user into the system*

<h3 id="loginuser-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|username|query|string|true|The user name for login|
|password|query|string|true|The password for login in clear text|

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<type>string</type>
```

```json
{
  "type": "string"
}
```

<h3 id="loginuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|string|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid username/password supplied|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Rate-Limit|integer|int32|calls per hour allowed by the user|
|200|X-Expires-After|string|date-time|date in UTC when token expires|

<aside class="success">
This operation does not require authentication
</aside>

## logoutUser

<a id="opIdlogoutUser"></a>

`GET /user/logout`

*Logs out current logged in user session*

<h3 id="logoutuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUserByName

<a id="opIdgetUserByName"></a>

`GET /user/{username}`

*Get user by user name*

<h3 id="getuserbyname-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The name that needs to be fetched. Use user1 for testing. |

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<User>
  <type>object</type>
  <properties>
    <id>
      <type>integer</type>
      <format>int64</format>
    </id>
    <username>
      <type>string</type>
    </username>
    <firstName>
      <type>string</type>
    </firstName>
    <lastName>
      <type>string</type>
    </lastName>
    <email>
      <type>string</type>
    </email>
    <password>
      <type>string</type>
    </password>
    <phone>
      <type>string</type>
    </phone>
    <userStatus>
      <type>integer</type>
      <format>int32</format>
      <description>User Status</description>
    </userStatus>
  </properties>
  <xml>
    <name>User</name>
  </xml>
</User>
```

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64"
    },
    "username": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "password": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    },
    "userStatus": {
      "type": "integer",
      "format": "int32",
      "description": "User Status"
    }
  },
  "xml": {
    "name": "User"
  }
}
```

<h3 id="getuserbyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid username supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|None|

<h3 id="getuserbyname-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|integer(int64)|false|none|none|
|» username|string|false|none|none|
|» firstName|string|false|none|none|
|» lastName|string|false|none|none|
|» email|string|false|none|none|
|» password|string|false|none|none|
|» phone|string|false|none|none|
|» userStatus|integer(int32)|false|none|User Status|

<aside class="success">
This operation does not require authentication
</aside>

## updateUser

<a id="opIdupdateUser"></a>

`PUT /user/{username}`

*Updated user*

This can only be done by the logged in user.

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64"
    },
    "username": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "password": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    },
    "userStatus": {
      "type": "integer",
      "format": "int32",
      "description": "User Status"
    }
  },
  "xml": {
    "name": "User"
  }
}
```

<h3 id="updateuser-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|name that need to be updated|
|body|body|object|true|Updated user object|
|» id|body|integer(int64)|false|none|
|» username|body|string|false|none|
|» firstName|body|string|false|none|
|» lastName|body|string|false|none|
|» email|body|string|false|none|
|» password|body|string|false|none|
|» phone|body|string|false|none|
|» userStatus|body|integer(int32)|false|User Status|

<h3 id="updateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid user supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteUser

<a id="opIddeleteUser"></a>

`DELETE /user/{username}`

*Delete user*

This can only be done by the logged in user.

<h3 id="deleteuser-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The name that needs to be deleted|

<h3 id="deleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid username supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|None|

<aside class="success">
This operation does not require authentication
</aside>

