# Checklist do Projeto — HabitFlow

## 0. Setup inicial
- [ ] Criar repositório (backend e frontend separados ou monorepo)
- [ ] Configurar MongoDB (Atlas ou Docker)
- [ ] Criar `.env` e `.env.example` no backend
- [ ] Instalar dependências base (express, mongoose, bcrypt, jsonwebtoken, dotenv)

## 1. Fatia: Autenticação
- [ ] Model `User`
- [ ] Model `RefreshToken`
- [ ] Service de auth (registro, login, hash de senha)
- [ ] Controller de auth
- [ ] Rotas de auth (`/register`, `/login`, `/refresh`, talvez `/logout`)
- [ ] Middleware de autenticação (verificar JWT)
- [ ] Testar tudo isso no Postman/Insomnia antes de seguir

## 2. Fatia: Habit (CRUD)
- [ ] Model `Habit`
- [ ] Controller de habit (criar, listar, buscar por id, editar, arquivar/deletar)
- [ ] Rotas de habit (protegidas pelo middleware de auth)
- [ ] Validação de dados de entrada (título obrigatório, frequência válida, etc.)
- [ ] Testar no Postman: criar hábito, listar só os do usuário logado, tentar acessar hábito de outro usuário (deve bloquear)

## 3. Fatia: CheckIn
- [ ] Model `CheckIn` (com índice único `habitId + date`)
- [ ] Controller de check-in (criar, listar por hábito, talvez editar/remover)
- [ ] Rotas de check-in
- [ ] Testar: check-in duplicado no mesmo dia deve dar erro

## 4. Fatia: Streak
- [ ] Função `isDayScheduled` / `getPreviousScheduledDate`
- [ ] Lógica incremental de streak (ao criar check-in novo)
- [ ] Lógica de recálculo completo (pra check-ins retroativos)
- [ ] Testar com hábitos diários e com dias específicos (ex: seg/qua/sex)

## 5. Frontend — Auth
- [ ] Estrutura de pastas do React
- [ ] Páginas de login/registro
- [ ] `AuthContext` pra guardar usuário logado
- [ ] Service (`api.js`) configurado com axios/fetch + envio do token
- [ ] Rotas protegidas no frontend (redirecionar se não estiver logado)

## 6. Frontend — Habits
- [ ] `HabitList` + `HabitCard`
- [ ] Formulário de criar/editar hábito
- [ ] Hook `useHabits` consumindo a API

## 7. Frontend — CheckIn e Dashboard
- [ ] Botão/ação de marcar check-in no `HabitCard`
- [ ] Exibir streak atual/melhor streak
- [ ] Gráfico ou heatmap de progresso

## 8. Polimento
- [ ] Tratamento de erros consistente (backend e frontend)
- [ ] Loading states / feedback visual
- [ ] Responsividade básica
- [ ] README com descrição, prints, instruções de instalação, e a menção sobre uso de IA no processo

## 9. Deploy
- [ ] Backend (Render/Railway)
- [ ] Frontend (Vercel)
- [ ] Testar tudo em produção com o banco do Atlas