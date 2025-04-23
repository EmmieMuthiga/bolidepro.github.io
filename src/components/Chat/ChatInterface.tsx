
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage } from "./ChatMessage";
import { useChat } from "@/hooks/useChat";

export function ChatInterface() {
  const [message, setMessage] = useState("");
  const { messages, sendMessage, isLoading } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;
    
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto h-[600px] border rounded-lg flex flex-col">
      <div className="bg-card p-4 border-b">
        <h2 className="font-semibold">Tax Assistant</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            isBot={msg.role === "assistant"}
            message={msg.content}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about taxes in Kenya..."
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading || !message.trim()}>
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
}
