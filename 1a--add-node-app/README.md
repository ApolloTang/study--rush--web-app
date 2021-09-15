## Description of this project

This a web application. It has a front-end and back-end apps manage by Rush.

The front end app is based on: 

[https://github.com/ApolloTang/study--rush--react-apps/tree/main/4--w-jest-in-web-app-1](https://github.com/ApolloTang/study--rush--react-apps/tree/main/4--w-jest-in-web-app-1)

The back end app is based on: 

[https://github.com/ApolloTang/study--rush--node-app/tree/main/03-node-apps-w-ts-proj-ref](https://github.com/ApolloTang/study--rush--node-app/tree/main/03-node-apps-w-ts-proj-ref)

---

### Note 📝 📝 

- It shold be noted that I am not using `heft-webpack` for my web-application. The web-application is transpile by babel; however, all its dependencies (React components and  non-React dependencies) are managed by rigged heft. See [discussion](https://rushstack.zulipchat.com/#narrow/stream/262522-heft/topic/.28play.20nice.20with.20babel.29.20how.20to.20run.20heft.20task.20manually.3F)

- Another feature worth mention is I am using [typescript's Project References](https://www.typescriptlang.org/docs/handbook/project-references.html#:~:text=Project%20references%20are%20a%20new,in%20new%20and%20better%20ways.). Also see [this](https://github.com/microsoft/rushstack/issues/2604).  With this set up, jump to definition in IDE works without prebuild.

---

### Quick start

Installation:

```
  nvm use 14.17.3
  yarn global add @microsoft/rush@5.52.0
  yarn global add pnpm@6.7.1
  rush install
  
  rush build:watch
```

Developing web-app:

```
  cd apps/web-app-1/
  rushx dev
```

Developing node-app:

```
  cd apps/node-app-1/
  rushx dev
```

---

### Todo: 

- get eslint to work
- get prettier to work
- get precommit to work
- get prepush to work
- get deployment pruning to work
- need more stress test


