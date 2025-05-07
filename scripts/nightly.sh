sed -i 's/"name": "quicktvui",/"name": "@quicktvui\/nightly",/' packages/quicktvui/package.json
sed -i '2s/quicktvui/@quicktvui\/nightly/' internal/build-constants/src/pkg.ts
