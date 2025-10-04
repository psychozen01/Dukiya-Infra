import React, { useState, useEffect, useRef } from 'react';
import { MessageSquareText, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user' as const
    };
    
    setMessages([...messages, newUserMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: 'Thanks for your message! Our team will get back to you soon.',
        sender: 'bot' as const
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {isOpen ? (
        <div className="w-[calc(100vw-2rem)] sm:w-96 max-w-full bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-[80vh] max-h-[600px] border border-gray-200">
          {/* Header */}
          <div className="bg-[#b4956a] text-white p-3 sm:p-4 flex justify-between items-center">
            <h3 className="font-semibold text-base sm:text-lg">Chat with us</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 sm:p-1.5 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-3">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] sm:max-w-[70%] px-3 py-2 rounded-lg text-sm sm:text-base ${
                      message.sender === 'user' 
                        ? 'bg-[#b4956a] text-white rounded-tr-none' 
                        : 'bg-gray-200 text-gray-800 rounded-tl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-2 sm:p-3 bg-white">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b4956a] focus:border-transparent"
                aria-label="Type your message"
              />
              <button 
                type="submit"
                className="bg-[#b4956a] text-white p-2 sm:p-2.5 rounded-lg hover:bg-[#9a7d57] transition-colors flex-shrink-0"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#b4956a] text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-[#9a7d57] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b4956a]"
          aria-label="Open chat"
        >
          <MessageSquareText size={24} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
