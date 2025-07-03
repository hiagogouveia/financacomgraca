
import React from 'react';
import { Helmet } from 'react-helmet';

const PoliticaPrivacidadePage = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | Finança com Graça</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="bg-white py-16 pt-32">
        <div className="container mx-auto px-6 prose lg:prose-xl max-w-4xl">
          <h1>Política de Privacidade</h1>
          <p className="text-sm text-gray-500">Última atualização: 03 de Julho, 2025</p>
          <p>
            Esta página informa sobre nossas políticas relativas à coleta, uso e divulgação de dados pessoais quando você usa nosso Serviço e as escolhas que você associou a esses dados.
          </p>
          <h2>Coleta e Uso de Informações</h2>
          <p>
            Coletamos vários tipos de informações para diversos fins, para fornecer e melhorar nosso Serviço para você.
          </p>
          <h3>Tipos de Dados Coletados</h3>
          <h4>Dados Pessoais</h4>
          <p>
            Ao usar nosso Serviço, podemos solicitar que você nos forneça algumas informações de identificação pessoal que podem ser usadas para contatá-lo ou identificá-lo ("Dados Pessoais"). As informações de identificação pessoal podem incluir, mas não estão limitadas a:
          </p>
          <ul>
            <li>Endereço de e-mail</li>
            <li>Cookies e Dados de Uso</li>
          </ul>
          <h4>Dados de Uso</h4>
          <p>
            Podemos também coletar informações sobre como o Serviço é acessado e usado ("Dados de Uso"). Estes Dados de Uso podem incluir informações como o endereço de Protocolo de Internet do seu computador (por exemplo, endereço IP), tipo de navegador, versão do navegador, as páginas do nosso Serviço que você visita, a hora e a data da sua visita, o tempo gasto nessas páginas, identificadores únicos de dispositivos e outros dados de diagnóstico.
          </p>
          <h2>Uso de Dados</h2>
          <p>Finança com Graça usa os dados coletados para diversos fins:</p>
          <ul>
            <li>Para fornecer e manter nosso Serviço</li>
            <li>Para notificá-lo sobre alterações em nosso Serviço</li>
            <li>Para permitir que você participe de recursos interativos do nosso Serviço quando você optar por fazê-lo</li>
            <li>Para fornecer suporte ao cliente</li>
            <li>Para coletar análises ou informações valiosas para que possamos melhorar nosso Serviço</li>
            <li>Para monitorar o uso do nosso Serviço</li>
            <li>Para detectar, prevenir e resolver problemas técnicos</li>
          </ul>
          <h2>Contato</h2>
          <p>Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco: financacomgraca@gmail.com.</p>
        </div>
      </div>
    </>
  );
};

export default PoliticaPrivacidadePage;
