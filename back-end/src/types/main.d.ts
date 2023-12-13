/* eslint-disable no-unused-vars */
/// <reference path="./database.d.ts" />

//Create Objects
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

declare interface CreateEndereco{
    logradouro: string;
    complemento: string;
    bairro: number;
    cidade: number;
    estado: number;
    nomeEndereco: number;
}

declare interface CreateEspecialidade{
    nome: string;
    valorConsulta: number;
    percentualMedico: number;
}

//ListObjects by Filters

declare interface ListEnderecoPosssibleFilters{
    logradouro?: string;
    complemento?: string;
    bairro?: number;
    cidade?: number;
    estado?: number;
    nomeEndereco?: number;
}

declare interface ListEspecialidadePosssibleFilters{
    nome?: string;
    valorConsulta?: number;
    percentualMedico?: number;
}