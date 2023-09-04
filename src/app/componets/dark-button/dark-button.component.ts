import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dark-button',
  templateUrl: './dark-button.component.html',
  styleUrls: ['./dark-button.component.css']
})
export class DarkButtonComponent {
  darkMode = false;
  @Output() dadosEnviados = new EventEmitter<boolean>();
    
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    const dados = this.darkMode;
    this.dadosEnviados.emit(dados);
  }

}
