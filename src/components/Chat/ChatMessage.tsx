
import { User } from "lucide-react";

interface ChatMessageProps {
  isBot: boolean;
  message: string;
}

export function ChatMessage({ isBot, message }: ChatMessageProps) {
  return (
    <div className={`flex gap-3 ${isBot ? "" : "flex-row-reverse"}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isBot ? "bg-kenya-green" : "bg-kenya-red"}`}>
        {isBot ? (
          <bot className="w-5 h-5 text-white" />
        ) : (
          <User className="w-5 h-5 text-white" />
        )}
      </div>
      <div className={`max-w-[80%] px-4 py-2 rounded-lg ${isBot ? "bg-secondary" : "bg-primary text-primary-foreground"}`}>
        {message}
      </div>
    </div>
  );
}
