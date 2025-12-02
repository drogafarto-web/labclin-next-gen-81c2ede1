import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const PoliticaPrivacidade = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Política de Privacidade"
        description="Política de Privacidade do Labclin conforme LGPD. Saiba como coletamos, usamos e protegemos seus dados pessoais."
        canonicalUrl="https://www.labclinmg.com.br/politica-de-privacidade"
      />
      <Header />

      <main id="main-content" className="flex-grow">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Política de Privacidade</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                1. Introdução
              </h2>
              <p>
                A Labclin respeita a sua privacidade e está comprometida em proteger seus dados
                pessoais. Esta Política de Privacidade explica como coletamos, usamos e protegemos
                suas informações de acordo com a Lei Geral de Proteção de Dados (LGPD - Lei nº
                13.709/2018).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Dados Coletados
              </h2>
              <p className="mb-2">Coletamos os seguintes tipos de dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dados de identificação: nome completo, CPF, RG, data de nascimento</li>
                <li>Dados de contato: endereço, telefone, e-mail</li>
                <li>Dados de saúde: informações médicas necessárias para realização de exames</li>
                <li>Dados de navegação: cookies, endereço IP, páginas visitadas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                3. Finalidade do Tratamento
              </h2>
              <p className="mb-2">Utilizamos seus dados para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Realizar e processar exames laboratoriais</li>
                <li>Agendar e confirmar consultas</li>
                <li>Enviar resultados de exames</li>
                <li>Comunicar sobre serviços e novidades</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Melhorar nossos serviços e experiência do usuário</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Base Legal
              </h2>
              <p>
                O tratamento de dados é realizado com base no consentimento do titular, execução de
                contrato, cumprimento de obrigação legal e legítimo interesse do controlador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Compartilhamento de Dados
              </h2>
              <p className="mb-2">
                Seus dados podem ser compartilhados com:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Profissionais de saúde envolvidos no seu atendimento</li>
                <li>Laboratórios parceiros para análises especializadas</li>
                <li>Autoridades sanitárias quando exigido por lei</li>
                <li>Prestadores de serviço sob contrato de confidencialidade</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                6. Segurança dos Dados
              </h2>
              <p>
                Implementamos medidas técnicas e organizacionais para proteger seus dados contra
                acesso não autorizado, perda ou destruição. Utilizamos criptografia, controle de
                acesso e backups regulares.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                7. Retenção de Dados
              </h2>
              <p>
                Mantemos seus dados pelo período necessário para cumprir as finalidades descritas,
                respeitando os prazos legais de guarda de documentos médicos (mínimo de 20 anos
                conforme Resolução CFM nº 1.821/2007).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                8. Seus Direitos
              </h2>
              <p className="mb-2">Você tem direito a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar anonimização ou exclusão (quando aplicável)</li>
                <li>Revogar consentimento</li>
                <li>Obter informações sobre compartilhamento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                9. Cookies
              </h2>
              <p>
                Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para
                melhorar a experiência do usuário. Você pode gerenciar suas preferências de cookies
                através das configurações do navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                10. Contato - DPO
              </h2>
              <p className="mb-2">
                Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados, entre
                em contato com nosso Encarregado de Dados (DPO):
              </p>
              <p>
                <strong>E-mail:</strong> llabclin3@gmail.com
                <br />
                <strong>WhatsApp:</strong> (32) 99199-0239
                <br />
                <strong>Telefone:</strong> (32) 3571-1599
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                11. Alterações
              </h2>
              <p>
                Esta política pode ser atualizada periodicamente. A versão mais recente estará
                sempre disponível em nosso site.
              </p>
            </section>

            <p className="mt-8 text-sm">
              <strong>Última atualização:</strong> Janeiro de 2025
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PoliticaPrivacidade;
