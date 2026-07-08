# ABA PWA Offline

Sistema PWA offline para prontuário, agenda e planner semanal.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo: `aba-pwa-offline`.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. No GitHub, vá em **Settings > Pages**.
4. Em **Build and deployment**, selecione:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Salve e aguarde o GitHub gerar o link.

O link ficará parecido com:

```text
https://SEU_USUARIO.github.io/aba-pwa-offline/
```

## Como instalar no celular/tablet

1. Abra o link no Chrome/Edge.
2. Toque em **Adicionar à tela inicial** ou **Instalar app**.
3. Abra pelo ícone criado.
4. Depois do primeiro carregamento, o app funciona offline.

## Importante

- Os dados ficam salvos no próprio navegador/dispositivo via IndexedDB.
- Use a opção de backup dentro do app com frequência.
- Se limpar os dados do navegador, trocar de aparelho ou desinstalar o app, os dados podem ser perdidos se não houver backup.

## Atualizações

Quando você enviar uma nova versão para o GitHub, o app atualizará o cache quando for aberto com internet. Se parecer preso numa versão antiga, limpe os dados do site/app no navegador.
