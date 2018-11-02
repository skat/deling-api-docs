FORMAT: 1A
HOST: https://api.example.com

# DELING

DELING is a pilot project between SKAT and sharing economy platforms, where platforms send in relevant data to SKAT about their users. For the pilot project, these data are anonymous. We want to co-create to meet the needs of the platforms, and one objective is to map and clarify if platforms want to integrate using a REST API. We have therefore built a REST API which is documented below. We welcome you to leave feedback and comments at the [repo](https://github.com/skat/deling-api-docs) as issues or the SLACK channel you have been invited to.

An API for the pilot sharing economy project DELING. The DELING API is organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer). Our API has resource-oriented URLs and uses HTTP response codes to indicate API errors. The resources are different domains such as Car, Boat, Housing and Services (cleaning, baby-sitting etc). We support [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), allowing you to interact securely with our API from a client-side web application. You should never expose your secret API key in any public website's client-side code. [JSON](https://www.json.org/) is returned by all API responses, including errors.

# Authentication

Authenticate your platform by including your secret key in API requests. To get a key, please contact us at the SLACK channel. Do not share your secret API key in publicly accessible areas such as GitHub, client-side code and so forth.

Authentication to the API is performed via a Bearer token, and must  be included in the `Authorization` header. Use  `-H "Authorization: Bearer your_access_token"`.

The final solution (out of scope for the pilot project) will use [OAUTH2](https://oauth.net/2/) for identifying end-user and granting platforms to send data on their behalf.

# Implementation
It's up to you how you want to implement the API with your system. One way we envision it, is to call the API endpoint for creating a Filing, every time a transaction is completed on your platform.

Otherwise please follow these guidelines:
- Anonymize the data you send in
- Use the SANDBOX API endpoint you have received from us
- Do not share your secret API key in publicly accessible areas such as GitHub, client-side code and so forth

 If you want to deploy the implementation to your production environment, you are welcome to do so. Please follow the guidelines above if you do. We are mostly interested in how feasible it is for you to make an integration.


# Updating an existing filing

If there are changes to a filing, use `POST` to send updates. For instance a Car filing with transactionId `abc123` is reported with  an amount of 100 DKK. If the amount is wrong and a correction is needed, you should send a new `POST` request with the new amount: 50 DKK, and use the same value for the transactionId as before: `abc123`.

# Errors
We use standard HTTP status codes to show wether an API request succeeded or not. In general: Codes in the `2xx` range indicate success. Codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, an authorization failed, etc.). Codes in the `5xx` range indicate an error with our servers.

Some `4xx` errors (e.g., invalid parameter) include an error message that briefly explains the error.

# Group Cars

Resources related to car filings in the API.

## Car [/car/{id}]

A car filing object has the following attributes:

+ transactionId (string) - The Platform's internal ID of the transaction
+ amount (decimal) - The income amount for the rental/service in DKK
+ startTime (string) - An ISO8601 date when the rental time started
+ endTime (string) -  An ISO8601 date when the rental time ended
+ paymentTime (string) - An ISO8601 date when the payment occurred (car owner is paid)
+ registrationNumber (string) - The registration number of the car
+ userId (string) - A GUID representing the user
+ platformId (string) - A GUID representing the platform

+ Parameters
    + id: `dc73524f-85eb-447b-952f-e8f66293335b` (required, string) - Unique ID of the Car in form of a GUID


### View a Car detail [GET]

+ Request (application/json)
    + Headers

            Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==

+ Response 200 (application/json)

        [
            {
                "registrationNumber": "BC66476",
                "id": "dc73524f-85eb-447b-952f-e8f66293335b",
                "userId": "8ba4304b-ee11-4475-86be-80c94be60458",
                "platformId": "1",
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00"
            }
        ]

## User's car [/car/user/{user_id}]

+ Parameters
    + user_id: `8ba4304b-ee11-4475-86be-80c94be60458` (required, string) - Unique ID of the User in form of a GUID

### Get a list of User's Car Filings [GET]

+ Request (application/json)
    + Headers

            Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==

