# Nuxt i18n + Pinia = memory leak

Issue: https://github.com/nuxt-modules/i18n/issues/2629

## Steps to Reproduce:

1. Clone the repository: `git clone git@github.com:azhirov/nuxt-i18n-pinia-memory-leak.git`
2. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. Run the server: `node .output/server/index.mjs`
5. Use a tool like `ab`, `siege`, or any other utility to send multiple requests. For example: `siege -c10 -t30s http://127.0.0.1:3000` or `ab -n 5000 -c 100 http://localhost:3000/`
6. Check the memory consumption of the process (for example, using the `top` command).