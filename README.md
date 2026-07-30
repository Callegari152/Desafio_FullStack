# Desafio_FullStack

Desafio: Plataforma de Gestão de Hábitos e Metas ("HabitFlow").
Obs: O desafio a seguir foi criado utilizando 

Um sistema onde usuários criam hábitos/metas, fazem check-in diário, acompanham progresso e recebem estatísticas.

## Sobre o projeto
Este projeto foi desenvolvido como parte do meu portfólio pessoal, 
com o objetivo de praticar desenvolvimento full-stack (Node.js, 
MongoDB, React) e sistemas de autenticação. A definição do escopo 
contou com apoio de IA (Claude) para brainstorm inicial e algumas 
dúvidas ao longo do caminho; a implementação, 
decisões técnicas e código foram feitos por mim.

Este arquivo mostra as especificações do projeto, como também mostram o progresso atual realizado.

## Autenticação

* Cadastro/login com e-mail e senha (hash com bcrypt)
* JWT com access token + refresh token
* Login social (Google OAuth) — opcional, mas valoriza muito
* Recuperação de senha por e-mail
* Middleware de rotas protegidas

## Core da aplicação

* CRUD de hábitos (nome, frequência: diário/semanal/dias específicos, categoria)
* Check-in diário (marcar como feito/não feito)
* Cálculo de streak (sequência de dias consecutivos)
* Dashboard com gráficos (progresso semanal/mensal — heatmap estilo GitHub é um toque bonito)
* Sistema de categorias/tags
* Notificações/lembretes (pode ser só in-app, ou e-mail com um cron job)

## Funcionalidades Extras

* Modo escuro/claro
* Exportar dados (CSV/PDF)
* Compartilhar progresso (link público read-only de um hábito)
* Paginação e busca/filtros na listagem
* Stack sugerida (mas adapte à sua preferência)

## Backend

* Node.js + Express ou Fastify (ou Python/FastAPI se preferir)
* PostgreSQL (dados relacionais fazem sentido aqui) com Prisma ou Drizzle ORM
* Redis pra cache/sessões (opcional, mas mostra conhecimento extra)

## Frontend

* React (ou Next.js, que já resolve SSR/rotas)
* TailwindCSS
* React Query/TanStack Query pra cache de requisições
* Recharts ou Chart.js pros gráficos

## Infra/Deploy

* Docker + docker-compose (backend, frontend, banco)
* Deploy: backend no Render/Railway, frontend na Vercel, banco no Neon/Supabase
* CI básico com GitHub Actions (lint + testes rodando a cada push)
