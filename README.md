# 💈 Barbearia Corte Turbo JF

Site institucional da Barbearia Corte Turbo JF — reconstruído em **React + TypeScript + Tailwind CSS**, com modo claro/escuro, formulários que enviam e-mail de verdade e imagens otimizadas.

Este projeto é uma evolução da versão original em HTML/CSS/JS puro: mesma identidade (barbearia, fotos, serviços), com código organizado em componentes, design revisado e funcionalidades novas.

## 🚀 Tecnologias

- **React 19 + TypeScript** — componentes organizados em `src/components`
- **Vite** — build rápido, com hot reload em dev
- **Tailwind CSS** — design system com tokens de cor/tipografia em `tailwind.config.js`
- **EmailJS** — envio real de e-mail pelos formulários de agendamento e contato, sem precisar de backend
- Imagens convertidas para **.webp** e redimensionadas (o pacote de imagens caiu de ~5,5 MB para ~250 KB)

## 📂 Estrutura

```
src/
├── components/       # Header, Hero, About, Services, Pricing, Gallery, Team, Booking, Contact, Footer...
├── hooks/            # useTheme (modo escuro), useReveal (animação ao rolar)
├── lib/emailjs.ts    # integração de envio de e-mail
├── assets/images/    # imagens otimizadas em .webp
├── index.css         # tokens de design (cores, tipografia) e classes utilitárias
└── App.tsx
```

## 🖥️ Como rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build   # gera a pasta dist/, pronta para publicar em qualquer hospedagem estática
npm run preview # visualiza o build de produção localmente
```

Pode publicar a pasta `dist/` em Vercel, Netlify, GitHub Pages ou qualquer hospedagem de arquivos estáticos.

## ✉️ Como ativar o envio real de e-mail (EmailJS)

Os formulários de **agendamento** e **contato** já estão prontos para enviar e-mail de verdade usando o [EmailJS](https://www.emailjs.com/) — um serviço gratuito (até 200 e-mails/mês no plano free) que dispensa servidor próprio. Enquanto não configurar, o site continua funcionando normalmente, só mostra um aviso e não envia.

**Passo a passo (uns 5 minutos):**

1. Crie uma conta gratuita em https://www.emailjs.com/
2. Em **Email Services**, conecte seu e-mail (Gmail, Outlook, etc.) e anote o **Service ID**.
3. Em **Email Templates**, crie dois templates:
   - Um para **agendamento**, usando as variáveis: `{{nome}}`, `{{email}}`, `{{telefone}}`, `{{servico}}`, `{{data_agendamento}}`, `{{horario}}`
   - Um para **contato**, usando: `{{nome}}`, `{{email}}`, `{{mensagem}}`
   - Anote o **Template ID** de cada um.
4. Em **Account → General**, copie sua **Public Key**.
5. Copie o arquivo `.env.example` para `.env` e preencha:

```bash
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_BOOKING_TEMPLATE_ID=id_do_template_de_agendamento
VITE_EMAILJS_CONTACT_TEMPLATE_ID=id_do_template_de_contato
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

6. Reinicie o `npm run dev`. Pronto — os formulários passam a enviar e-mail de verdade.

> Se for publicar o site (Vercel/Netlify), configure essas mesmas variáveis de ambiente no painel da hospedagem.

## 🎨 Design

- **Paleta**: carvão `#0F0D0C`, marfim `#F5EDE1`, latão `#B8862E`, vinho `#7A2331`
- **Tipografia**: `Fraunces` (display, títulos) + `Work Sans` (texto e rótulos)
- **Modo escuro**: alternável pelo botão no menu, com preferência salva no navegador
- **Animações**: elementos aparecem suavemente ao rolar a página (respeitando `prefers-reduced-motion`)
- Elemento de assinatura: a faixa diagonal (vermelho/marfim/dourado) que remete ao poste de barbearia, usada uma única vez como divisor entre o topo e o restante da página

## ✅ O que mudou em relação à versão original

- Migração de HTML/CSS/JS estático para React + TypeScript componentizado
- Design revisado do zero (paleta, tipografia, layout) em vez do template genérico anterior
- Textos reais no lugar de "Lorem ipsum"
- Tabela de preços com itens e valores distintos (antes todos os itens eram iguais)
- Formulários de agendamento e contato funcionando de verdade via EmailJS
- Imagens otimizadas (.webp, redimensionadas) — carregamento bem mais rápido
- Modo escuro/claro
- Acessibilidade: skip link, foco visível no teclado, `aria-live` nos formulários, `prefers-reduced-motion` respeitado
- Meta tags de SEO básicas (descrição, título, favicon)

## 👨‍💻 Desenvolvedor original

Projeto original por **Geraldo Luiz** — [Portfólio](https://portfolio-geeh.netlify.app/)
