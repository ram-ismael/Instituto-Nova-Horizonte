# Instituto Nova Horizonte

### Uma presença digital à altura da sua instituição.

Website institucional responsivo para apresentar a oferta formativa, comunicar a identidade da instituição e orientar futuros estudantes até às informações de candidatura.

**[Ver demonstração online](https://ram-ismael.github.io/Instituto-Nova-Horizonte/)** · **[Explorar o código](https://github.com/ram-ismael/Instituto-Nova-Horizonte)**

---

## Do primeiro contacto à escolha de um curso

Uma instituição de ensino precisa de comunicar com clareza: o que oferece, como ensina e como começar.

O Instituto Nova Horizonte reúne essas informações numa experiência organizada, com navegação intuitiva, identidade visual consistente e acesso adaptado a computadores, tablets e telemóveis.

Uma base personalizável para escolas, institutos técnicos, centros de formação e projectos educacionais.

## Valor para a instituição

- **Apresentação profissional:** identidade visual coesa para comunicar a proposta educativa.
- **Descoberta de cursos:** oferta formativa organizada e filtrável por categoria.
- **Percurso de candidatura claro:** chamadas para acção e informações de admissão em pontos estratégicos.
- **Informação centralizada:** cursos, contactos, eventos e perguntas frequentes num único endereço.
- **Operação simples:** arquitectura estática, sem servidor de aplicação ou base de dados para administrar.
- **Evolução gradual:** estrutura que pode ser adaptada e posteriormente integrada com serviços externos.

## Experiência incluída

| Área | Funcionalidades |
|---|---|
| Apresentação institucional | Destaque principal, missão, visão, valores e metodologia |
| Oferta formativa | Catálogo de cursos com filtros interactivos |
| Admissões | Orientações e chamadas para candidatura |
| Comunidade académica | Vida estudantil e perfis demonstrativos de docentes |
| Comunicação | Notícias, eventos e contactos |
| Apoio ao visitante | Perguntas frequentes com expansão de respostas |
| Navegação | Menu móvel, ligações entre secções e transições visuais |

## Arquitectura técnica

O projecto utiliza **HTML, CSS e JavaScript nativos**, sem framework de interface, backend ou etapa de compilação.

Os ficheiros são executados directamente no navegador. As interacções acontecem no cliente, enquanto a publicação online é automatizada pelo GitHub Actions.

    Alterações no código
            │
            ▼
      Push para main
            │
            ▼
       GitHub Actions
            │
            ▼
    Publicação da pasta dist/
            │
            ▼
        GitHub Pages

### Stack

| Tecnologia | Responsabilidade |
|---|---|
| HTML5 | Estrutura semântica e conteúdo institucional |
| CSS3 | Layout responsivo, identidade visual e animações |
| JavaScript | Filtros, menu móvel, FAQ e contadores |
| Intersection Observer | Activação de elementos ao entrarem na área visível |
| GitHub Actions | Automatização da publicação |
| GitHub Pages | Disponibilização pública dos ficheiros estáticos |

### Decisões de implementação

- **APIs nativas do navegador:** interacções implementadas sem bibliotecas JavaScript externas.
- **Conteúdo no HTML:** estrutura e textos principais definidos directamente na página.
- **Caminhos relativos:** compatibilidade com abertura local e publicação num subdirectório do GitHub Pages.
- **Separação de responsabilidades:** estrutura, apresentação e comportamento em ficheiros distintos.
- **Controlos com estado acessível:** menu e FAQ utilizam atributos como `aria-expanded`.
- **Metadados básicos:** título, descrição, idioma e favicon configurados.

## Estrutura do repositório

    Instituto-Nova-Horizonte/
    ├── .github/workflows/
    │   └── pages.yml          # Workflow de publicação
    ├── dist/
    │   ├── assets/            # Imagens, logótipos e ícones
    │   ├── index.html         # Estrutura e conteúdo
    │   ├── styles.css         # Estilos e responsividade
    │   └── script.js          # Comportamento da interface
    ├── DESIGN-SYSTEM.md       # Documentação visual
    ├── LICENSE
    └── README.md

> A pasta `dist/` contém os ficheiros editáveis e publicáveis do website. Neste projecto, não é gerada por um processo de build.

## Executar o projecto

Basta um navegador moderno. Não é necessário instalar dependências, configurar um backend ou compilar o código.

1. Descarregue o repositório através de **Code → Download ZIP** e extraia os ficheiros, ou clone com Git:

       git clone https://github.com/ram-ismael/Instituto-Nova-Horizonte.git

2. Abra a pasta do projecto.

3. Abra o ficheiro **`dist/index.html`** no navegador.

Para desenvolver com actualização automática da página, pode utilizar opcionalmente a extensão **Live Server** no VS Code.

## Personalização e entrega

A base pode ser adaptada à identidade e à oferta educativa de cada instituição:

| Necessidade | Local de alteração |
|---|---|
| Nome, textos, cursos e contactos | `dist/index.html` |
| Cores, tipografia e layout | `dist/styles.css` |
| Filtros, animações e interacções | `dist/script.js` |
| Fotografias, marca e ícones | `dist/assets/` |
| Processo de publicação | `.github/workflows/pages.yml` |

Antes de uma utilização institucional, devem ser substituídos os conteúdos demonstrativos e definidos os destinos reais das candidaturas e do portal académico.

## Publicação

A publicação é executada automaticamente a cada push para `main`.

O workflow envia a pasta `dist/` para o GitHub Pages. Também pode ser iniciado manualmente na secção **Actions**.

**[Aceder ao website publicado](https://ram-ismael.github.io/Instituto-Nova-Horizonte/)**

## Possibilidades de evolução

A arquitectura permite acrescentar integrações conforme as necessidades do projecto:

- Formulário de candidatura com envio e armazenamento.
- Gestão editorial através de um CMS.
- Catálogo de cursos alimentado por uma API.
- Integração com uma plataforma de gestão académica.
- Versões em vários idiomas.
- Métricas de utilização e acompanhamento de candidaturas.

Estas funcionalidades representam possíveis desenvolvimentos adicionais e **não estão implementadas nesta versão**.

## Âmbito da demonstração

Esta versão demonstra a apresentação institucional e as interacções do website.

Os dados, indicadores, perfis e eventos são ilustrativos. Não inclui backend, autenticação, processamento de candidaturas, pagamentos ou portal académico funcional.

## Desenvolvimento

**[Ramadan Ismael](https://github.com/ram-ismael)**  
Design e desenvolvimento de experiências digitais.

## Licença

Disponibilizado sob a [licença MIT](LICENSE).
