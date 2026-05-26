-- Script de criação de tabelas para o AudioGift
-- Execute este script no editor SQL do seu projeto Supabase

-- Habilitar a extensão UUID se não estiver habilitada
create extension if not exists "uuid-ossp";

-- Criar tabela de pedidos (orders)
create table if not exists public.orders (
    id uuid default uuid_generate_v4() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    
    -- Dados de Contato do Cliente
    customer_name text,
    customer_email text not null,
    customer_phone text,
    whatsapp_followup boolean default true,
    
    -- Respostas do Quiz
    for_who text,
    occasion text,
    recipient_name text,
    speak_name text,
    genre text,
    voice text,
    vibes text,
    feelings text,
    story text,
    message text,
    baby_name text,
    
    -- Plano e Pagamento
    plan text not null default 'memoravel',
    status text not null default 'pendente', -- pendente, pago, em_producao, concluido
    payment_method text, -- pix, credit_card
    amount numeric(10, 2),
    
    -- Outputs do Agente de IA e Produção
    generated_lyrics text,
    generated_prompt text,
    audio_url text
);

-- Garantir que as novas colunas existam caso a tabela já tenha sido criada anteriormente
alter table public.orders add column if not exists customer_name text;
alter table public.orders add column if not exists speak_name text;
alter table public.orders add column if not exists vibes text;

-- Habilitar Row Level Security (RLS) para segurança opcional
alter table public.orders enable row level security;

-- Remover políticas se já existirem (para evitar erros ao rodar o script novamente)
drop policy if exists "Permitir inserções públicas" on public.orders;
drop policy if exists "Permitir leitura pública por ID" on public.orders;
drop policy if exists "Permitir atualizações públicas" on public.orders;

-- Política 1: Permitir que qualquer pessoa crie um pedido (Anonymous Insert)
create policy "Permitir inserções públicas" 
on public.orders 
for insert 
with check (true);

-- Política 2: Permitir que qualquer pessoa leia seu próprio pedido por ID (Anonymous Select by ID)
create policy "Permitir leitura pública por ID" 
on public.orders 
for select 
using (true);

-- Política 3: Permitir que administradores (ou chaves de serviço) façam update e deletem
create policy "Permitir atualizações públicas" 
on public.orders 
for update 
using (true);
