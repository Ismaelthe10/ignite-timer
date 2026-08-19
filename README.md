# Ignite Timer

Timer Pomodoro em React com TypeScript, construído durante a trilha Ignite da Rocketseat.

## Sobre

O usuário informa a tarefa e a duração em minutos, o ciclo roda, e o histórico registra cada ciclo como concluído, interrompido ou em andamento.

O foco do projeto é gerenciamento de estado. Em vez de espalhar `useState`, todo o ciclo de vida dos timers passa por um `useReducer` com ações isoladas, exposto à árvore de componentes por Context.

## Decisões técnicas

- **useReducer + Context API** — criar, interromper e concluir ciclo vivem em um único reducer; os componentes despacham ações e não conhecem a estrutura do estado
- **Immer** — o reducer usa `produce`, então as atualizações são escritas de forma direta (`draft.cycles.push(...)`) sem abrir mão da imutabilidade
- **Persistência com reidratação** — o estado é salvo no `localStorage` a cada mudança e restaurado pelo inicializador do `useReducer`
- **Tempo recalculado, não contado** — os segundos decorridos vêm de `differenceInSeconds` entre agora e a data de início do ciclo, então o timer continua correto mesmo depois de um refresh no meio do ciclo
- **React Hook Form + Zod** — validação do formulário com o tipo derivado do schema
- **styled-components** com tema tipado

## Stack

React 18 · TypeScript 5 · Vite 4 · styled-components · React Hook Form · Zod · Immer · date-fns · React Router · Phosphor Icons · ESLint

## Como rodar

```bash
git clone https://github.com/Ismaelthe10/ignite-timer.git
cd ignite-timer
npm install
npm run dev
```

A aplicação roda em `http://localhost:5173`.
#ignite-timer
learning React
<!-- 
Aplicação de pomodoro utilizando React

Typescript
styled components
react hook form
react router dom
context API
imutabilidade

 -->
