// --- FONT DISPONIBILI (INCLUSI GOOGLE FONTS HORROR) ---
const FONT_OPTIONS = [
    { id: "'Segoe UI', sans-serif", name: "Classico (Sans-Serif)" },
    { id: "'Creepster', cursive", name: "🎃 Creepster (Halloween)" },
    { id: "'Nosifer', cursive", name: "🩸 Nosifer (Gocciolante)" },
    { id: "'Butcherman', cursive", name: "🧟 Butcherman (Zombie)" },
    { id: "'Eater', cursive", name: "👻 Eater (Mostruoso)" },
    { id: "'Mystery Quest', cursive", name: "🔮 Mystery Quest (Magico)" },
    { id: "Georgia, serif", name: "Elegante (Serif)" },
    { id: "'Courier New', monospace", name: "Macchina da Scrivere" },
    { id: "Impact, sans-serif", name: "Impact (Grassetto Forte)" }
];

// --- 25 OPZIONI MARKER (1 "Solo Testo" + 16 SVG Custom + 8 Emoji) ---
const DECORATIONS = [
    {
        id: 'text_only',
        name: 'Solo Testo',
        type: 'text_only',
        char: '🔤'
    },
    {
        id: 'pumpkin_classic',
        name: 'Zucca Classica',
        type: 'svg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M45,22 C45,10 55,8 58,15" stroke="#2d5a27" stroke-width="7" fill="none" stroke-linecap="round"/>
            <ellipse cx="50" cy="58" rx="42" ry="32" fill="#ff6600"/>
            <ellipse cx="50" cy="58" rx="28" ry="33" fill="#ff7700"/>
            <ellipse cx="50" cy="58" rx="14" ry="34" fill="#ff8800"/>
            <polygon points="32,48 42,38 45,52" fill="#2b0900"/>
            <polygon points="68,48 58,38 55,52" fill="#2b0900"/>
            <polygon points="50,50 45,58 55,58" fill="#2b0900"/>
            <path d="M28,66 L36,74 L43,68 L50,75 L57,68 L64,74 L72,66 L64,80 L50,83 L36,80 Z" fill="#2b0900"/>
        </svg>`
    },
    {
        id: 'pumpkin_evil',
        name: 'Zucca Maligna',
        type: 'svg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M48,22 L52,10" stroke="#1e3d1a" stroke-width="6" fill="none" stroke-linecap="round"/>
            <ellipse cx="50" cy="58" rx="42" ry="32" fill="#d94600"/>
            <ellipse cx="50" cy="58" rx="26" ry="33" fill="#e65000"/>
            <polygon points="25,42 45,52 32,56" fill="#ffea00"/>
            <polygon points="75,42 55,52 68,56" fill="#ffea00"/>
            <path d="M25,68 L35,62 L42,72 L50,62 L58,72 L65,62 L75,68 L66,82 L58,73 L50,83 L42,73 L34,82 Z" fill="#ffea00"/>
        </svg>`
    },
    {
        id: 'pumpkin_purple',
        name: 'Zucca Stregata',
        type: 'svg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M48,22 C42,12 55,10 55,10" stroke="#4a2545" stroke-width="6" fill="none" stroke-linecap="round"/>
            <ellipse cx="50" cy="58" rx="40" ry="31" fill="#701c8c"/>
            <ellipse cx="50" cy="58" rx="24" ry="32" fill="#8425a3"/>
            <circle cx="36" cy="50" r="7" fill="#39ff14"/>
            <circle cx="64" cy="50" r="7" fill="#39ff14"/>
            <path d="M32,68 Q50,85 68,68 Q50,74 32,68 Z" fill="#39ff14"/>
        </svg>`
    },
    {
        id: 'pumpkin_pirate',
        name: 'Zucca Pirata',
        type: 'svg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M48,22 L50,12" stroke="#2d5a27" stroke-width="6" fill="none" stroke-linecap="round"/>
            <ellipse cx="50" cy="58" rx="42" ry="32" fill="#ff5500"/>
            <ellipse cx="50" cy="58" rx="25" ry="33" fill="#ff6d00"/>
            <path d="M12,42 L88,52" stroke="#111" stroke-width="4"/>
            <circle cx="36" cy="48" r="9" fill="#111"/>
            <polygon points="64,40 56,52 72,52" fill="#ffea00"/>
            <path d="M32,70 L68,70 L62,80 L38,80 Z" fill="#2b0900"/>
            <rect x="42" y="70" width="6" height="5" fill="#ff6d00"/>
        </svg>`
    },
    {
        id: 'pumpkin_cyclops',
        name: 'Zucca Ciclope',
        type: 'svg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M48,20 Q55,10 60,15" stroke="#2d5a27" stroke-width="6" fill="none" stroke-linecap="round"/>
            <ellipse cx="50" cy="58" rx="40" ry="32" fill="#2b8a3e"/>
            <ellipse cx="50" cy="58" rx="22" ry="33" fill="#37b24d"/>
            <circle cx="50" cy="46" r="13" fill="#ffea00"/>
            <circle cx="50" cy="46" r="5" fill="#d90429"/>
            <path d="M30,72 Q50,62 70,72 Q50,86 30,72 Z" fill="#111"/>
        </svg>`
    },
    {
        id: 'ghost_classic',
        name: 'Fantasma Classico',
        type: 'svg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M22,88 L22,45 C22,18 78,18 78,45 L78,88 L66,76 L55,88 L45,76 L34,88 Z" fill="#f2f7fa" stroke="#b8d0de" stroke-width="3"/>
            <ellipse cx="40" cy="45" rx="5" ry="8" fill="#111"/>
            <ellipse cx="60" cy="45" rx="5" ry="8" fill="#111"/>
            <ellipse cx="50" cy="60" rx="6" ry="9" fill="#111"/>
        </svg>`
    },
    {
        id: 'ghost_scream',
        name: 'Fantasma Urlante',
        type: 'svg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M25,90 Q20,45 30,25 Q50,10 70,25 Q80,45 75,90 L62,78 L50,90 L38,78 Z" fill="#e5d4ff" stroke="#9b72cf" stroke-width="3"/>
            <ellipse cx="39" cy="42" rx="6" ry="10" fill="#1a0033"/>
            <ellipse cx="61" cy="42" rx="6" ry="10" fill="#1a0033"/>
            <ellipse cx="50" cy="66" rx="9" ry="15" fill="#1a0033"/>
        </svg>`
    },
    {
        id: 'ghost_king',
        name: 'Re Fantasma',
        type: 'svg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M24,90 L24,48 C24,24 76,24 76,48 L76,90 L64,78 L50,90 L36,78 Z" fill="#ffffff" stroke="#ccc" stroke-width="2"/>
            <polygon points="30,30 34,14 44,24 50,10 56,24 66,14 70,30" fill="#ffd700" stroke="#b8860b" stroke-width="2"/>
            <circle cx="40" cy="48" r="5" fill="#ff0033"/>
            <circle cx="60" cy="48" r="5" fill="#ff0033"/>
            <path d="M38,64 L44,60 L50,64 L56,60 L62,64" stroke="#111" stroke-width="3" fill="none"/>
        </svg>`
    },
    {
        id: 'bat_dark',
        name: 'Pipistrello Nero',
        type: 'svg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M50,42 L43,26 L38,40 C20,30 5,40 5,55 C18,50 26,58 30,66 C36,58 43,64 50,74 C57,64 64,58 70,66 C74,58 82,50 95,55 C95,40 80,30 62,40 L57,26 Z" fill="#221c29" stroke="#ff6600" stroke-width="2"/>
            <circle cx="45" cy="46" r="2.5" fill="#ff0033"/>
            <circle cx="55" cy="46" r="2.5" fill="#ff0033"/>
        </svg>`
    },
    {
        id: 'bat_vampire',
        name: 'Pipistrello Viola',
        type: 'svg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M50,38 L42,20 L35,36 C12,22 2,42 6,62 C18,52 28,60 32,70 C40,58 45,64 50,76 C55,64 60,58 68,70 C72,60 82,52 94,62 C98,42 88,22 65,36 L58,20 Z" fill="#4a154b" stroke="#ffbe0b" stroke-width="2"/>
            <circle cx="44" cy="45" r="3" fill="#39ff14"/>
            <circle cx="56" cy="45" r="3" fill="#39ff14"/>
            <polygon points="46,52 48,57 50,52" fill="#fff"/>
            <polygon points="50,52 52,57 54,52" fill="#fff"/>
        </svg>`
    },
    {
        id: 'witch_hat',
        name: 'Cappello Strega',
        type: 'svg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <ellipse cx="50" cy="78" rx="44" ry="12" fill="#2b1b38" stroke="#120a1a" stroke-width="2"/>
            <path d="M26,75 L46,18 L66,12 L56,28 L74,75 Z" fill="#3c264f" stroke="#120a1a" stroke-width="2"/>
            <path d="M27,68 Q50,76 73,68 L74,75 Q50,83 26,75 Z" fill="#8019a8"/>
            <rect x="44" y="66" width="12" height="11" fill="#ffd700" rx="2"/>
            <rect x="47" y="69" width="6" height="5" fill="#120a1a"/>
        </svg>`
    },
    {
        id: 'witch_broom',
        name: 'Strega in Volo',
        type: 'svg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="#ffd60a" opacity="0.9"/>
            <line x1="12" y1="68" x2="85" y2="38" stroke="#111" stroke-width="4"/>
            <polygon points="10,68 24,58 28,74" fill="#111"/>
            <polygon points="42,54 58,46 50,24" fill="#111"/>
            <polygon points="36,30 62,22 48,14" fill="#111"/>
            <circle cx="52" cy="30" r="5" fill="#111"/>
        </svg>`
    },
    {
        id: 'cauldron',
        name: 'Calderone Magico',
        type: 'svg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <ellipse cx="50" cy="62" rx="36" ry="26" fill="#222" stroke="#444" stroke-width="2"/>
            <rect x="20" y="36" width="60" height="8" rx="4" fill="#333"/>
            <ellipse cx="50" cy="36" rx="26" ry="6" fill="#39ff14"/>
            <circle cx="42" cy="26" r="5" fill="#39ff14"/>
            <circle cx="56" cy="20" r="7" fill="#39ff14"/>
            <circle cx="48" cy="12" r="4" fill="#39ff14"/>
        </svg>`
    },
    {
        id: 'tombstone',
        name: 'Lapide RIP',
        type: 'svg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M24,86 L24,42 C24,16 76,16 76,42 L76,86 Z" fill="#7f8c8d" stroke="#2c3e50" stroke-width="3"/>
            <rect x="16" y="82" width="68" height="10" rx="3" fill="#576574"/>
            <text x="50" y="54" font-family="serif" font-size="18" font-weight="bold" fill="#2c3e50" text-anchor="middle">R.I.P.</text>
            <line x1="36" y1="66" x2="64" y2="66" stroke="#2c3e50" stroke-width="2"/>
        </svg>`
    },
    {
        id: 'black_cat',
        name: 'Gatto Nero',
        type: 'svg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M35,88 L35,58 C35,45 65,45 65,58 L65,88 Z" fill="#111"/>
            <circle cx="50" cy="40" r="18" fill="#111"/>
            <polygon points="34,30 36,12 46,24" fill="#111"/>
            <polygon points="66,30 64,12 54,24" fill="#111"/>
            <ellipse cx="43" cy="38" rx="4" ry="6" fill="#ffea00"/>
            <ellipse cx="57" cy="38" rx="4" ry="6" fill="#ffea00"/>
            <path d="M64,82 Q85,75 82,52" stroke="#111" stroke-width="6" fill="none" stroke-linecap="round"/>
        </svg>`
    },
    {
        id: 'spooky_candle',
        name: 'Candela Accesa',
        type: 'svg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect x="36" y="42" width="28" height="46" rx="3" fill="#fff3b0" stroke="#e09f3e" stroke-width="2"/>
            <path d="M36,44 Q42,58 45,50 Q50,64 55,48 Q60,56 64,44" fill="#fff" stroke="#e09f3e" stroke-width="1"/>
            <path d="M50,12 C40,26 44,38 50,38 C56,38 60,26 50,12 Z" fill="#ff9f1c"/>
            <path d="M50,20 C46,28 47,36 50,36 C53,36 54,28 50,20 Z" fill="#ffbf69"/>
        </svg>`
    },
    { id: 'emoji_witch', name: 'Strega Emoji', type: 'emoji', char: '🧙‍♀️' },
    { id: 'emoji_skull', name: 'Teschio', type: 'emoji', char: '💀' },
    { id: 'emoji_spider', name: 'Ragno', type: 'emoji', char: '🕷️' },
    { id: 'emoji_web', name: 'Ragnatela', type: 'emoji', char: '🕸️' },
    { id: 'emoji_zombie', name: 'Zombie', type: 'emoji', char: '🧟' },
    { id: 'emoji_vampire', name: 'Vampiro', type: 'emoji', char: '🧛' },
    { id: 'emoji_eye', name: 'Occhio', type: 'emoji', char: '👁️' },
    { id: 'emoji_candy', name: 'Caramella', type: 'emoji', char: '🍬' }
];