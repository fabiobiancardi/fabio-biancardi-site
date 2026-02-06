import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Github, ExternalLink, Shield, Server, Lock } from "lucide-react";

/**
 * Design: Minimalist Corporate with Cybersecurity Focus
 * - Deep Blue primary (#1e3a8a) for trust and security
 * - Cyber Green accents (#10b981) for expertise
 * - Clean typography hierarchy with Poppins headings
 * - Generous whitespace and subtle shadows
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg text-foreground">Fabio Biancardi</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#experiencia" className="text-sm font-medium hover:text-primary transition-colors">
              Experiência
            </a>
            <a href="#habilidades" className="text-sm font-medium hover:text-primary transition-colors">
              Habilidades
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium text-accent uppercase tracking-wider">
                  Especialista em Cybersecurity
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Segurança Digital é Prioridade
                </h1>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Analista de Infraestrutura com MBA em Cybersecurity e Cyber Crimes. Mais de 15 anos de experiência em TI, especializado em proteção de dados, conformidade LGPD e segurança de infraestrutura.
              </p>
              <div className="flex gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  Entrar em Contato
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Saiba Mais
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-border shadow-lg">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/aFITUIdjUGLSCq3pylxLzT/sandbox/krHF0HR34apjhBzIxPpQ2V-img-1_1770311716000_na1fn_Y3liZXJzZWN1cml0eS1oZXJv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYUZJVFVJZGpVR0xTQ3EzcHlseEx6VC9zYW5kYm94L2tySEYwSFIzNGFwamhCekl4UHBRMlYtaW1nLTFfMTc3MDMxMTcxNjAwMF9uYTFmbl9ZM2xpWlhKelpXTjFjbWwwZVMxb1pYSnYucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZO7T4ML4CfYZqK--e0vyWEfRv1tUSYzbZQn81WBHG6HN7PqpAt5fryq~GbnzfTP8gvh-osNPk9wq6R-1JjzfuY-Oc1v1ONxKfsKnvCuAEUUua2s-sSRZPpDr9BHYafO2N9xlo8XfjoloTjF~9O601OCxFuE35Ol-kW4VJ-iCUVvV8OOiJZFNlW7Cgp9VbfU1Qaa39mBznOUN7b9kIFBSJ8UMdlyb5Nhd3r5ao6hPTEYR-xoo3QpH56lkF0BKMXY9dCYDwF55Xqz7OMfh0PJYfmZV2J6iVSJFs668ObtInIk4lqaerVChNrnCvK8ulTn3BUIOUXAvz7MuNiBY-RBobA__"
                  alt="Cybersecurity Hero"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative line */}
              <div className="absolute -left-8 top-1/2 w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-medium text-accent uppercase tracking-wider">
                Sobre Mim
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Expertise em Infraestrutura e Segurança
              </h2>
            </div>

            <Separator className="bg-border" />

            <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
              <p className="text-base leading-relaxed">
                Sou Analista de Infraestrutura com MBA em CyberSecurity e Cyber Crimes, além de Pós-graduação em LGPD (Lei Geral de Proteção de Dados). Graduado em Redes de Computadores, tenho mais de 15 anos de experiência em Tecnologia da Informação, atuando especialmente na área de Infraestrutura.
              </p>

              <p className="text-base leading-relaxed">
                Durante minha carreira, participei de seis projetos de grande envergadura, desde cabeamento estruturado até implementação de switches, instalações de servidores Windows e Linux, além de configuração de estações de trabalho. Minha expertise inclui análise de sistemas, reavaliação de rotinas e métodos de trabalho, elaboração de manuais técnicos, treinamento de equipes e acompanhamento na utilização de sistemas para assegurar funcionamento correto e seguro.
              </p>

              <p className="text-base leading-relaxed">
                Minha paixão é garantir que a infraestrutura de TI seja não apenas robusta e eficiente, mas também segura contra ameaças cibernéticas. Tenho dedicado meus esforços ao aprimoramento contínuo em segurança da informação, conformidade regulatória e proteção de dados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 md:py-32 bg-secondary/20">
        <div className="container">
          <div className="space-y-12">
            <div className="space-y-2">
              <p className="text-sm font-medium text-accent uppercase tracking-wider">
                Trajetória Profissional
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Experiência e Projetos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Experience Card 1 */}
              <Card className="border-border bg-background hover:shadow-lg transition-shadow">
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <Server className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Infraestrutura</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Seis projetos completos de infraestrutura, desde cabeamento estruturado até implementação de switches e servidores.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Windows Server</Badge>
                    <Badge variant="secondary" className="text-xs">Linux</Badge>
                    <Badge variant="secondary" className="text-xs">Networking</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Experience Card 2 */}
              <Card className="border-border bg-background hover:shadow-lg transition-shadow">
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <Lock className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Segurança</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Especialização em Cybersecurity, LGPD e Cyber Crimes. Implementação de políticas de segurança e proteção de dados.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Cybersecurity</Badge>
                    <Badge variant="secondary" className="text-xs">LGPD</Badge>
                    <Badge variant="secondary" className="text-xs">Compliance</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Experience Card 3 */}
              <Card className="border-border bg-background hover:shadow-lg transition-shadow">
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Suporte</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Análise de sistemas, treinamento de equipes e acompanhamento técnico para garantir funcionamento seguro.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Análise</Badge>
                    <Badge variant="secondary" className="text-xs">Treinamento</Badge>
                    <Badge variant="secondary" className="text-xs">Documentação</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="space-y-12">
            <div className="space-y-2">
              <p className="text-sm font-medium text-accent uppercase tracking-wider">
                Competências Técnicas
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Stack Tecnológico
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Virtualization */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full" />
                  Virtualização
                </h3>
                <div className="flex flex-wrap gap-2 pl-3">
                  <Badge variant="outline" className="border-primary text-primary">VMware</Badge>
                  <Badge variant="outline" className="border-primary text-primary">Xenserver</Badge>
                  <Badge variant="outline" className="border-primary text-primary">Virtual Box</Badge>
                  <Badge variant="outline" className="border-primary text-primary">Hyper-V</Badge>
                </div>
              </div>

              {/* Backup & Storage */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full" />
                  Backup & Armazenamento
                </h3>
                <div className="flex flex-wrap gap-2 pl-3">
                  <Badge variant="outline" className="border-primary text-primary">Backup Exec</Badge>
                  <Badge variant="outline" className="border-primary text-primary">Storage</Badge>
                </div>
              </div>

              {/* Windows Server */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <div className="w-1 h-6 bg-accent rounded-full" />
                  Windows Server
                </h3>
                <div className="flex flex-wrap gap-2 pl-3">
                  <Badge variant="outline" className="border-accent text-accent">Windows Server</Badge>
                  <Badge variant="outline" className="border-accent text-accent">Active Directory</Badge>
                  <Badge variant="outline" className="border-accent text-accent">DNS</Badge>
                  <Badge variant="outline" className="border-accent text-accent">DHCP</Badge>
                  <Badge variant="outline" className="border-accent text-accent">Terminal Server</Badge>
                  <Badge variant="outline" className="border-accent text-accent">Office 365</Badge>
                  <Badge variant="outline" className="border-accent text-accent">MS Project</Badge>
                  <Badge variant="outline" className="border-accent text-accent">MS Visio</Badge>
                </div>
              </div>

              {/* Antivirus & Security */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <div className="w-1 h-6 bg-accent rounded-full" />
                  Antivírus & Segurança
                </h3>
                <div className="flex flex-wrap gap-2 pl-3">
                  <Badge variant="outline" className="border-accent text-accent">Symantec</Badge>
                  <Badge variant="outline" className="border-accent text-accent">McAfee</Badge>
                  <Badge variant="outline" className="border-accent text-accent">Trend Micro</Badge>
                  <Badge variant="outline" className="border-accent text-accent">Kaspersky</Badge>
                  <Badge variant="outline" className="border-accent text-accent">BitDefender</Badge>
                </div>
              </div>

              {/* Linux */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full" />
                  Linux
                </h3>
                <div className="flex flex-wrap gap-2 pl-3">
                  <Badge variant="outline" className="border-primary text-primary">CentOS</Badge>
                  <Badge variant="outline" className="border-primary text-primary">Red Hat</Badge>
                  <Badge variant="outline" className="border-primary text-primary">Debian</Badge>
                  <Badge variant="outline" className="border-primary text-primary">Ubuntu</Badge>
                  <Badge variant="outline" className="border-primary text-primary">Fedora</Badge>
                  <Badge variant="outline" className="border-primary text-primary">SUSE</Badge>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <div className="w-1 h-6 bg-accent rounded-full" />
                  Formação Acadêmica
                </h3>
                <div className="flex flex-wrap gap-2 pl-3">
                  <Badge variant="outline" className="border-accent text-accent">MBA Cybersecurity</Badge>
                  <Badge variant="outline" className="border-accent text-accent">Pós-grad. LGPD</Badge>
                  <Badge variant="outline" className="border-accent text-accent">Redes Computadores</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-medium text-accent uppercase tracking-wider">
                Vamos Conversar
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Entre em Contato
              </h2>
            </div>

            <p className="text-lg text-muted-foreground">
              Interessado em discutir segurança de infraestrutura, conformidade LGPD ou projetos de cybersecurity? Ficarei feliz em conversar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Mail className="w-4 h-4" />
                Enviar Email
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2026 Fabio Biancardi. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
