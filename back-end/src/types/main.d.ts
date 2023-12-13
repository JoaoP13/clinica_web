/* eslint-disable no-unused-vars */
/// <reference path="./database.d.ts" />

declare interface CreatePessoa {
    nome: string;
    email: string;
    data_nascimento: Date;
    senha: string;
    telefone: string;
    cpf: string;
}

declare interface CreateProntuario {
    anamnese: string;
    medicamentosAdministrados: string;
    pressaoArterial: number;
    glicemia: number;
    peso: number;
    altura: number;
}
