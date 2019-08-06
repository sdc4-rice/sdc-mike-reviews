# Ratings & Reviews

> A mock Ratings & Reviews component of eBay.
## Related Projects

  - https://github.com/sdc4-rice/sdc-mike-reviews
  - https://github.com/sdc4-rice/willresen_bidbuy
  - https://github.com/sdc4-rice/sdc-grant-peoplealsoviewed
  - https://github.com/fec4-gandolf/images-modal

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

1. Before starting ensure you have PostgreSQL/Cassandra.
2. In your root directory create an .env file with config recommendations.

< Recommended settings below- use personal new relic key
PORT=3002
START_ID=1
END_ID=10000000
DB=postgres
CSV_FILENAME=reviews
NEW_RELIC=12345

3. In your terminal run npm install to install dependencies.
4. Run npm run seed to seed database with mock data.
5. Run npm run start in your teminal to start your server.
6. Run npm run react:dev to run webpack.






## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## API Endpoints

```sh
GET: /reviews/:id       --> retrieves all reviews for specific product
POST: /reviews          --> add a review
PUT: /reviews           --> updates a review
DELETE: /reviews/:id    --> deletes a review
```
