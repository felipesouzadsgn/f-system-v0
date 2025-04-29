# F-Guide - Life & Project Navigator

Um dashboard pessoal para gerenciamento de vida e projetos, com tracking de atividades e organização por áreas.

## Estrutura do Projeto

```
f-system/
├── src/
│   ├── assets/         # Imagens e outros recursos
│   ├── styles/         # Arquivos CSS
│   │   └── main.css
│   ├── scripts/        # Arquivos JavaScript
│   │   └── main.js
│   ├── data/          # Dados mockados e configurações
│   │   └── activities.js
│   └── components/    # Componentes reutilizáveis (futuro)
├── index.html
└── README.md
```

## Funcionalidades

- Dashboard com visão geral de todas as áreas (F-House, F-Life, F-Works, F-Lab)
- Tracker de atividades estilo GitHub
- Lista de prioridades diárias
- Tracking de sequências de atividades
- Visualização de histórico de atividades
- Interface responsiva e moderna

## Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS para tema)
- JavaScript (ES6+)
- Font Awesome para ícones

## Como Executar

1. Clone o repositório
2. Abra o arquivo `index.html` em um servidor web local
   - Devido ao uso de módulos ES6, é necessário um servidor web
   - Você pode usar o Live Server do VS Code ou qualquer outro servidor local

## Desenvolvimento

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Próximos Passos

- [ ] Implementar sistema de autenticação
- [ ] Adicionar banco de dados para persistência
- [ ] Criar API para gerenciamento de atividades
- [ ] Adicionar mais visualizações e estatísticas
- [ ] Implementar sistema de metas e objetivos
- [ ] Adicionar notificações e lembretes # f-system-v0
