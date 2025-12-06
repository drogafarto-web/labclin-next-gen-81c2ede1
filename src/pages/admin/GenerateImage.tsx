import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Download, ImageIcon, Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DEFAULT_PROMPT = `Professional healthcare marketing photograph. A happy pregnant Brazilian woman (morena) in her early 30s, with olive/warm brown skin tone and dark wavy hair, smiling warmly while gently cradling her pregnant belly with both hands. She wears a comfortable light teal or pastel colored dress. Clean, bright medical office or home setting with soft natural lighting. Warm, inviting atmosphere. Professional quality, suitable for medical lab website. The woman should look healthy, relaxed and excited about her pregnancy. No medical equipment visible. Soft bokeh background. No text.`;

const GenerateImage = () => {
  const [prompt, setPrompt] = useState(DEFAULT_PROMPT);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Erro",
        description: "Digite um prompt para gerar a imagem.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setGeneratedImage(null);
    setMessage(null);

    try {
      const { data, error } = await supabase.functions.invoke('generate-image', {
        body: { prompt: prompt.trim() }
      });

      if (error) {
        throw new Error(error.message || 'Erro ao chamar função');
      }

      if (data.error) {
        throw new Error(data.error);
      }

      if (data.image) {
        setGeneratedImage(data.image);
        setMessage(data.message);
        toast({
          title: "Imagem gerada!",
          description: "A imagem foi gerada com sucesso.",
        });
      } else {
        throw new Error('Nenhuma imagem retornada');
      }
    } catch (error) {
      console.error('Erro ao gerar imagem:', error);
      toast({
        title: "Erro ao gerar imagem",
        description: error instanceof Error ? error.message : "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!generatedImage) return;

    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = 'sexagem-fetal-gestante.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download iniciado",
      description: "Salve o arquivo como 'sexagem-fetal-gestante.webp' em public/images/blog/",
    });
  };

  const handleReset = () => {
    setPrompt(DEFAULT_PROMPT);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Link to="/blog">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Gerador de Imagens AI</h1>
            <p className="text-muted-foreground">Use o Lovable AI para gerar imagens para o blog</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Prompt
            </CardTitle>
            <CardDescription>
              Descreva a imagem que deseja gerar. Seja detalhado para melhores resultados.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Descreva a imagem..."
              className="min-h-[200px] font-mono text-sm"
            />
            <div className="flex gap-2">
              <Button onClick={handleGenerate} disabled={isLoading} className="flex-1">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Gerando...
                  </>
                ) : (
                  <>
                    <ImageIcon className="mr-2 h-4 w-4" />
                    Gerar Imagem
                  </>
                )}
              </Button>
              <Button variant="outline" onClick={handleReset}>
                Resetar Prompt
              </Button>
            </div>
          </CardContent>
        </Card>

        {generatedImage && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-primary" />
                Imagem Gerada
              </CardTitle>
              {message && (
                <CardDescription>{message}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg overflow-hidden border bg-muted">
                <img 
                  src={generatedImage} 
                  alt="Imagem gerada" 
                  className="w-full h-auto"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleDownload} className="flex-1">
                  <Download className="mr-2 h-4 w-4" />
                  Baixar Imagem
                </Button>
              </div>
              <div className="bg-muted/50 border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Instruções:</strong> Após baixar, salve o arquivo como{" "}
                  <code className="bg-background px-1 py-0.5 rounded">sexagem-fetal-gestante.webp</code>{" "}
                  na pasta <code className="bg-background px-1 py-0.5 rounded">public/images/blog/</code>
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="border-dashed">
          <CardContent className="pt-6">
            <div className="text-sm text-muted-foreground space-y-2">
              <p><strong>Dicas para bons prompts:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Seja específico sobre estilo: "professional photography", "illustration", etc.</li>
                <li>Descreva cores, iluminação e atmosfera</li>
                <li>Mencione "No text" para evitar texto na imagem</li>
                <li>Use "Brazilian" ou "Latina" para diversidade</li>
                <li>Indique o contexto: "medical office", "home setting", etc.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GenerateImage;
