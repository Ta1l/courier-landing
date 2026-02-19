import { useState, useEffect, useRef, type ReactNode } from "react";
import { getBotLink, getBotLinkCard } from "./config";

/* ─── Intersection Observer Hook ─── */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const { ref, visible } = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className={`${visible ? "animate-fade-in-up" : "opacity-0"} ${className}`}
    >
      {children}
    </section>
  );
}

/* ───────────────────────────────────────
   SVG ICONS — unified stroke-width 2, 
   vector, retina-safe (scalable SVG).
   CHANGE 5: all icons are optimized SVG vectors,
   consistent strokeWidth, crisp on retina.
   To change any icon — edit the corresponding entry below.
   ─────────────────────────────────────── */
const Icons = {
  clock: (
    <svg aria-label="Часы" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  wallet: (
    <svg aria-label="Кошелёк" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  ),
  rocket: (
    <svg aria-label="Старт" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  shield: (
    <svg aria-label="Щит" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  /* CHANGE: E-bike icon — clean bicycle with lightning bolt ⚡
     File ref: /assets/icons/bike-e.svg */
  bike: (
    <svg aria-label="Электровелосипед" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Rear wheel */}
      <circle cx="5.5" cy="17" r="3.5" />
      {/* Front wheel */}
      <circle cx="18.5" cy="17" r="3.5" />
      {/* Frame — seat post to bottom bracket */}
      <path d="M8 17l3-8h4l2 4" />
      {/* Top tube — seat to head tube */}
      <path d="M11 9l4 0" />
      {/* Down tube — head tube to front wheel */}
      <path d="M15 9l3.5 8" />
      {/* Seat */}
      <path d="M9.5 8.5h3" strokeWidth="2" />
      {/* Handlebar */}
      <path d="M14 7.5h2.5" strokeWidth="2" />
      {/* Lightning bolt — electric ⚡ */}
      <path d="M12.5 2L11 5h2.5L12 8" strokeWidth="2" stroke="#F59E0B" fill="none" />
    </svg>
  ),
  /* CHANGE: Large e-bike illustration — clean, retina-crisp
     File ref: /assets/icons/bike-e.svg */
  bikeLarge: (
    <svg aria-label="Электровелосипед" className="ebike-icon-large" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Rear wheel */}
      <circle cx="14" cy="44" r="10" />
      <circle cx="14" cy="44" r="3" opacity="0.3" />
      {/* Front wheel */}
      <circle cx="50" cy="44" r="10" />
      <circle cx="50" cy="44" r="3" opacity="0.3" />
      {/* Frame */}
      <path d="M20 44l8-20h12l6 12" strokeWidth="2.5" />
      {/* Top tube */}
      <path d="M28 24l12 0" strokeWidth="2.5" />
      {/* Fork — head tube to front hub */}
      <path d="M40 24l10 20" strokeWidth="2.5" />
      {/* Seat stays */}
      <path d="M14 44l14-20" strokeWidth="1.5" opacity="0.5" />
      {/* Seat */}
      <path d="M25 22h7" strokeWidth="3" />
      {/* Handlebar */}
      <path d="M38 21h5c1 0 2 .5 2 1.5" strokeWidth="2.5" />
      {/* Lightning bolt — electric ⚡ */}
      <path d="M34 4l-4 9h7l-4 9" strokeWidth="2.5" stroke="#F59E0B" fill="none" />
      {/* Battery on frame */}
      <rect x="30" y="28" width="8" height="5" rx="1.5" fill="#F59E0B" opacity="0.2" stroke="#F59E0B" strokeWidth="1.5" />
      <path d="M33 29.5v2M35 29.5v2" stroke="#F59E0B" strokeWidth="1" opacity="0.6" />
    </svg>
  ),
  card: (
    <svg aria-label="Карта" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  ),
  chevronDown: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  check: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  telegram: (
    <svg aria-label="Telegram" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 1 0 24 12.056A12.013 12.013 0 0 0 11.944 0Zm5.654 8.22-1.9 8.94c-.14.636-.504.788-.996.492l-2.75-2.028-1.33 1.28c-.148.148-.27.27-.556.27l.2-2.8 5.09-4.6c.22-.196-.048-.306-.34-.11l-6.3 3.96-2.71-.846c-.59-.184-.602-.59.124-.876l10.58-4.08c.49-.176.918.12.76.876l-.072.098Z" />
    </svg>
  ),
  ruble: (
    <svg aria-label="Рубль" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 5h6a4 4 0 0 1 0 8H6z" />
      <path d="M6 13v8" />
      <path d="M4 17h8" />
    </svg>
  ),
  gift: (
    <svg aria-label="Подарок" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  ),
  steps1: (
    <svg aria-label="Шаг 1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  steps2: (
    <svg aria-label="Шаг 2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  steps3: (
    <svg aria-label="Шаг 3" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  calculator: (
    <svg aria-label="Калькулятор" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="16" y1="14" x2="16" y2="18" />
      <line x1="8" y1="11" x2="8" y2="11.01" />
      <line x1="12" y1="11" x2="12" y2="11.01" />
      <line x1="16" y1="11" x2="16" y2="11.01" />
      <line x1="8" y1="15" x2="8" y2="15.01" />
      <line x1="12" y1="15" x2="12" y2="15.01" />
    </svg>
  ),
  table: (
    <svg aria-label="Таблица" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="3" x2="9" y2="21" />
    </svg>
  ),
  user: (
    <svg aria-label="Кейс" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  /* CHANGE 1b: services icon */
  building: (
    <svg aria-label="Сервисы" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  ),
};

/* ─── CTA Button — uses BOT_LINK from config.json / config.ts ─── */
function CTAButton({
  text = "Пройти тест в боте",
  secondary = false,
  href,
  className = "",
}: {
  text?: string;
  secondary?: boolean;
  href?: string;
  className?: string;
}) {
  /* CHANGE: BOT_LINK — all CTA buttons use getBotLink() from config.ts */
  const link = href || getBotLink();
  if (secondary) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[var(--color-brand)] px-5 py-3 text-base font-semibold text-[var(--color-brand)] transition-all duration-200 hover:bg-[var(--color-brand-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:ring-offset-2 active:scale-[0.97] sm:px-6 sm:py-3.5 ${className}`}
      >
        {Icons.telegram}
        <span>{text}</span>
      </a>
    );
  }
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-pulse inline-flex items-center justify-center gap-2.5 rounded-xl bg-[var(--color-brand)] px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-[var(--color-brand)]/25 transition-all duration-200 hover:bg-[var(--color-brand-dark)] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:ring-offset-2 active:scale-[0.97] sm:px-8 sm:py-4 sm:text-lg ${className}`}
    >
      {Icons.telegram}
      <span>{text}</span>
    </a>
  );
}

/* ─── FAQ Accordion ─── */
function FAQItem({ q, a }: { q: string; a: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        className="flex w-full items-center justify-between gap-3 py-4 text-left text-[15px] font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--color-brand)] focus:outline-none sm:text-base"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span
          className={`ml-2 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          {Icons.chevronDown}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${open ? "max-h-48 pb-4" : "max-h-0"}`}
      >
        <div className="text-sm text-[var(--color-text-secondary)] sm:text-base">
          {a}
        </div>
      </div>
    </div>
  );
}

/* ─── E-bike Modal ─── */
function EbikeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="animate-slide-up relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl bg-white p-5 shadow-2xl sm:max-w-lg sm:rounded-2xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-gray-300 sm:hidden" />
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xl text-[var(--color-text-secondary)] hover:bg-gray-200 hover:text-[var(--color-text)]"
          aria-label="Закрыть"
        >
          &times;
        </button>
        <h3 className="mb-4 text-lg font-bold sm:text-xl">
          Аренда электровелосипеда
        </h3>
        <div className="space-y-3 text-sm text-[var(--color-text-secondary)] sm:text-base">
          <p>
            Менеджер подберёт для вас оптимальный вариант аренды
            электровелосипеда с&nbsp;учётом вашего района и&nbsp;графика работы.
          </p>
          <div className="rounded-xl bg-[var(--color-bg-alt)] p-4">
            <p className="font-semibold text-[var(--color-text)]">
              Условия аренды:
            </p>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[var(--color-brand)]">{Icons.check}</span>
                <span>
                  <strong>Средняя стоимость — 5&nbsp;500&nbsp;₽/неделя</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[var(--color-brand)]">{Icons.check}</span>
                <span>
                  При более длительной аренде <strong>действуют скидки</strong> — чем дольше арендуете, тем ниже цена за неделю
                </span>
              </li>
            </ul>
            <p className="mt-3 text-xs text-[var(--color-text-secondary)]">
              Точные цены и&nbsp;наличие уточняйте у&nbsp;менеджера
            </p>
          </div>
          <p>
            Электровелосипед позволяет выполнять больше заказов за&nbsp;смену,
            значительно снижая физическую нагрузку и&nbsp;увеличивая ваш доход.
          </p>
        </div>
        <div className="mt-5">
          <CTAButton text="Узнать подробности" className="w-full" />
        </div>
      </div>
    </div>
  );
}

/* ─── Calculator Modal ─── */
function CalculatorModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [hours, setHours] = useState(8);
  const [days, setDays] = useState(6);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const rate = 550;
  const perDay = hours * rate;
  const perWeek = perDay * days;
  const perMonth = perWeek * 4;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="animate-slide-up relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl bg-white p-5 shadow-2xl sm:max-w-md sm:rounded-2xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-gray-300 sm:hidden" />
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xl text-[var(--color-text-secondary)] hover:bg-gray-200"
          aria-label="Закрыть"
        >
          &times;
        </button>

        <h3 className="mb-1 text-lg font-bold sm:text-xl">Калькулятор дохода</h3>
        <p className="mb-5 text-xs text-[var(--color-text-secondary)]">Ставка: 550 ₽/час</p>

        <div className="mb-5">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium">Часы в день</label>
            <span className="rounded-lg bg-[var(--color-brand)]/10 px-2.5 py-1 text-sm font-bold text-[var(--color-brand)]">
              {hours} ч
            </span>
          </div>
          <input
            type="range"
            min={4}
            max={16}
            step={1}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full"
          />
          <div className="mt-1 flex justify-between text-[10px] text-[var(--color-text-secondary)]">
            <span>4 ч</span>
            <span>16 ч</span>
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium">Дней в неделю</label>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5, 6, 7].map((d) => (
              <button
                key={d}
                onClick={() => setDays(d)}
                className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition-all ${
                  days === d
                    ? "bg-[var(--color-brand)] text-white shadow-md"
                    : "bg-[var(--color-bg-alt)] text-[var(--color-text)] hover:bg-[var(--color-brand-light)]"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 rounded-xl bg-[var(--color-bg-alt)] p-4">
          <div className="text-center">
            <p className="text-[10px] text-[var(--color-text-secondary)] sm:text-xs">В день</p>
            <p className="text-base font-extrabold text-[var(--color-text)] sm:text-lg">
              {perDay.toLocaleString("ru-RU")}&nbsp;₽
            </p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-[var(--color-text-secondary)] sm:text-xs">В неделю</p>
            <p className="text-base font-extrabold text-[var(--color-text)] sm:text-lg">
              {perWeek.toLocaleString("ru-RU")}&nbsp;₽
            </p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-[var(--color-text-secondary)] sm:text-xs">В месяц</p>
            <p className="text-base font-extrabold text-[var(--color-brand)] sm:text-lg">
              {perMonth.toLocaleString("ru-RU")}&nbsp;₽
            </p>
          </div>
        </div>

        <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-center">
          <p className="text-xs text-amber-700">
            🎁 <strong>+ стартовый бонус 10&nbsp;000–15&nbsp;000&nbsp;₽</strong>
          </p>
        </div>

        <p className="mt-3 text-center text-[10px] text-[var(--color-text-secondary)]">
          Без учёта чаевых и дополнительных выплат
        </p>

        <div className="mt-4">
          <CTAButton text="Начать зарабатывать" className="w-full" />
        </div>
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════ */
export function App() {
  const [ebikeModal, setEbikeModal] = useState(false);
  const [calcModal, setCalcModal] = useState(false);
  const [caseTab, setCaseTab] = useState<"case" | "table" | "calc">("case");
  /* CHANGE 2: dismissible banner state */
  const [bannerVisible, setBannerVisible] = useState(true);

  const botLink = getBotLink();
  const botLinkCard = getBotLinkCard();
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">

      {/* ═══ CHANGE 2: FIXED TOP BONUS BANNER — dismissible, mobile-safe ═══
          CSS: .bonus-banner in index.css
          Responsive: compact on 360/375/412px, safe-area-inset for iOS
          To change banner height offsets: edit .header-with-banner and .hero-with-banner in CSS */}
      <div
        className={`bonus-banner bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 ${
          bannerVisible ? "" : "banner-hidden"
        }`}
        role="banner"
        aria-label="Стартовый бонус"
      >
        <div className="bonus-shimmer absolute inset-0 pointer-events-none" />
        <a
          href={botLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bonus-banner-inner relative font-bold text-amber-900"
        >
          <span>🎁 Бонус 10 000–15 000 ₽</span>
          <span className="hidden sm:inline">за выполнение условий → Узнать</span>
        </a>
        {/* CHANGE 2: close/dismiss button */}
        <button
          className="bonus-banner-close text-amber-900"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setBannerVisible(false);
          }}
          aria-label="Закрыть баннер"
        >
          ×
        </button>
      </div>

      {/* ─── HEADER / NAV ─── */}
      {/* CHANGE 2: header offset shifts when banner visible */}
      <header
        className={`sticky z-40 border-b border-[var(--color-border)] bg-white/90 backdrop-blur-md ${
          bannerVisible ? "header-with-banner" : "top-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-brand)] text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <span className="text-sm font-bold sm:text-base">Курьеры СПб</span>
          </div>
          <a
            href={botLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-brand)] px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)] active:scale-[0.97] sm:px-4"
          >
            {Icons.telegram}
            <span className="hidden sm:inline">Пройти тест</span>
            <span className="sm:hidden">Тест</span>
          </a>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      {/* CHANGE 2: extra top padding when banner is visible */}
      <div className={`relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-light)] via-white to-white ${bannerVisible ? "hero-with-banner" : ""}`}>
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--color-brand)]/5 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-[var(--color-brand)]/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-7 sm:pb-24 sm:pt-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left Column */}
            <div className="animate-fade-in-up">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)]/10 px-3.5 py-1.5 text-sm font-semibold text-[var(--color-brand)] sm:mb-4 sm:px-4">
                <span className="h-2 w-2 rounded-full bg-[var(--color-brand)] animate-pulse" />
                Набор открыт — Санкт-Петербург
              </div>
              <h1 className="mb-4 text-[1.75rem] font-extrabold leading-tight tracking-tight sm:mb-5 sm:text-4xl lg:text-[3.2rem]">
                Работа курьером в&nbsp;Санкт-Петербурге —{" "}
                <span className="text-[var(--color-brand)]">
                  от&nbsp;550&nbsp;₽/час
                </span>
              </h1>
              <p className="mb-6 max-w-lg text-base text-[var(--color-text-secondary)] sm:mb-8 sm:text-lg">
                Гибкий график, выплаты раз в&nbsp;неделю. Чтобы отправить
                заявку&nbsp;— пройдите быстрый тест в&nbsp;нашем Telegram-боте.
              </p>
              <CTAButton />
              <p className="mt-3 text-xs text-[var(--color-text-secondary)]">
                Требуется самозанятость. Возраст 16+
              </p>
            </div>

            {/* Right Column — Income Card */}
            <div className="animate-fade-in-up animate-delay-200">
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
                <h2 className="mb-5 text-center text-base font-bold sm:mb-6 sm:text-lg">
                  Коротко о доходе
                </h2>

                {/* CHANGE 1: "От 550 ₽/час" — single line, nowrap + clamp() */}
                <div className="mb-5 rounded-xl bg-[var(--color-brand)]/10 p-4 text-center sm:mb-6 sm:p-5">
                  <p className="rate-nowrap font-extrabold text-[var(--color-brand)]">
                    От 550&nbsp;₽/час
                  </p>
                  {/* CHANGE 1: working hours range */}
                  <p className="mt-1.5 text-xs text-[var(--color-text-secondary)] sm:text-sm">
                    Рабочий день: 4–16 часов
                  </p>
                  <p className="mt-0.5 text-[10px] text-[var(--color-text-secondary)] sm:text-xs">
                    чаевые и бонусы не учтены
                  </p>
                </div>

                {/* Three Stats */}
                <div className="grid grid-cols-3 gap-2 text-center sm:gap-3">
                  <div className="rounded-xl bg-[var(--color-bg-alt)] p-2.5 sm:p-3">
                    <p className="text-lg font-extrabold text-[var(--color-text)] sm:text-2xl">
                      2&nbsp;200&nbsp;₽
                    </p>
                    <p className="mt-0.5 text-[10px] text-[var(--color-text-secondary)] sm:mt-1 sm:text-xs">
                      за 4-ч смену
                    </p>
                  </div>
                  <div className="rounded-xl bg-[var(--color-bg-alt)] p-2.5 sm:p-3">
                    <p className="text-lg font-extrabold text-[var(--color-text)] sm:text-2xl">
                      4–16
                    </p>
                    <p className="mt-0.5 text-[10px] text-[var(--color-text-secondary)] sm:mt-1 sm:text-xs">
                      часов в день
                    </p>
                  </div>
                  <div className="rounded-xl bg-[var(--color-bg-alt)] p-2.5 sm:p-3">
                    <p className="text-lg font-extrabold text-[var(--color-text)] sm:text-2xl">
                      1×
                    </p>
                    <p className="mt-0.5 text-[10px] text-[var(--color-text-secondary)] sm:mt-1 sm:text-xs">
                      выплата в нед.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ BONUS BLOCK — full-width, under Hero ═══ */}
      <Section className="bg-gradient-to-r from-amber-50 via-amber-100/80 to-amber-50 py-8 sm:py-12" id="bonus">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl border-2 border-amber-300 bg-white p-5 text-center shadow-lg shadow-amber-100 sm:p-8">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 sm:h-16 sm:w-16">
              {Icons.gift}
            </div>
            <h2 className="mb-2 text-xl font-extrabold text-amber-800 sm:text-3xl">
              🎁 Стартовый бонус 10&nbsp;000–15&nbsp;000&nbsp;₽
            </h2>
            <p className="mx-auto max-w-md text-sm text-amber-700 sm:text-base">
              Дополнительный доход за&nbsp;выполнение условий&nbsp;— менеджер сообщит детали
            </p>
            <div className="mt-5">
              <CTAButton text="Узнать условия бонуса" />
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ EARNINGS TABLE ═══ */}
      <Section className="bg-[var(--color-bg-alt)] py-12 sm:py-24" id="earnings">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-3 text-center text-xl font-extrabold sm:text-3xl">
            Сколько можно заработать
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-center text-sm text-[var(--color-text-secondary)] sm:mb-10 sm:text-base">
            Расчёт по ставке 550&nbsp;₽/час при работе 6&nbsp;дней
            в&nbsp;неделю. Бонусы и&nbsp;чаевые не учтены.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
            <table className="w-full text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg-alt)]">
                  <th className="px-3 py-3 text-xs font-semibold sm:px-6 sm:text-sm">Часы/день</th>
                  <th className="px-3 py-3 text-xs font-semibold sm:px-6 sm:text-sm">В день</th>
                  <th className="px-3 py-3 text-xs font-semibold sm:px-6 sm:text-sm">В неделю</th>
                  <th className="px-3 py-3 text-xs font-semibold sm:px-6 sm:text-sm">В месяц</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { h: "4 ч",  d: "2 200 ₽",  w: "≈ 13 200 ₽",   m: "≈ 52 800 ₽" },
                  { h: "6 ч",  d: "3 300 ₽",  w: "≈ 19 800 ₽",   m: "≈ 79 200 ₽" },
                  { h: "8 ч",  d: "4 400 ₽",  w: "≈ 26 400 ₽",   m: "≈ 105 600 ₽", highlight: true },
                  { h: "10 ч", d: "5 500 ₽",  w: "≈ 33 000 ₽",   m: "≈ 132 000 ₽" },
                  { h: "14 ч", d: "7 700 ₽",  w: "≈ 46 200 ₽",   m: "≈ 184 800 ₽" },
                  { h: "16 ч", d: "8 800 ₽",  w: "≈ 52 800 ₽",   m: "≈ 211 200 ₽" },
                ].map((r, i) => (
                  <tr
                    key={i}
                    className={`border-b border-[var(--color-border)] last:border-0 ${r.highlight ? "bg-[var(--color-brand)]/5 font-semibold" : ""}`}
                  >
                    <td className="px-3 py-3 text-xs sm:px-6 sm:text-base">{r.h}</td>
                    <td className="px-3 py-3 text-xs sm:px-6 sm:text-base">{r.d}</td>
                    <td className="px-3 py-3 text-xs sm:px-6 sm:text-base">{r.w}</td>
                    <td className="px-3 py-3 text-xs font-bold text-[var(--color-brand)] sm:px-6 sm:text-base">
                      {r.m}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* "Реальный пример" — 3 tabs */}
          <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-white sm:mt-8">
            <div className="flex border-b border-[var(--color-border)] overflow-x-auto">
              {[
                { key: "case" as const,  label: "Кейс",        icon: Icons.user },
                { key: "table" as const, label: "Таблица",     icon: Icons.table },
                { key: "calc" as const,  label: "Калькулятор", icon: Icons.calculator },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => {
                    if (tab.key === "calc") {
                      setCalcModal(true);
                    } else {
                      setCaseTab(tab.key);
                    }
                  }}
                  className={`flex items-center gap-1.5 px-4 py-3 text-xs font-semibold transition-colors sm:px-6 sm:text-sm ${
                    caseTab === tab.key && tab.key !== "calc"
                      ? "tab-active text-[var(--color-brand)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-brand)]"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab: Case card (default) */}
            {caseTab === "case" && (
              <div className="p-5 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
                    {Icons.ruble}
                  </div>
                  <div className="flex-1">
                    <p className="mb-3 text-sm font-bold text-[var(--color-brand)]">
                      Реальный пример: путь нового курьера
                    </p>
                    <div className="mb-4 grid grid-cols-3 gap-2">
                      <div className="rounded-xl bg-[var(--color-bg-alt)] p-3 text-center">
                        <p className="text-lg font-extrabold sm:text-2xl">СПб</p>
                        <p className="text-[10px] text-[var(--color-text-secondary)] sm:text-xs">город</p>
                      </div>
                      <div className="rounded-xl bg-[var(--color-bg-alt)] p-3 text-center">
                        <p className="text-lg font-extrabold sm:text-2xl">8 ч</p>
                        <p className="text-[10px] text-[var(--color-text-secondary)] sm:text-xs">смена</p>
                      </div>
                      <div className="rounded-xl bg-[var(--color-brand)]/10 p-3 text-center">
                        <p className="text-lg font-extrabold text-[var(--color-brand)] sm:text-2xl">100K+</p>
                        <p className="text-[10px] text-[var(--color-text-secondary)] sm:text-xs">₽/мес</p>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--color-text)] sm:text-base">
                      Курьер подключился к&nbsp;сервису без опыта. В&nbsp;первый месяц работал по&nbsp;6&nbsp;часов,
                      5&nbsp;дней в&nbsp;неделю и&nbsp;заработал <strong>≈&nbsp;66&nbsp;000&nbsp;₽</strong>.
                      Со&nbsp;второго месяца увеличил смены до&nbsp;8&nbsp;часов, взял электровелосипед в&nbsp;аренду
                      (менеджер помог подобрать вариант) и&nbsp;стабильно выходит
                      на&nbsp;<strong>100&nbsp;000+&nbsp;₽/мес</strong>.
                    </p>
                    <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3">
                      <p className="text-xs font-semibold text-amber-700 sm:text-sm">
                        🎁 + Стартовый бонус 10&nbsp;000–15&nbsp;000&nbsp;₽ за&nbsp;выполнение условий
                      </p>
                    </div>
                    <p className="mt-3 text-xs text-[var(--color-text-secondary)]">
                      Без учёта чаевых и дополнительных выплат
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <CTAButton text="Начать так же" className="flex-1" />
                  <button
                    onClick={() => setCalcModal(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[var(--color-brand)] px-5 py-3 text-sm font-semibold text-[var(--color-brand)] transition-all hover:bg-[var(--color-brand-light)] active:scale-[0.97] sm:px-6"
                  >
                    {Icons.calculator}
                    Посчитать свой доход
                  </button>
                </div>
              </div>
            )}

            {/* Tab: Table */}
            {caseTab === "table" && (
              <div className="p-5 sm:p-8">
                <p className="mb-4 text-sm font-bold text-[var(--color-text)]">
                  Прогресс нового курьера (СПб, 5 дней/нед)
                </p>
                <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg-alt)]">
                        <th className="px-3 py-2.5 text-xs font-semibold sm:px-5 sm:text-sm">Период</th>
                        <th className="px-3 py-2.5 text-xs font-semibold sm:px-5 sm:text-sm">Часы/день</th>
                        <th className="px-3 py-2.5 text-xs font-semibold sm:px-5 sm:text-sm">Дни/нед</th>
                        <th className="px-3 py-2.5 text-xs font-semibold sm:px-5 sm:text-sm">Доход</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[var(--color-border)]">
                        <td className="px-3 py-2.5 text-xs sm:px-5 sm:text-sm">1-й месяц</td>
                        <td className="px-3 py-2.5 text-xs sm:px-5 sm:text-sm">6</td>
                        <td className="px-3 py-2.5 text-xs sm:px-5 sm:text-sm">5</td>
                        <td className="px-3 py-2.5 text-xs font-bold text-[var(--color-brand)] sm:px-5 sm:text-sm">≈ 66 000 ₽</td>
                      </tr>
                      <tr className="border-b border-[var(--color-border)] bg-[var(--color-brand)]/5">
                        <td className="px-3 py-2.5 text-xs font-medium sm:px-5 sm:text-sm">2-й месяц</td>
                        <td className="px-3 py-2.5 text-xs sm:px-5 sm:text-sm">8</td>
                        <td className="px-3 py-2.5 text-xs sm:px-5 sm:text-sm">5</td>
                        <td className="px-3 py-2.5 text-xs font-bold text-[var(--color-brand)] sm:px-5 sm:text-sm">≈ 88 000 ₽</td>
                      </tr>
                      <tr className="border-b border-[var(--color-border)] bg-amber-50">
                        <td className="px-3 py-2.5 text-xs font-medium text-amber-700 sm:px-5 sm:text-sm">+ бонус</td>
                        <td className="px-3 py-2.5 text-xs text-[var(--color-text-secondary)] sm:px-5 sm:text-sm">—</td>
                        <td className="px-3 py-2.5 text-xs text-[var(--color-text-secondary)] sm:px-5 sm:text-sm">—</td>
                        <td className="px-3 py-2.5 text-xs font-bold text-amber-700 sm:px-5 sm:text-sm">+10 000–15 000 ₽</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-[11px] text-[var(--color-text-secondary)]">
                  Без учёта чаевых и дополнительных выплат
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <CTAButton text="Начать зарабатывать" className="flex-1" />
                  <button
                    onClick={() => setCalcModal(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[var(--color-brand)] px-5 py-3 text-sm font-semibold text-[var(--color-brand)] transition-all hover:bg-[var(--color-brand-light)] active:scale-[0.97] sm:px-6"
                  >
                    {Icons.calculator}
                    Посчитать свой доход
                  </button>
                </div>
              </div>
            )}
          </div>

          <p className="mt-4 text-center text-[11px] text-[var(--color-text-secondary)] sm:text-xs">
            * Чаевые и бонусы не учтены в расчётах. Фактический доход может отличаться.
          </p>
        </div>
      </Section>

      {/* ─── ADVANTAGES ─── */}
      <Section className="py-12 sm:py-24" id="advantages">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-3 text-center text-xl font-extrabold sm:text-3xl">
            Почему это выгодно
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-center text-sm text-[var(--color-text-secondary)] sm:mb-10 sm:text-base">
            Простые условия и прозрачный заработок
          </p>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-5">
            {/* CHANGE 1b: added 5th advantage — delivery services */}
            {[
              { icon: Icons.clock,     title: "Гибкий график",        desc: "Работайте 4–16 ч в день, подбирайте смены под себя" },
              { icon: Icons.wallet,    title: "Выплаты раз в неделю", desc: "Стабильные еженедельные выплаты на карту" },
              { icon: Icons.rocket,    title: "Старт без опыта",      desc: "Менеджер поможет разобраться и выйти на первую смену" },
              { icon: Icons.shield,    title: "Самозанятость",        desc: "Оформление через статус самозанятого — быстро и просто" },
              /* CHANGE 1b: новая карточка — сервисы доставки */
              { icon: Icons.building,  title: "Крупные сервисы",      desc: "Яндекс, Магнит, Самокат — менеджер поможет с выбором" },
            ].map((item, i) => (
              <div
                key={i}
                className={`group rounded-2xl border border-[var(--color-border)] bg-white p-4 transition-all duration-200 hover:border-[var(--color-brand)]/30 hover:shadow-lg hover:shadow-[var(--color-brand)]/5 sm:p-6 ${i === 4 ? "col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-brand)]/10 text-[var(--color-brand)] transition-colors group-hover:bg-[var(--color-brand)] group-hover:text-white sm:mb-4 sm:h-14 sm:w-14">
                  {item.icon}
                </div>
                <h3 className="mb-1 text-sm font-bold sm:mb-2 sm:text-base">{item.title}</h3>
                <p className="text-xs text-[var(--color-text-secondary)] sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── WHO CAN WORK ─── */}
      <Section className="bg-[var(--color-bg-alt)] py-12 sm:py-24" id="requirements">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div>
              <h2 className="mb-3 text-xl font-extrabold sm:text-3xl">
                Кто может работать
              </h2>
              <p className="mb-5 text-sm text-[var(--color-text-secondary)] sm:mb-6 sm:text-base">
                Принимаем граждан РФ и&nbsp;стран ЕАЭС. Возраст&nbsp;— от&nbsp;16&nbsp;лет.
              </p>

              <div className="space-y-2 sm:space-y-3">
                {[
                  { flag: "🇷🇺", country: "Россия", note: "" },
                  { flag: "🇧🇾", country: "Беларусь", note: "ЕАЭС" },
                  { flag: "🇰🇿", country: "Казахстан", note: "ЕАЭС" },
                  { flag: "🇦🇲", country: "Армения", note: "ЕАЭС" },
                  { flag: "🇰🇬", country: "Киргизия", note: "ЕАЭС" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl bg-white px-3.5 py-2.5 shadow-sm sm:px-4 sm:py-3">
                    <span className="text-xl sm:text-2xl">{c.flag}</span>
                    <span className="text-sm font-medium sm:text-base">{c.country}</span>
                    {c.note && (
                      <span className="ml-auto rounded-full bg-[var(--color-brand)]/10 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-brand)] sm:px-2.5 sm:text-xs">
                        {c.note}
                      </span>
                    )}
                    <span className="text-[var(--color-brand)]">{Icons.check}</span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-[var(--color-text-secondary)]">
                Граждане других стран (не&nbsp;ЕАЭС) не&nbsp;могут быть приняты на&nbsp;работу.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5 sm:p-8">
              <h3 className="mb-4 text-base font-bold sm:text-lg">Возрастные требования</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="rounded-xl bg-[var(--color-brand)]/5 p-3.5 sm:p-4">
                  <p className="font-semibold text-[var(--color-brand)]">18+ лет</p>
                  <p className="text-xs text-[var(--color-text-secondary)] sm:text-sm">
                    Полный рабочий день без ограничений — до 16 ч/день
                  </p>
                </div>
                <div className="rounded-xl bg-amber-50 p-3.5 sm:p-4">
                  <p className="font-semibold text-amber-700">16–17 лет</p>
                  <p className="text-xs text-[var(--color-text-secondary)] sm:text-sm">
                    Сокращённое рабочее время: до 7 ч/день. При совмещении с&nbsp;учёбой — до 4 ч/день.
                  </p>
                  <a
                    href="#footer-legal"
                    className="mt-2 inline-block text-xs font-medium text-amber-700 underline hover:no-underline"
                  >
                    Подробнее о правилах для 16–18 лет →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── STEPS ─── */}
      <Section className="py-12 sm:py-24" id="steps">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-3 text-center text-xl font-extrabold sm:text-3xl">
            Как подключиться
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-center text-sm text-[var(--color-text-secondary)] sm:mb-12 sm:text-base">
            Три простых шага — от заявки до первой смены
          </p>

          <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
            {[
              {
                icon: Icons.steps1, step: "1",
                title: "Пройдите тест в боте",
                desc: "Ответьте на несколько вопросов в Telegram-боте — это занимает 2–3 минуты. Анкета сразу попадает к менеджеру.",
              },
              {
                icon: Icons.steps2, step: "2",
                title: "Менеджер свяжется с вами",
                /* CHANGE 1a: добавлен текст про сервисы доставки в шаге 2 */
                desc: "Мы проверим данные, поможем с оформлением самозанятости, арендой оборудования и электровелосипеда. Доставка через Яндекс, Магнит, Самокат — менеджер подберёт оптимальный сервис и маршрут.",
              },
              {
                icon: Icons.steps3, step: "3",
                title: "Выходите на смену",
                desc: "Получаете инструкцию, выбираете удобный график и начинаете зарабатывать.",
              },
            ].map((s, i) => (
              <div key={i} className="relative rounded-2xl border border-[var(--color-border)] bg-white p-5 text-center sm:p-6">
                <div className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-bold text-white">
                  {s.step}
                </div>
                <div className="mx-auto mb-3 mt-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand)]/10 text-[var(--color-brand)] sm:mb-4 sm:h-14 sm:w-14">
                  {s.icon}
                </div>
                <h3 className="mb-2 text-sm font-bold sm:text-base">{s.title}</h3>
                <p className="text-xs text-[var(--color-text-secondary)] sm:text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:mt-10">
            <CTAButton />
            <p className="mt-3 text-xs text-[var(--color-text-secondary)]">
              Заполненная в боте анкета — готовая форма для работодателя
            </p>
          </div>
        </div>
      </Section>

      {/* ═══ CHANGE 3: E-BIKE SECTION — new icon, updated text ═══ */}
      <Section className="bg-[var(--color-bg-alt)] py-12 sm:py-24" id="ebike">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)]/10 px-3.5 py-1.5 text-sm font-semibold text-[var(--color-brand)] sm:mb-4 sm:px-4">
                {/* CHANGE 3: icon reference — /assets/icons/bike-e.svg */}
                {Icons.bike}
                Бонус к заработку
              </div>
              <h2 className="mb-3 text-xl font-extrabold sm:mb-4 sm:text-3xl">
                Электровелосипед — ваш бонус к&nbsp;заработку
              </h2>

              {/* CHANGE 3: new large headline */}
              <p className="mb-4 text-lg font-bold text-[var(--color-brand)] sm:text-xl">
                ⚡ Быстрее доставка → больше заказов → выше заработок
              </p>

              {/* CHANGE 3: updated description */}
              <p className="mb-5 text-sm text-[var(--color-text-secondary)] sm:mb-6 sm:text-base">
                Электровелосипед повышает эффективность смены&nbsp;— менеджер
                поможет с&nbsp;арендой и&nbsp;подключением. Больше заказов за&nbsp;час,
                меньше утомления, выше выработка.
              </p>

              <div className="mb-5 grid grid-cols-3 gap-2 sm:mb-6 sm:gap-3">
                <div className="rounded-xl bg-white p-3 text-center shadow-sm sm:p-4">
                  <p className="text-xl font-extrabold text-[var(--color-brand)] sm:text-2xl">+30%</p>
                  <p className="text-[10px] text-[var(--color-text-secondary)] sm:text-xs">заказов за смену</p>
                </div>
                <div className="rounded-xl bg-white p-3 text-center shadow-sm sm:p-4">
                  <p className="text-xl font-extrabold text-[var(--color-brand)] sm:text-2xl">−50%</p>
                  <p className="text-[10px] text-[var(--color-text-secondary)] sm:text-xs">усталости</p>
                </div>
                <div className="rounded-xl bg-white p-3 text-center shadow-sm sm:p-4">
                  <p className="text-xl font-extrabold text-[var(--color-brand)] sm:text-2xl">↑</p>
                  <p className="text-[10px] text-[var(--color-text-secondary)] sm:text-xs">доход в час</p>
                </div>
              </div>

              <button
                onClick={() => setEbikeModal(true)}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[var(--color-brand)] px-5 py-3 text-sm font-semibold text-[var(--color-brand)] transition-all duration-200 hover:bg-[var(--color-brand-light)] active:scale-[0.97] sm:px-6 sm:py-3.5 sm:text-base"
              >
                Узнать про аренду электровелосипеда
              </button>
            </div>

            {/* CHANGE 3: updated illustration with new large e-bike SVG icon */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="rounded-2xl bg-gradient-to-br from-[var(--color-brand)]/20 to-[var(--color-brand)]/5 p-6 text-center sm:p-8">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white text-[var(--color-brand)] shadow-lg sm:h-28 sm:w-28">
                    {/* CHANGE 3: large retina-crisp e-bike SVG — file ref: /assets/icons/bike-e.svg */}
                    {Icons.bikeLarge}
                  </div>
                  <h3 className="mb-2 text-lg font-bold sm:text-xl">Электровелосипед</h3>
                  <p className="text-sm font-semibold text-[var(--color-brand)]">
                    ⚡ Быстрее · Больше · Выше
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-text-secondary)] sm:text-sm">
                    Менеджер поможет с арендой
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ "Проблемы с картой" — "готовое решение" ═══ */}
      <Section className="py-12 sm:py-24" id="card-help">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl border border-[var(--color-border)] bg-gradient-to-r from-blue-50 to-indigo-50 p-5 sm:p-10">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 sm:h-16 sm:w-16">
                {Icons.card}
              </div>
              <div className="flex-1">
                <h2 className="mb-2 text-lg font-extrabold sm:text-2xl">
                  Проблемы с картами? Поможем
                </h2>
                {/* "готовое решение" */}
                <p className="text-sm text-[var(--color-text-secondary)] sm:text-base">
                  У вас заблокированы карты или проблемы с&nbsp;платёжными
                  сервисами? Наш менеджер подскажет варианты&nbsp;— готовое
                  решение и&nbsp;рекомендации, чтобы вы&nbsp;могли начать
                  работать быстрее.
                </p>
              </div>
              <CTAButton
                text="Нужна помощь с картой"
                href={botLinkCard}
                secondary
                className="w-full shrink-0 sm:w-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ─── FAQ ─── */}
      <Section className="bg-[var(--color-bg-alt)] py-12 sm:py-24" id="faq">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-3 text-center text-xl font-extrabold sm:text-3xl">
            Частые вопросы
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-center text-sm text-[var(--color-text-secondary)] sm:mb-10 sm:text-base">
            Ответы на самые частые вопросы о работе курьером
          </p>

          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4 sm:p-8">
            <FAQItem
              q="Нужна ли ИП для работы?"
              a="Нет, ИП не нужно. Требуется оформить статус самозанятого — это бесплатно и занимает несколько минут через приложение «Мой налог»."
            />
            <FAQItem
              q="Когда выплаты?"
              a="Выплаты производятся раз в неделю на вашу карту."
            />
            <FAQItem
              q="Что делать, если нет электровелосипеда?"
              a="Менеджер поможет с арендой электровелосипеда. Средняя стоимость — 5 500 ₽/неделя, при более длительной аренде действуют скидки."
            />
            {/* CHANGE 1c: FAQ — вопрос про сервисы доставки */}
            <FAQItem
              q="Через какие сервисы идёт доставка?"
              a="Доставка проходит через сервисы: Яндекс, Магнит, Самокат. Выбор сервиса и оптимальный маршрут подберёт менеджер при подключении."
            />
            <FAQItem
              q="Какие часы работы для 16–17 лет?"
              a={
                <>
                  Для несовершеннолетних 16–17 лет действуют сокращённые нормы:
                  до 7&nbsp;часов в&nbsp;день. При совмещении с&nbsp;учёбой — до
                  4&nbsp;часов в&nbsp;день.{" "}
                  <a
                    href="https://www.consultant.ru/document/cons_doc_LAW_34683/b09da1978a66a385bda15a2a0ad439257012a357/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-brand)] underline hover:no-underline"
                  >
                    Подробнее (ТК РФ, ст. 94) →
                  </a>
                </>
              }
            />
            <FAQItem
              q="Могу ли я работать, если я гражданин другой страны (не ЕАЭС)?"
              a="К сожалению, нет. Мы принимаем только граждан РФ и стран ЕАЭС (Беларусь, Казахстан, Армения, Киргизия)."
            />
            <FAQItem
              q="Как быстро можно начать работать?"
              a="После прохождения теста в боте менеджер свяжется с вами, как правило, в течение 1 рабочего дня. Выход на первую смену — от 1 до 3 дней."
            />
          </div>
        </div>
      </Section>

      {/* ═══ FINAL CTA ═══ */}
      <Section className="py-12 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <div className="relative rounded-2xl bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-dark)] px-5 py-10 text-white sm:px-12 sm:py-16">
            {/* Bonus badge */}
            <div className="bonus-glow mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-amber-400/90 px-4 py-2 text-sm font-bold text-amber-900 sm:px-5 sm:text-base">
              🎁 Бонус 10&nbsp;000–15&nbsp;000&nbsp;₽
            </div>

            <h2
              className="mb-3 font-extrabold leading-tight tracking-tight sm:mb-4"
              style={{
                fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
              }}
            >
              Готовы начать зарабатывать от&nbsp;550&nbsp;₽/час?
            </h2>

            <p
              className="mx-auto mb-6 max-w-lg text-white/85 sm:mb-8"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
            >
              Пройдите быстрый тест в&nbsp;Telegram&nbsp;— это займёт
              2–3&nbsp;минуты. Менеджер свяжется с&nbsp;вами и&nbsp;поможет выйти
              на&nbsp;первую смену.
            </p>

            <a
              href={botLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pulse inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-4 text-base font-bold text-[var(--color-brand)] shadow-lg shadow-black/10 transition-all duration-200 hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--color-brand)] active:scale-[0.97] sm:px-9 sm:py-5 sm:text-lg"
              style={{ borderRadius: "12px" }}
            >
              {Icons.telegram}
              Пройти тест
            </a>

            {/* CHANGE 1d: delivery services note under final CTA button */}
            <p className="mt-4 text-xs text-white/70 sm:text-sm">
              Доставка через Яндекс / Магнит / Самокат — менеджер подскажет лучший вариант
            </p>
            <p className="mt-1 text-xs text-white/50">
              Гибкий график · Выплаты раз в неделю · Чаевые и бонусы сверху
            </p>
          </div>
        </div>
      </Section>

      {/* ─── FOOTER ─── */}
      <footer
        id="footer-legal"
        className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)] py-8 sm:py-10"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--color-brand)] text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <span className="text-sm font-bold">Сервис набора курьеров</span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Санкт-Петербург. Связь с менеджером через Telegram-бот.
              </p>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold">Полезные ссылки</p>
              <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                <li>
                  <a
                    href="https://www.consultant.ru/document/cons_doc_LAW_34683/b09da1978a66a385bda15a2a0ad439257012a357/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--color-brand)] hover:underline"
                  >
                    ТК РФ, ст. 94 — продолжительность рабочего дня несовершеннолетних
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.consultant.ru/document/cons_doc_LAW_34683/98ef2900507ab87fe9b12e0457a0b7e8089f7f6b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--color-brand)] hover:underline"
                  >
                    ТК РФ, ст. 92 — сокращённое рабочее время
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.consultant.ru/document/cons_doc_LAW_163855/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--color-brand)] hover:underline"
                  >
                    Договор о ЕАЭС — упрощённый порядок для граждан стран-членов
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold">Правовая информация</p>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Информация на сайте не является публичной офертой. Требования к
                гражданству и трудоустройству могут меняться — уточняйте при
                подаче заявки. Для несовершеннолетних (16–17 лет) действуют
                сокращённые нормы рабочего времени согласно ТК РФ.
              </p>
              <a
                href="#"
                className="mt-2 inline-block text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-brand)] hover:underline"
              >
                Политика конфиденциальности
              </a>
            </div>
          </div>

          <div className="mt-6 border-t border-[var(--color-border)] pt-5 text-center text-xs text-[var(--color-text-secondary)] sm:mt-8 sm:pt-6">
            © {year} Сервис набора курьеров. Санкт-Петербург.
          </div>
        </div>
      </footer>

      {/* ─── MODALS ─── */}
      <EbikeModal open={ebikeModal} onClose={() => setEbikeModal(false)} />
      <CalculatorModal open={calcModal} onClose={() => setCalcModal(false)} />
    </div>
  );
}
