import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

/**
 * Landing Page - Betel Corp Consultoria e Captação
 * Design: Minimalismo Corporativo Sofisticado
 * Paleta: Preto (#000000) e Branco (#FFFFFF) com destaque em Verde Limão (#CCFF00)
 * Tipografia: Poppins (títulos) + Inter (corpo)
 */

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Captação de Recursos",
      description:
        "Estruturação e execução de estratégias para acesso a recursos públicos e privados.",
    },
    {
      title: "Desenvolvimento Institucional",
      description:
        "Fortalecimento da governança, processos e posicionamento institucional.",
    },
    {
      title: "Projetos e Parcerias",
      description:
        "Elaboração, gestão e acompanhamento de projetos e parcerias estratégicas.",
    },
    {
      title: "Assessoria Estratégica",
      description:
        "Apoio técnico para tomada de decisão, planejamento e crescimento sustentável.",
    },
  ];

  const audiences = [
    "Hospitais e instituições de saúde",
    "Entidades filantrópicas e assistenciais",
    "Organizações sociais e fundações",
    "Iniciativas de impacto social",
  ];

  const differentials = [
    "Visão estratégica aliada à prática",
    "Linguagem clara para gestores e conselhos",
    "Atuação ética, responsável e transparente",
    "Foco em sustentabilidade, não em ações pontuais",
    "Compreensão real da realidade filantrópica",
  ];

  const process = [
    { step: 1, title: "Diagnóstico institucional" },
    { step: 2, title: "Planejamento estratégico" },
    { step: 3, title: "Estruturação da captação" },
    { step: 4, title: "Acompanhamento e ajustes" },
    { step: 5, title: "Consolidação de resultados" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="font-display text-2xl text-white">Betel Corp</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#servicos" className="hover:text-accent transition-all duration-300">
              Serviços
            </a>
            <a href="#publico" className="hover:text-accent transition-all duration-300">
              Público
            </a>
            <a href="#diferencial" className="hover:text-accent transition-all duration-300">
              Diferencial
            </a>
            <a href="#processo" className="hover:text-accent transition-all duration-300">
              Processo
            </a>
          </div>
          <Button
            className="bg-accent text-black hover:bg-accent/90 font-semibold"
            onClick={() => {
              window.location.href = "mailto:contato@betelcorp.com.br";
            }}
          >
            Contato
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/JZ7n5jQl0xvdmb0kbfUXVa/sandbox/HJqZMw3JLbhFq9m2OScJCY-img-1_1770500861000_na1fn_aGVyby1jb25zdWx0aW5n.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSlo3bjVqUWwweHZkbWIwa2JmVVhWYS9zYW5kYm94L0hKcVpNdzNKTGJoRnE5bTJPU2NKQ1ktaW1nLTFfMTc3MDUwMDg2MTAwMF9uYTFmbl9hR1Z5YnkxamIyNXpkV3gwYVc1bi5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=s6W82kyVZHOdVwSU3N1JomR4PXUmEtm6OocFDSEFpFaBqU7K4PC4dYiJ7upwh6NM7S1KQOhsrW8hjrWiGE4ic-sCXNSOMrDas8Ma-1UwIsQnIkwZLFl0780WLKua2YfpKp~STSLb7QoBQOLK9mq14cN3YHOIkG6em4jsU5nD13AjEpG93JjtqeahP7VQf-920JrRb0q0lwZnLdFEkyujC9nMxoDiDkZJaVXhnZg07Ysii~VZX4MW4oBdd6ahNTKEru0CtU0DKgciGNlsyGD2VwZAVrhK5j1necN4TsOT71dZ61CTN5LqPeg1l3uTcFvN~gXq3pMyBVBTgt0js3vcDA__"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 container text-center max-w-3xl mx-auto px-4">
          <div className="inline-block mb-8">
            <div className="h-1 bg-accent w-12 mx-auto mb-6"></div>
          </div>
          <h1 className="font-display text-5xl md:text-7xl mb-6 leading-tight">
            Betel Corp Consultoria e Captação
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-body">
            Onde propósito e recursos se encontram
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-body">
            Consultoria estratégica e captação de recursos para entidades
            filantrópicas que geram impacto social.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-black hover:bg-accent/90 font-semibold text-base"
              onClick={() => {
                window.location.href = "mailto:contato@betelcorp.com.br";
              }}
            >
              Falar com um especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold text-base"
              onClick={() => {
                document.getElementById("servicos")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Conhecer nossa atuação
            </Button>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-20 md:py-32 bg-black border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="accent-line"></div>
            <h2 className="font-display text-4xl md:text-5xl mb-8">Quem Somos</h2>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed font-body">
            Somos uma consultoria especializada em captação de recursos e
            desenvolvimento institucional para entidades filantrópicas. Atuamos
            apoiando organizações que geram impacto social a estruturar
            processos, acessar recursos e garantir sustentabilidade financeira
            com responsabilidade, estratégia e propósito.
          </p>
        </div>
      </section>

      {/* O que Fazemos */}
      <section id="servicos" className="py-20 md:py-32 bg-black">
        <div className="container">
          <div className="mb-16">
            <div className="accent-line"></div>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              O que Fazemos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setActiveService(index)}
              >
                <div className="border border-border p-8 transition-all duration-300 hover:border-accent hover:bg-accent/5">
                  <h3 className="font-heading text-xl mb-4 text-white group-hover:text-accent transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para Quem Atuamos */}
      <section id="publico" className="py-20 md:py-32 bg-black border-t border-border">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="accent-line"></div>
              <h2 className="font-display text-4xl md:text-5xl mb-8">
                Para Quem Atuamos
              </h2>
              <div className="space-y-4">
                {audiences.map((audience, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-gray-300 font-body">{audience}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 overflow-hidden">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/JZ7n5jQl0xvdmb0kbfUXVa/sandbox/HJqZMw3JLbhFq9m2OScJCY-img-2_1770500864000_na1fn_aW5zdGl0dXRpb25hbC1pbXBhY3Q.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSlo3bjVqUWwweHZkbWIwa2JmVVhWYS9zYW5kYm94L0hKcVpNdzNKTGJoRnE5bTJPU2NKQ1ktaW1nLTJfMTc3MDUwMDg2NDAwMF9uYTFmbl9hVzV6ZEdsMGRYUnBiMjVoYkMxcGJYQmhZM1EucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UmMi8aGyC~J9C9Lr2-dDGKfBzMtATcbebS7By3LdPfb4~6XXTKu7Bn8cmUnUtIePfA4Y1meSS-5~ADnNhcA7k6OfbfgyrKoH1wOD7e0XgA4TGnZ2~LsN-iMovp9fiKjVWF~r86Bl3-soqvUEXI-xreiShR8dDjDiuAvJ8z553y2iw90dld5feWbF4Drx079P5iVEz6j5VrQ1kt1h~Yna7AfTbUiJM1q0SQKnL59xVH1kgcpwqshXpggm9szttk5v5o4oyh81CXzxU1puKJXd0dHbIIJKw5FgF0zkByNDqvtPQEC-ewU19~yUc1Ir6AzI2fZdU58hrWL2KaKx7KAzsw__"
                alt="Instituições"
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Diferencial */}
      <section id="diferencial" className="py-20 md:py-32 bg-black border-t border-border">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 overflow-hidden order-2 md:order-1">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/JZ7n5jQl0xvdmb0kbfUXVa/sandbox/HJqZMw3JLbhFq9m2OScJCY-img-3_1770500863000_na1fn_c29jaWFsLWltcGFjdA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSlo3bjVqUWwweHZkbWIwa2JmVVhWYS9zYW5kYm94L0hKcVpNdzNKTGJoRnE5bTJPU2NKQ1ktaW1nLTNfMTc3MDUwMDg2MzAwMF9uYTFmbl9jMjlqYVdGc0xXbHRjR0ZqZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HNU0r6PTsBvbbHoxTdFhEn-nz6zkbAUWqV35w22R6QFcfHp84~WKxBrnOl7oPlfHUmKwfoKU00D6z2zSeMDg~a-l0dJ3IvOo01kWbTKwnayE46KKnAVSlvkEjt1O77LoJJeAOJD~rKuM5sEJuJMJJBYMUhBCIMXeSfq~OIsFaEA7ZM8BMlv8v~oQJD6jtPdLg3oy9gOdASjENidrgJsx7vDEd0lUvqoJd8Nf5Toas1LICEwdVPkdEBS5dV3CLyRGj-O3nILbhYSxs-sPCwLU0Hv4RT-pKp~VqgI7w47gu-4fOrWGDy4G2b3b~7~qCp8QaAve6Bw8SJUd4c33X3FLDA__"
                alt="Impacto Social"
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="accent-line"></div>
              <h2 className="font-display text-4xl md:text-5xl mb-8">
                Nosso Diferencial
              </h2>
              <div className="space-y-4">
                {differentials.map((diff, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-300 font-body">{diff}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados e Impacto */}
      <section className="py-20 md:py-32 bg-black border-t border-border">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <div className="accent-line"></div>
            <h2 className="font-display text-4xl md:text-5xl mb-8">
              Resultados e Impacto
            </h2>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed font-body">
            Nossa atuação é orientada por impacto, responsabilidade e resultados
            concretos. Cada projeto é conduzido com atenção às necessidades
            institucionais, respeitando diretrizes legais, financeiras e
            estratégicas, sempre com foco na sustentabilidade a longo prazo.
          </p>
        </div>
      </section>

      {/* Como Trabalhamos */}
      <section id="processo" className="py-20 md:py-32 bg-black border-t border-border">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <div className="accent-line"></div>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Como Trabalhamos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {process.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-black font-bold font-display">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-white mb-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-96 overflow-hidden">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/JZ7n5jQl0xvdmb0kbfUXVa/sandbox/HJqZMw3JLbhFq9m2OScJCY-img-4_1770500863000_na1fn_ZmluYW5jaWFsLXN1c3RhaW5hYmlsaXR5.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSlo3bjVqUWwweHZkbWIwa2JmVVhWYS9zYW5kYm94L0hKcVpNdzNKTGJoRnE5bTJPU2NKQ1ktaW1nLTRfMTc3MDUwMDg2MzAwMF9uYTFmbl9abWx1WVc1amFXRnNMWE4xYzNSaGFXNWhZbWxzYVhSNS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aAv8wLUCMTeUQ07O8r5DFlouZw8zaJ7zVmVCEEYNin98IH5eZrA5yhqR4Q2EMFeGCXMYETd~po4ty7~-ao8KBBMYlcUOUksx5uaH~Z20AbtmCJo1eTeisUVSy2pxF2e3vZb2qJotgK919Wd~u8dPNkSpFP8Mu2NUHSPJTIKgihzGcOJb7A9KFe5R80dChrl6wy1FAIvLK2CXyMwa6ObC0~r~Q6Lgd0azDSR3emNt15c7x8AzQ1auV68gDb8x4MuSIoZRi1TIRUjfYGcuBphyJK~9PEm-99idHxoyqKH54gWX-VKlmAYHKcUjaKCeOwE21hCBetivRLB3cdfAbnbdg__"
                alt="Sustentabilidade Financeira"
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-32 bg-black border-t border-border">
        <div className="container max-w-3xl text-center">
          <div className="inline-block mb-8">
            <div className="h-1 bg-accent w-12 mx-auto mb-6"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-8">
            Está pronto para fortalecer sua instituição com estratégia e
            sustentabilidade?
          </h2>
          <Button
            size="lg"
            className="bg-accent text-black hover:bg-accent/90 font-semibold text-base"
            onClick={() => {
              window.location.href = "mailto:contato@betelcorp.com.br";
            }}
          >
            Entre em contato com a Betel Corp
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-border py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-display text-xl mb-2">Betel Corp</h3>
              <p className="text-gray-400 text-sm font-body">
                Consultoria e Captação
              </p>
              <p className="text-gray-500 text-sm mt-2 font-body">
                Onde propósito e recursos se encontram
              </p>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-4">Contato</h4>
              <p className="text-gray-400 text-sm font-body">
                <a
                  href="mailto:contato@betelcorp.com.br"
                  className="hover:text-accent transition-all duration-300"
                >
                  contato@betelcorp.com.br
                </a>
              </p>
              <p className="text-gray-400 text-sm font-body mt-2">
                <a
                  href="https://wa.me/5511999999999"
                  className="hover:text-accent transition-all duration-300"
                >
                  WhatsApp
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-accent transition-all duration-300 text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-accent transition-all duration-300 text-sm"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-gray-500 text-sm text-center font-body">
              © 2026 Betel Corp Consultoria e Captação. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
