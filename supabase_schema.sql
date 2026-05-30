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

-- Função de segurança (RPC) para ler um único pedido por ID sem precisar de RLS de listagem pública
create or replace function public.get_order_by_id(order_id uuid)
returns setof public.orders
language sql
security definer
set search_path = public
as $$
  select * from public.orders where id = order_id;
$$;


-- Garantir que as novas colunas existam caso a tabela já tenha sido criada anteriormente
alter table public.orders add column if not exists customer_name text;
alter table public.orders add column if not exists speak_name text;
alter table public.orders add column if not exists vibes text;
alter table public.orders add column if not exists user_id uuid default auth.uid() references auth.users(id);

-- Habilitar Row Level Security (RLS) para segurança
alter table public.orders enable row level security;

-- Remover políticas se já existirem (para evitar erros ao rodar o script novamente)
drop policy if exists "Permitir inserções públicas" on public.orders;
drop policy if exists "Permitir leitura pública por ID" on public.orders;
drop policy if exists "Permitir atualizações públicas" on public.orders;
drop policy if exists "Permitir leitura para o dono do pedido" on public.orders;
drop policy if exists "Permitir leitura completa para administradores" on public.orders;
drop policy if exists "Permitir atualizações para o dono do pedido" on public.orders;
drop policy if exists "Permitir atualizações completas para administradores" on public.orders;
drop policy if exists "Permitir exclusão apenas para administradores" on public.orders;

-- 1. Política de Inserção: Qualquer cliente (anônimo ou logado) pode criar pedidos
create policy "Permitir inserções públicas" 
on public.orders 
for insert 
with check (true);

-- 2. Políticas de Leitura (SELECT)
-- 2a. O dono do pedido pode ler seus próprios registros
create policy "Permitir leitura para o dono do pedido" 
on public.orders 
for select 
using (auth.uid() = user_id);

-- 2b. Administradores da AudioGift podem ler todos os registros
create policy "Permitir leitura completa para administradores" 
on public.orders 
for select 
using (
  auth.role() = 'authenticated' AND 
  (auth.jwt() ->> 'email' = 'admin@audiogift.com.br' OR auth.jwt() ->> 'email' LIKE '%@audiogift.com.br')
);

-- 3. Políticas de Atualização (UPDATE)
-- 3a. O dono do pedido pode atualizar seus próprios registros (ex: efetuar pagamento simulação)
create policy "Permitir atualizações para o dono do pedido" 
on public.orders 
for update 
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- 3b. Administradores podem atualizar qualquer registro (ex: adicionar letra, audio_url)
create policy "Permitir atualizações completas para administradores" 
on public.orders 
for update 
using (
  auth.role() = 'authenticated' AND 
  (auth.jwt() ->> 'email' = 'admin@audiogift.com.br' OR auth.jwt() ->> 'email' LIKE '%@audiogift.com.br')
);

-- 4. Política de Exclusão (DELETE)
-- Apenas administradores podem excluir registros do banco de dados
create policy "Permitir exclusão apenas para administradores" 
on public.orders 
for delete 
using (
  auth.role() = 'authenticated' AND 
  (auth.jwt() ->> 'email' = 'admin@audiogift.com.br' OR auth.jwt() ->> 'email' LIKE '%@audiogift.com.br')
);

