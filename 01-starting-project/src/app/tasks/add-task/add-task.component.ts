import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  // Recebe a tarefa (pode ser um objeto vazio para nova tarefa)
  @Input({ required: true }) task!: Task;
  // Emite o evento quando a tarefa nova é criada
  @Output() taskAdded = new EventEmitter<Task>();

  // Propriedade que controla se o formulário/modal será exibido
  showForm = false;

  // Abre o formulário (modal)
  openForm() {
    this.showForm = true;
  }

  // Fecha o formulário (modal)
  closeForm() {
    this.showForm = false;
  }

  // Ao submeter o formulário, emite a tarefa e fecha o modal
  onSubmit() {
    this.taskAdded.emit(this.task);
    this.closeForm();
  }
}
