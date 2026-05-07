import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calendar, MapPin, Users, DollarSign, Trophy, Medal, Award,
  Camera, Mic, Monitor, Swords, Radio, ChevronDown, Crosshair,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaButton } from "@/components/CtaButton";
import { WhatsAppModal } from "@/components/WhatsAppModal";
import heroImg from "@/assets/cs2-hero.jpg";
import arenaImg from "@/assets/cs2-arena.jpg";
import broadcastImg from "@/assets/cs2-broadcast.jpg";
import playerImg from "@/assets/cs2-player.jpg";
import trophyImg from "@/assets/cs2-trophy.jpg";
import sgaLogo from "@/assets/sga-logo.png";

const ogImage = `${import.meta.env.BASE_URL}cs-prime.png`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CS Prime do Interior — Ribeirão Preto | Campeonato Presencial CS2" },
      {
        name: "description",
        content:
          "O mais próximo que você vai chegar do cenário profissional dentro de um campeonato amador de CS2 em Ribeirão Preto. Inscreva-se já.",
      },
      { property: "og:title", content: "CS Prime do Interior — Ribeirão Preto" },
      {
        property: "og:description",
        content:
          "Campeonato presencial de Counter-Strike 2 com transmissão ao vivo, narração profissional e estrutura de alto nível.",
      },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: "Jogadores de CS2 em arena escura iluminada por luzes laranja" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <WhatsAppModal open={open} onOpenChange={setOpen} />

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <img
              src={sgaLogo}
              alt="SGA"
              width={180}
              height={44}
              className="h-10 w-auto object-contain"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8 font-mono text-[10px] font-light tracking-[0.16em] text-muted-foreground">
            <a href="#diferencial" className="hover:text-ember transition-colors">Diferencial</a>
            <a href="#info" className="hover:text-ember transition-colors">Info</a>
            <a href="#premios" className="hover:text-ember transition-colors">Prêmios</a>
            <a href="#faq" className="hover:text-ember transition-colors">F.A.Q</a>
          </nav>
          <button
            onClick={openModal}
            className="font-mono text-[10px] font-light tracking-[0.12em] px-4 py-2 bg-ember text-primary-foreground hover:scale-105 transition-transform clip-tactical"
          >
            WhatsApp
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <img
          src={heroImg}
          alt="Jogadores de CS2 em arena escura iluminada por luzes laranja"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-radial-ember" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-ember/40 bg-ember/10 mb-6">
              <span className="w-2 h-2 bg-ember rounded-full pulse-ember" />
              <span className="font-mono text-xs tracking-widest text-ember uppercase">
                1ª Edição · Ribeirão Preto
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              CS Prime <br />
              <span className="text-ember">do Interior</span>
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-2xl font-light">
              O mais próximo que você vai chegar do{" "}
              <span className="text-foreground font-medium">cenário profissional</span> dentro de um
              campeonato amador de Counter-Strike 2.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <CtaButton onClick={openModal}>Garantir minha vaga</CtaButton>
              <a href="#info">
                <CtaButton variant="ghost">Ver detalhes</CtaButton>
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
              {[
                { k: "Formato", v: "5v5" },
                { k: "Times", v: "8" },
                { k: "Modalidade", v: "Presencial" },
                { k: "Eliminação", v: "Dupla" },
              ].map((s) => (
                <div key={s.k} className="border-l-2 border-ember pl-3">
                  <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    {s.k}
                  </p>
                  <p className="font-display text-2xl mt-1">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ChevronDown className="absolute bottom-6 left-1/2 -translate-x-1/2 w-6 h-6 text-ember animate-bounce" />
      </section>

      {/* MANIFESTO */}
      <section className="py-32 relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-ember uppercase mb-6">// Manifesto</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            A maioria dos campeonatos<br />
            tenta te convencer com <span className="text-ember">prêmio.</span>
          </h2>
          <div className="mt-12 max-w-2xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>Aqui, a proposta é outra.</p>
            <p>Você não vem só pra competir.</p>
            <p className="text-2xl text-foreground font-medium">
              Você vem pra <span className="text-ember">viver o jogo de verdade.</span>
            </p>
            <div className="h-px w-24 bg-ember mx-auto my-8" />
            <p>A mesma pressão. A mesma emoção.</p>
            <p>A mesma sensação de um campeonato profissional.</p>
            <p className="font-display text-3xl text-foreground tracking-wider">Só que acessível.</p>
          </div>
        </div>
      </section>

      {/* IMERSÃO IMG */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={broadcastImg}
          alt="Cabine de transmissão profissional CS2"
          loading="lazy"
          width={1280}
          height={896}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-16 w-full">
            <h2 className="font-display text-3xl md:text-5xl max-w-3xl">
              Você nunca jogou <span className="text-ember">Counter-Strike</span> assim.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Transmissão ao vivo. Narrador profissional. Entrevistas. Estrutura de alto nível.
              Aqui, você não assiste — <span className="text-foreground font-medium">você vive.</span>
            </p>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferencial" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.3em] text-ember uppercase mb-4">// Diferenciais</p>
            <h2 className="font-display text-4xl md:text-5xl">
              O que torna esse campeonato <span className="text-ember">diferente</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { n: "01", icon: Swords, t: "100% Presencial", d: "Aqui não é online. É competição real, frente a frente." },
              { n: "02", icon: Radio, t: "Sua gameplay ao vivo", d: "Transmissão com HUD profissional, narrador e entrevistas. Seu jogo vira espetáculo." },
              { n: "03", icon: Camera, t: "Você vira conteúdo", d: "Bastidores, entrevistas e momentos reais que ficam registrados dentro e fora do jogo." },
              { n: "04", icon: Crosshair, t: "Ambiente competitivo real", d: "Times separados, comunicação segura e foco total. Aqui é competição de verdade." },
              { n: "05", icon: Monitor, t: "Mesmo setup pra todos", d: "Mesma máquina, mesma performance. Aqui não é equipamento — é jogo." },
              { n: "06", icon: Mic, t: "Experiência completa", d: "Fotógrafo, videomaker e cobertura completa do campeonato do início ao fim." },
            ].map((c) => (
              <div
                key={c.n}
                className="group relative bg-card border border-border p-7 hover:border-ember transition-all clip-tactical overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-ember/5 group-hover:bg-ember/10 transition-colors blur-2xl" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <c.icon className="w-8 h-8 text-ember" />
                    <span className="font-mono text-xs text-muted-foreground tracking-wider">
                      {c.n}
                    </span>
                  </div>
                  <h3 className="font-display text-xl tracking-wide mb-3">{c.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGINA */}
      <section className="relative py-32 overflow-hidden">
        <img
          src={playerImg}
          alt="Jogador de CS2 concentrado"
          loading="lazy"
          width={1024}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl">
            Imagina <span className="text-ember">viver isso.</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6 text-left">
            {[
              "Seu time entrando na arena.",
              "Seu nick aparecendo na transmissão.",
              "Narrador comentando sua jogada.",
              "Gente assistindo ao vivo.",
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-4 p-4 border-l-2 border-ember bg-card/50">
                <span className="font-mono text-ember text-sm">0{i + 1}</span>
                <p className="text-lg">{t}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-2xl text-muted-foreground">
            Cada partida vira um momento.<br />
            E algumas… <span className="text-foreground font-display tracking-wider">viram história.</span>
          </p>
        </div>
      </section>

      {/* INFO */}
      <section id="info" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.3em] text-ember uppercase mb-4">// Briefing</p>
            <h2 className="font-display text-4xl md:text-5xl">
              Como funciona o <span className="text-ember">campeonato</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { icon: Calendar, k: "Data", v: "17/05/2026", s: "Domingo · 08h00" },
              { icon: MapPin, k: "Local", v: "Ribeirão Preto", s: "Av. Nove de Julho, 1992" },
              { icon: Users, k: "Formato", v: "5v5 · 8 times", s: "Eliminação dupla" },
              { icon: DollarSign, k: "Inscrição", v: "R$ 79,90", s: "por competidor" },
            ].map((i) => (
              <div key={i.k} className="bg-card border border-border p-6 clip-tactical">
                <i.icon className="w-6 h-6 text-ember mb-4" />
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  {i.k}
                </p>
                <p className="font-display text-2xl mt-1">{i.v}</p>
                <p className="text-sm text-muted-foreground mt-1">{i.s}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border p-8 md:p-12 clip-tactical">
            <h3 className="font-display text-2xl mb-6 tracking-wider">
              <span className="text-ember">//</span> O que está incluso
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Estrutura presencial completa",
                "Transmissão ao vivo com narração",
                "Cobertura com videomaker e fotógrafo",
                "Troféus e medalhas para os finalistas",
                "Registro no ranking oficial",
                "Computadores, monitores e cadeiras",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-ember" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRÊMIOS */}
      <section id="premios" className="relative py-32 overflow-hidden">
        <img
          src={trophyImg}
          alt="Troféu CS Prime"
          loading="lazy"
          width={1280}
          height={896}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.3em] text-ember uppercase mb-4">// Reconhecimentos</p>
            <h2 className="font-display text-4xl md:text-5xl">
              Mais que prêmio. <span className="text-ember">É legado.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                place: "3º Lugar", icon: Award, title: "Entre os destaques",
                items: ["Registro no ranking oficial", "Destaque no histórico da edição", "Acesso antecipado para próximas vagas"],
              },
              {
                place: "2º Lugar", icon: Medal, title: "Destaque oficial",
                items: ["Medalhas personalizadas", "Destaque no ranking oficial", "Registro na edição do campeonato", "Prioridade na próxima inscrição"],
                highlight: true,
              },
              {
                place: "1º Lugar", icon: Trophy, title: "Nome na história",
                items: ["Troféu personalizado da edição", "Medalhas para cada jogador", "Destaque máximo no ranking", "Registro no Hall dos Campeões", "Conteúdo nas redes e portal", "Destaque como campeão"],
              },
            ].map((p) => (
              <div
                key={p.place}
                className={`relative bg-card border p-8 clip-tactical ${
                  p.highlight ? "border-ember shadow-ember md:scale-105" : "border-border"
                }`}
              >
                <p.icon className={`w-10 h-10 mb-4 ${p.highlight ? "text-ember" : "text-muted-foreground"}`} />
                <p className="font-mono text-xs tracking-widest text-ember uppercase">{p.place}</p>
                <h3 className="font-display text-2xl mt-1 mb-6 tracking-wider">{p.title}</h3>
                <ul className="space-y-3">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-ember">›</span> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <img
          src={arenaImg}
          alt="Arena de CS2"
          loading="lazy"
          width={1280}
          height={896}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Se você quer só jogar,<br />
            <span className="text-muted-foreground">qualquer lugar serve.</span>
          </h2>
          <p className="mt-8 text-2xl">
            Agora, se você quer viver algo diferente…<br />
            <span className="text-ember font-display tracking-wider">essa é a sua chance.</span>
          </p>
          <div className="mt-12">
            <CtaButton onClick={openModal}>Quero participar</CtaButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.3em] text-ember uppercase mb-4">// F.A.Q</p>
            <h2 className="font-display text-4xl md:text-5xl">Perguntas frequentes</h2>
            <p className="text-muted-foreground mt-3">Tire suas dúvidas sobre o campeonato</p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border px-5 clip-tactical"
              >
                <AccordionTrigger className="font-display text-base tracking-wide hover:text-ember hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2 leading-relaxed">
                  {f.a.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 border-t border-border bg-card/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-ember uppercase mb-4">// Campeonato</p>
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            Como você quer <span className="text-ember">participar?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Escolha uma opção abaixo para te direcionarmos ao atendimento certo no WhatsApp.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CtaButton onClick={openModal}>
              <Users className="w-4 h-4" /> Ver opções
            </CtaButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={sgaLogo}
              alt="SGA"
              width={140}
              height={34}
              className="h-8 w-auto object-contain"
            />
            <span className="font-mono text-[10px] font-light tracking-[0.16em]">CS PRIME DO INTERIOR</span>
          </div>
          <p className="font-mono text-[10px] font-light text-muted-foreground tracking-[0.14em]">
            © 2026 · Ribeirão Preto · SP
          </p>
        </div>
      </footer>
    </div>
  );
}

const FAQS = [
  {
    q: "Como faço minha inscrição?",
    a: [
      "A inscrição é feita pelo WhatsApp.",
      "Se você já tem time, é só verificar se ainda tem vaga e garantir sua participação.",
      "Se ainda não tem, você pode montar o seu ou entrar em um time com ajuda da nossa organização.",
      "O valor é R$79,90 por competidor.",
    ],
  },
  {
    q: "Posso participar mesmo sem time fechado?",
    a: ["Sim. Se você não tem um time, pode chamar a gente no WhatsApp que ajudamos você a encontrar um time ou montar um do zero."],
  },
  {
    q: "Qual o valor da inscrição?",
    a: ["O valor é R$79,90 por competidor.", "Cada jogador garante sua própria vaga, então fica mais simples para participar, mesmo sem time completo."],
  },
  {
    q: "Como funciona o formato do campeonato?",
    a: ["O campeonato é 5v5 com 8 times.", "Formato de eliminação dupla, com chave superior e inferior."],
  },
  {
    q: "Que horas começa o campeonato?",
    a: [
      "O campeonato começa às 08h00, com o primeiro jogo já acontecendo ao vivo.",
      "Os horários das partidas são definidos após o fechamento das inscrições e o sorteio dos confrontos.",
      "Cada equipe recebe o horário exato do seu jogo, então nem todos os times precisam estar presentes às 08h00.",
      "A previsão de encerramento é entre 21h e 22h, podendo variar de acordo com o andamento das partidas.",
    ],
  },
  {
    q: "O campeonato é realmente presencial?",
    a: ["Sim. O campeonato é 100% presencial, com todos os jogadores competindo no mesmo local."],
  },
  {
    q: "Os jogos são transmitidos ao vivo?",
    a: ["Sim. Todas as partidas são transmitidas ao vivo com HUD profissional, narrador e cobertura completa."],
  },
  {
    q: "O campeonato tem fotos e vídeos?",
    a: ["Sim. O evento conta com fotógrafo, videomaker e produção de conteúdo durante toda a competição."],
  },
  {
    q: "Preciso levar meus periféricos?",
    a: [
      "Sim. É obrigatório.",
      "Cada jogador deve levar seus próprios periféricos, como mouse, teclado e headset.",
      "Não fornecemos, emprestamos ou alugamos periféricos no local.",
      "Toda a estrutura do campeonato já é fornecida, incluindo computador, monitor, cadeira e ambiente.",
    ],
  },
  {
    q: "Posso levar meu próprio computador ou monitor?",
    a: ["Não. Toda a estrutura do campeonato já é fornecida pela organização. Cada jogador deve levar apenas seus próprios periféricos."],
  },
  {
    q: "Posso jogar de casa ou de outro lugar?",
    a: ["Não. O campeonato é 100% presencial e todos os jogadores da equipe devem competir no local do evento."],
  },
  {
    q: "Pode levar comida ou bebida?",
    a: ["Comida, sim. Bebida, não.", "Você pode levar alimentos, mas as bebidas devem ser consumidas no local conforme a disponibilidade da organização."],
  },
  {
    q: "Posso levar acompanhantes?",
    a: ["Sim. É permitido levar acompanhantes para assistir e acompanhar o campeonato no local."],
  },
  {
    q: "Tem estacionamento?",
    a: ["Sim, temos vagas limitadas no local.", "Além disso, também existem opções de estacionamento e vagas nas proximidades."],
  },
];
