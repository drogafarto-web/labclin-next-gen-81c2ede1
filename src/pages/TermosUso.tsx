import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const TermosUso = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Termos de Uso"
        description="Termos e condições de uso dos serviços do Labclin. Conheça seus direitos e deveres ao utilizar nosso site e serviços laboratoriais."
        canonicalUrl="https://www.labclinmg.com.br/termos-de-uso"
      />
      <Header />

      <main id="main-content" className="flex-grow">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Termos de Uso</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao acessar e utilizar o site e os serviços do Labclin, você declara ter lido,
                compreendido e concordado integralmente com estes Termos de Uso. Caso não concorde
                com qualquer disposição aqui prevista, solicitamos que não utilize nossos serviços
                online.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Descrição dos Serviços
              </h2>
              <p className="mb-2">O Labclin oferece os seguintes serviços:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Realização de exames laboratoriais de análises clínicas</li>
                <li>Agendamento online de coleta de exames</li>
                <li>Consulta de resultados de exames pela internet</li>
                <li>Coleta domiciliar de material biológico</li>
                <li>Atendimento em múltiplas unidades na região</li>
                <li>Informações sobre preparo para exames</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                3. Condições de Uso do Site
              </h2>
              <p className="mb-2">Ao utilizar nosso site, você concorda em:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer informações verdadeiras, precisas e completas</li>
                <li>Não utilizar o site para fins ilegais ou não autorizados</li>
                <li>Não tentar acessar áreas restritas do sistema</li>
                <li>Não transmitir vírus, malware ou qualquer código malicioso</li>
                <li>Não reproduzir, duplicar ou copiar conteúdo sem autorização</li>
                <li>Manter a confidencialidade de suas credenciais de acesso</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Agendamento e Cancelamento
              </h2>
              <p className="mb-2">Políticas de agendamento:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Os agendamentos estão sujeitos à disponibilidade de horários e unidades
                </li>
                <li>
                  O paciente deve comparecer no horário agendado com documento de identificação
                </li>
                <li>
                  Em caso de impossibilidade de comparecimento, solicitamos aviso prévio de pelo
                  menos 2 horas
                </li>
                <li>
                  O laboratório reserva-se o direito de reagendar em casos de força maior
                </li>
                <li>
                  É necessário seguir as orientações de preparo específicas para cada exame
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo deste site, incluindo textos, imagens, logotipos, marcas, layout,
                design e software, é de propriedade exclusiva do Labclin ou de seus licenciadores,
                protegido pelas leis de propriedade intelectual brasileiras. É proibida a
                reprodução, distribuição ou modificação sem autorização prévia e expressa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                6. Responsabilidades do Usuário
              </h2>
              <p className="mb-2">O usuário é responsável por:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer dados pessoais e de saúde verdadeiros e atualizados</li>
                <li>Informar alergias, medicamentos em uso e condições de saúde relevantes</li>
                <li>Seguir corretamente as instruções de preparo para exames</li>
                <li>Manter seguras suas credenciais de acesso ao sistema de resultados</li>
                <li>Comunicar imediatamente qualquer uso não autorizado de sua conta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                7. Limitações de Responsabilidade
              </h2>
              <p className="mb-2">O Labclin não se responsabiliza por:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Danos decorrentes de informações incorretas fornecidas pelo usuário
                </li>
                <li>
                  Indisponibilidade temporária do site por manutenção ou problemas técnicos
                </li>
                <li>
                  Interpretação médica dos resultados (responsabilidade do profissional de saúde)
                </li>
                <li>
                  Problemas de conexão à internet do usuário
                </li>
                <li>
                  Uso indevido das credenciais de acesso por terceiros
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                8. Privacidade e Proteção de Dados
              </h2>
              <p>
                O tratamento de dados pessoais é regido por nossa{" "}
                <a href="/politica-de-privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </a>
                , que está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº
                13.709/2018). Recomendamos a leitura integral deste documento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                9. Alterações nos Termos
              </h2>
              <p>
                O Labclin reserva-se o direito de modificar estes Termos de Uso a qualquer momento,
                sem aviso prévio. As alterações entram em vigor imediatamente após sua publicação
                no site. O uso continuado dos serviços após as alterações implica na aceitação dos
                novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                10. Legislação Aplicável e Foro
              </h2>
              <p>
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica
                eleito o foro da Comarca de Rio Pomba, Estado de Minas Gerais, para dirimir
                quaisquer dúvidas ou controvérsias decorrentes destes termos, com renúncia expressa
                a qualquer outro, por mais privilegiado que seja.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                11. Contato
              </h2>
              <p className="mb-2">
                Para dúvidas sobre estes Termos de Uso, entre em contato:
              </p>
              <p>
                <strong>E-mail:</strong> llabclin3@gmail.com
                <br />
                <strong>WhatsApp:</strong> (32) 99199-0239
                <br />
                <strong>Telefone:</strong> (32) 3571-1599
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

export default TermosUso;
