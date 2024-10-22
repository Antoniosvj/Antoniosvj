
const details = document.getElementById('details-skill');
const text = document.createElement('p');
details.appendChild(text);

function changeClass (){
    if(details.className === 'display-block'){
        details.className = 'display-none';
    } else {
        details.className = 'display-block';
    };
}

function htmlClick(){
    text.innerHTML = `<strong>HTML5</strong> é a versão mais recente da linguagem de marcação para a web. Introduz novos elementos semânticos, como article, section, e suporte embutido para multimídia, como vídeo e áudio, melhorando a estruturação e acessibilidade do conteúdo web.`;
    changeClass();
}

function cssClick(){
    text.innerHTML = `<strong>CSS</strong> é utilizado para estilizar e dar aparência às páginas web. CSS define cores, fontes, espaçamentos, layouts e oferece funcionalidades como media queries, permitindo a criação de designs responsivos que se adaptam a diferentes tamanhos de tela.`;
    changeClass();
}

function javaScriptClick (){
    text.innerHTML = `<strong>JavaScript</strong> é uma linguagem de programação dinâmica, essencial para a web moderna. Permite criar funcionalidades interativas, como validação de formulários, animações, requisições assíncronas (AJAX), e manipulação do DOM, tornando páginas mais responsivas.`;
    changeClass();
}

function gitClick(){
    text.innerHTML = `<strong>Git</strong> é um sistema de controle de versão distribuído que facilita o rastreamento de mudanças no código e colaboração em equipe. Com o Git, desenvolvedores podem criar "branches", trabalhar em diferentes partes do projeto simultaneamente e integrar mudanças facilmente.`;
    changeClass();
}

function githubClick(){
    text.innerHTML = `<strong>GitHub</strong> é uma plataforma baseada na nuvem que hospeda repositórios Git, oferecendo ferramentas para colaboração em equipe, revisão de código e integração contínua. GitHub também facilita o versionamento e a gestão de projetos de código aberto.`;
    changeClass();
}

function mysqlClick(){
    text.innerHTML = `<strong>MySQL</strong> é um sistema de gerenciamento de banco de dados relacional (RDBMS) popular, usado para armazenar e recuperar dados. MySQL é amplamente adotado em aplicações web devido à sua eficiência, escalabilidade e facilidade de integração com outras tecnologias.`;
    changeClass();
}

function postgresqlClick(){
    text.innerHTML = `<strong>PostgreSQL</strong> é um banco de dados relacional avançado com suporte a extensões, tipos de dados personalizados e conformidade com padrões SQL. Conhecido por sua robustez, ele é ideal para aplicações que exigem alta integridade e processamento complexo de dados.`;
    changeClass();
}

function pythonClick(){
    text.innerHTML = `<strong>Python</strong> é uma linguagem de programação de propósito geral, conhecida por sua sintaxe clara e facilidade de aprendizado. É amplamente usada em automação, análise de dados, inteligência artificial, desenvolvimento web, e aplicativos científicos.`;
    changeClass();
}
function reactClick(){
    text.innerHTML = `<strong>React</strong> é uma biblioteca JavaScript desenvolvida pelo Facebook para criar interfaces de usuário interativas e baseadas em componentes. React utiliza um DOM virtual para melhorar o desempenho e permite o desenvolvimento de aplicações web de página única (SPAs) eficientes.`;
    changeClass();
}

document.getElementById('HTML5').addEventListener('click', htmlClick);
document.getElementById('CSS3').addEventListener('click', cssClick);
document.getElementById('javaScript').addEventListener('click', javaScriptClick);
document.getElementById('git').addEventListener('click', gitClick);
document.getElementById('github').addEventListener('click', githubClick);
document.getElementById('mysql').addEventListener('click', mysqlClick);
document.getElementById('postgresql').addEventListener('click', postgresqlClick);
document.getElementById('python').addEventListener('click', pythonClick);
document.getElementById('react').addEventListener('click', reactClick);

