<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Getting Started

### Install
Install vscode extensions
- install [`Prettier`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- install [`Prettier ESLint`](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- install [`ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Install node_modules
- `pnpm install`

### Run Development Server
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

- setup .env
- `pnpm start`
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Verify lint format
- `pnpm lint`

### Run Test
- `pnpm test`

### Build dist/
- `pnpm build`

## Dependencies

| Library | Version | Description |
| ------------- | ------------- | ------------- |
| node | 20.3.1 | `https://nodejs.org/en/download/` |
| typescript | 5.1.3 | `https://www.npmjs.com/package/typescript` |
| ts-node | 10.9.1 | `https://www.npmjs.com/package/ts-node` |
| @typescript-eslint/eslint-plugin | 6.0.0 | `https://www.npmjs.com/package/@typescript-eslint/eslint-plugin` |
| @typescript-eslint/parser | 6.0.0 | `https://www.npmjs.com/package/@typescript-eslint/parser` |
| jest | 29.5.0 | `https://www.npmjs.com/package/jest` |
| tsconfig-paths | 4.2.0 | `https://www.npmjs.com/package/tsconfig-paths` |
| ts-loader | 9.4.3 | `https://www.npmjs.com/package/ts-loader` |
| ts-jest | 29.1.0 | `https://www.npmjs.com/package/ts-jest` |
| supertest | 6.3.3 | `https://www.npmjs.com/package/supertest` |
| source-map-support | 3.0.0 | `https://www.npmjs.com/package/source-map-support` |
| prettier | 3.2.5 | `https://www.npmjs.com/package/prettier` |
| eslint-plugin-prettier | 5.0.0 | `https://www.npmjs.com/package/eslint-plugin-prettier` |
| eslint-config-prettier | 9.0.0 | `https://www.npmjs.com/package/eslint-config-prettier` |
| eslint | 8.42.0 | `https://www.npmjs.com/package/eslint` |
| @types/supertest | 6.0.0 | `https://www.npmjs.com/package/@types/supertest` |
| @types/jest | 29.5.2 | `https://www.npmjs.com/package/@types/jest` |
| @types/express | 4.17.17 | `https://www.npmjs.com/package/@types/express` |
| @nestjs/testing | 10.0.0 | `https://www.npmjs.com/package/@nestjs/testing` |
| @nestjs/schematics | 10.0.0 | `https://www.npmjs.com/package/@nestjs/schematics` |
| @nestjs/cli | 10.0.0 | `https://www.npmjs.com/package/@nestjs/cli` |


## Project Structure

```bash
├── .github/
├── .gitlab/
├── src/
│   ├── auth/
│   │   ├── authorizations/
│   │   │   ├── role.enum.ts
│   │   │   ├── ...
│   │   ├── controllers/v1/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.controller.spec.ts
│   │   ├── dtos/
│   │   │   ├── auth.dto.ts
│   │   │   ├── auth.dto.spec.ts
│   │   ├── models/
│   │   │   ├── auth.entity.ts
│   │   │   ├── auth.entity.spec.ts
│   │   ├── profiles/
│   │   │   ├── auth.profile.ts
│   │   │   ├── auth.profile.spec.ts
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.service.spec.ts
│   │   ├── strategies/
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.service.spec.ts
│   ├── some-func/
│   │   ├── controllers/v1/
│   │   │   ├── some-func.controller.ts
│   │   │   ├── some-func.controller.spec.ts
│   │   ├── dtos/
│   │   │   ├── some-func.dto.ts
│   │   │   ├── some-func.dto.spec.ts
│   │   ├── models/
│   │   │   ├── some-func.entity.ts
│   │   │   ├── some-func.entity.spec.ts
│   │   ├── services/
│   │   │   ├── some-func.service.ts
│   │   │   ├── some-func.service.spec.ts
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   └── ...
├── test/
│   ├── app-e2e.spec.ts
│   ├── jest-e2e.json
│   └── ...
└── ...
```

|  | Description |
| ------------- | ------------- |
| `.github/` | Define pull request template for GitHub |
| `.gitlab/` | Define merge request template for Gitlab |
| `auth/` | Store authentication functions |
| `some-func/` | Store some function |
| `authorizations/` | Store auth constant ex. `role` |
| `controllers/v1` | Store controller of authentication |
| `dtos/` | Store dto class |
| `models/` | Store entity class with is the same as table in database |
| `profiles/` | Store map profile when using `import { Mapper } from '@automapper/core'` |
| `services/` | Store service classes which has all logic in application |
| `strategies/` | Store strategy to generate and hash jwt token |

### Naming
Route directory
- Kebab case ex `some-route`
- prefer plural ex `components/`

Filename
- Kebab case ex `some-route`
- prefer singular ex `page.ts`

### Import ordering
- Build-in import ex. `@nestjs/common`
- External 3rd party libraries ex. `winston`
- Internal classes start with `@` ex. `@automapper`
- Internal classes ex. `../../common/model/file.enum`

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Commit message example

Here are some examples of well-crafted Git commit messages tailored for different scenarios:

**General Commit Message Format (Conventional Commits)**

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

* **Type:** A brief keyword summarizing the change (e.g., `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `build`, `ci`, `perf`, `revert`).
* **Scope:** (Optional) Narrows down the affected area of the codebase (e.g., `auth`, `api`, `database`).
* **Description:** A concise summary of what changed (50 characters or less is recommended).
* **Body:** (Optional) A more detailed explanation of the change, providing context or reasoning. Use bullet points for clarity.
* **Footer:** (Optional) References to issue trackers, breaking changes, etc.

**Example Commit Messages**

* **New Feature**
   ```
   feat(auth): implement user registration with email verification
   ```

* **Bug Fix**
   ```
   fix(api): correct error handling for invalid request parameters
   ```

* **Documentation Update**
   ```
   docs: update README with installation instructions for PNPM
   ```

* **Code Style Improvement**
   ```
   style: enforce consistent indentation using Prettier
   ```

* **Refactoring**
   ```
   refactor(database): optimize query performance for product search
   ```

* **Test Addition/Modification**
   ```
   test(api): add unit tests for product controller endpoints
   ```

* **Chore/Maintenance Task**
   ```
   chore: update project dependencies to latest versions
   ```

* **Build-Related Change**
   ```
   build: configure Docker image for production deployment
   ```

* **Continuous Integration**
   ```
   ci: add GitHub Actions workflow for automated testing
   ```

* **Performance Improvement**
   ```
   perf(api): cache frequently accessed data to reduce response times
   ```

* **Revert of a Previous Commit**
   ```
   revert: undo accidental deletion of configuration file 
   ```

**Additional Tips**

* **Imperative Mood:** Use the imperative mood in your descriptions (e.g., "add," "fix," "update") as if you are giving commands.
* **Concise and Clear:** Keep your messages brief but informative. Aim for a summary that someone new to the project could understand.
* **Consistent Style:** Follow a consistent style within your project to make your commit history easier to read.

Let me know if you'd like more examples tailored to specific scenarios!