+ Response 200 (application/json)

        [
            {
                "registrationNumber": "BC66476",
                "id": "dc73524f-85eb-447b-952f-e8f66293335b",
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
                "id": "dc73524f-85eb-447b-952f-e8f66293335b",
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
+ amount (decimal) - The income amount for the rental/service in DKK
+ startTime (string) - An ISO8601 date when the rental time started
+ endTime (string) -  An ISO8601 date when the rental time ended
+ paymentTime (string) - An ISO8601 date when the payment occurred (car owner got paid)
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
                "id": "4cc76590-89ce-46d6-998c-aae3fdb7c791",
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
+ amount (decimal) - The income amount for the rental/service in DKK
+ startTime (string) - An ISO8601 date when the rental time started
+ endTime (string) -  An ISO8601 date when the rental time ended
+ paymentTime (string) - An ISO8601 date when the payment occurred (the boat owner is paid)
+ userId (string) - A GUID representing the user
+ platformId (string) - A GUID representing the platform

+ Parameters
    + id: `0d1da6da-1660-4e88-b79d-128e3a622e03` (required, string) - Unique ID of the Boat in form of a GUID


### View a Boat detail [GET]

+ Request (application/json)
    + Headers

            Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==

+ Response 200 (application/json)

        [
            {
                "id": "0d1da6da-1660-4e88-b79d-128e3a622e03",
                "userId": "8ba4304b-ee11-4475-86be-80c94be60458",
                "platformId": "1",
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00"
            }
        ]

## User's boat [/boat/user/{user_id}]

+ Parameters
    + user_id: `8ba4304b-ee11-4475-86be-80c94be60458` (required, string) - Unique ID of the User in form of a GUID

### Get a list of User's Boat Filings [GET]

+ Request (application/json)
    + Headers

            Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==

+ Response 200 (application/json)

        [
            {
                "id": "0d1da6da-1660-4e88-b79d-128e3a622e03",
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
                "id": "0d1da6da-1660-4e88-b79d-128e3a622e03",
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
+ amount (decimal) - The income amount for the rental/service in DKK
+ startTime (string) - An ISO8601 date when the rental time started
+ endTime (string) -  An ISO8601 date when the rental time ended
+ paymentTime (string) - An ISO8601 date when the payment occurred (the boat owner is paid)

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
                "id": "0d1da6da-1660-4e88-b79d-128e3a622e03",
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
+ amount (decimal) - The income amount for the rental/service in DKK
+ startTime (string) - An ISO8601 date when the rental time started
+ endTime (string) -  An ISO8601 date when the rental time ended
+ paymentTime (string) - An ISO8601 date when the payment occurred (the service provider is paid)
+ userId (string) - A GUID representing the user
+ platformId (string) - A GUID representing the platform
+ serviceType (string) - Type of service conducted

+ Parameters
    + id: `0d1da6da-1660-4e88-b79d-128e3a622e03` (required, string) - Unique ID of the Service in form of a GUID

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

## User's service [/service/user/{user_id}]

+ Parameters
    + user_id: `8ba4304b-ee11-4475-86be-80c94be60458` (required, string) - Unique ID of the User in form of a GUID

### Get a list of User's Service Filings [GET]

+ Request (application/json)
    + Headers

            Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==

+ Response 200 (application/json)

        [
            {
                "id": "0d1da6da-1660-4e88-b79d-128e3a622e03",
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
                "id": "0d1da6da-1660-4e88-b79d-128e3a622e03",
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
+ amount (decimal) - The income amount for the rental/service in DKK
+ startTime (string) - An ISO8601 date when the rental time started
+ endTime (string) -  An ISO8601 date when the rental time ended
+ paymentTime (string) - An ISO8601 date when the payment occurred (the service provider is paid)
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
                "id": "0d1da6da-1660-4e88-b79d-128e3a622e03",
                "userId": "8ba4304b-ee11-4475-86be-80c94be60458",
                "platformId": "1",
                "transactionId": "fc60f6aa-189b-4c20-9741-f5292b630e97",
                "amount": 100.50,
                "startTime": "2018-02-21T12:19:38+01:00",
                "endTime": "2018-02-21T12:19:38+01:00",
                "paymentTime": "2018-02-21T12:19:38+01:00",
                "serviceType": "cleaning"
            }
