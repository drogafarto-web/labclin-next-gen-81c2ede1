import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const PoliticaCookies = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Política de Cookies"
        description="Saiba como o Labclin utiliza cookies para melhorar sua experiência. Entenda os tipos de cookies e como gerenciá-los."
        canonicalUrl="https://www.labclinmg.com.br/politica-de-cookies"
      />
      <Header />

      <main id="main-content" className="flex-grow">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Política de Cookies</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                1. O que são Cookies?
              </h2>
              <p>
                Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador,
                tablet ou smartphone) quando você visita um site. Eles permitem que o site
                reconheça seu dispositivo e lembre de informações sobre sua visita, como suas
                preferências e ações anteriores.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Por que Usamos Cookies?
              </h2>
              <p className="mb-2">Utilizamos cookies para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Garantir o funcionamento adequado do site</li>
                <li>Lembrar suas preferências de navegação</li>
                <li>Melhorar a experiência do usuário</li>
                <li>Analisar como nosso site é utilizado</li>
                <li>Personalizar conteúdo relevante para você</li>
                <li>Garantir a segurança das suas informações</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                3. Tipos de Cookies Utilizados
              </h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                🔹 Cookies Essenciais
              </h3>
              <p className="mb-4">
                São indispensáveis para o funcionamento básico do site. Sem eles, algumas funções
                podem não estar disponíveis. Não requerem consentimento pois são estritamente
                necessários.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                🔹 Cookies Analíticos
              </h3>
              <p className="mb-4">
                Nos ajudam a entender como os visitantes interagem com o site, coletando
                informações anônimas como páginas mais visitadas, tempo de permanência e origem
                do tráfego. Utilizamos o Google Analytics para esta finalidade.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                🔹 Cookies Funcionais
              </h3>
              <p className="mb-4">
                Permitem que o site lembre de escolhas que você fez, como preferência de tema
                (claro/escuro), aceite de cookies e outras personalizações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Tabela de Cookies Utilizados
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-border rounded-lg">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-2 text-left text-foreground font-semibold border-b">Nome</th>
                      <th className="px-4 py-2 text-left text-foreground font-semibold border-b">Tipo</th>
                      <th className="px-4 py-2 text-left text-foreground font-semibold border-b">Finalidade</th>
                      <th className="px-4 py-2 text-left text-foreground font-semibold border-b">Duração</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border-b">cookieConsent</td>
                      <td className="px-4 py-2 border-b">Essencial</td>
                      <td className="px-4 py-2 border-b">Armazena sua preferência de cookies</td>
                      <td className="px-4 py-2 border-b">1 ano</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">_ga</td>
                      <td className="px-4 py-2 border-b">Analítico</td>
                      <td className="px-4 py-2 border-b">Google Analytics - identifica visitantes</td>
                      <td className="px-4 py-2 border-b">2 anos</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">_ga_*</td>
                      <td className="px-4 py-2 border-b">Analítico</td>
                      <td className="px-4 py-2 border-b">Google Analytics - mantém estado da sessão</td>
                      <td className="px-4 py-2 border-b">2 anos</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">theme</td>
                      <td className="px-4 py-2">Funcional</td>
                      <td className="px-4 py-2">Armazena preferência de tema (claro/escuro)</td>
                      <td className="px-4 py-2">1 ano</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Cookies de Terceiros
              </h2>
              <p className="mb-2">
                Alguns cookies são definidos por serviços de terceiros que aparecem em nossas
                páginas:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> Para análise estatística de tráfego e
                  comportamento dos usuários
                </li>
                <li>
                  <strong>Google Fonts:</strong> Para carregamento de fontes personalizadas
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                6. Como Gerenciar Cookies
              </h2>
              <p className="mb-2">
                Você pode controlar e/ou excluir cookies conforme desejar. Veja como:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Google Chrome:</strong> Configurações → Privacidade e segurança →
                  Cookies e outros dados do site
                </li>
                <li>
                  <strong>Mozilla Firefox:</strong> Opções → Privacidade e Segurança → Cookies e
                  dados de sites
                </li>
                <li>
                  <strong>Safari:</strong> Preferências → Privacidade → Gerenciar dados de sites
                </li>
                <li>
                  <strong>Microsoft Edge:</strong> Configurações → Cookies e permissões do site →
                  Gerenciar e excluir cookies
                </li>
              </ul>
              <p className="mt-4">
                <strong>Atenção:</strong> Desativar cookies pode afetar a funcionalidade do site
                e impedir o acesso a determinados recursos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                7. Base Legal (LGPD)
              </h2>
              <p className="mb-2">
                O uso de cookies pelo Labclin está fundamentado nas seguintes bases legais da
                LGPD:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Consentimento (Art. 7º, I):</strong> Para cookies analíticos e
                  funcionais, solicitamos seu consentimento através do banner de cookies
                </li>
                <li>
                  <strong>Legítimo interesse (Art. 7º, IX):</strong> Para cookies essenciais ao
                  funcionamento do site
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                8. Seus Direitos
              </h2>
              <p className="mb-2">
                De acordo com a LGPD, você tem direito a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Revogar seu consentimento a qualquer momento</li>
                <li>Solicitar informações sobre cookies utilizados</li>
                <li>Solicitar a exclusão de dados coletados por cookies</li>
                <li>Opor-se ao uso de cookies não essenciais</li>
              </ul>
              <p className="mt-4">
                Para exercer esses direitos, utilize o banner de cookies ou entre em contato
                conosco.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                9. Atualizações desta Política
              </h2>
              <p>
                Esta Política de Cookies pode ser atualizada periodicamente para refletir
                mudanças nas práticas de uso de cookies ou por exigências legais. Recomendamos
                que você revise esta página regularmente. A data da última atualização está
                indicada ao final deste documento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                10. Contato
              </h2>
              <p className="mb-2">
                Para dúvidas sobre nossa Política de Cookies ou para exercer seus direitos:
              </p>
              <p>
                <strong>E-mail:</strong> llabclin3@gmail.com
                <br />
                <strong>WhatsApp:</strong> (32) 99199-0239
                <br />
                <strong>Telefone:</strong> (32) 3571-1599
              </p>
              <p className="mt-4">
                Consulte também nossa{" "}
                <Link to="/politica-de-privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </Link>{" "}
                para informações completas sobre o tratamento de dados pessoais.
              </p>
            </section>

            <p className="mt-8 text-sm">
              <strong>Última atualização:</strong> Dezembro de 2025
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PoliticaCookies;
