# Remarks
- Arrow functions in classes (properties!) --> WTF !?!  --> see *01_This*
- const vs readonly --> producing compile-time errors --> see *02_*



# run

- `npm install`
- Transpile TS --> JS
  - `npx tsc --watch` ... modifications to source code will **re-compile** on-the-fly
    or
  - `npx tsc xxx.ts`
- To compile ts directly use **ts-node**
  - `npm i ts-node`
  - `npx ts-node src/xxx.ts`

---

# setup project

- Update/Install **node**
  - https://nodejs.org/en/download/current/
- Check npm (should be installed with node)
  - `npm -v`
  - `npm install -g npm@latest` ... _g_ for global
- `npm init -y` ... with "yes" to all questions
- Install typescript
  - `npm i typescript` or global
  - `npm install -g typescript`
- `npx tsc --init --rootdir src --outdir lib`  
  ... initialize tsconfig.json  
  ... src folder for ts  
  ... lib folder for js

- enable `sourceMap` in **tsconfig.json** for debugging
- `npx tsc --watch` ... modifications to source code will **re-compile** on-the-fly

---

# Remarks

- Conventions: https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md
- Add `tsconfig.json`

---

# Debugging

- what and how ???
- https://code.visualstudio.com/docs/typescript/typescript-debugging
