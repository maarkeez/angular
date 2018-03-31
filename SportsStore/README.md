# Description
Online product catalog where:

1. Customers can browse by: category and page.
2. Shopping cart where users can add and remove products.
3. Checkout where customers can enter their shipping details and place their orders.
4. Administration area that includes create, read, update, and delete (CRUD) facilities for managing the catalog.
5. Administration area protected so that it will be shown only for logged-in administrators.

# Executed commands

Project dependencies configuration:
```
npm install
```

Type-scrypt configuration:
```
npm run typings -- install dt~core-js --save -–global
npm run typings -- install dt~node --save --global
```

Create a module "rxjs.module.min.js" containing all of the Reactive Extensions functionality, along with the additional information that SystemJS needs to resolve dependencies:
```
node ./rxModuleBuilder.js
```

Run de application
```
npm start
```