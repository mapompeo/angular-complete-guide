import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  
  // Array com as tasks existentes
  tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15'
    },
  ];

  // Estado interno para controlar se o formulário/modal está visível
  showForm: boolean = false;
  // Objeto para armazenar a nova task (inicializada quando o modal é aberto)
  newTask: Task = { id: '', userId: '', title: '', summary: '', dueDate: '' };

  // Retorna as tasks filtradas para o usuário atual
  get selectedUserTasks() {
    return this.tasks.filter((task: Task) => task.userId === this.userId);
  }

  // Remove uma task concluída
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  // Quando o botão "Add Task" é clicado:
  onAddTaskButtonClick() {
    // Inicializa o objeto newTask com o id do usuário corrente
    this.newTask = { id: '', userId: this.userId, title: '', summary: '', dueDate: '' };
    // Exibe o formulário/modal de adicionar tarefa
    this.showForm = true;
  }

  // Ao receber a nova tarefa do componente add-task
  handleTaskAdded(task: Task) {
    // Cria um id simples (você pode melhorar a lógica)
    task.id = 't' + (this.tasks.length + 1);
    // Adiciona a task ao array
    this.tasks.push(task);
    // Fecha o modal
    this.showForm = false;
  }
}
