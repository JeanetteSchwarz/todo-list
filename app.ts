import { Metadata } from "./Metadata"
import { TodoList } from "./todolist";

const todoList = new TodoList<Metadata>();

todoList.note('Code aufräumen', { assignee: '@jeanne'});
todoList.note('UI ergänzen', { assignee: '@jeanne'});
todoList.note('Fehlerbehandlung verbessern', { assignee: '@jeanne'});

console.log(todoList.getAllTodos)


