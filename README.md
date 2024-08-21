# Restful Booker API Automation

This repository contains automated tests for the Restful Booker API. The tests are written using [Postman](https://www.postman.com/) and executed with [Newman](https://www.npmjs.com/package/newman).

## Table of Contents

- [Overview](#overview)
- [API Endpoints Covered](#api-endpoints-covered)
- [Setup Instructions](#setup-instructions)
- [Running the Tests](#running-the-tests)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Restful Booker API provides a set of endpoints for managing bookings, including creating, updating, retrieving, and deleting bookings. This project automates the testing of these endpoints to ensure their correctness and reliability.

## API Endpoints Covered

The following API endpoints are covered in the automation:

- **Auth**
  - `POST /auth`: Create a new authentication token.

- **Booking**
  - `GET /booking`: Retrieve a list of booking IDs.
  - `GET /booking/:id`: Retrieve the details of a specific booking.
  - `POST /booking`: Create a new booking.
  - `PUT /booking/:id`: Update an existing booking.
  - `PATCH /booking/:id`: Partially update an existing booking.
  - `DELETE /booking/:id`: Delete a booking.

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Newman](https://www.npmjs.com/package/newman) installed globally:
  ```bash
  npm install -g newman
  ```
- [Postman](https://www.postman.com/) installed for running and modifying the collections.

### Cloning the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/sadmanpieal/Restfull-Booker-API-.git
cd Restfull-Booker-API-
```

## Running the Tests

To run the tests using Newman, use the following command:

```bash
newman run Restful-booker.postman_collection.json
```
or 
```bash
newman run Restful-booker.postman_collection.json --env-var "variable_name=variable_value"
```



- If your collection requires environment variables but you don't want to use an environment file, you can pass individual variables directly in the command line using the --env-var option:

### Running with HTML Report

If you wish to generate an HTML report after running the tests, use:

```bash
node .\reports.js
```
- before that delete the report.html file from  Reports folder
- The report will be saved as `report.html`.
- Report will look like this
 
![screencapture-file-D-Restfull-booker-Restfull-Booker-API-Reports-report-html-2024-08-21-21_27_04](https://github.com/user-attachments/assets/80b0d196-c5f3-4465-a7c8-ca5863f5b455)

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. All contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
