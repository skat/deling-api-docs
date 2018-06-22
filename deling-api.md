FORMAT: 1A

# DELING

An API for the pilot sharing economy project DELING. The DELING API is organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer). Our API has resource-oriented URLs and uses HTTP response codes to indicate API errors. The resources are different domains such as Car, Boat, Housing and Services (cleaning, baby-sitting etc). We support [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), allowing you to interact securily with our API from a client-side web application. You should never expose your secet API key in any public website's client-side code. [JSON](https://www.json.org/) is returned by all API responses, including errors.

# Authentication

Authenticate your platform by including your secret key in API requests. To get a key, please contact us at `deleokonomi@skat.dk`. Do not share your secret API key in publicly accessible areas such as GitHub, client-side code and so forth.

Authentication to the API is performed via a Bearer token, and must  be included in the `Authorization` header. Use  `-H "Authorization: Bearer you_access_token"`.

# Group Cars

Resources related to car filings in the API.

## Car [/car/{id}]

A car filing object has the following attributes:

+ transactionId (string) - The Platform's internal ID of the transaction
+ amount (decimal) - The income amount for the rental/service
+ startTime (string) - An ISO8601 date when the rental time started
+ endTime (string) -  An ISO8601 date when the rental time ended
+ paymentTime (string) - An ISO8601 date when the payment occurred
+ registrationNumber (string) - The registration number of the car
+ userId (string) - A GUID representing the user
+ platformId (string) - A GUID representing the platform


### View a Car detail [GET]

+ Request (application/json)
    + Headers

            Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==

+ Response 200 (application/json)

        [
            {
                "registrationNumber": "BC66476",
                "userId": "8ba4304b-ee11-4475-86be-80c94be60458",
                "platformId": "1",
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00"
            }
        ]

## User's car [/car/user/{id}]

### Get a list of User's Car Filings [GET]

+ Request (application/json)
    + Headers

            Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==

+ Response 200 (application/json)

        [
            {
                "registrationNumber": "BC66476",
                "userId": "8ba4304b-ee11-4475-86be-80c94be60458",
                "platformId": "1",
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00"
            }
        ]

## Car Collection [/car]

### List All Car Filings [GET]

+ Request (application/json)
    + Headers

            Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==

+ Response 200 (application/json)

        [
            {
                "registrationNumber": "BC66476",
                "userId": "8ba4304b-ee11-4475-86be-80c94be60458",
                "platformId": "1",
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00"
            }
        ]

### Add a new Car Filing [POST]

You can add a car filing using this action. It takes a JSON object.

+ transactionId (string) - The Platform's internal ID of the transaction
+ amount (decimal) - The income amount for the rental/service
+ startTime (string) - An ISO8601 date when the rental time started
+ endTime (string) -  An ISO8601 date when the rental time ended
+ paymentTime (string) - An ISO8601 date when the payment occurred
+ registrationNumber (string) - The registration number of the car

+ Request (application/json)

    + Headers

            Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==

    + Body

            {
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00",
                "registrationNumber": "BC66476"
            }

+ Response 201 (application/json)

    + Headers

            Location: /car/{id}

    + Body

            {
                "registrationNumber": "BC66476",
                "userId": "8ba4304b-ee11-4475-86be-80c94be60458",
                "platformId": "1",
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00"
            }


# Group Boats

Resources related to boat filings in the API.

## Boat [/boat/{id}]

A car filing object has the following attributes:

+ transactionId (string) - The Platform's internal ID of the transaction
+ amount (decimal) - The income amount for the rental/service
+ startTime (string) - An ISO8601 date when the rental time started
+ endTime (string) -  An ISO8601 date when the rental time ended
+ paymentTime (string) - An ISO8601 date when the payment occurred
+ userId (string) - A GUID representing the user
+ platformId (string) - A GUID representing the platform


### View a Boat detail [GET]

+ Request (application/json)
    + Headers

            Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==

