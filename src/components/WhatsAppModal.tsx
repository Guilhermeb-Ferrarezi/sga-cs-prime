import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Users, UserPlus } from "lucide-react";

const PHONE = "5516991069776";

const buildLink = (msg: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WhatsAppModal({ open, onOpenChange }: Props) {
  const options = [
    {
      icon: Users,
      title: "Já tenho time",
      desc: "Quero garantir minha vaga junto com meu squad no CS Prime do Interior.",
      msg: "Olá! Já tenho time fechado e quero garantir nossa vaga no CS Prime do Interior – Ribeirão Preto.",
    },
    {
      icon: UserPlus,
      title: "Quero ajuda para montar um time",
      desc: "Não tenho squad. Me ajudem a encontrar jogadores ou entrar em um time.",
      msg: "Olá! Quero participar do CS Prime do Interior – Ribeirão Preto, mas preciso de ajuda para montar/encontrar um time.",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display tracking-wider">
            Como você quer <span className="text-ember">participar?</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Escolha uma opção abaixo. Você será direcionado ao WhatsApp da organização.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 mt-2">
          {options.map((opt) => (
            <a
              key={opt.title}
              href={buildLink(opt.msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-start gap-4 p-5 bg-secondary border border-border hover:border-ember transition-all clip-tactical"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-ember/10 border border-ember flex items-center justify-center">
                <opt.icon className="w-6 h-6 text-ember" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg tracking-wide group-hover:text-ember transition-colors">
                  {opt.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{opt.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
