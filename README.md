## Gerenciador de Tarefas

**Descrição:**

Este projeto permite a criação, consulta e atualização de tarefas. As tarefas podem ter um título, descrição e status (pendente, em andamento ou concluída).

**Exemplo de JSON:**

```json
{
  "id": "cceb09f9-1242-491c-a2ce-4745d97b71a9",
  "title": "Task 02",
  "description": "Descrição da Task 02",
  "createdAt": "2023-09-18 09:31:36",
  "updatedAt": "2023-09-18 09:34:14",
  "completedAt": "2023-09-18 09:34:14"
}
```

**Estrutura do Projeto:**

```
node_modules
src
├── controladores
│   └── tasksControl.js
├── intermediarios
│   └── validateTaskid.js
├── database.json
├── importCSV.js
├── index.js
├── Pasta1.csv
├── rotas.js
└── tasks.js
.gitignore
package-lock.json
package.json
README.md
```

**Funcionalidades:**

* **Criar Tarefa:** Crie tarefas com título, descrição e status pendente.
* **Consultar Tarefas:** Consulte todas as tarefas ou filtre por status.
* **Atualizar Tarefa:** Altere o título, descrição ou status de uma tarefa.
* **Concluir Tarefa:** Marque uma tarefa como concluída.

**Tecnologias Utilizadas:**

* Node.js
* Express
* JSON
* CSV

**Instalação:**

```
git clone https://github.com/seu-usuario/gerenciador-de-tarefas.git
cd gerenciador-de-tarefas
npm install
```

**Execução:**

```
npm start
```

**API:**

* **Criar Tarefa:**

```
POST /api/tasksControl
```

**Corpo da requisição:**

```json
{
  "title": "Nova Tarefa",
  "description": "Descrição da nova tarefa"
}
```

**Resposta:**

```json
{
  "id": "cceb09f9-1242-491c-a2ce-4745d97b71a9",
  "title": "Nova Tarefa",
  "description": "Descrição da nova tarefa",
  "createdAt": "2023-09-18 09:31:36",
  "updatedAt": "2023-09-18 09:31:36",
  "completedAt": null
}
```

* **Consultar Tarefas:**

```
GET /api/tasksControl
```

**Parâmetros:**

* **status:** (opcional) Filtre por tarefas com o status especificado (pendente, em andamento ou concluída).

**Resposta:**

```json
[
  {
    "id": "cceb09f9-1242-491c-a2ce-4745d97b71a9",
    "title": "Task 02",
    "description": "Descrição da Task 02",
    "createdAt": "2023-09-18 09:31:36",
    "updatedAt": "2023-09-18 09:34:14",
    "completedAt": "2023-09-18 09:34:14"
  },
  ...
]
```

* **Atualizar Tarefa:**

```
PUT /api/tasksControl/:id
```

**Parâmetros:**

* **id:** ID da tarefa a ser atualizada.

**Corpo da requisição:**

```json
{
  "title": "Tarefa Atualizada",
  "description": "Descrição da tarefa atualizada",
  "status": "pendente"
}
```

**Resposta:**

```json
{
  "id": "cceb09f9-1242-491c-a2ce-4745d97b71a9",
  "title": "Tarefa Atualizada",
  "description": "Descrição da tarefa atualizada",
  "createdAt":
}

* **Deletar Tarefa:** Exclua uma tarefa permanentemente do sistema.

**API:**

* **Deletar Tarefa:**

```
DELETE /api/tasksControl/:id
```

**Parâmetros:**

* **id:** ID da tarefa a ser excluída.

**Resposta:**

```json
{
  "message": "Tarefa deletada com sucesso!"
}
```

**Exemplo de uso:**

```
curl -X DELETE http://localhost:3000/api/tasks/cceb09f9-1242-491c-a2ce-4745d97b71a9
```

**Observações:**

* Tenha cuidado ao usar este método, pois a ação é irreversível.
* É recomendável consultar a tarefa antes de deletar para confirmar se é a desejada.

**Para mais informações:**

* Consulte a documentação completa da API.
* Entre em contato com o desenvolvedor do projeto.

**Espero que esta informação seja útil!**
