import { GearDecoration } from "@/components/ui/gear-decoration";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Bot, Cpu, Trophy, Users, Zap, Target } from "lucide-react";
import galvabotLogo from "@/assets/galvabot-logo.png";
import galvabotRobot from "@/assets/galvabot-robot.jpg";
import { useState } from "react";

// Данные для карточек проектов
const projectData = [
  {
    title: "Достижения",
    description: "3-е место на региональном этапе конкурса PPO в городе Истра. 4-е место на всероссийском этапе конкурса PPO в Мурманске.",
    icon: <Trophy className="w-6 h-6" />
  },
  {
    title: "Технологии",
    description: "Мы используем передовые алгоритмы машинного обучения и технологии компьютерного зрения для точной сортировки гальванических элементов. Кроме того, в работе применяется метод обратной кинематики для обеспечения точного движения робота по заданным координатам.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Команда",
    description: "В состав команды входят инженеры Василий, Артём и Варвара. Они не боятся решать сложные задачи, постоянно совершенствуя свои навыки и проект.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Робот Галя",
    description: "Наш флагманский проект — робот Галя, разрабатываемый для подмосковного предприятия «Исток». Его основная задача — автоматизация рутинных процессов сортировки, что позволит гальваникам сосредоточиться на более сложных и творческих задачах.",
    icon: <Bot className="w-6 h-6" />
  },
  {
    title: "Научный руководитель",
    description: "Наш научный руководитель — Анна Валерьевна. Она вдохновляет нас на достижение высоких результатов и поддерживает энтузиазм и мотивацию.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Будущее",
    description: "В новом учебном году мы планируем продолжать работу над проектами, ставить перед собой амбициозные цели и стремиться к их достижению. Впереди нас ждут новые вызовы и задачи, но мы готовы к их преодолению.",
    icon: <Zap className="w-6 h-6" />
  }
];

const Index = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showCopiedNotification, setShowCopiedNotification] = useState(false);
  // Новое состояние для уведомления "Скоро информация появится"
  const [showComingSoonNotification, setShowComingSoonNotification] = useState(false);
  const telegramLink = "https://t.me/neurogalvabot  ";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(telegramLink);
    setShowCopiedNotification(true);
    
    // Автоматически скрыть уведомление через 2 секунды
    setTimeout(() => {
      setShowCopiedNotification(false);
    }, 2000);
  };

  // Функция-обработчик для кнопки "Узнать больше"
  const handleLearnMoreClick = () => {
    setShowComingSoonNotification(true);
    
    // Автоматически скрыть уведомление через 2 секунды (опционально)
    setTimeout(() => {
      setShowComingSoonNotification(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Scattered decorative gears throughout the site */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top area gears */}
        <div className="absolute top-32 right-32 opacity-6">
          <GearDecoration size="lg" animate={false} />
        </div>
        <div className="absolute top-48 left-1/4 opacity-5">
          <GearDecoration size="sm" animate={false} />
        </div>
        
        {/* Middle area gears */}
        <div className="absolute top-1/3 right-16 opacity-7">
          <GearDecoration size="md" animate={false} />
        </div>
        <div className="absolute top-1/2 left-12 opacity-4">
          <GearDecoration size="lg" animate={false} />
        </div>
        <div className="absolute top-1/2 right-1/3 opacity-6">
          <GearDecoration size="sm" animate={false} />
        </div>
        
        {/* Bottom area gears */}
        <div className="absolute bottom-1/4 left-1/3 opacity-5">
          <GearDecoration size="md" animate={false} />
        </div>
        <div className="absolute bottom-32 right-20 opacity-7">
          <GearDecoration size="sm" animate={false} />
        </div>
        <div className="absolute bottom-48 left-16 opacity-4">
          <GearDecoration size="lg" animate={false} />
        </div>
        
        {/* Additional scattered gears */}
        <div className="absolute top-2/3 left-2/3 opacity-3">
          <GearDecoration size="md" animate={false} />
        </div>
        <div className="absolute top-1/4 right-1/4 opacity-5">
          <GearDecoration size="sm" animate={false} />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-start items-center p-2 lg:p-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src={galvabotLogo} 
            alt="GalvaBot Logo" 
            className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
          />
          <span className="text-silver font-bold text-lg lg:text-xl hidden sm:block">
            GalvaBot
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 text-center px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Main heading */}
          <h1 className="text-4xl lg:text-7xl font-bold mb-8 bg-gradient-metallic bg-clip-text text-transparent animate-shine">
            Гальвабот - автоматизируем всё
          </h1>
          
          <p className="text-xl lg:text-2xl text-silver/80 mb-12 max-w-3xl mx-auto">
            Робототехника для автоматизации сортировки и производственных процессов
          </p>

          {/* Robot Image */}
          <div className="mb-16 relative">
            <div className="max-w-4xl mx-auto bg-gradient-dark rounded-2xl p-8 shadow-metallic border border-border/30">
              <img 
                src={galvabotRobot} 
                alt="GalvaBot Sorting Robot Galya" 
                className="w-full h-auto rounded-xl animate-float"
              />
            </div>
          </div>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Обновлённая кнопка с обработчиком onClick */}
            <Button 
              variant="metallic" 
              size="lg"
              className="text-lg px-8 py-3"
              onClick={handleLearnMoreClick} // Добавлен обработчик
            >
              Узнать больше
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-3 border-silver text-silver hover:bg-silver/10"
              onClick={() => setShowContactModal(true)}
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Project Info Cards */}
      <section id="technologies" className="relative z-10 px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12 text-silver">
            О нашем проекте
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                icon={project.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setShowContactModal(false)}
        >
          <div 
            className="bg-black rounded-lg p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-[#888] text-xl font-bold mb-4">Связаться с нами</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[#888] mb-2">Telegram канал:</p>
                <a 
                  href={telegramLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#888] underline hover:text-white transition-colors break-all"
                >
                  {telegramLink}
                </a>
              </div>
              <Button
                onClick={copyToClipboard}
                className="w-full bg-[#333] hover:bg-[#444] text-[#888] border border-[#888]"
              >
                Скопировать ссылку
              </Button>
            </div>
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-3 right-3 text-[#888] hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Copied Notification */}
      {showCopiedNotification && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
          <div className="bg-black rounded-lg p-4 max-w-md w-full pointer-events-auto">
            <p className="text-[#888] text-center">Ссылка скопирована!</p>
          </div>
        </div>
      )}

      {/* Новое уведомление "Скоро информация появится" */}
      {showComingSoonNotification && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
          <div className="bg-black rounded-lg p-4 max-w-md w-full pointer-events-auto">
            <p className="text-[#888] text-center">Скоро информация появится</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 text-center py-12 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <p className="text-silver/60 mb-4">
            © 2025 GalvaBot. Автоматизируем будущее уже сегодня.
          </p>
          <p className="text-silver/40 text-sm">
            Разработано с ❤️ командой GalvaBot
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;