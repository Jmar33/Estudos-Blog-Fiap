# Objetivo do Projeto

O projeto FiapBlog é uma aplicação web desenvolvida em React + Vite que exibe uma lista de posts de um blog, fornecendo funcionalidades de lazy loading para carregar os posts e de paginação para navegar entre os mesmos. O objetivo principal do projeto é demonstrar como implementar uma interface de usuário simples e interativa, além de aprimorar os conhecimentos em React.

## Como Rodar o Projeto Localmente

Para rodar o projeto localmente em sua máquina, siga os seguintes passos:

- **Clone o repositório**:
    ```bash
    git clone https://github.com/Jmar33/Estudos-Blog-Fiap.git
    ```

- **Acesse o diretório do projeto**:
    ```bash
    cd fiap-blog
    ```

- **Instale as dependências**:
    ```bash
    npm install
    ```

- **Inicie o servidor de desenvolvimento**:
    ```bash
    npm start
    ```

- **Acesse a aplicação no navegador**:
    A aplicação estará disponível em [http://localhost:5173](http://localhost:5173).

## Como Fazer o Build do Projeto

Para criar uma versão otimizada e pronta para produção do projeto, siga os seguintes passos:

- **Execute o comando de build**:
    ```bash
    npm run build
    ```

- **O código otimizado será gerado no diretório `build`**.

## Como Entregar o Projeto em Produção 

A seguir iremos abordar como implantar o projeto em um ambiente de produção, utilizando o serviço da Netlify.

1. **Crie uma conta e faça o login no serviço de hospedagem Netlify**.

2. **Siga as instruções fornecidas pelo serviço de hospedagem para fazer o upload dos arquivos gerados no passo anterior (build) para o servidor**.

3. **Certifique-se de testar a aplicação implantada para garantir que tudo está funcionando conforme o esperado**.

## Outras Informações

- **Tecnologias Utilizadas**: Este projeto foi desenvolvido utilizando React + Vite.

- **API de Backend**: O projeto utiliza uma API de backend que foi desenvolvida por meio do Contentful.

- **Paginação**: A funcionalidade de paginação é implementada pelo componente Pagination no diretório components. Este componente é utilizado para dividir a lista de posts em páginas e permitir a navegação entre elas.

- **Estilos**: A aplicação utliza a biblioteca de estilos Bootstrap.

- **Licença**: Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.