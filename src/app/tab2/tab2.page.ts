import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
//Héber Kayke Bernardino Neves, 2DS3
//RM: 08068
  visor = '0';
  valor1: number = null;
  operador: any = null;
  numNovo = false;
  guardaNum : number;
  virgula = false;

constructor() {
}
click(val: any) {
  switch (val) {
    case 'limpar':
      this.visor = '0';
      this.valor1 = null;
      this.operador = null;
      this.numNovo = false;
      break;
    case 'c':
      this.valor1 = null;
      this.visor = '0';
      break;
    case '+/-':
      if (Math.sign(parseInt(this.visor, 0)) == 1) {
        const sinal = -Math.abs(parseInt(this.visor, 0));
        this.visor = sinal.toString();
      } else if (Math.sign(parseInt(this.visor, 0)) == -1) {
        const sinal = Math.abs(parseInt(this.visor, 0));
        this.visor = sinal.toString();
      } else {
        this.visor = this.visor;
      }
      break;
    case 'ce':
      this.operacao('ce');
      break;
    case '%':
      this.operacao('%');
      break;
    case '/':
      this.operacao('/');
      break;
    case 'X':
      this.operacao('X');
      break;
    case '-':
      this.operacao('-');
      break;
    case '+':
      this.operacao('+');
      break;
    case 'rz':
      this.operacao('rz');
      break;
    case '=':
      if (this.valor1 !== null && this.operador !== null) {
        this.calculando();
        this.valor1 = null;
      }
      this.operador = null;
      break;
    case '0':
      this.numeros('0');
      break;
    case '1':
      this.numeros('1');
      break;
    case '2':
      this.numeros('2');
      break;
    case '3':
      this.numeros('3');
      break;
    case '4':
      this.numeros('4');
      break;
    case '5':
      this.numeros('5');
      break;
    case '6':
      this.numeros('6');
      break;
    case '7':
      this.numeros('7');
      break;
    case '8':
      this.numeros('8');
      break;
    case '9':
      this.numeros('9');
      break;
    case ',':
      this.virgulas();
      break;
  }
}
virgulas() {
  if (this.virgula == false) {
    this.virgula = true;
  } else {
    this.virgula = false;
  }
}
numeros(parame: string) {
  if (parame == '0') {
    if (this.numNovo == true) {
      this.visor = parame;
      this.numNovo = false;
    } else if (this.visor !== '0') {
      if (this.virgula == true) {
        this.visor = `${this.visor.toString()}.${parame}`;
      } else {
        this.visor = this.visor.toString() + parame;
      }
    } else if (this.visor == '0') {
      if (this.virgula == true) {
        this.visor = `${this.visor.toString()}.${parame}`;
      }
    }
  } else {
    if (this.numNovo == true) {
      this.visor = parame;
      this.numNovo = false;
    } else if (this.visor == '0') {
      if (this.virgula == true) {
        if (this.visor.toString().indexOf('.') > -1) {
          this.visor = this.visor.toString() + parame;
        } else {
          this.visor = `${this.visor.toString()}.${parame}`;
        }
      } else {
        this.visor = parame;
      }
    } else {
      if (this.virgula == true) {
        if (this.visor.toString().indexOf('.') > -1) {
          this.visor = this.visor.toString() + parame;
        } else {
          this.visor = `${this.visor.toString()}.${parame}`;
        }
      } else {
        this.visor = this.visor.toString() + parame;
      }
    }
  }
}
operacao(op: string) {
  if (this.numNovo == false) {
    if (this.valor1 == null) {
      if (this.virgula == true) {
        this.valor1 = parseFloat(this.visor);
      } else {
        this.valor1 = parseInt(this.visor, 0);
      }
    }
    if (this.valor1 !== null && this.operador !== null) {
      this.calculando();
    }
  }
  this.virgula = false;
  this.operador = op;
  this.numNovo = true;
}
calculando() {
    switch (this.operador) {
      case '/':
        if (this.virgula == true) {
          this.valor1 = (this.valor1 / parseFloat(this.visor));
        } else {
          this.valor1 = (this.valor1 / parseInt(this.visor, 0));
        }
        break;
      case 'X':
        if (this.virgula == true) {
          this.valor1 = (this.valor1 * parseFloat(this.visor));
        } else {
          this.valor1 = (this.valor1 * parseInt(this.visor, 0));
        }
        break;
      case '-':
        if (this.virgula == true) {
          this.valor1 = (this.valor1 - parseFloat(this.visor));
        } else {
          this.valor1 = (this.valor1 - parseInt(this.visor, 0));
        }
        break;
      case '+':
        if (this.virgula == true) {
          this.valor1 = (this.valor1 + parseFloat(this.visor));
        } else {
          this.valor1 = (this.valor1 + parseInt(this.visor, 0));
        }
        break;
      case '%':
        if (this.virgula == true) {
          this.valor1 = ((this.valor1/100) * parseFloat(this.visor));
        } else {
          this.valor1 = ((this.valor1/100) * parseInt(this.visor, 0));
        }
        break;
      case 'rz':
        if (this.virgula == true) {
          this.valor1 = ((Math.pow(this.valor1,0.5)));
        } else {
          this.valor1 = ((Math.pow(this.valor1, 0.5)));
        }
        break;
      case 'ce':
          this.valor1 = parseFloat(this.visor.substring(0, this.visor.length - 1));
        break;
    }
    this.visor = this.valor1.toString();
  }
}

