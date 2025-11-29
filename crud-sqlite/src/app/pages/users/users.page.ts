import { Component, OnInit } from '@angular/core';
import { SQLiteService } from 'src/app/services/sqlite.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: false,
})
export class UsersPage implements OnInit {
  users: any[] = [];
  name = '';
  email = '';
  editingId: number | null = null; // <-- identifica usuário sendo editado

  constructor(private sqliteService: SQLiteService) { }
  async ngOnInit() {
    await this.sqliteService.initDB();
    await this.loadUsers();
  }
  // CHAMADA QUANDO CLICA NO BOTÃO EDITAR
  editUser(u: any) {
    this.editingId = u.id;
    this.name = u.name;
    this.email = u.email;
  }

  // BOTÃO SALVAR ALTERAÇÃO
  async updateUser() {
    if (this.editingId && this.name && this.email) {
      await this.sqliteService.updateUser(this.editingId, this.name, this.email);

      this.editingId = null;
      this.name = '';
      this.email = '';

      await this.loadUsers();
    }
  }

  async loadUsers() {
    this.users = await this.sqliteService.getUsers();
    console.log('Usuários carregados:', this.users);
  }
  async addUser() {
    if (this.name && this.email) {
      await this.sqliteService.addUser(this.name, this.email);
      this.name = '';
      this.email = '';
      await this.loadUsers();
    }
  }
  async deleteUser(id: number) {
    await this.sqliteService.deleteUser(id);
    await this.loadUsers();
  }
}
