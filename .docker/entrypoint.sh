#!/bin/bash

npm install
npm run build
npx typeorm migration:run
npm run start:dev

# quando subimos um conaiter como o nosso, com uma imagem alpine
# para rodar comandos automaticamente quando o container for criado, criamos um spript.
# E nos containers existe um script chamado "entryoint" que é o primeiro recurso que entra em
# execução, depois que todo sistma linux é carregar.
#na linha 1 dizemos que estamos usando o bash, que é o que instalamos.
# o buil é por cona das migrations, elas executam o arquivo geredo pelo build
