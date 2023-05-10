const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1jnsnd',
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/minha-conta/"
  },
});
