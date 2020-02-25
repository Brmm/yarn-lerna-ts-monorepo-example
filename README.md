# Example monorepo

Example project with `yarn`, `lerna`, `eslint`, `prettier` and `typescript` as a monorepo. 

I set this up really fast to help someone out, might improve later.

### folder structure
```
.
├── README.md
├── lerna.json
├── package.json
├── tsconfig.json
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .prettierrc
├── packages
│   └── common
├── services
│   └── web-service
```

### install
```
$ yarn
$ cd services/web-service
$ yarn
```

### watch
```
$ lerna run watch --stream --no-sort --concurrency 99
```

### run service
```
$ node services/web-service/lib/server.js
```

### test service 
```
$ curl http://localhost:1337/test

{"randomBytes":"de38ffddfe3f7c7f3fd262040d8da94c4333e90ed6a2563fa94d2c720fdcb468"}
```
