// passo 1 
   
    class Aluno {
        constructor(nome,faltas,notas){
        this.nome = nome;
        this.faltas = faltas;
        this.notas = notas;
    }

    


   calcularMedia(){
        let soma = 0
        this.notas.forEach(nota => {
            soma += nota
        });
        return soma / this.notas.length
    } 
    faltas(){
        return this.faltas += 1
    }
    
}
   let curso = {
    nome: 'peterson',
    nota: 5,
    qtmaxfaltas:5,
    listEstud:[],

    addAluno(nome,qtmaxfaltas,notas){
        this.listEstud.push(new Aluno(nome,qtmaxfaltas,notas))
    },
     mediaFinal(aluno){
       let media = aluno.medias()
        if (media >= this.nota && aluno.faltas < this.qtmaxfaltas){
            return true
        }else if(aluno.faltas === this.qtmaxfaltas && media >= this.nota*1.1){
            return true 
            
        }else return false
       
},
   alunosAprovado(){
    this.listEstud.map((aluno) => this.mediaFinal(aluno))
   }
   }
   
   curso.addAluno('deyse',2,[3, 4, 5]);
    curso.addAluno('taciano',2,[4, 7, 6]);
       const aluno1 = curso.addAluno('maria',2,[5, 4, 5])

        console.log(curso.listEstud)
        console.log( curso.mediaFinal(aluno1))