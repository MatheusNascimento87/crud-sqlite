# 📱 CRUD SQLite – Ionic + Angular + Capacitor

Este projeto é um aplicativo simples utilizando **Ionic**, **Angular** e **Capacitor**, implementando um CRUD completo com banco de dados **SQLite**.  
Ideal para estudos, prototipação e projetos mobile offline-first.

---

## 🚀 Tecnologias Utilizadas
- **Ionic 7**
- **Angular (modo NgModules)**
- **Capacitor**
- **SQLite (plugin capacitor-community/sqlite)**

---

## 📦 Instalação e Configuração

### 1. Criar o projeto Ionic
```bash
ionic start crud-sqlite blank --type=angular --capacitor
cd crud-sqlite
``` 

Atenção: durante a criação não escolha o modo Standalone. Use NgModules.

### 2. Instalar dependências do SQLite
```bash
npm install @capacitor-community/sqlite
npm install @capacitor/core
npm install @capacitor/android @capacitor/ios
```
Sincronizar com o Capacitor:
```bash
 npx cap sync
```

### Estrutura do Serviço SQLite (SQLiteService)

- O serviço encapsula toda a comunicação com o banco:

- Criação do banco e tabela users

- Inserção de usuários

- Listagem

- Atualização

- Exclusão

- Fallback para execução no navegador (armazenamento em memória)

### CRUD: Tela de Usuários

- Funcionalidades:

- Criar usuário

- Listar usuários

- Excluir

- Editar e atualizar

- Alternância dinâmica entre Adicionar e Salvar alterações

## Rodar o projeto
### Web (modo dev)
```bash
ionic serve
```
### Android
```bash
ionic build
npx cap copy
npx cap open android
```
Compile e execute pelo Android Studio

### Funcionalidades da Página

- Formulário com ngModel

- Botão de Adicionar (quando não está editando)

- Botão de Salvar alterações (quando está editando)

- Listagem de usuários

- Ação de exclusão

- Modo de edição ao clicar em "Editar"

### ✔️ Status do Projeto

O CRUD está completamente funcional e compatível com:

- Android (SQLite real)

- Web (modo em memória)

- Capacitor 5+
