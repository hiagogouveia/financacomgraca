import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, Tag } from 'lucide-react';
// Importe o conteúdo do artigo. Em um projeto real, isso viria de um CMS ou API.
// Por enquanto, vamos usar um mock para demonstração.
// A ideia é que cada post tenha um 'content' com o texto completo.

// Mock de dados dos posts (precisará ser atualizado com o conteúdo completo)
// Por enquanto, vamos importar o mockPosts da BlogPage para manter a consistência.
// Em um cenário real, você teria uma fonte de dados centralizada para os posts.
const mockPosts = [
  {
    id: 1,
    title: '5 Passos Para um Orçamento Familiar Abençoado',
    category: 'Educação Financeira',
    date: '01 de Julho, 2025',
    excerpt: 'Aprenda a organizar as finanças da sua casa com princípios que honram a Deus e trazem paz para sua família...',
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3',
    // Conteúdo completo do artigo (copiado do seu immersive 'artigo-orcamento-abençoado')
    content: `
# 5 Passos Para um Orçamento Familiar Abençoado

Aprenda a organizar as finanças da sua casa com princípios que honram a Deus e trazem paz para sua família.

A vida financeira pode ser uma fonte de grande estresse ou de profunda paz. Para muitas famílias cristãs, o desejo de honrar a Deus em todas as áreas da vida se estende também ao dinheiro. Mas como transformar a gestão financeira em um ato de fé e sabedoria, que abençoa a casa e traz leveza?

Um orçamento familiar abençoado vai muito além de apenas "ter dinheiro". Ele se trata de alinhar seus recursos com o propósito divino, encontrar contentamento e experimentar a provisão de Deus em cada detalhe. Se você busca uma vida financeira plena, com menos preocupações e mais direção, este artigo é para você.

Vamos explorar 5 passos essenciais para construir um orçamento familiar que não apenas funciona, mas que também reflete os valores do Reino.

### **Passo 1: Comece com Oração e Defina o Propósito**

Antes de abrir planilhas ou aplicativos, abra seu coração em oração. Peça a Deus sabedoria e discernimento para gerenciar os recursos que Ele lhe confiou. Lembre-se que tudo pertence a Ele, e somos apenas mordomos.

* **Reflexão:** Qual é o propósito de Deus para as finanças da sua família? É para sustentar sua casa, ser generoso, investir no Reino, ou tudo isso?

* **Ação:** Reúna a família (se aplicável) e conversem sobre seus valores e objetivos. O que vocês querem alcançar com o dinheiro? Pagar dívidas, economizar para um sonho, ajudar o próximo, investir no futuro dos filhos? Ter um propósito claro e compartilhado transformará a gestão financeira de uma tarefa em uma missão.

> *"Entrega ao Senhor as tuas obras, e os teus pensamentos serão estabelecidos."* – Provérbios 16:3

### **Passo 2: Conheça Sua Realidade Financeira (Receitas e Despesas)**

Este é o passo mais prático e, para alguns, o mais desafiador: colocar no papel (ou na planilha) cada centavo que entra e sai da sua casa. Sem essa clareza, é impossível tomar decisões sábias.

* **Receitas:** Liste todas as fontes de renda da família (salários, bônus, rendimentos extras, aluguéis, etc.). Seja o mais preciso possível.

* **Despesas Fixas:** Anote tudo o que tem um valor constante ou previsível (aluguel/prestação da casa, condomínio, mensalidades escolares, planos de saúde, internet, assinaturas, etc.).

* **Despesas Variáveis:** Registre tudo o que flutua mês a mês (alimentação, transporte, lazer, contas de água/luz/gás, vestuário, etc.). Use extratos bancários e faturas de cartão de crédito para não esquecer nada.

* **Ação:** Use uma planilha (temos uma gratuita no link da bio!), um caderno ou um aplicativo. O importante é registrar. Faça isso por pelo menos um mês para ter uma visão real de para onde seu dinheiro está indo.

### **Passo 3: Priorize com Sabedoria (Dízimos, Ofertas e Necessidades)**

Com a clareza das suas finanças, é hora de aplicar princípios bíblicos de priorização.

* **Honre a Deus Primeiro:** A Bíblia nos ensina a dar a Deus as primícias. Antes de qualquer outra despesa, separe o dízimo e as ofertas. Isso não é uma "despesa", mas um ato de fé e obediência que abre portas para as bênçãos de Deus.

* **Necessidades Básicas:** Em seguida, priorize o essencial: moradia, alimentação, saúde, transporte e educação. Garanta que essas áreas estejam cobertas.

* **Dívidas:** Se houver dívidas (especialmente as de juros altos), elas devem ser uma prioridade para serem quitadas. A Bíblia adverte contra o endividamento.

* **Economia e Investimento:** Separe uma parte para a poupança e investimentos. Ter uma reserva de emergência é um ato de sabedoria.

* **Desejos e Lazer:** Por último, mas não menos importante, destine um valor para lazer e desejos, mas sempre dentro do que sobrou após as prioridades.

* **Ação:** Crie categorias no seu orçamento e defina limites para cada uma. Seja realista, mas também disciplinado.

### **Passo 4: Planeje e Gerencie com Disciplina**

Um orçamento não é um documento estático; é uma ferramenta viva que precisa ser usada e revisada constantemente.

* **Planejamento Mensal:** No início de cada mês, sente-se com sua família para planejar o orçamento. Onde o dinheiro irá? Quem é responsável por o quê?

* **Acompanhamento Diário/Semanal:** Monitore seus gastos. Você está dentro do planejado? Se não, o que precisa ser ajustado?

* **Revisão Periódica:** Pelo menos uma vez por mês, revise o orçamento. O que funcionou? O que não funcionou? Onde vocês podem melhorar? A vida muda, e o orçamento também deve ser flexível.

* **Ação:** Use a planilha de orçamento que você começou no Passo 2. Faça dela sua companheira diária na gestão financeira. A disciplina é a chave para ver os resultados.

### **Passo 5: Viva com Contentamento e Generosidade**

O objetivo de um orçamento abençoado não é acumular riquezas para si mesmo, mas viver com paz, contentamento e ser um canal de bênçãos para outros.

* **Contentamento:** Aprenda a se alegrar com o que você tem. A verdadeira riqueza está em Cristo, não nas posses. Evite a armadilha do consumismo e da comparação.

* **Generosidade:** Com um orçamento organizado, você terá clareza para ser generoso. Seja com sua igreja, com missões, com os necessitados. A generosidade é um princípio do Reino que libera bênçãos.

* **Confiança na Provisão:** Entenda que Deus é o provedor. Mesmo em tempos de escassez, Ele é fiel. Um orçamento bem feito permite que você confie mais em Deus e menos nas suas próprias forças.

> *"Mas a piedade com contentamento é grande lucro."* – 1 Timóteo 6:6

### **Conclusão:**

Construir um orçamento familiar abençoado é uma jornada de fé, disciplina e aprendizado contínuo. Não se desanime com os desafios; cada passo é uma vitória. Ao aplicar esses princípios, você não apenas organizará suas finanças, mas também fortalecerá sua família, honrará a Deus e experimentará a verdadeira paz que excede todo entendimento.

Comece hoje mesmo! Baixe nossa planilha gratuita no link da bio e dê o primeiro passo rumo a uma vida financeira plena e abençoada.

**Gostou deste artigo? Compartilhe com alguém que precisa organizar as finanças!**

#FinancaComGraca #OrcamentoFamiliar #EducacaoFinanceira #PrincipiosBiblicos #VidaFinanceiraPlena #PazFinanceira #DeusNoControle #OrganizeSuasFinancas
    `,
  },
  { id: 2, title: 'O Princípio do Dízimo: Mais Que Uma Obrigação', category: 'Estudos Bíblicos', date: '15 de Junho, 2025', excerpt: 'Uma reflexão profunda sobre o que a Bíblia realmente ensina sobre o dízimo e as ofertas, e como isso impacta nossa fé.', image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f', content: 'Conteúdo completo do artigo 2...' },
  { id: 3, title: 'Investir com Sabedoria: Onde Colocar Seus Recursos?', category: 'Educação Financeira', date: '28 de Maio, 2025', excerpt: 'Descubra estratégias de investimento que estão alinhadas com a ética cristã e o propósito de mordomia.', image: 'https://images.unsplash.com/photo-1642052551949-55173a7346fe', content: 'Conteúdo completo do artigo 3...' },
  { id: 4, title: 'Devocional: A Parábola dos Talentos e Suas Finanças', category: 'Devocionais', date: '10 de Maio, 2025', excerpt: 'Como a famosa parábola de Jesus pode transformar sua visão sobre como você administra o que Deus lhe confiou.', image: 'https://images.unsplash.com/photo-1621269595556-32454b6d0a76', content: 'Conteúdo completo do artigo 4...' },
];


const BlogPostPage = () => {
  // Pega o parâmetro 'id' da URL
  const { id } = useParams();
  // Converte o id para número, pois ele vem como string da URL
  const postId = parseInt(id, 10);

  // Encontra o post correspondente no mockPosts
  const post = mockPosts.find(p => p.id === postId);

  // Se o post não for encontrado, exibe uma mensagem de erro ou redireciona
  if (!post) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl font-bold text-[var(--cor-primaria)] mb-4">Post não encontrado</h1>
        <p className="text-lg text-gray-700">Parece que este artigo não existe ou foi removido.</p>
        <Link to="/blog" className="mt-8 inline-block bg-[var(--cor-secundaria)] text-white px-6 py-3 rounded-full hover:bg-[#2a4a66] transition-colors">Voltar para o Blog</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Finança com Graça</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="bg-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Imagem de destaque do post */}
          {post.image && (
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-8" 
            />
          )}

          {/* Título e Meta informações */}
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--cor-primaria)] mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 mb-8 space-x-6">
            <div className="flex items-center space-x-2">
              <Tag className="h-5 w-5 text-[var(--cor-secundaria)]" />
              <span>{post.category}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-[var(--cor-secundaria)]" />
              <span>{post.date}</span>
            </div>
          </div>

          {/* Conteúdo do Artigo */}
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            {/* Para renderizar Markdown, você precisaria de uma biblioteca como 'react-markdown'.
              Por enquanto, estamos renderizando como texto simples, o que pode não formatar o Markdown.
              Se você tiver 'react-markdown' instalado, pode usar:
              <ReactMarkdown>{post.content}</ReactMarkdown>
            */}
            {post.content.split('\n').map((paragraph, index) => (
              // Renderiza cada linha como um parágrafo. Isso é uma solução simples para Markdown básico.
              // Para Markdown completo, use uma biblioteca como 'react-markdown'.
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>

          {/* Botão de voltar */}
          <div className="mt-12 text-center">
            <Link to="/blog" className="inline-block bg-[var(--cor-secundaria)] text-white px-8 py-4 rounded-full hover:bg-[#2a4a66] transition-colors font-semibold">
              ← Voltar para o Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
