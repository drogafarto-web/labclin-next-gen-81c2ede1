import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TestimonialCard from "@/components/TestimonialCard";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Search, ArrowRight, CheckCircle2, Activity, Heart, Users, ShieldAlert, HeartPulse, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { generateBreadcrumbSchema } from "@/lib/structuredData";
import covidVirusImg from "@/assets/exames/covid-virus.png";
import influenzaSyringeImg from "@/assets/exames/influenza-syringe.png";
import sexagemDnaImg from "@/assets/exames/sexagem-dna.png";
import testePezinhoImg from "@/assets/exames/teste-pezinho.png";
import lactoseTestImg from "@/assets/exames/lactose-test.png";
import glutenTestImg from "@/assets/exames/gluten-test.png";
import alergiaAlimentarImg from "@/assets/exames/alergia-alimentar.png";
import preNatalImg from "@/assets/exames/pre-natal.png";
import hba1cDnaImg from "@/assets/exames/hba1c-dna.png";
import toxicologiaTruckImg from "@/assets/exames/toxicologia-truck.png";

const Exames = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", label: "Todos", icon: null },
    { id: "condicoes_especiais", label: "Condições Especiais", icon: ShieldAlert },
    { id: "rastreio_saude", label: "Rastreio & Saúde", icon: HeartPulse },
    { id: "urgentes", label: "Exames com Urgência", icon: AlertTriangle },
    { id: "rotina", label: "Exames de Rotina", icon: Activity },
    { id: "especializado", label: "Exames Especializados", icon: CheckCircle2 },
    { id: "hormonal", label: "Hormonais", icon: Heart },
  ];

  const exames = [
    // Condições Especiais
    {
      slug: "covid-19",
      name: "COVID-19",
      category: "condicoes_especiais",
      description: "Exame para detecção do vírus SARS-CoV-2",
      preparo: "Sem jejum necessário",
      tempo: "24-48 horas",
      image: covidVirusImg,
      badge: "Novo",
      badgeColor: "bg-blue-500",
    },
    {
      slug: "influenza",
      name: "Influenza",
      category: "condicoes_especiais",
      description: "Detecção da gripe (Influenza A/B)",
      preparo: "Sem jejum necessário",
      tempo: "24-48 horas",
      image: influenzaSyringeImg,
      badge: "",
      badgeColor: "",
    },
    {
      slug: "sexagem-fetal",
      name: "Sexagem Fetal",
      category: "condicoes_especiais",
      description: "Exame para determinar o sexo do bebê com alta precisão",
      preparo: "Sem jejum necessário",
      tempo: "24 horas",
      image: sexagemDnaImg,
      badge: "Popular",
      badgeColor: "bg-pink-500",
    },
    {
      slug: "teste-pezinho",
      name: "Teste do Pezinho",
      category: "condicoes_especiais",
      description: "Exame para detectar doenças metabólicas e genéticas em recém-nascidos",
      preparo: "Sem jejum necessário",
      tempo: "48 horas",
      image: testePezinhoImg,
      badge: "",
      badgeColor: "",
    },
    {
      slug: "variola-macacos",
      name: "Varíola dos Macacos",
      category: "condicoes_especiais",
      description: "Exame para detectar o vírus da varíola dos macacos (Monkeypox)",
      preparo: "Sem jejum necessário",
      tempo: "48 horas",
      image: "",
      badge: "",
      badgeColor: "",
    },
    {
      slug: "teste-paternidade",
      name: "Teste de Paternidade",
      category: "condicoes_especiais",
      description: "Exame para confirmar a paternidade através de análise genética",
      preparo: "Não requer jejum",
      tempo: "7-10 dias",
      image: sexagemDnaImg,
      badge: "",
      badgeColor: "",
    },
    {
      slug: "intolerancia-lactose",
      name: "Intolerância a Lactose",
      category: "condicoes_especiais",
      description: "Exame para detectar intolerância à lactose no organismo",
      preparo: "Jejum de 12 horas",
      tempo: "24 horas",
      image: lactoseTestImg,
      badge: "",
      badgeColor: "",
    },
    {
      slug: "intolerancia-gluten",
      name: "Intolerância ao Glúten",
      category: "condicoes_especiais",
      description: "Exame para detectar intolerância ao glúten no organismo",
      preparo: "Jejum de 12 horas",
      tempo: "24 horas",
      image: glutenTestImg,
      badge: "",
      badgeColor: "",
    },
    {
      slug: "alergia-alimentar",
      name: "Alergia Alimentar",
      category: "condicoes_especiais",
      description: "Exame para detectar alergias alimentares comuns",
      preparo: "Sem jejum necessário",
      tempo: "48 horas",
      image: alergiaAlimentarImg,
      badge: "",
      badgeColor: "",
    },
    {
      slug: "pre-natal",
      name: "Pré-Natal",
      category: "condicoes_especiais",
      description: "Exames especializados para monitorar a saúde durante a gravidez",
      preparo: "Sem jejum necessário",
      tempo: "24-72 horas",
      image: preNatalImg,
      badge: "",
      badgeColor: "",
    },
    {
      slug: "virus-sincicial",
      name: "Vírus Sincicial Respiratório",
      category: "condicoes_especiais",
      description: "Exame para detectar o vírus sincicial respiratório, causador de infecções respiratórias",
      preparo: "Sem jejum necessário",
      tempo: "24-48 horas",
      image: "",
      badge: "",
      badgeColor: "",
    },
    // Rastreio & Saúde
    {
      slug: "hemoglobina-glicada",
      name: "Hemoglobina Glicada (HbA1c)",
      category: "rastreio_saude",
      description: "Avalia o controle glicêmico dos últimos 3 meses",
      preparo: "Não requer jejum",
      tempo: "24-48 horas",
      image: hba1cDnaImg,
      badge: "Popular",
      badgeColor: "bg-green-500",
    },
    // Urgentes
    {
      slug: "toxicologia",
      name: "Toxicologia",
      category: "urgentes",
      description: "Detecção de substâncias tóxicas no organismo",
      preparo: "Jejum de 12 horas",
      tempo: "48 horas",
      image: toxicologiaTruckImg,
      badge: "Urgente",
      badgeColor: "bg-red-500",
    },
    // Exames de Rotina
    {
      slug: "hemograma-completo",
      name: "Hemograma Completo",
      category: "rotina",
      description: "Avaliação completa das células sanguíneas para detectar anemias, infecções e outras condições",
      preparo: "Jejum de 4 horas",
      tempo: "24 horas",
      image: "",
      badge: "",
      badgeColor: "",
    },
    {
      slug: "glicemia-jejum",
      name: "Glicemia de Jejum",
      category: "rotina",
      description: "Medição dos níveis de açúcar no sangue, fundamental para diagnóstico de diabetes",
      preparo: "Jejum de 8 horas",
      tempo: "24 horas",
      image: "",
      badge: "",
      badgeColor: "",
    },
    {
      slug: "colesterol-total-fracoes",
      name: "Colesterol Total e Frações",
      category: "rotina",
      description: "Análise completa do perfil lipídico (HDL, LDL, VLDL e triglicérides)",
      preparo: "Jejum de 12 horas",
      tempo: "24 horas",
      image: "",
      badge: "",
      badgeColor: "",
    },
    {
      slug: "tsh-t4-livre",
      name: "TSH e T4 Livre",
      category: "hormonal",
      description: "Avaliação completa da função da tireoide",
      preparo: "Não requer jejum",
      tempo: "48 horas",
      image: "",
      badge: "",
      badgeColor: "",
    },
    {
      slug: "creatinina-ureia",
      name: "Creatinina e Ureia",
      category: "rotina",
      description: "Avaliação da função renal",
      preparo: "Jejum de 4 horas",
      tempo: "24 horas",
      image: "",
      badge: "",
      badgeColor: "",
    },
    {
      slug: "tgo-tgp",
      name: "TGO e TGP",
      category: "rotina",
      description: "Enzimas hepáticas para avaliação da função do fígado",
      preparo: "Jejum de 4 horas",
      tempo: "24 horas",
      image: "",
      badge: "",
      badgeColor: "",
    },
    {
      slug: "vhs",
      name: "VHS (Velocidade de Hemossedimentação)",
      category: "especializado",
      description: "Detecção de processos inflamatórios e infecciosos no organismo",
      preparo: "Não requer jejum",
      tempo: "24 horas",
      image: "",
      badge: "",
      badgeColor: "",
    },
    {
      slug: "pcr",
      name: "Proteína C Reativa (PCR)",
      category: "especializado",
      description: "Marcador de inflamação e risco cardiovascular",
      preparo: "Jejum de 4 horas",
      tempo: "24 horas",
      image: "",
      badge: "",
      badgeColor: "",
    },
    {
      slug: "testosterona-total",
      name: "Testosterona Total",
      category: "hormonal",
      description: "Dosagem hormonal importante para homens e atletas",
      preparo: "Jejum de 8 horas, coletar pela manhã",
      tempo: "48-72 horas",
      image: "",
      badge: "",
      badgeColor: "",
    },
    {
      slug: "vitamina-d",
      name: "Vitamina D (25-OH)",
      category: "especializado",
      description: "Avaliação dos níveis de vitamina D, importante para saúde óssea e imunidade",
      preparo: "Não requer jejum",
      tempo: "48-72 horas",
      image: "",
      badge: "",
      badgeColor: "",
    },
    {
      slug: "psa",
      name: "PSA (Antígeno Prostático Específico)",
      category: "especializado",
      description: "Rastreamento de saúde da próstata em homens acima de 40 anos",
      preparo: "Não requer jejum, evitar relações sexuais 48h antes",
      tempo: "48 horas",
      image: "",
      badge: "",
      badgeColor: "",
    },
    {
      slug: "beta-hcg",
      name: "Beta HCG",
      category: "hormonal",
      description: "Teste de gravidez quantitativo, também usado em acompanhamento de gestação",
      preparo: "Não requer jejum",
      tempo: "24 horas",
      image: "",
      badge: "",
      badgeColor: "",
    },
    {
      slug: "ck",
      name: "Creatina Quinase (CK)",
      category: "especializado",
      description: "Avalia lesões musculares, importante para atletas",
      preparo: "Jejum de 4 horas, evitar exercícios intensos 24h antes",
      tempo: "24 horas",
      image: "",
      badge: "",
      badgeColor: "",
    },
    {
      slug: "acido-urico",
      name: "Ácido Úrico",
      category: "rotina",
      description: "Diagnóstico de gota e avaliação do metabolismo de purinas",
      preparo: "Jejum de 8 horas",
      tempo: "24 horas",
      image: "",
      badge: "",
      badgeColor: "",
    },
  ];

  const filteredExames = exames.filter((exame) => {
    const matchesSearch = exame.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "todos" || exame.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const checkups = [
    {
      id: "cardiovascular",
      name: "Check-up Cardiovascular (Coração)",
      icon: Heart,
      description: "Avaliação essencial para monitorar a saúde do coração e prevenir doenças cardiovasculares. Detecta fatores de risco como colesterol alto, hipertensão e problemas no ritmo cardíaco.",
      color: "text-red-500",
      bgGradient: "from-red-500/20 via-pink-500/20 to-rose-500/20",
      preparation: "Jejum de 12 horas 🍽️",
      justification: "Identifique problemas cardíacos precocemente e previna doenças graves como infarto e AVC.",
      exams: [
        { name: "Hemograma Completo", description: "Avalia células sanguíneas e detecta anemias." },
        { name: "Glicemia em Jejum", description: "Mede níveis de açúcar no sangue." },
        { name: "Colesterol Total e Frações", description: "Analisa perfil lipídico completo." },
        { name: "Triglicerídeos", description: "Mede gorduras no sangue." },
        { name: "Creatinina", description: "Avalia função renal." },
        { name: "Ureia", description: "Verifica funcionamento dos rins." },
      ],
    },
    {
      id: "infantil",
      name: "Check-up Infantil",
      icon: Users,
      description: "Exame completo para crianças, garantindo que o seu filho cresça saudável e sem complicações ocultas.",
      color: "text-blue-500",
      bgGradient: "from-blue-500/20 via-cyan-500/20 to-sky-500/20",
      preparation: "Jejum de 8 horas 🍽️",
      justification: "Esses exames são essenciais para monitorar a saúde das crianças, garantindo que o desenvolvimento esteja em conformidade com as necessidades nutricionais e evitando doenças ocultas.",
      exams: [
        { name: "Hemograma Completo", description: "Avalia células sanguíneas." },
        { name: "Glicemia em Jejum", description: "Verifica níveis de glicose." },
        { name: "Colesterol Total e Frações", description: "Analisa perfil lipídico." },
        { name: "Triglicerídeos", description: "Mede gorduras no sangue." },
        { name: "Creatinina", description: "Avalia função renal." },
        { name: "Ureia", description: "Verifica funcionamento dos rins." },
        { name: "Exame de Urina Tipo 1", description: "Detecta alterações urinárias." },
      ],
    },
    {
      id: "homem",
      name: "Check-up Homem",
      icon: Activity,
      description: "Exame essencial para homens, focado em avaliar o risco de doenças cardiovasculares e monitorar a função prostática.",
      color: "text-indigo-500",
      bgGradient: "from-indigo-500/20 via-purple-500/20 to-violet-500/20",
      preparation: "Jejum de 12 horas 🍽️",
      justification: "Ideal para homens que desejam monitorar sua saúde e prevenir problemas cardíacos e prostáticos.",
      exams: [
        { name: "Hemograma Completo", description: "Avalia células sanguíneas." },
        { name: "Glicemia em Jejum", description: "Mede níveis de glicose." },
        { name: "Colesterol Total e Frações", description: "Analisa perfil lipídico." },
        { name: "Triglicerídeos", description: "Mede gorduras no sangue." },
        { name: "Creatinina", description: "Avalia função renal." },
        { name: "Ureia", description: "Verifica funcionamento dos rins." },
        { name: "PSA (Antígeno Prostático Específico)", description: "Rastreamento de saúde prostática." },
      ],
    },
    {
      id: "mulher",
      name: "Check-up Mulher",
      icon: Heart,
      description: "Check-up personalizado para mulheres, com foco na saúde hormonal e monitoramento de colesterol, glicemia e outros indicadores importantes.",
      color: "text-pink-500",
      bgGradient: "from-pink-500/20 via-rose-500/20 to-fuchsia-500/20",
      preparation: "Jejum de 12 horas 🍽️",
      justification: "Monitore a saúde de forma completa, com foco nas necessidades específicas da mulher, prevenindo doenças hormonais e cardiovasculares.",
      exams: [
        { name: "Hemograma Completo", description: "Avalia células sanguíneas." },
        { name: "Glicemia em Jejum", description: "Mede níveis de glicose." },
        { name: "Colesterol Total e Frações", description: "Analisa perfil lipídico." },
        { name: "Triglicerídeos", description: "Mede gorduras no sangue." },
        { name: "Creatinina", description: "Avalia função renal." },
        { name: "Ureia", description: "Verifica funcionamento dos rins." },
        { name: "Ácido Fólico", description: "Essencial para saúde reprodutiva." },
        { name: "TSH (Hormônio Estimulante da Tireoide)", description: "Avalia função tireoidiana." },
      ],
    },
    {
      id: "endocrinologico",
      name: "Check-up Endocrinológico (Hormônios)",
      icon: Activity,
      description: "Exame detalhado para avaliar a função hormonal e identificar distúrbios endócrinos que podem afetar seu metabolismo, como problemas de tireoide, diabetes e mais.",
      color: "text-emerald-500",
      bgGradient: "from-emerald-500/20 via-teal-500/20 to-green-500/20",
      preparation: "Jejum de 12 horas 🍽️",
      justification: "Ideal para identificar desequilíbrios hormonais que podem afetar a saúde geral, ajudando a tratar precocemente distúrbios endócrinos.",
      exams: [
        { name: "Hemograma Completo", description: "Avalia células sanguíneas." },
        { name: "Glicemia em Jejum", description: "Mede níveis de glicose." },
        { name: "Colesterol Total e Frações", description: "Analisa perfil lipídico." },
        { name: "Triglicerídeos", description: "Mede gorduras no sangue." },
        { name: "Creatinina", description: "Avalia função renal." },
        { name: "Ureia", description: "Verifica funcionamento dos rins." },
        { name: "TSH", description: "Avalia função da tireoide." },
        { name: "T4 Livre", description: "Mede hormônio tireoidiano livre." },
        { name: "Insulina", description: "Avalia produção de insulina." },
      ],
    },
    {
      id: "idoso",
      name: "Check-up Idoso",
      icon: Users,
      description: "Exame completo para monitorar a saúde de pessoas acima de 60 anos, com foco em doenças prevalentes nessa faixa etária, como doenças cardíacas e cânceres.",
      color: "text-amber-500",
      bgGradient: "from-amber-500/20 via-orange-500/20 to-yellow-500/20",
      preparation: "Jejum de 12 horas 🍽️",
      justification: "Acompanhamento de saúde essencial para garantir qualidade de vida na terceira idade, prevenindo doenças comuns entre os mais velhos.",
      exams: [
        { name: "Hemograma Completo", description: "Avalia células sanguíneas." },
        { name: "Glicemia em Jejum", description: "Mede níveis de glicose." },
        { name: "Colesterol Total e Frações", description: "Analisa perfil lipídico." },
        { name: "Triglicerídeos", description: "Mede gorduras no sangue." },
        { name: "Creatinina", description: "Avalia função renal." },
        { name: "Ureia", description: "Verifica funcionamento dos rins." },
        { name: "TSH", description: "Avalia função da tireoide." },
        { name: "PSA (para homens)", description: "Rastreamento prostático." },
      ],
    },
    {
      id: "hepatico",
      name: "Check-up Hepático (Fígado)",
      icon: Activity,
      description: "Exame para avaliar a função do fígado e detectar possíveis doenças hepáticas, como hepatites e cirrose.",
      color: "text-orange-500",
      bgGradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
      preparation: "Jejum de 12 horas 🍽️",
      justification: "Esses exames são cruciais para identificar problemas no fígado, como hepatite, cirrose ou danos causados por substâncias.",
      exams: [
        { name: "Hemograma Completo", description: "Avalia células sanguíneas." },
        { name: "Glicemia em Jejum", description: "Mede níveis de glicose." },
        { name: "Colesterol Total e Frações", description: "Analisa perfil lipídico." },
        { name: "Triglicerídeos", description: "Mede gorduras no sangue." },
        { name: "Creatinina", description: "Avalia função renal." },
        { name: "Ureia", description: "Verifica funcionamento dos rins." },
        { name: "ALT (Alanina Aminotransferase)", description: "Enzima hepática." },
        { name: "AST (Aspartato Aminotransferase)", description: "Enzima hepática." },
        { name: "Bilirrubinas", description: "Avalia função hepática." },
      ],
    },
    {
      id: "renal",
      name: "Check-up Renal (Rim)",
      icon: Activity,
      description: "Exame para monitorar a função dos rins e detectar doenças renais precoces.",
      color: "text-cyan-500",
      bgGradient: "from-cyan-500/20 via-blue-500/20 to-teal-500/20",
      preparation: "Jejum de 12 horas 🍽️",
      justification: "Esses exames ajudam a detectar problemas nos rins, especialmente em pacientes com histórico de diabetes ou hipertensão.",
      exams: [
        { name: "Hemograma Completo", description: "Avalia células sanguíneas." },
        { name: "Glicemia em Jejum", description: "Mede níveis de glicose." },
        { name: "Colesterol Total e Frações", description: "Analisa perfil lipídico." },
        { name: "Triglicerídeos", description: "Mede gorduras no sangue." },
        { name: "Creatinina", description: "Avalia função renal." },
        { name: "Ureia", description: "Verifica funcionamento dos rins." },
        { name: "Urina Tipo 1", description: "Detecta alterações urinárias." },
      ],
    },
    {
      id: "fitness",
      name: "Check-up Fitness",
      icon: Activity,
      description: "Exame para quem pratica atividades físicas intensas, avaliando a saúde cardiovascular e metabólica.",
      color: "text-lime-500",
      bgGradient: "from-lime-500/20 via-green-500/20 to-emerald-500/20",
      preparation: "Jejum de 8 horas 🏋️‍♂️",
      justification: "Ideal para quem pratica esportes e atividades físicas intensas, ajudando a avaliar o impacto no corpo e prevenir lesões.",
      exams: [
        { name: "Hemograma Completo", description: "Avalia células sanguíneas." },
        { name: "Glicemia em Jejum", description: "Mede níveis de glicose." },
        { name: "Colesterol Total e Frações", description: "Analisa perfil lipídico." },
        { name: "Triglicerídeos", description: "Mede gorduras no sangue." },
        { name: "Creatinina", description: "Avalia função renal." },
        { name: "Ureia", description: "Verifica funcionamento dos rins." },
        { name: "Teste de Esforço", description: "Avalia resposta cardiovascular." },
        { name: "Eletrocardiograma (ECG)", description: "Detecta alterações cardíacas." },
      ],
    },
    {
      id: "vitaminas",
      name: "Check-up de Vitaminas",
      icon: Activity,
      description: "Exame para verificar os níveis de vitaminas e minerais essenciais para o corpo, como B12, D, ferro e cálcio.",
      color: "text-violet-500",
      bgGradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
      preparation: "Não requer jejum 🌿",
      justification: "Esses exames ajudam a detectar deficiências nutricionais que podem afetar a saúde geral e o bem-estar.",
      exams: [
        { name: "Vitamina B9 (Ácido Fólico/Folato)", description: "Essencial para formação celular." },
        { name: "Vitamina B12", description: "Importante para sistema nervoso." },
        { name: "Vitamina D-25 Hidroxi", description: "Essencial para saúde óssea." },
        { name: "Cálcio", description: "Mineral importante para ossos." },
        { name: "Ferro", description: "Essencial para transporte de oxigênio." },
        { name: "Potássio", description: "Importante para função muscular." },
        { name: "Fósforo", description: "Essencial para saúde óssea." },
        { name: "Sódio", description: "Importante para equilíbrio hídrico." },
      ],
    },
    {
      id: "dsts",
      name: "Check-up de DSTs (Doenças Sexualmente Transmissíveis)",
      icon: Activity,
      description: "Exame para detectar doenças sexualmente transmissíveis e prevenir complicações a longo prazo.",
      color: "text-rose-500",
      bgGradient: "from-rose-500/20 via-red-500/20 to-pink-500/20",
      preparation: "Não requer jejum 🌿",
      justification: "Esses exames são importantes para detectar infecções sexualmente transmissíveis, prevenindo complicações futuras.",
      exams: [
        { name: "Teste de HIV", description: "Detecta vírus da imunodeficiência." },
        { name: "Teste de Sífilis", description: "Detecta bactéria Treponema." },
        { name: "Hepatite B e C", description: "Detecta vírus das hepatites." },
        { name: "Chlamydia", description: "Detecta bactéria Chlamydia." },
        { name: "Gonorreia", description: "Detecta bactéria Neisseria." },
      ],
    },
    {
      id: "vegano",
      name: "Check-up Vegano",
      icon: Activity,
      description: "Exame indicado para veganos, para monitorar deficiências nutricionais comuns em dietas veganas, como vitamina B12 e ferro.",
      color: "text-green-500",
      bgGradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
      preparation: "Não requer jejum 🌱",
      justification: "Ideal para veganos, ajudando a monitorar níveis de nutrientes essenciais, como ferro e B12.",
      exams: [
        { name: "Hemograma Completo", description: "Avalia células sanguíneas." },
        { name: "Glicemia em Jejum", description: "Mede níveis de glicose." },
        { name: "Colesterol Total e Frações", description: "Analisa perfil lipídico." },
        { name: "Triglicerídeos", description: "Mede gorduras no sangue." },
        { name: "Creatinina", description: "Avalia função renal." },
        { name: "Ureia", description: "Verifica funcionamento dos rins." },
        { name: "Ferro", description: "Essencial para prevenir anemia." },
        { name: "Vitamina B12", description: "Importante para veganos." },
      ],
    },
  ];

  const testimonials = [
    { name: "João Silva", city: "Rio Pomba", rating: 5, text: "Excelente atendimento e resultados rápidos. Recomendo!", service: "Check-up Completo" },
    { name: "Maria Oliveira", city: "Mercês", rating: 5, text: "Profissionais qualificados e ambiente acolhedor.", service: "Exames de Rotina" },
    { name: "Carlos Santos", city: "Guarani", rating: 5, text: "Ótima experiência! Equipe muito atenciosa.", service: "Check-up Diabético" },
  ];

  const faqs = [
    { question: "Como agendar um exame?", answer: "Você pode agendar seu exame diretamente pelo nosso site, WhatsApp (32) 99199-0239 ou entrando em contato pelo telefone fixo (32) 3571-1599." },
    { question: "Quais são os horários de atendimento?", answer: "Atendemos de segunda a sexta-feira, das 7h às 18h, e aos sábados das 7h às 12h." },
    { question: "Preciso fazer jejum para todos os exames?", answer: "Não. O jejum depende do tipo de exame. Consulte sempre as orientações específicas para cada exame ou entre em contato conosco." },
    { question: "Quanto tempo demora para sair o resultado?", answer: "O prazo varia conforme o exame, mas a maioria dos resultados fica pronta em 24 a 48 horas." },
    { question: "Vocês atendem convênios?", answer: "Sim! Trabalhamos com diversos convênios. Consulte a lista completa em nossa página de convênios." },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Início", url: "https://www.labclinmg.com.br" },
    { name: "Exames", url: "https://www.labclinmg.com.br/exames" },
  ]);

  const medicalTestsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema,
      {
        "@type": "ItemList",
        "name": "Exames Laboratoriais Labclin",
        "itemListElement": [
          {
            "@type": "MedicalTest",
            "name": "Hemograma Completo",
            "description": "Avaliação completa das células sanguíneas para detectar anemias, infecções e outras condições",
            "usedToDiagnose": ["Anemia", "Infecções", "Leucemia", "Distúrbios da coagulação"],
            "normalRange": "Valores de referência variam por idade e sexo",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceLocation": {
                "@type": "Place",
                "name": "Labclin Rio Pomba, Mercês, Guarani e Silveirânia"
              }
            }
          },
          {
            "@type": "MedicalTest",
            "name": "Glicemia de Jejum",
            "description": "Medição dos níveis de açúcar no sangue, fundamental para diagnóstico de diabetes",
            "usedToDiagnose": ["Diabetes Mellitus", "Pré-diabetes", "Hipoglicemia"],
            "normalRange": "70 a 99 mg/dL"
          },
          {
            "@type": "MedicalTest",
            "name": "Colesterol Total e Frações",
            "description": "Análise completa do perfil lipídico (HDL, LDL, VLDL e triglicérides)",
            "usedToDiagnose": ["Dislipidemia", "Risco cardiovascular"],
            "normalRange": "Colesterol total: até 200 mg/dL"
          },
          {
            "@type": "MedicalTest",
            "name": "TSH e T4 Livre",
            "description": "Avaliação completa da função da tireoide",
            "usedToDiagnose": ["Hipotireoidismo", "Hipertireoidismo"],
            "normalRange": "TSH: 0,4 a 4,0 mUI/L"
          },
          {
            "@type": "MedicalTest",
            "name": "COVID-19",
            "description": "Exame para detecção do vírus SARS-CoV-2",
            "usedToDiagnose": ["COVID-19", "Infecção por SARS-CoV-2"]
          },
          {
            "@type": "MedicalTest",
            "name": "Sexagem Fetal",
            "description": "Exame para determinar o sexo do bebê com alta precisão a partir da 8ª semana de gestação",
            "usedToDiagnose": ["Determinação do sexo fetal"]
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Exames Laboratoriais"
        description="Descubra exames laboratoriais especializados e check-ups personalizados no Labclin. COVID-19, Influenza, Hemoglobina Glicada, Toxicologia e mais. Agende online."
        keywords="exames laboratoriais, check-ups personalizados, COVID-19, Influenza, hemoglobina glicada, toxicologia, exames especializados, exames de rotina"
        canonicalUrl="https://www.labclinmg.com.br/exames"
        structuredData={medicalTestsSchema}
      />
      <Header />

      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-accent to-secondary py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Check-ups Personalizados para sua Saúde
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8">
                Escolha o check-up ideal para monitorar sua saúde e agende agora pelo WhatsApp.
              </p>

              {/* Search */}
              <div className="relative max-w-2xl mx-auto mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar exame..."
                  className="pl-12 h-14 text-lg bg-card/95 backdrop-blur-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Link to="/agendar">
                <Button size="lg" variant="secondary" className="shadow-strong hover:scale-105 transition-transform text-lg px-8">
                  Agendar Check-up
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Check-ups Personalizados */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Check-ups Personalizados
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pacotes completos de exames desenvolvidos para atender necessidades específicas de saúde
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {checkups.map((checkup) => {
                const Icon = checkup.icon;
                return (
                  <Card key={checkup.id} className={`group hover:shadow-strong transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden bg-gradient-to-br ${checkup.bgGradient} hover:scale-105`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ${checkup.color}`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-lg leading-tight flex-1">{checkup.name}</CardTitle>
                      </div>
                      <CardDescription className="text-sm leading-relaxed">{checkup.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Justification */}
                      <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                        <p className="text-xs text-foreground font-medium leading-relaxed">{checkup.justification}</p>
                      </div>

                      {/* Preparation */}
                      <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                        <p className="text-sm font-semibold text-foreground">
                          {checkup.preparation}
                        </p>
                      </div>

                      {/* Exams List - Collapsed by default */}
                      <div className="space-y-2">
                        <h4 className="font-bold text-foreground text-xs uppercase tracking-wide flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          Exames inclusos ({checkup.exams.length})
                        </h4>
                        <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                          {checkup.exams.map((exam, index) => (
                            <div key={index} className="bg-card/50 backdrop-blur-sm rounded-md p-2 border border-border/50 hover:border-primary/30 transition-colors">
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-secondary flex-shrink-0 mt-0.5" />
                                <div className="flex-1 min-w-0">
                                  <h5 className="font-semibold text-foreground text-xs mb-0.5 truncate">{exam.name}</h5>
                                  <p className="text-xs text-muted-foreground leading-snug">{exam.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link to="/agendar">
                          <Button variant="default" className="w-full shadow-md group-hover:shadow-lg transition-all">
                            Agendar Check-up
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border bg-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    size="lg"
                    className="gap-2 transition-all hover:scale-105"
                  >
                    {CategoryIcon && <CategoryIcon className="h-4 w-4" />}
                    {category.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Exames List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredExames.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredExames.map((exame, index) => (
                  <Card
                    key={exame.slug}
                    className="group hover:shadow-strong transition-all duration-300 border-border hover:border-primary/50 hover:scale-105 relative overflow-hidden animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {exame.image && (
                      <div className="aspect-square overflow-hidden bg-muted/30">
                        <img 
                          src={exame.image} 
                          alt={exame.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          width="300"
                          height="300"
                        />
                      </div>
                    )}
                    {exame.badge && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge 
                          className={`${exame.badgeColor} text-white border-0 shadow-lg animate-pulse`}
                        >
                          {exame.badge}
                        </Badge>
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {categories.find((c) => c.id === exame.category)?.label}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                          {exame.name}
                        </h3>
                      </div>

                      <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{exame.description}</p>

                      <div className="space-y-2 text-xs mb-4 bg-muted/30 rounded-lg p-3">
                        <div>
                          <span className="font-semibold text-foreground">Preparo:</span>{" "}
                          <span className="text-muted-foreground">{exame.preparo}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">Resultado:</span>{" "}
                          <span className="text-muted-foreground">{exame.tempo}</span>
                        </div>
                      </div>

                      <Link to="/agendar">
                        <Button
                          variant="default"
                          className="w-full justify-between hover:shadow-md transition-all"
                          size="sm"
                        >
                          Agendar Exame
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  Nenhum exame encontrado com os filtros selecionados.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                O Que Nossos Pacientes Dizem
              </h2>
              <p className="text-lg text-muted-foreground">
                Experiências reais de quem confia no Labclin
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-lg text-muted-foreground">
                Tire suas dúvidas sobre nossos exames e serviços
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary via-accent to-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Pronto para Cuidar da Sua Saúde?
            </h2>
            <p className="text-xl text-primary-foreground/95 mb-8 max-w-2xl mx-auto">
              Agende agora pelo WhatsApp seu exame ou check-up e tenha resultados rápidos e precisos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/agendar">
                <Button size="lg" variant="secondary" className="shadow-strong text-lg px-8">
                  Agendar Exame
                </Button>
              </Link>
              <a
                href="https://wa.me/5532991990239?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20exames."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="bg-card/20 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-card/30 text-lg px-8">
                  Fale Conosco
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Exames;
