# Adonis AWS

Adonis AWS-SDK provides the aws-sdk as a singleton for the Adonis Framework

## Instalation

1. Add package:

```bash
$ npm i @conceptho/adonis-aws-sdk
```

or 

```bash
$ yarn add @conceptho/adonis-aws-sdk
```

2. Register Adonis AWS-SDK provider inside the start/app.js file

```js
const providers = [
    ...
    '@conceptho/adonis-aws-sdk/provider/',
    ...
]
```

3. Configuring it inside the config/aws.js

```js
'use strict'

const Env = use('Env')

module.exports = {
  accessKeyId: Env.get('AWS_ACCESS_KEY_ID'),
  secretAccessKey: Env.get('AWS_SECRET_ACCESS_KEY'),
  region: Env.get('AWS_REGION')
}

```

4. Using it

```js

const AWS = use('Conceptho/AWS-SDK') 
...

```