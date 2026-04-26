# Adotar Pet - Plataforma de Adoção Full-Stack

## 📚 Propósito do Projeto
Este projeto foi desenvolvido de forma guiada durante uma formação full-stack, com o objetivo principal de aprendizado e fixação de conceitos práticos. A autoria da ideia e do design original pertencem ao curso. Este repositório serve para demonstrar minha capacidade de compreender, codificar, integrar e estender uma aplicação complexa utilizando React, Node.js e MongoDB, com foco especial em Autenticação (JWT) e manipulação de estado global.

## 💻 Sobre o Projeto
O **Adotar Pet** é uma plataforma completa que conecta pessoas que desejam doar animais com pessoas que buscam adotar. A aplicação exige a criação de contas e login para interagir com o sistema. 

Usuários podem gerenciar seus perfis, cadastrar pets para adoção (com envio de múltiplas fotos), visualizar pets disponíveis, manifestar interesse em adotar e acompanhar o status de suas adoções (Minhas Adoções) ou das adoções dos pets que cadastraram (Meus Pets).

## 🛠️ Tecnologias Utilizadas

### **Frontend**
* **React (Vite):** Biblioteca principal para construção da interface SPA.
* **React Router DOM:** Roteamento de páginas e proteção de rotas privadas.
* **Context API & Custom Hooks:** Gerenciamento de estado global da aplicação (sessão do usuário e autenticação) através do `UserContext` e do hook `useAuth`.
* **CSS Modules:** Estilização componentizada (`*.module.css`) para evitar conflitos de classes e manter o escopo isolado.
* **Axios:** Cliente HTTP configurado para enviar tokens de autorização nos cabeçalhos (`headers`).

### **Backend**
* **Node.js & Express:** Ambiente e framework para a construção da API RESTful.
* **MongoDB & Mongoose:** Banco de dados NoSQL utilizado para modelar Usuários e Pets de forma relacional (referenciando IDs).
* **JWT (JSON Web Token) & Bcrypt:** Sistema robusto de criptografia de senhas e geração de tokens para autenticação e autorização de usuários.
* **Multer:** Configurado para suportar o upload de imagens de perfil de usuários e múltiplas imagens para a galeria do pet.
* **CORS:** Configurado para comunicação segura entre cliente e servidor.

## 🚀 Funcionalidades e Conceitos Aplicados

* **Sistema de Autenticação Completo:** Implementação de rotas de Registro e Login. O backend criptografa a senha com `bcrypt`, gera um token JWT e o devolve. O frontend armazena este token (via Context API/Local Storage) e o utiliza para autorizar requisições subsequentes.
* **Proteção de Rotas:** Lógica implementada para restringir o acesso a dashboards e painéis de edição apenas para usuários autenticados.
* **Gerenciamento de Imagens Dinâmico:** Uso de `multer` para upload, salvando arquivos em pastas separadas (`/public/images/users` e `/public/images/pets`).
* **Relacionamento de Dados em NoSQL:** Demonstração de como vincular o ID do usuário que cadastrou o pet e o ID do usuário que deseja adotar dentro do documento do Pet no MongoDB.
* **Feedbacks Visuais (Flash Messages):** Criação de um sistema de notificações dinâmico (`Message.jsx` e `useFlashMessage`) que se comunica via eventos (`bus.jsx`) para alertar o usuário sobre sucessos ou erros nas operações.
