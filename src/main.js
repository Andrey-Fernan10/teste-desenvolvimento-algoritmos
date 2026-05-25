import readline from 'readline-sync';

// =================================================================
// DESAFIO: TOTEM MEGALODON
// Escreva seu algoritmo de validação e regras de negócio abaixo.
// =================================================================
// EXEMPLO DE ENTRADA:
// O readline.question() lê o que o usuário digita como TEXTO (String)
function iniciarTotem() {
    console.log("=== BEM-VINDO AO TECHPARK ===");
    console.log("Iniciando o sistema da Montanha-Russa MegaloDon...\n");

    let nome = readline.question("Digite o nome do cliente: ");

    // 1. FAÇA AQUI A VALIDAÇÃO DO NOME (Se está vazio)

    if (nome == "") {
        console.log("[ERRO] O nome do cliente não pode estar vazio!");
        return;
    } else {
        console.log("Nome do cliente: " + nome);
    }
    // =============================================================
    // DICA PARA OS PRÓXIMOS PASSOS:
    // Para ler números inteiros, use: readline.questionInt()
    // Para ler números decimais (altura), use: readline.questionFloat()
    // =============================================================

    // 2. DIGITE ABAIXO A ENTRADA E VALIDAÇÃO DA IDADE
    let idade = readline.questionInt("Digite a sua idade: ");

    if (idade <= 0 || idade > 120) {
        console.log("[ERRO] Idade inválida! Digite um valor entre 1 e 120.");
        return;
    } else {
        console.log("Idade do cliente: " + idade);
    }

    // 3. DIGITE ABAIXO A ENTRADA E VALIDAÇÃO DA ALTURA
    let altura = readline.questionFloat("Digite a sua altura (ex: 1.70): ");

    if (altura < 0.50 || altura > 2.50) {
        console.log("[ERRO] Altura inválida! A altura deve estar entre 0.50m e 2.50m.");
        return;
    } else {
        console.log("Altura do cliente: " + altura);
    }

    console.log("Olá, " + nome + "! Cadastro validado com sucesso."
    );

    // 4. DIGITE ABAIXO AS REGRAS DE NEGÓCIO (SE / SENÃO) DELINEADAS NO GUIA
    if (altura >= 1.50 && idade >= 12) {
        console.log("[ACESSO PERMITIDO] Divirta-se na MegaloDon!");
    } 
    else if (altura >= 1.50 && idade < 12) {
        console.log("[ACESSO NEGADO] - " + nome + ", você possui a altura necessária, mas não atingiu a idade mínima de 12 anos.");
    } 
    else if (idade >= 12 && altura < 1.50) {
        console.log("[ACESSO NEGADO] - " + nome + ", você possui a idade necessária, mas não atingiu a altura mínima de 1.50m.");
    } 
    else if (idade < 12 && altura < 1.50) {
        console.log("[ACESSO NEGADO] - " + nome + ", o acesso foi recusado porque você não possui a idade mínima (12 anos) e nem a altura mínima (1.50m).");
    }
}

// Executa o sistema do totem
iniciarTotem();