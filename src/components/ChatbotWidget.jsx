import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Leaf } from 'lucide-react';

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your Sustainable Assistant. Ask me how to cut your weekly CO₂ by 20%.' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setInput('');

    // Placeholder local reply (backend integration can replace this)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Great idea! Try biking short trips and set your thermostat 1°C lower. That\'s ~12% less CO₂ for many households.',
        },
      ]);
    }, 600);
  };

  return (
    <div id="chatbot" className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen((v) => !v)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 shadow-xl ring-1 ring-white/10 hover:bg-emerald-400"
        aria-label="Open Sustainable Assistant"
      >
        <Leaf className="text-white" />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-emerald-300/30 blur-lg opacity-0 group-hover:opacity-100 transition" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-4 w-80 sm:w-96 rounded-2xl bg-emerald-900/80 text-emerald-50 ring-1 ring-white/10 backdrop-blur-xl p-4"
          >
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <Leaf className="h-5 w-5 text-emerald-300" />
              <span className="font-semibold">Sustainable Assistant</span>
            </div>

            <div className="mt-3 max-h-64 overflow-y-auto space-y-3 pr-1">
              {messages.map((m, i) => (
                <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                  <div
                    className={
                      'inline-block rounded-xl px-3 py-2 text-sm ' +
                      (m.role === 'user' ? 'bg-emerald-600/80' : 'bg-white/10')
                    }
                  >
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask for an eco-tip..."
                className="flex-1 rounded-xl bg-white/10 px-3 py-2 text-sm outline-none placeholder:text-emerald-100/60"
              />
              <button
                onClick={handleSend}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-3 py-2 text-white hover:bg-emerald-400"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatbotWidget;
