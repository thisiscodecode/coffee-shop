export interface Product {
  id: string;
  name: string;
  price: number;
  ingredients: string;
  image: string;
  badge?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  products: Product[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "coffee",
    title: "قهوه",
    icon: "Coffee",
    description: "مرغوب‌ترین دانه‌های قهوه از بهترین مزارع جهان، با عطر و طعمی بی‌نظیر",
    products: [
      { id: "espresso", name: "اسپرسو", price: 45000, ingredients: "دانه قهوه عربیکا، دانه قهوه روبوستا", image: "/images/espresso.jpg" },
      { id: "double-espresso", name: "دوبل اسپرسو", price: 55000, ingredients: "دانه قهوه عربیکا، دانه قهوه روبوستا (دو شات)", image: "/images/double-espresso.jpg", badge: "پرفروش" },
      { id: "americano", name: "آمریکانو", price: 50000, ingredients: "اسپرسو دوبل، آب داغ فیلتر شده", image: "/images/americano.jpg" },
      { id: "latte", name: "لاته", price: 65000, ingredients: "اسپرسو، شیر بخارپز، فوم شیر", image: "/images/latte.jpg", badge: "محبوب" },
      { id: "cappuccino", name: "کاپوچینو", price: 65000, ingredients: "اسپرسو، شیر بخارپز، فوم شیر غلیظ، پودر کاکائو", image: "/images/cappuccino.jpg" },
      { id: "mocha", name: "موکا", price: 75000, ingredients: "اسپرسو، شکلات تلخ، شیر بخارپز، خامه فرم‌گرفته", image: "/images/mocha.jpg" },
      { id: "macchiato", name: "ماکیاتو", price: 55000, ingredients: "اسپرسو، فوم شیر", image: "/images/macchiato.jpg" },
      { id: "flat-white", name: "فلت وایت", price: 70000, ingredients: "اسپرسو دوبل، شیر مایکروفوم", image: "/images/flat-white.jpg" },
      { id: "turkish-coffee", name: "قهوه ترک", price: 50000, ingredients: "قهوه ترک بسیار ریز آسیاب شده، آب سرد، هل، زعفران", image: "/images/turkish-coffee.png", badge: "ویژه" },
      { id: "affogato", name: "آفوگاتو", price: 75000, ingredients: "بستنی وانیلی فرانسوی، اسپرسو تازه، گردو خرد شده", image: "/images/affogato.jpg" },
    ],
  },
  {
    id: "iced-drinks",
    title: "نوشیدنی‌های سرد",
    icon: "GlassWater",
    description: "نوشیدنی‌های خنک و طراوت‌بخش، مناسب روزهای گرم تابستان",
    products: [
      { id: "iced-latte", name: "آیس لاته", price: 75000, ingredients: "اسپرسو، شیر سرد، یخ، شربت وانیل", image: "/images/iced-latte.jpg", badge: "محبوب" },
      { id: "iced-mocha", name: "آیس موکا", price: 80000, ingredients: "اسپرسو، شکلات تلخ، شیر سرد، یخ، خامه", image: "/images/iced-mocha.jpg" },
      { id: "frappuccino", name: "فراپاچینو کلاسیک", price: 85000, ingredients: "قهوه فریزری، شیر، یخ خرد شده، شربت کارامل، خامه", image: "/images/frappuccino.png", badge: "پرفروش" },
      { id: "esmiron", name: "اسمیرن", price: 85000, ingredients: "اسپرسو فریزری، شکلات سفید، شیر سرد، یخ، سس شکلات", image: "/images/esmiron.jpg", badge: "ویژه" },
      { id: "cold-brew", name: "کلد برو", price: 80000, ingredients: "قهوه دم‌کرده سرد (۲۴ ساعته)، آب فیلتر شده، یخ", image: "/images/cold-brew.jpg" },
      { id: "coffee-shake", name: "شیک قهوه", price: 90000, ingredients: "بستنی وانیلی، اسپرسو، شیر، یخ، سس شکلات", image: "/images/coffee-shake.jpg" },
      { id: "iced-caramel", name: "آیس کارامل ماکیاتو", price: 85000, ingredients: "شیر سرد، اسپرسو، شربت وانیل، سس کارامل، یخ", image: "/images/iced-caramel.jpg" },
      { id: "matcha-latte-iced", name: "آیس ماچا لاته", price: 85000, ingredients: "پودر ماچا ژاپنی، شیر سرد، شربت عسل، یخ", image: "/images/matcha-latte-iced.jpg" },
    ],
  },
  {
    id: "hot-drinks",
    title: "نوشیدنی‌های گرم",
    icon: "Flame",
    description: "نوشیدنی‌های گرم و دلنشین برای روزهای سرد سال",
    products: [
      { id: "hot-chocolate", name: "هات چاکلت", price: 70000, ingredients: "پودر کاکائو بلژیکی، شیر بخارپز، خامه فرم‌گرفته", image: "/images/hot-chocolate.jpg", badge: "محبوب" },
      { id: "hot-caramel", name: "هات کارامل", price: 75000, ingredients: "شیر بخارپز، سس کارامل خانگی، خامه، دارچین", image: "/images/hot-caramel.png" },
      { id: "white-mocha", name: "موکا سفید", price: 75000, ingredients: "اسپرسو، شکلات سفید، شیر بخارپز، خامه", image: "/images/white-mocha.jpg" },
      { id: "hot-vanilla", name: "هات وانیل", price: 70000, ingredients: "شیر بخارپز، عصاره وانیل ماداگاسکار، فوم شیر", image: "/images/hot-vanilla.jpg" },
      { id: "turkish-tea", name: "چای ترکی", price: 40000, ingredients: "چای سیاه ترکی ریز، آب جوش، شکر، لیمو تازه", image: "/images/turkish-tea.jpg", badge: "ویژه" },
      { id: "chai-latte", name: "چای لاته", price: 55000, ingredients: "چای سیاه، شیر بخارپز، دارچین، هل، عسل، زنجبیل", image: "/images/chai-latte.jpg" },
      { id: "salep", name: "صالحپ", price: 60000, ingredients: "پودر صالحپ، شیر بخارپز، دارچین، پسته خرد شده", image: "/images/salep.jpg", badge: "پیشنهاد سرآشپز" },
    ],
  },
  {
    id: "tea-herbal",
    title: "چای و دمنوش",
    icon: "Leaf",
    description: "مجموعه‌ای از چای‌های اصیل و دمنوش‌های طبیعی و سلامت‌بخش",
    products: [
      { id: "masala-tea", name: "چای ماسالا", price: 45000, ingredients: "چای سیاه، دارچین، هل، زنجبیل، میخک، فلفل سیاه، شیر", image: "/images/masala-tea.jpg", badge: "ویژه" },
      { id: "green-tea", name: "چای سبز", price: 40000, ingredients: "چای سبز ژاپنی سنچا، آب جوش (۸۰ درجه)", image: "/images/green-tea.jpg" },
      { id: "mint-tea", name: "چای نعناع", price: 40000, ingredients: "نوشیدنی نعناع تازه، عسل طبیعی، لیمو", image: "/images/mint-tea.jpeg" },
      { id: "chamomile", name: "دمنوش بابونه", price: 45000, ingredients: "گل بابونه خشک، عسل طبیعی، لیمو ترش", image: "/images/chamomile.webp" },
      { id: "rose-herbal", name: "دمنوش گل محمدی", price: 45000, ingredients: "گلبرگ گل محمدی خشک، عرق بیدمشک، زعفران", image: "/images/rose-herbal.jpg" },
      { id: "ginger-herbal", name: "دمنوش زنجبیل", price: 45000, ingredients: "ریشه زنجبیل تازه، عسل، لیمو ترش، دارچین", image: "/images/ginger-herbal.jpg" },
      { id: "hibiscus-tea", name: "چای ترش", price: 45000, ingredients: "گل چای ترش (هیبیسکوس)، عسل، نعناع تازه", image: "/images/hibiscus-tea.jpg" },
      { id: "earl-grey", name: "ارل گری", price: 45000, ingredients: "چای سیاه، اسانس برگاموت، پوست لیمو خشک", image: "/images/earl-grey.jpg" },
    ],
  },
  {
    id: "desserts",
    title: "دسر",
    icon: "CakeSlice",
    description: "دسرهای تازه و خانگی، تهیه شده با بهترین مواد اولیه",
    products: [
      { id: "tiramisu", name: "تیرامیسو کلاسیک", price: 95000, ingredients: "بیسکویت ساوواردی، ماسکارپونه، اسپرسو، پودر کاکائو", image: "/images/tiramisu.jpg", badge: "پیشنهاد سرآشپز" },
      { id: "tiramisu-berry", name: "تیرامیسو توت‌فرنگی", price: 100000, ingredients: "بیسکویت ساوواردی، ماسکارپونه، توت‌فرنگی تازه، پودر قند", image: "/images/tiramisu-berry.jpg" },
      { id: "cheesecake", name: "چیزکیک نیویورکی", price: 90000, ingredients: "پنیر خامه‌ای، بیسکویت، کره، شکر، تخم‌مرغ، وانیل", image: "/images/cheesecake.jpg", badge: "محبوب" },
      { id: "chocolate-cake", name: "کیک شکلاتی", price: 85000, ingredients: "شکلات تلخ ۷۰٪، آرد، تخم‌مرغ، کره، شکر، گاناش شکلات", image: "/images/chocolate-cake.jpg" },
      { id: "panna-cotta", name: "پانا کوتا", price: 85000, ingredients: "خامه سنگین، شیر، پودر ژلاتین، وانیل، سس توت‌فرنگی", image: "/images/panna-cotta.jpg", badge: "ویژه" },
      { id: "creme-brulee", name: "کرم بروله", price: 85000, ingredients: "خامه سنگین، زرده تخم‌مرغ، وانیل، شکر کاراملیزه", image: "/images/creme-brulee.jpg" },
      { id: "mousse-chocolate", name: "موس شکلاتی", price: 80000, ingredients: "شکلات تلخ ۷۰٪، خامه سنگین، سفیده تخم‌مرغ، عسل", image: "/images/mousse-chocolate.jpg" },
      { id: "croissant", name: "کروسان کره‌ای", price: 55000, ingredients: "آرد، کره فرانسوی، مخمر، شکر، نمک، تخم‌مرغ", image: "/images/croissant.jpg" },
      { id: "macaron", name: "ماکارون فرانسوی", price: 45000, ingredients: "پودر بادام، شکر پودری، سفیده تخم‌مرغ، شکلات، کرم گردو", image: "/images/macaron.jpeg" },
      { id: "brownie", name: "براونی شکلاتی", price: 65000, ingredients: "شکلات تلخ، کره، شکر، آرد، تخم‌مرغ، گردو", image: "/images/brownie.jpg" },
      { id: "waffle", name: "وافل بلژیکی", price: 80000, ingredients: "آرد، تخم‌مرغ، شیر، کره، وانیل، میوه تازه، سس شکلات", image: "/images/waffle.jpg" },
      { id: "baklava", name: "باقلوا ترکی", price: 70000, ingredients: "خمیر یوفکا، گردو، پسته، کره، شهد عسل، گلاب", image: "/images/baklava.jpg", badge: "ویژه" },
      { id: "cannoli", name: "کانولی سیسیلی", price: 65000, ingredients: "خمیر ترد سوخاری، ریکوتا، شکر، پوست لیمو، شکلات تلخ", image: "/images/cannoli.jpg" },
    ],
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
}