+ Response 200 (application/json)

        [
            {
                "userId": "8ba4304b-ee11-4475-86be-80c94be60458",
                "platformId": "1",
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00"
            }
        ]

## User's boat [/boat/user/{id}]

### Get a list of User's Boat Filings [GET]

+ Request (application/json)
    + Headers

            Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==

+ Response 200 (application/json)

        [
            {
                "userId": "8ba4304b-ee11-4475-86be-80c94be60458",
                "platformId": "1",
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00"
            }
        ]

## Boat Collection [/boat]

### List All Boat Filings [GET]

+ Request (application/json)
    + Headers

            Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==

+ Response 200 (application/json)

        [
            {
                "userId": "8ba4304b-ee11-4475-86be-80c94be60458",
                "platformId": "1",
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00"
            }
        ]

### Add a new Boat Filing [POST]

You can add a boat filing using this action. It takes a JSON object.

+ transactionId (string) - The Platform's internal ID of the transaction
+ amount (decimal) - The income amount for the rental/service
+ startTime (string) - An ISO8601 date when the rental time started
+ endTime (string) -  An ISO8601 date when the rental time ended
+ paymentTime (string) - An ISO8601 date when the payment occurred

+ Request (application/json)

    + Headers

            Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==

    + Body

            {
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00",
            }

+ Response 201 (application/json)

    + Headers

            Location: /boat/{id}

    + Body

            {
                "userId": "8ba4304b-ee11-4475-86be-80c94be60458",
                "platformId": "1",
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00"
            }

# Group Services

Resources related to service filings in the API.

## Service [/service/{id}]

A service filing object has the following attributes:

+ transactionId (string) - The Platform's internal ID of the transaction
+ amount (decimal) - The income amount for the rental/service
+ startTime (string) - An ISO8601 date when the rental time started
+ endTime (string) -  An ISO8601 date when the rental time ended
+ paymentTime (string) - An ISO8601 date when the payment occurred
+ userId (string) - A GUID representing the user
+ platformId (string) - A GUID representing the platform
+ serviceType (string) - Type of service conducted

### View a Service detail [GET]

+ Request (application/json)
    + Headers

            Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==

+ Response 200 (application/json)

        [
            {
                "userId": "8ba4304b-ee11-4475-86be-80c94be60458",
                "platformId": "1",
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00",
                "serviceType": "cleaning"
            }
        ]

## User's service [/service/user/{id}]

### Get a list of User's Service Filings [GET]

+ Request (application/json)
    + Headers

            Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==

+ Response 200 (application/json)

        [
            {
                "userId": "8ba4304b-ee11-4475-86be-80c94be60458",
                "platformId": "1",
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00",
                "serviceType": "cleaning"
            }
        ]

## Service Collection [/service]

### List All Service Filings [GET]

+ Request (application/json)
    + Headers

            Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==

+ Response 200 (application/json)

        [
            {
                "userId": "8ba4304b-ee11-4475-86be-80c94be60458",
                "platformId": "1",
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00",
                "serviceType": "cleaning"
            }
        ]

### Add a new Service Filing [POST]

You can add a service filing using this action. It takes a JSON object.

+ transactionId (string) - The Platform's internal ID of the transaction
+ amount (decimal) - The income amount for the rental/service
+ startTime (string) - An ISO8601 date when the rental time started
+ endTime (string) -  An ISO8601 date when the rental time ended
+ paymentTime (string) - An ISO8601 date when the payment occurred
+ serviceType (string) - Type of service conducted

+ Request (application/json)

    + Headers

            Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==

    + Body

            {
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00",
                "serviceType": "cleaning"
            }

+ Response 201 (application/json)

    + Headers

            Location: /service/{id}

    + Body

            {
                "userId": "8ba4304b-ee11-4475-86be-80c94be60458",
                "platformId": "1",
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00",
                "serviceType": "cleaning"
            }
