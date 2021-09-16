# WIP

## Description of this project

#### **This is a continuation of 1a--add-node-app, focus on getting eslint to work.**

This is a monorepo for web application managed by [@microsoft/rush](https://rushjs.io/) and [@mirosoft/rushstack](https://rushstack.io/).

---

### Note 📝 📝 

💡 Noted that I am not using `heft-webpack` for my web-application. The web-application is transpile by babel; however, all its dependencies (React components and  non-React dependencies) are managed by rigged heft. See [discussion](https://rushstack.zulipchat.com/#narrow/stream/262522-heft/topic/.28play.20nice.20with.20babel.29.20how.20to.20run.20heft.20task.20manually.3F)

✨ Another feature worth mention is I am using [typescript's Project References](https://www.typescriptlang.org/docs/handbook/project-references.html#:~:text=Project%20references%20are%20a%20new,in%20new%20and%20better%20ways.). Also see [this](https://github.com/microsoft/rushstack/issues/2604).  With this set up, jump to definition in IDE works without prebuild.

### ⚠️ [Limitation of using typescript's Project References](#limitation-of-using-typescripts-proj-ref)

There are some [limitation](https://github.com/microsoft/rushstack/issues/2604#issuecomment-818996848) using typscript's project references; however, I seem to be able to get arround this as long as I don't invoke `--build` flag. The purpose of typescript's project references is only for IDE's jump to definition not for transpiling typescript source code. And luckly heft is not invoke `--build` flag.

Another problem I have with typescript's Project References is the need to specify `.json` file type in tsconfig.json. (see [this line](https://github.com/ApolloTang/study--rush--web-app/blob/main/0a--w-jest-in-web-app-1/tools/heft-config-default-rig/profiles/default/tsconfig-base.json#L31)). This happens because of [this issue](https://github.com/microsoft/TypeScript/issues/25636). 

Specifying `.json` file type in tsconfig.json, interfers with heft-typesript task's [staticAssetsToCopy.excludeGlobs](https://github.com/ApolloTang/study--rush--web-app/blob/main/0a--w-jest-in-web-app-1/tools/heft-config-default-rig/profiles/react-ui/config/typescript.json#L65) since tsc will copy all *.json into the output folder (`dist`) overriding heft-typescript file copying exclusion. 

Specifying specify `.json` file type in tsconfig.json, also cause heft-task's TSLint to lint `.json` files. For this I disable Tslint in [typescript.json](https://github.com/ApolloTang/study--rush--web-app/blob/main/0a--w-jest-in-web-app-1/tools/heft-config-default-rig/profiles/react-ui/config/typescript.json#L36). For this I'll have to invoke linting myself without heft.



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


