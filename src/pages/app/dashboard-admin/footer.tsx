import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Send } from "lucide-react"
import { useState } from "react"

export function NewsletterDownload() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      alert("Digite um e-mail válido.")
      return
    }

    // Aqui pode ir a lógica de envio para API
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail("")
    }, 3000)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 space-y-6 transition-all duration-300">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Inscreva-se na Newsletter</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Receba atualizações, novidades e oportunidades diretamente no seu e-mail.
        </p>
      </div>

   
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 text-sm"
        />
        <Button onClick={handleSubscribe} variant="default"
                  className="w-full flex items-center bg-orange-500 justify-center gap-2 rounded-xl h-10 transition-all hover:bg-orange-600 dark:hover:bg-orange-500"

        
        >
          <Send className="w-4 h-4" />
          Enviar
        </Button>
      </div>

      {subscribed && (
        <p className="text-sm text-green-600 dark:text-green-400 transition-opacity duration-300">
          ✅ Inscrição realizada com sucesso!
        </p>
      )}

      <hr className="border-t border-zinc-200 dark:border-zinc-700" />

      <a href="/CV_ATUAL.pdf" download>
        <Button
          variant="default"
          className="w-full flex items-center bg-orange-500 justify-center gap-2 rounded-xl h-10 transition-all hover:bg-orange-600 dark:hover:bg-orange-500"
        >
          <Download />
          Baixar Currículo
        </Button>
      </a>
    </div>
  )
}
