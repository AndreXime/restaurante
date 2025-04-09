import { Button } from "@/components/ui/button"

const modes = ["Consumo Local", "Para Viagem", "Entrega"]

export function DiningMode() {
  return (
    <div className="flex gap-2 mb-4">
      {modes.map((mode, index) => (
        <Button key={index} variant={index === 0 ? "secondary" : "ghost"} className="rounded-full">
          {mode}
        </Button>
      ))}
    </div>
  )
}
