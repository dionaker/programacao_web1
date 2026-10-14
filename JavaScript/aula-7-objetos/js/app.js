/*

objetos armazenam os dados organizados ex:propriedade e valor

*/


let aluno = {
    nome:"carlos",
    idade: 20,
    curso: "desenvolvimento de sistemas"
} 

console.log(aluno.nome);

for(let chave in aluno){
    console.log(`${chave} : ${aluno[chave]}`);
}