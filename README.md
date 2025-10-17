# 🧩 PokéCatálogo

Aplicação web desenvolvida em React com Tailwind CSS, que consome dados da PokeAPI para exibir um catálogo interativo de Pokémons. O projeto permite listar, buscar e visualizar detalhes de cada Pokémon de forma simples e responsiva.

## ✨ Funcionalidades

* Listagem inicial dos primeiros Pokémons.
* Sistema de busca por nome para encontrar um Pokémon específico.
* Visualização de detalhes (ID, altura, peso, tipos) em um modal ao clicar em um card.
* Design totalmente responsivo, adaptável para desktops, tablets e celulares.
* Feedback visual com um indicador de carregamento durante as buscas.

## 🚀 Tecnologias Utilizadas

* **React (Vite):** Biblioteca para a construção da interface de usuário.
* **Tailwind CSS:** Framework CSS para estilização moderna e ágil.
* **JavaScript:** Linguagem de programação principal.
* **PokeAPI:** API REST gratuita para consulta dos dados dos Pokémons.

## ⚙️ Instruções de Instalação e Execução

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/oLupim/AP2-DAOC.git
    ```

2.  **Acesse o diretório do projeto:**
    ```bash
    cd AP2-DAOC
    ```

3.  **Instale as dependências necessárias:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    Após iniciar, a aplicação estará disponível no seu navegador em `http://localhost:5173` (ou outra porta indicada no terminal).

## 🌐 API Utilizada

Este projeto utiliza a **PokeAPI**, uma base de dados pública e gratuita sobre o universo Pokémon.

* **Documentação Oficial:** [https://pokeapi.co/docs/v2](https://pokeapi.co/docs/v2)

### Endpoints Usados

* **Listagem de Pokémons:** `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
* **Buscar Pokémon pelo nome:** `https://pokeapi.co/api/v2/pokemon/{nome}` (Ex: `.../pokemon/pikachu`)
