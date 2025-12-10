import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  CheckCircle, 
  TrendingUp, 
  AlertTriangle, 
  ExternalLink, 
  Menu,
  X,
  ArrowRight,
  Globe
} from 'lucide-react';
import { ASSETS, KEY_METRICS, SOCIAL_LINKS, GROWTH_POINTS, BANK_PARTNERS, COMPANY_DETAILS } from './constants';
import AssetCard from './components/AssetCard';
import ChartSection from './components/ChartSection';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-mbk-blue rounded flex items-center justify-center text-white font-bold text-lg">M</div>
            <span className="font-bold text-xl tracking-tight text-mbk-blue">МБК-Кредит</span>
            <span className="text-xs text-gray-400 uppercase ml-2 border border-gray-200 px-1 rounded hidden sm:inline-block">Санкт-Петербург</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#assets" className="hover:text-mbk-blue transition-colors">Активы</a>
            <a href="#metrics" className="hover:text-mbk-blue transition-colors">Показатели</a>
            <a href="#growth" className="hover:text-mbk-blue transition-colors">Точки роста</a>
            <a href="#contacts" className="bg-mbk-blue text-white px-4 py-2 rounded-lg hover:bg-mbk-light transition-colors shadow-lg shadow-mbk-blue/20">
              Связаться с владельцем
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-4 shadow-lg">
            <a href="#assets" className="block py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>Активы</a>
            <a href="#metrics" className="block py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>Показатели</a>
            <a href="#growth" className="block py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>Точки роста</a>
            <a href="#contacts" className="block py-2 text-mbk-blue font-bold" onClick={() => setIsMenuOpen(false)}>Связаться</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Office background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white/80 to-mbk-blue/5"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-blue-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Готовый бизнес с подтвержденной прибылью</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Действующий Кредитный Брокер <br/>
              <span className="text-mbk-blue">в центре Санкт-Петербурга</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Офис на Невском 56. Стабильный поток органических заявок. 
              Эксклюзивные договоренности с инвесторами по всей РФ.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contacts" className="w-full sm:w-auto px-8 py-4 bg-mbk-blue text-white rounded-xl font-bold shadow-xl shadow-mbk-blue/20 hover:bg-mbk-light transition-all transform hover:-translate-y-1">
                Запросить презентацию и цену
              </a>
              <a href="#analysis" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                Изучить аналитику
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Market Context Banner */}
      <section className="bg-mbk-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <TrendingUp className="w-10 h-10 text-mbk-accent flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Идеальное время для входа</h3>
                <p className="text-blue-100 max-w-xl mt-2">
                  Ключевая ставка ЦБ РФ 16.5% создала рекордный спрос на частное кредитование под залог. Банковские отказы выросли до 70% — все эти клиенты идут к брокерам.
                </p>
              </div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
              <span className="block text-sm text-blue-200">Средний чек комиссии</span>
              <span className="block text-2xl font-bold text-white">150,000 - 300,000 ₽</span>
            </div>
          </div>
        </div>
      </section>

      {/* Assets Grid */}
      <section id="assets" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Материальные и нематериальные активы</h2>
            <p className="text-gray-500">Бизнес полностью готов к передаче. Никаких скрытых долгов или обременений.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ASSETS.map(asset => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </div>
        </div>
      </section>

      {/* Analytics & Metrics */}
      <section id="analysis" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Metrics Grid */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Цифровые показатели</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {KEY_METRICS.map((metric, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">{metric.label}</p>
                    <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-mbk-blue" />
                  SEO и Веб-сайт
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Соответствие 152-ФЗ (РКН, Cookies)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Высокая скорость загрузки (Google PageSpeed 90+)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Органика по запросам "Кредит под залог доли СПБ"
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mr-2" />
                    <span>
                      <strong>Важно:</strong> Не путать с <em>mbk.ru</em> (Москва). Мы — независимое юрлицо в СПб с собственной безупречной репутацией.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Chart & Partners */}
            <div className="space-y-8">
              <ChartSection />
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4">Банки и Партнеры</h3>
                <div className="flex flex-wrap gap-2">
                  {BANK_PARTNERS.map((bank, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium border border-gray-200">
                      {bank}
                    </span>
                  ))}
                  <span className="px-3 py-1 bg-mbk-blue/10 text-mbk-blue rounded-full text-xs font-medium border border-mbk-blue/20">
                    + 50 Частных инвесторов
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4">Репутация и Отзывы</h3>
                <div className="grid grid-cols-2 gap-4">
                  {SOCIAL_LINKS.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <span className="text-sm font-medium text-gray-700">{link.platform}</span>
                      <div className="flex items-center">
                        <span className="text-xs font-bold mr-1 text-mbk-blue">{link.rating}</span>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-mbk-blue" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Points - Valuation Justification */}
      <section id="growth" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-mbk-accent font-bold uppercase tracking-wider text-sm">Стратегия развития</span>
            <h2 className="text-3xl font-bold mt-2">Как увеличить оценку компании до 10 млн+ ₽</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GROWTH_POINTS.map((point, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-mbk-accent transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-mbk-blue/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 bg-slate-700 rounded text-xs text-mbk-accent mb-4 font-mono">
                    Impact: {point.impact}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {point.description}
                  </p>
                  <div className="flex items-center text-green-400 text-sm font-bold">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {point.estimatedValueAdd}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location/Office Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
               {/* Placeholder for Office Image - In real app, use actual photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                 <img 
                  src="https://picsum.photos/800/600?random=1" 
                  alt="Интерьер офиса на Невском 56" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
                  <p className="text-sm font-bold text-slate-900 flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-mbk-blue" />
                    Невский пр., д. 56
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Локация, которая продает сама</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mt-1 mr-4 p-1 bg-green-100 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Центр города</h4>
                    <p className="text-sm text-gray-600">3 минуты от метро Гостиный Двор/Невский Проспект. Высокий статус для клиентов.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-4 p-1 bg-green-100 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Выгодная Аренда</h4>
                    <p className="text-sm text-gray-600">Долгосрочный договор с лояльной ставкой, зафиксированной в рублях.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contacts" className="py-24 bg-gradient-to-br from-mbk-blue to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Готовы обсудить сделку?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Получите полную финансовую отчетность, доступ к CRM для аудита и проект договора купли-продажи.
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto text-slate-800">
            <h3 className="text-xl font-bold mb-6 text-center">Оставить заявку на покупку</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Ваше Имя</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mbk-blue focus:outline-none" placeholder="Иван Иванов" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Телефон</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mbk-blue focus:outline-none" placeholder="+7 (999) 000-00-00" />
              </div>
              <button className="w-full bg-mbk-blue text-white font-bold py-3 rounded-lg hover:bg-mbk-light transition-all flex items-center justify-center">
                Получить коммерческое предложение
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности. 
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-2">{COMPANY_DETAILS.name}</h4>
            <p className="text-sm">{COMPANY_DETAILS.address}</p>
            <p className="text-sm mt-1">ОГРН: [Данные скрыты до запроса]</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Отказ от ответственности</a>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-slate-600">
          © {new Date().getFullYear()} Все права защищены. Сайт не является публичной офертой.
          <br/>
          Упоминание бренда MBK не связано с компанией mbk.ru (Москва).
        </div>
      </footer>
    </div>
  );
};

export default App;