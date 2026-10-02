

const translations = {
  pt: {

    "page.title": "O que é o Zenkai? — Guia do Portal",


    "nav.overview":  "Visão Geral",
    "nav.pages":     "Páginas",
    "nav.xp":        "XP & Ranks",
    "nav.guide":     "Como Cadastrar",


    "hero.title": "O que é o <span class=\"highlight\">Zenkai</span>?",
    "hero.sub":   "Uma plataforma pessoal para organizar, acompanhar e explorar animes, desenhos, filmes, mangás, HQs e vídeos.",
    "hero.tag1":  "Organizada",
    "hero.tag2":  "Privada",
    "hero.tag3":  "Local",
    "hero.tag4":  "Gamificada",
    "hero.cta":   "Explorar <i class=\"fa-solid fa-chevron-down\"></i>",


    "overview.title":       "Visão Geral",
    "overview.card1.title": "Para usuários autenticados",
    "overview.card1.desc":  "Acompanhe progresso, acumule XP, personalize o perfil, mantenha histórico e utilize ferramentas como a ZenkAI.",
    "overview.card2.title": "Para visitantes",
    "overview.card2.desc":  "Explore as vitrines e catálogos livremente. Para acessar reprodução, leitores, progresso, perfil, comunidade e jogos, é necessário entrar.",
    "overview.card3.title": "Projeto Acadêmico",
    "overview.card3.desc":  "O site Zenkai é um projeto público e pode ser acessado por qualquer pessoa. Aprenda a cadastrar manualmente no site.",


    "pages.title": "Páginas Principais",
    "pages.col1":  "Página",
    "pages.col2":  "Finalidade",
    "pages.row1":  "Portal inicial, atalhos e apresentação da plataforma",
    "pages.row2":  "Autenticação por e-mail, OTP e acesso à conta",
    "pages.row3":  "Dashboard de perfil, nível, XP, inventário, histórico e estatísticas",
    "pages.row4":  "Catálogos e detalhes de animes e desenhos",
    "pages.row5":  "Temporadas, episódios e acompanhamento de progresso",
    "pages.row6":  "Catálogo e player de filmes",
    "pages.row7":  "Playlists, vídeos e progresso do YouTube",
    "pages.row8":  "Organizador e leitor de mangás por volume",
    "pages.row9":  "Visualizador de HQs em PDF com anotações",
    "pages.row10": "SenseiMod Store e cosméticos",
    "pages.row11": "ZenkAI: chat, visão e comparador de personagens",
    "pages.row12": "Administração e cadastro de conteúdo",
    "pages.row13": "Comunidade, conexões e perfis de usuários",


    "xp.title":      "XP, Ranks & SenseiMod Store",
    "xp.desc":       "O XP é atribuído automaticamente às atividades concluídas. Na SenseiMod Store, ele pode ser convertido em fichas para adquirir cosméticos.",
    "xp.tableTitle": "XP por Atividade",
    "xp.col1":       "Atividade",
    "xp.col2":       "XP",
    "xp.act1":       "Episódio de anime assistido",
    "xp.act2":       "Episódio de desenho assistido",
    "xp.act3":       "Volume de mangá lido",
    "xp.act4":       "Edição de HQ lida",
    "xp.act5":       "Filme assistido",
    "xp.act6":       "Vídeo do YouTube assistido",
    "xp.storeTitle": "Fichas da Store",
    "xp.scol1":      "Ficha",
    "xp.scol2":      "Custo",
    "xp.scol3":      "Requisito",
    "xp.token1":     "Ouro",
    "xp.token2":     "Diamante",
    "xp.token3":     "Esmeralda",
    "xp.req1":       "Rank Prata",
    "xp.req2":       "Rank Mestre",
    "xp.req3":       "Rank Guardião",
    "xp.rankTitle":  "Progressão de Ranks",
    "xp.rank1": "Bronze", "xp.rank2": "Prata",    "xp.rank3": "Ouro",
    "xp.rank4": "Mestre", "xp.rank5": "Lenda",    "xp.rank6": "Hokage",
    "xp.rank7": "Guardião", "xp.rank8": "Imortal",


    "guide.title":         "Guia de Cadastro",
    "guide.desc":          "Manual para administradores responsáveis pela publicação de conteúdos no portal. Garante padrão visual, técnico e organizacional consistente.",
    "guide.structureTitle":"Estrutura de Conteúdo",
    "guide.ct1.name": "Desenhos",  "guide.ct1.desc": "Série por temporada",
    "guide.ct2.name": "Animes",    "guide.ct2.desc": "Série por temporada",
    "guide.ct3.name": "Filmes",    "guide.ct3.desc": "Conteúdo individual",
    "guide.ct4.name": "Mangás",    "guide.ct4.desc": "Múltiplos volumes",
    "guide.ct5.name": "HQs",       "guide.ct5.desc": "Múltiplas edições",
    "guide.ct6.name": "YouTube",   "guide.ct6.desc": "Vídeo via iframe",
    "guide.standardsTitle": "Padrões Gerais",
    "guide.std1": "Títulos padronizados e sem abreviações desnecessárias",
    "guide.std2": "Ortografia, acentuação e capitalização corretas",
    "guide.std3": "Categoria correta do conteúdo",
    "guide.std4": "Funcionamento de links, iframes e arquivos, além da verificação do <code>RCServer[numero-do-servidor]</code>",
    "guide.std5": "Consistência entre nome, capa e navegação",
    "guide.std6": "Ausência de itens duplicados",
    "guide.verify.title": "Verificação do código da obra",
    "guide.verify.desc": "Antes de publicar, confirme se o código da obra corresponde ao item correto. Filmes geralmente usam nome do título; animes, desenhos e séries exigem temporada e número do episódio.",
    "guide.verify.movie": "Filmes: confirme o nome do filme e o item exato da obra.",
    "guide.verify.series": "Animes, desenhos e séries: valide a temporada, o episódio e a correspondência com o conteúdo publicado.",
    "guide.verify.server": "No iframe, confira o trecho <code>server=RCServerXX</code> e o número do servidor para evitar inserir o item errado.",
    "guide.videoTitle": "Tutorial: Vídeos & YouTube",
    "guide.videoDesc":  "Aplica-se a Desenhos, Animes, Filmes e YouTube. O processo é o mesmo: obter o código <code>iframe</code> e inseri-lo no painel. Os embeds e players utilizados neste guia são baseados no RedeCanais como referência de uso e crédito aos seus serviços.",
    "guide.step1.title": "Acesse o RedeCanais",
    "guide.step1.desc":  "Entre em <code>redecanais.cafe</code>. Se o domínio mudar, substitua apenas o final <code>.cafe</code> pelo novo.",
    "guide.step2.title": "Pesquise o título desejado",
    "guide.step2.desc":  "Use a busca para localizar o conteúdo.",
    "guide.step3.title": "Abra o item correto",
    "guide.step3.desc":  "Para desenhos e animes, selecione o episódio exato. Para filmes, abra a página do filme. O site pode abrir pop-ups — basta fechá-los e voltar.",
    "guide.step4.title": "Localize a opção de incorporação",
    "guide.step4.desc":  "Na área do player, procure a opção de código <code>iframe</code> ou <code>embed</code>. Verifique também o trecho <code>server=RCServerXX</code> e o número do servidor no código do vídeo.",
    "guide.step5.title": "Copie e ajuste o código",
    "guide.step5.desc":  "Copie o bloco completo <code>&lt;iframe&gt;</code> inteiro. Por padrão, nosso site já coloca <code>height=\"450\"</code> e <code>width=\"800\"</code>, então não precisa mudar nada, apenas copiar.",
    "guide.step6.title": "Cole no painel administrativo",
    "guide.step6.desc":  "Insira o iframe no campo apropriado do painel e salve. Antes de finalizar, confirme o <code>RCServerXX</code> e a obra correta.",
    "guide.demoVideo": "Demonstração — Vídeos",
    "guide.ss1": "1 — Acessar o RedeCanais",
    "guide.ss2": "2 — Pesquisar o conteúdo",
    "guide.ss3": "3 — Entrar no episódio ou filme",
    "guide.ss4": "4 — Pegar o código iframe",
    "guide.ss5": "5 — Ajustar o iframe",
    "guide.ss6": "6 — Cadastro implementado",
    "guide.mangaTitle": "Tutorial: Mangás & HQs (PDF)",
    "guide.mangaDesc":  "Duas opções disponíveis conforme o tamanho do arquivo.",
    "guide.optA.title": "Upload Direto",
    "guide.optA.tag":   "Recomendado até 50 MB",
    "guide.optA.s1": "Acesse o painel administrativo.",
    "guide.optA.s2": "Vá até a seção de cadastro de mangás ou HQs.",
    "guide.optA.s3": "Preencha os dados principais.",
    "guide.optA.s4": "Faça o upload do PDF no campo indicado.",
    "guide.optA.s5": "Salve e revise a publicação.",
    "guide.optA.pro1": "Processo mais rápido",
    "guide.optA.pro2": "Gerenciamento centralizado",
    "guide.optA.pro3": "Menor dependência externa",
    "guide.optB.title": "Link do Google Drive",
    "guide.optB.tag":   "Para arquivos grandes",
    "guide.optB.s1": "Acesse o Google Drive ou outro serviço com o PDF.",
    "guide.optB.s2": "Abra a caixa de compartilhamento ou visualização.",
    "guide.optB.s3": "Copie o link do PDF do volume desejado.",
    "guide.optB.s4": "Insira o link no campo correspondente do painel.",
    "guide.optB.s5": "Salve e teste o acesso.",
    "guide.optB.pro1": "Suporte a arquivos grandes",
    "guide.optB.pro2": "Maior flexibilidade",
    "guide.optB.pro3": "Atualização externa do arquivo",
    "guide.optB.warn": "Valide se o link está acessível sem login. Confirme se corresponde ao volume correto.",
    "guide.demoManga": "Demonstração — Mangás & HQs",
    "guide.ss7":  "7 — Abrir o link do PDF",
    "guide.ss8":  "8 — Selecionar o volume",
    "guide.ss9":  "9 — Copiar o link do volume",
    "guide.ss10": "10 — Cadastro do volume",
    "guide.ss11": "11 — Volume aberto com PDF",
    "guide.checklistTitle": "Checklist de Publicação",
    "guide.chk1": "Conteúdo cadastrado na categoria correta.",
    "guide.chk2": "Título padronizado e revisado.",
    "guide.chk3": "Capa ou mídia visual correta.",
    "guide.chk4": "Iframe ou arquivo inserido corretamente.",
    "guide.chk5": "Conteúdo abre sem erros.",
    "guide.chk6": "Episódio, filme ou volume corresponde ao item publicado.",
    "guide.chk7": "Formatação segue o padrão definido neste guia.",
    "guide.chk8": "Não existe duplicidade do mesmo conteúdo no sistema.",
    "guide.bpTitle":  "Boas Práticas",
    "guide.bp1": "Revise o conteúdo antes da publicação",
    "guide.bp2": "Evite publicar materiais incompletos",
    "guide.bp3": "Mantenha coerência entre título, descrição e mídia",
    "guide.bp4": "Use sempre a fonte oficial definida pela operação",
    "guide.bp5": "Documente exceções internamente",
    "guide.bp6": "Priorize consistência visual e de navegação",
    "guide.errTitle": "Erros Comuns a Evitar",
    "guide.err1": "Cadastrar episódio incorreto",
    "guide.err2": "Colar iframe incompleto",
    "guide.err3": "Esquecer de verificar o <code>RCServer[numero-do-servidor]</code> e o código da obra",
    "guide.err4": "Publicar links quebrados",
    "guide.err5": "Inserir mangá ou HQ com permissão privada no Drive",
    "guide.err6": "Criar entradas duplicadas por falta de conferência",
  },

  en: {

    "page.title": "What is Zenkai? — Portal Guide",


    "nav.overview":  "Overview",
    "nav.pages":     "Pages",
    "nav.xp":        "XP & Ranks",
    "nav.guide":     "How to Register",


    "hero.title": "What is <span class=\"highlight\">Zenkai</span>?",
    "hero.sub":   "A personal platform to organize, track and explore anime, cartoons, movies, manga, comics and videos.",
    "hero.tag1":  "Organized",
    "hero.tag2":  "Private",
    "hero.tag3":  "Local",
    "hero.tag4":  "Gamified",
    "hero.cta":   "Explore <i class=\"fa-solid fa-chevron-down\"></i>",


    "overview.title":       "Overview",
    "overview.card1.title": "For authenticated users",
    "overview.card1.desc":  "Track progress, earn XP, customize your profile, keep history and use tools like ZenkAI.",
    "overview.card2.title": "For visitors",
    "overview.card2.desc":  "Browse the showcases and catalogs freely. To access playback, readers, progress, profile, community and games, you need to log in.",
    "overview.card3.title": "Academic project",
    "overview.card3.desc":  "The Zenkai website is a public project and can be accessed by anyone. Learn how to register manually on the site.",


    "pages.title": "Main Pages",
    "pages.col1":  "Page",
    "pages.col2":  "Purpose",
    "pages.row1":  "Home portal, shortcuts and platform presentation",
    "pages.row2":  "E-mail and OTP authentication, account access",
    "pages.row3":  "Profile dashboard, level, XP, inventory, history and stats",
    "pages.row4":  "Catalogs and details for anime and cartoons",
    "pages.row5":  "Seasons, episodes and progress tracking",
    "pages.row6":  "Movie catalog and player",
    "pages.row7":  "Playlists, videos and YouTube progress",
    "pages.row8":  "Manga organizer and reader by volume",
    "pages.row9":  "Comic PDF viewer with annotations",
    "pages.row10": "SenseiMod Store and cosmetics",
    "pages.row11": "ZenkAI: chat, vision and character comparator",
    "pages.row12": "Administration and content registration",
    "pages.row13": "Community, connections and user profiles",


    "xp.title":      "XP, Ranks & SenseiMod Store",
    "xp.desc":       "XP is automatically awarded for completed activities. In the SenseiMod Store, it can be converted into tokens to purchase cosmetics.",
    "xp.tableTitle": "XP per Activity",
    "xp.col1":       "Activity",
    "xp.col2":       "XP",
    "xp.act1":       "Anime episode watched",
    "xp.act2":       "Cartoon episode watched",
    "xp.act3":       "Manga volume read",
    "xp.act4":       "Comic edition read",
    "xp.act5":       "Movie watched",
    "xp.act6":       "YouTube video watched",
    "xp.storeTitle": "Store Tokens",
    "xp.scol1":      "Token",
    "xp.scol2":      "Cost",
    "xp.scol3":      "Requirement",
    "xp.token1":     "Gold",
    "xp.token2":     "Diamond",
    "xp.token3":     "Emerald",
    "xp.req1":       "Silver Rank",
    "xp.req2":       "Master Rank",
    "xp.req3":       "Guardian Rank",
    "xp.rankTitle":  "Rank Progression",
    "xp.rank1": "Bronze",   "xp.rank2": "Silver",   "xp.rank3": "Gold",
    "xp.rank4": "Master",   "xp.rank5": "Legend",   "xp.rank6": "Hokage",
    "xp.rank7": "Guardian",   "xp.rank8": "Immortal",


    "guide.title":          "Registration Guide",
    "guide.desc":           "Manual for administrators responsible for publishing content on the portal. Ensures visual, technical and organizational consistency.",
    "guide.structureTitle": "Content Structure",
    "guide.ct1.name": "Cartoons",   "guide.ct1.desc": "Series by season",
    "guide.ct2.name": "Anime",      "guide.ct2.desc": "Series by season",
    "guide.ct3.name": "Movies",     "guide.ct3.desc": "Individual content",
    "guide.ct4.name": "Manga",      "guide.ct4.desc": "Multiple volumes",
    "guide.ct5.name": "Comics",     "guide.ct5.desc": "Multiple editions",
    "guide.ct6.name": "YouTube",    "guide.ct6.desc": "Video via iframe",
    "guide.standardsTitle": "General Standards",
    "guide.std1": "Standardized titles without unnecessary abbreviations",
    "guide.std2": "Correct spelling, accents and capitalization",
    "guide.std3": "Correct content category",
    "guide.std4": "Working links, iframes and files, including verification of <code>RCServer[number-of-server]</code>",
    "guide.std5": "Consistency between name, cover and navigation",
    "guide.std6": "No duplicate items",
    "guide.verify.title": "Work code verification",
    "guide.verify.desc": "Before publishing, confirm that the work code matches the correct item. Movies usually use the title name; anime, cartoons and series require checking the season and episode number.",
    "guide.verify.movie": "Movies: verify the exact movie title and work item.",
    "guide.verify.series": "Anime, cartoons and series: confirm the season, episode and match with the published content.",
    "guide.verify.server": "In the iframe, check the <code>server=RCServerXX</code> portion and the server number to avoid posting the wrong entry.",
    "guide.videoTitle": "Tutorial: Videos & YouTube",
    "guide.videoDesc":  "Applies to Cartoons, Anime, Movies and YouTube. The process is the same: get the <code>iframe</code> code and paste it into the panel. The embeds and players used in this guide are based on RedeCanais as a reference and credit to their services.",
    "guide.step1.title": "Access RedeCanais",
    "guide.step1.desc":  "Go to <code>redecanais.cafe</code>. If the domain changes, only replace the <code>.cafe</code> ending with the new one.",
    "guide.step2.title": "Search for the desired title",
    "guide.step2.desc":  "Use the search to find the content.",
    "guide.step3.title": "Open the correct item",
    "guide.step3.desc":  "For cartoons and anime, select the exact episode. For movies, open the movie page. The site may open pop-ups — just close them and go back.",
    "guide.step4.title": "Find the embed option",
    "guide.step4.desc":  "In the player area, look for the <code>iframe</code> or <code>embed</code> code option. Also check the <code>server=RCServerXX</code> section and the server number in the video code.",
    "guide.step5.title": "Copy and adjust the code",
    "guide.step5.desc":  "Copy the full <code>&lt;iframe&gt;</code> block as it is. By default, our site already sets <code>height=\"450\"</code> and <code>width=\"800\"</code>, so there is nothing to change—just copy it.",
    "guide.step6.title": "Paste into the admin panel",
    "guide.step6.desc":  "Insert the iframe into the appropriate field in the panel and save. Before finishing, confirm the <code>RCServerXX</code> and the correct work.",
    "guide.demoVideo": "Demo — Videos",
    "guide.ss1": "1 — Access RedeCanais",
    "guide.ss2": "2 — Search for content",
    "guide.ss3": "3 — Open episode or movie",
    "guide.ss4": "4 — Get the iframe code",
    "guide.ss5": "5 — Adjust the iframe",
    "guide.ss6": "6 — Registered content",
    "guide.mangaTitle": "Tutorial: Manga & Comics (PDF)",
    "guide.mangaDesc":  "Two options available depending on file size.",
    "guide.optA.title": "Direct Upload",
    "guide.optA.tag":   "Recommended up to 50 MB",
    "guide.optA.s1": "Access the admin panel.",
    "guide.optA.s2": "Go to the manga or comic registration section.",
    "guide.optA.s3": "Fill in the main details.",
    "guide.optA.s4": "Upload the PDF in the indicated field.",
    "guide.optA.s5": "Save and review the entry.",
    "guide.optA.pro1": "Faster process",
    "guide.optA.pro2": "Centralized management",
    "guide.optA.pro3": "Less external dependency",
    "guide.optB.title": "Google Drive Link",
    "guide.optB.tag":   "For large files",
    "guide.optB.s1": "Access Google Drive or another service with the PDF.",
    "guide.optB.s2": "Open the sharing or preview box.",
    "guide.optB.s3": "Copy the link for the desired volume's PDF.",
    "guide.optB.s4": "Enter the link in the corresponding panel field.",
    "guide.optB.s5": "Save and test access.",
    "guide.optB.pro1": "Support for large files",
    "guide.optB.pro2": "Greater flexibility",
    "guide.optB.pro3": "External file updates",
    "guide.optB.warn": "Verify the link is accessible without login. Confirm it corresponds to the correct volume.",
    "guide.demoManga": "Demo — Manga & Comics",
    "guide.ss7":  "7 — Open the PDF link",
    "guide.ss8":  "8 — Select the volume",
    "guide.ss9":  "9 — Copy the volume link",
    "guide.ss10": "10 — Volume registered",
    "guide.ss11": "11 — Volume with integrated PDF",
    "guide.checklistTitle": "Publication Checklist",
    "guide.chk1": "Content registered in the correct category.",
    "guide.chk2": "Title standardized and reviewed.",
    "guide.chk3": "Cover or visual media is correct.",
    "guide.chk4": "Iframe or file inserted correctly.",
    "guide.chk5": "Content opens without errors.",
    "guide.chk6": "Episode, movie or volume matches the published item.",
    "guide.chk7": "Formatting follows the standard defined in this guide.",
    "guide.chk8": "No duplicate content exists in the system.",
    "guide.bpTitle":  "Best Practices",
    "guide.bp1": "Review content before publishing",
    "guide.bp2": "Avoid publishing incomplete materials",
    "guide.bp3": "Keep title, description and media consistent",
    "guide.bp4": "Always use the official source defined by the operation",
    "guide.bp5": "Document exceptions internally",
    "guide.bp6": "Prioritize visual and navigation consistency",
    "guide.errTitle": "Common Mistakes to Avoid",
    "guide.err1": "Registering the wrong episode",
    "guide.err2": "Pasting an incomplete iframe",
    "guide.err3": "Forgetting to verify the <code>RCServer[number-of-server]</code> and the work code",
    "guide.err4": "Publishing broken links",
    "guide.err5": "Inserting manga or comic with private Drive permissions",
    "guide.err6": "Creating duplicate entries due to lack of verification",
  }
};


const savedLang = localStorage.getItem('zenkai-lang');
const defaultLang = savedLang && translations[savedLang] ? savedLang : 'pt';
let currentLang = defaultLang;

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('zenkai-lang', lang);

  const dict = translations[lang];
  if (!dict) return;


  document.getElementById('html-root').setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');


  const titleEl = document.querySelector('[data-i18n-title]');
  if (titleEl) titleEl.textContent = dict['page.title'] || titleEl.textContent;


  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });


  const label = document.getElementById('lang-label');
  if (label) label.textContent = lang === 'pt' ? 'EN' : 'PT';
}

function toggleLang() {
  applyLang(currentLang === 'pt' ? 'en' : 'pt');
}


document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);

  const btn = document.getElementById('lang-btn');
  if (btn) btn.addEventListener('click', toggleLang);
});
