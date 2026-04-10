import { useState, useRef, useEffect } from 'react';

const AIBotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Здравствуйте! Я ИИ-ассистент медицинского центра «Цель». Могу помочь подобрать программу реабилитации, рассчитать стоимость или ответить на ваши вопросы. Чем могу помочь?', sender: 'bot' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userMsg = { id: Date.now(), text: inputVal.trim(), sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Mock AI response
    setTimeout(() => {
      setIsTyping(false);
      const botMsg = { 
        id: Date.now() + 1, 
        text: 'Спасибо за ваше обращение. ИИ-ассистент находится в режиме разработки, но вы уже сейчас можете оставить номер, и наш специалист свяжется с вами через 5 минут.', 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1500);
  };

  return (
    <>
      {/* Chat Bubble Toggle */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Expanded Chat Window */}
        <div 
          className={`mb-4 transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-75 opacity-0 pointer-events-none'}`}
        >
          <div className="w-[350px] sm:w-[400px] h-[500px] bg-surface-light/90 backdrop-blur-2xl border border-primary/20 rounded-2xl shadow-[0_10px_50px_rgba(45,212,191,0.15)] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-primary/10 border-b border-primary/10 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center relative">
                  <span className="text-xl">🤖</span>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-text-primary font-medium">BOSBot AI</h3>
                  <div className="text-primary/70 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    На связи
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 relative scrollbar-hide">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-surface-soft text-text-primary border border-surface-dark rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-surface-soft border border-surface-dark rounded-2xl rounded-bl-none px-4 py-3 flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-surface-dark bg-surface-muted">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input 
                  type="text" 
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Задайте вопрос..." 
                  className="w-full bg-surface-light border border-surface-dark rounded-full py-3 pl-4 pr-12 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-primary/50 transition-colors shadow-inner"
                />
                <button 
                  type="submit"
                  disabled={!inputVal.trim() || isTyping}
                  className="absolute right-2 w-8 h-8 flex items-center justify-center bg-primary rounded-full text-white disabled:opacity-50 transition-opacity"
                >
                  <svg className="w-4 h-4 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
              <div className="text-center mt-2">
                <span className="text-[10px] text-text-muted">ИИ может допускать ошибки. Для точного диагноза обратитесь к врачу.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(45,212,191,0.3)] transition-all duration-300 relative ${isOpen ? 'bg-surface-dark/10 rotate-90 scale-90' : 'bg-primary hover:scale-110 hover:shadow-[0_0_40px_rgba(45,212,191,0.5)]'}`}
        >
          {isOpen ? (
            <svg className="w-8 h-8 text-white transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="relative flex items-center justify-center">
              <svg className="w-8 h-8 text-white transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              {/* Notification dot */}
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-primary rounded-full animate-ping"></div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-primary rounded-full"></div>
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default AIBotWidget;
