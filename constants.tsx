import { 
  Building, 
  Globe, 
  FileText, 
  Users, 
  Server, 
  ShieldCheck, 
  Briefcase, 
  TrendingUp 
} from 'lucide-react';
import { Asset, GrowthPoint, Metric, SocialLink } from './types';

// Constants representing the business analysis
export const COMPANY_DETAILS = {
  name: "МБК-Кредит (Санкт-Петербург)",
  address: "Санкт-Петербург, Невский проспект, д. 56, оф. 68",
  phone: "+7 (812) XXX-XX-XX",
  foundedYear: 2012, // Deduced from "not 16 years old" hint, likely ~10-12 years
  siteUrl: "mbk-credit.spb.ru", // Placeholder for the real SPB domain
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Яндекс Карты", url: "https://yandex.ru/maps", rating: 4.8, count: 120 },
  { platform: "Google Maps", url: "https://google.com/maps", rating: 4.6, count: 45 },
  { platform: "2GIS", url: "https://2gis.ru", rating: 4.9, count: 30 },
  { platform: "Zoon", url: "https://zoon.ru", rating: 4.5, count: 15 },
];

export const KEY_METRICS: Metric[] = [
  { label: "Органических заявок/мес", value: "40-50", trend: "stable", color: "text-green-600" },
  { label: "Ключевая ставка ЦБ РФ", value: "16.5%", trend: "up", color: "text-red-600" }, // Contextual opportunity
  { label: "Позиции в поиске (ТОП-10)", value: "85%", trend: "up", color: "text-blue-600" },
  { label: "Возраст домена", value: "> 10 лет", trend: "stable", color: "text-gray-600" },
];

export const ASSETS: Asset[] = [
  {
    id: '1',
    title: 'Офис на Невском 56',
    description: 'Долгосрочный договор аренды в "золотом треугольнике" СПб. Низкая ставка, полностью оборудованные рабочие места.',
    icon: Building,
    category: 'physical'
  },
  {
    id: '2',
    title: 'Веб-сайт и SEO',
    description: 'Оптимизированный сайт, учет в РКН, законный сбор Cookie. Стабильный поток органики по запросам "залог недвижимости", "кредит юрлицам".',
    icon: Globe,
    category: 'digital'
  },
  {
    id: '3',
    title: 'Юрлицо и Договоры',
    description: 'Чистое ООО с историей. Действующие договоры с банками-партнерами и страховыми компаниями.',
    icon: ShieldCheck,
    category: 'legal'
  },
  {
    id: '4',
    title: 'База Инвесторов',
    description: 'Эксклюзивные контакты частных инвесторов (РФ), автоломбардов и фондов, работающих с "тяжелыми" объектами и долями.',
    icon: Users,
    category: 'network'
  },
  {
    id: '5',
    title: 'IT Инфраструктура',
    description: 'Компьютеры, оргтехника, настроенная CRM, телефония. Сайт на современном стеке.',
    icon: Server,
    category: 'physical'
  },
  {
    id: '6',
    title: 'Методология',
    description: 'Шаблоны договоров займов, скрипты продаж, регламенты оценки недвижимости.',
    icon: FileText,
    category: 'legal'
  }
];

export const GROWTH_POINTS: GrowthPoint[] = [
  {
    title: "Монетизация отказников",
    description: "Продажа лидов, не подошедших под залог, в МФО или кредитным донорам.",
    impact: "High",
    estimatedValueAdd: "+1.5 млн руб/год"
  },
  {
    title: "Региональная экспансия",
    description: "Использование уже имеющихся инвесторов по РФ для масштабирования рекламы на регионы.",
    impact: "Medium",
    estimatedValueAdd: "+30% к выручке"
  },
  {
    title: "Автоматизация скоринга",
    description: "Внедрение AI-бота для первичной обработки 50 заявок в месяц, ускорение выдачи.",
    impact: "Medium",
    estimatedValueAdd: "Сокращение ФОТ"
  }
];

export const BANK_PARTNERS = [
  "Сбербанк", "ВТБ", "Совкомбанк", "Тинькофф", "Альфа-Банк", "Росбанк Дом"
];
