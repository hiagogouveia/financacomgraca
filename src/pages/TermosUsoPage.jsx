
import React from 'react';
import { Helmet } from 'react-helmet';

const TermosUsoPage = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | Finança com Graça</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="bg-white py-16 pt-32">
        <div className="container mx-auto px-6 prose lg:prose-xl max-w-4xl">
          <h1>Termos de Uso</h1>
          <p className="text-sm text-gray-500">Última atualização: 03 de Julho, 2025</p>

          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar o site Finança com Graça (o "Site"), você aceita e concorda em ficar vinculado pelos termos e disposições deste acordo. Além disso, ao usar estes serviços específicos, você estará sujeito a quaisquer diretrizes ou regras postadas aplicáveis a tais serviços.
          </p>

          <h2>2. Descrição do Serviço</h2>
          <p>
            O Finança com Graça fornece aos usuários acesso a uma coleção de recursos, incluindo artigos, devocionais e outros conteúdos relacionados à educação financeira sob uma perspectiva cristã. Você entende e concorda que o Serviço é fornecido "COMO ESTÁ" e que o Finança com Graça não assume responsabilidade pela pontualidade, exclusão, entrega incorreta ou falha no armazenamento de quaisquer comunicações do usuário ou configurações de personalização.
          </p>

          <h2>3. Isenção de Responsabilidade</h2>
          <p>
            O conteúdo fornecido no Finança com Graça é apenas para fins informativos e educacionais. Não se destina a ser um conselho financeiro, legal ou de investimento profissional. Sempre procure o conselho de um profissional qualificado com quaisquer perguntas que você possa ter sobre uma condição financeira. A confiança em qualquer informação fornecida pelo Site é exclusivamente por sua conta e risco.
          </p>
          
          <h2>4. Propriedade Intelectual</h2>
          <p>
            O Site e seu conteúdo original, recursos e funcionalidades são e permanecerão propriedade exclusiva do Finança com Graça e seus licenciadores. O conteúdo é protegido por direitos autorais, marcas registradas e outras leis do Brasil e de outros países.
          </p>

          <h2>5. Links para Outros Sites</h2>
          <p>
            Nosso Serviço pode conter links para sites de terceiros ou serviços que não são de propriedade ou controlados pelo Finança com Graça. Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.
          </p>
          
          <h2>6. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir estes Termos a qualquer momento. Notificaremos sobre quaisquer alterações, publicando os novos Termos de Uso neste site.
          </p>

          <h2>7. Contato</h2>
          <p>Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco: financacomgraca@gmail.com.</p>
        </div>
      </div>
    </>
  );
};

export default TermosUsoPage;
