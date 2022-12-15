// exercicios do checkpoint 3 DH 
   
    class Aluno {
        constructor(nome,faltas,notas){
        this.nome = nome;
        this.faltas = faltas;
        this.notas = notas;
    }

   calcularMedia(){
        let soma = 0;
        this.notas.forEach((nota )=> {
            soma += nota;
        });
        return soma / this.notas.length;
    } 
    adicionarFaltas(){
        return (this.faltas += 1);
    }
    
}
const aluno1 = new Aluno('Maria', 1, [3, 4, 5]);
const aluno2 = new Aluno('José', 2, [7, 5, 5]);
console.log(aluno1.calcularMedia());
aluno2.adicionarFaltas();
console.log(aluno2);

   let curso = {
    nome: 'javascript',
    nota: 5,
    qtmaxfaltas:5,
    listEstud:[],

    addAluno(nome,qtmaxfaltas,notas){
        this.listEstud.push(new Aluno(nome,qtmaxfaltas,notas));
    },
     mediaFinal(aluno){
       let media = aluno.calcularMedia();
        if (media >= this.nota && aluno.faltas < this.qtmaxfaltas){
            return true;

        }else if(aluno.faltas === this.qtmaxfaltas && media >= this.nota * 1.1){
            return true ;
            
        }else return false;
       
},
   alunosAprovado(){
    return this.listEstud.map((aluno) => this.mediaFinal(aluno));
   }
   }
   
   curso.addAluno('deyse',2,[3, 4, 5]);
    curso.addAluno('taciano',2,[4, 7, 6]);
     curso.addAluno('maria',2,[5, 4, 5]);
     curso.addAluno('adilson',2,[7, 8, 5]);
     curso.addAluno('bianca',2,[5, 4, 5]);



        console.log(curso.listEstud);
        console.log( curso.alunosAprovado());