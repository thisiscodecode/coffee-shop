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
  image: string;
  products: Product[];
}

const catImages = {
  coffee: "/images/coffee.svg",
  iced: "/images/iced.svg",
  hot: "/images/hot.svg",
  tea: "/images/tea.svg",
  dessert: "/images/dessert.svg",
};

export const menuCategories: MenuCategory[] = [
  {
    id: "coffee",
    title: "قهوه",
    icon: "Coffee",
    description: "مرغوب‌ترین دانه‌های قهوه از بهترین مزارع جهان، با عطر و طعمی بی‌نظیر",
    image: catImages.coffee,
    products: [
      { id: "espresso", name: "اسپرسو", price: 45000, ingredients: "دانه قهوه عربیکا، دانه قهوه روبوستا", image: catImages.coffee },
      { id: "double-espresso", name: "دوبل اسپرسو", price: 55000, ingredients: "دانه قهوه عربیکا، دانه قهوه روبوستا (دو شات)", image: catImages.coffee, badge: "پرفروش" },
      { id: "americano", name: "آمریکانو", price: 50000, ingredients: "اسپرسو دوبل، آب داغ فیلتر شده", image: catImages.coffee },
      { id: "latte", name: "لاته", price: 65000, ingredients: "اسپرسو، شیر بخارپز، فوم شیر", image: catImages.coffee, badge: "محبوب" },
      { id: "cappuccino", name: "کاپوچینو", price: 65000, ingredients: "اسپرسو، شیر بخارپز، فوم شیر غلیظ، پودر کاکائو", image: catImages.coffee },
      { id: "mocha", name: "موکا", price: 75000, ingredients: "اسپرسو، شکلات تلخ، شیر بخارپز، خامه فرم‌گرفته", image: catImages.coffee },
      { id: "macchiato", name: "ماکیاتو", price: 55000, ingredients: "اسپرسو، فوم شیر", image: catImages.coffee },
      { id: "flat-white", name: "فلت وایت", price: 70000, ingredients: "اسپرسو دوبل، شیر مایکروفوم", image: catImages.coffee },
      { id: "turkish-coffee", name: "قهوه ترک", price: 50000, ingredients: "قهوه ترک بسیار ریز آسیاب شده، آب سرد، هل، زعفران", image: catImages.coffee, badge: "ویژه" },
      { id: "affogato", name: "آفوگاتو", price: 75000, ingredients: "بستنی وانیلی فرانسوی، اسپرسو تازه، گردو خرد شده", image: catImages.coffee },
    ],
  },
  {
    id: "iced-drinks",
    title: "نوشیدنی‌های سرد",
    icon: "GlassWater",
    description: "نوشیدنی‌های خنک و طراوت‌بخش، مناسب روزهای گرم تابستان",
    image: catImages.iced,
    products: [
      { id: "iced-latte", name: "آیس لاته", price: 75000, ingredients: "اسپرسو، شیر سرد، یخ، شربت وانیل", image: catImages.iced, badge: "محبوب" },
      { id: "iced-mocha", name: "آیس موکا", price: 80000, ingredients: "اسپرسو، شکلات تلخ، شیر سرد، یخ، خامه", image: catImages.iced },
      { id: "frappuccino", name: "فراپاچینو کلاسیک", price: 85000, ingredients: "قهوه فریزری، شیر، یخ خرد شده، شربت کارامل، خامه", image: catImages.iced, badge: "پرفروش" },
      { id: "esmiron", name: "اسمیرن", price: 85000, ingredients: "اسپرسو فریزری، شکلات سفید، شیر سرد، یخ، سس شکلات", image: catImages.iced, badge: "ویژه" },
      { id: "cold-brew", name: "کلد برو", price: 80000, ingredients: "قهوه دم‌کرده سرد (۲۴ ساعته)، آب فیلتر شده، یخ", image: catImages.iced },
      { id: "coffee-shake", name: "شیک قهوه", price: 90000, ingredients: "بستنی وانیلی، اسپرسو، شیر، یخ، سس شکلات", image: catImages.iced },
      { id: "iced-caramel", name: "آیس کارامل ماکیاتو", price: 85000, ingredients: "شیر سرد، اسپرسو، شربت وانیل، سس کارامل، یخ", image: catImages.iced },
      { id: "matcha-latte-iced", name: "آیس ماچا لاته", price: 85000, ingredients: "پودر ماچا ژاپنی، شیر سرد، شربت عسل، یخ", image: catImages.iced },
    ],
  },
  {
    id: "hot-drinks",
    title: "نوشیدنی‌های گرم",
    icon: "Flame",
    description: "نوشیدنی‌های گرم و دلنشین برای روزهای سرد سال",
    image: catImages.hot,
    products: [
      { id: "hot-chocolate", name: "هات چاکلت", price: 70000, ingredients: "پودر کاکائو بلژیکی، شیر بخارپز، خامه فرم‌گرفته", image: catImages.hot, badge: "محبوب" },
      { id: "hot-caramel", name: "هات کارامل", price: 75000, ingredients: "شیر بخارپز، سس کارامل خانگی، خامه، دارچین", image: catImages.hot },
      { id: "white-mocha", name: "موکا سفید", price: 75000, ingredients: "اسپرسو، شکلات سفید، شیر بخارپز، خامه", image: catImages.hot },
      { id: "hot-vanilla", name: "هات وانیل", price: 70000, ingredients: "شیر بخارپز، عصاره وانیل ماداگاسکار، فوم شیر", image: catImages.hot },
      { id: "turkish-tea", name: "چای ترکی", price: 40000, ingredients: "چای سیاه ترکی ریز، آب جوش، شکر، لیمو تازه", image: catImages.hot, badge: "ویژه" },
      { id: "chai-latte", name: "چای لاته", price: 55000, ingredients: "چای سیاه، شیر بخارپز، دارچین، هل، عسل، زنجبیل", image: catImages.hot },
      { id: "salep", name: "صالحپ", price: 60000, ingredients: "پودر صالحپ، شیر بخارپز، دارچین، پسته خرد شده", image: catImages.hot, badge: "پیشنهاد سرآشپز" },
    ],
  },
  {
    id: "tea-herbal",
    title: "چای و دمنوش",
    icon: "Leaf",
    description: "مجموعه‌ای از چای‌های اصیل و دمنوش‌های طبیعی و سلامت‌بخش",
    image: catImages.tea,
    products: [
      { id: "masala-tea", name: "چای ماسالا", price: 45000, ingredients: "چای سیاه، دارچین، هل، زنجبیل، میخک، فلفل سیاه، شیر", image: catImages.tea, badge: "ویژه" },
      { id: "green-tea", name: "چای سبز", price: 40000, ingredients: "چای سبز ژاپنی سنچا، آب جوش (۸۰ درجه)", image: catImages.tea },
      { id: "mint-tea", name: "چای نعناع", price: 40000, ingredients: "نوشیدنی نعناع تازه، عسل طبیعی، لیمو", image: catImages.tea },
      { id: "chamomile", name: "دمنوش بابونه", price: 45000, ingredients: "گل بابونه خشک، عسل طبیعی، لیمو ترش", image: catImages.tea },
      { id: "rose-herbal", name: "دمنوش گل محمدی", price: 45000, ingredients: "گلبرگ گل محمدی خشک، عرق بیدمشک، زعفران", image: catImages.tea },
      { id: "ginger-herbal", name: "دمنوش زنجبیل", price: 45000, ingredients: "ریشه زنجبیل تازه، عسل، لیمو ترش، دارچین", image: catImages.tea },
      { id: "hibiscus-tea", name: "چای ترش", price: 45000, ingredients: "گل چای ترش (هیبیسکوس)، عسل، نعناع تازه", image: catImages.tea },
      { id: "earl-grey", name: "ارل گری", price: 45000, ingredients: "چای سیاه، اسانس برگاموت، پوست لیمو خشک", image: catImages.tea },
    ],
  },
  {
    id: "desserts",
    title: "دسر",
    icon: "CakeSlice",
    description: "دسرهای تازه و خانگی، تهیه شده با بهترین مواد اولیه",
    image: catImages.dessert,
    products: [
      { id: "tiramisu", name: "تیرامیسو کلاسیک", price: 95000, ingredients: "بیسکویت ساوواردی، ماسکارپونه، اسپرسو، پودر کاکائو", image: catImages.dessert, badge: "پیشنهاد سرآشپز" },
      { id: "tiramisu-berry", name: "تیرامیسو توت‌فرنگی", price: 100000, ingredients: "بیسکویت ساوواردی، ماسکارپونه، توت‌فرنگی تازه، پودر قند", image: catImages.dessert },
      { id: "cheesecake", name: "چیزکیک نیویورکی", price: 90000, ingredients: "پنیر خامه‌ای، بیسکویت، کره، شکر، تخم‌مرغ، وانیل", image: catImages.dessert, badge: "محبوب" },
      { id: "chocolate-cake", name: "کیک شکلاتی", price: 85000, ingredients: "شکلات تلخ ۷۰٪، آرد، تخم‌مرغ، کره، شکر، گاناش شکلات", image: catImages.dessert },
      { id: "panna-cotta", name: "پانا کوتا", price: 85000, ingredients: "خامه سنگین، شیر، پودر ژلاتین، وانیل، سس توت‌فرنگی", image: catImages.dessert, badge: "ویژه" },
      { id: "creme-brulee", name: "کرم بروله", price: 85000, ingredients: "خامه سنگین، زرده تخم‌مرغ، وانیل، شکر کاراملیزه", image: catImages.dessert },
      { id: "mousse-chocolate", name: "موس شکلاتی", price: 80000, ingredients: "شکلات تلخ ۷۰٪، خامه سنگین، سفیده تخم‌مرغ، عسل", image: catImages.dessert },
      { id: "croissant", name: "کروسان کره‌ای", price: 55000, ingredients: "آرد، کره فرانسوی، مخمر، شکر، نمک، تخم‌مرغ", image: catImages.dessert },
      { id: "macaron", name: "ماکارون فرانسوی", price: 45000, ingredients: "پودر بادام، شکر پودری، سفیده تخم‌مرغ، شکلات، کرم گردو", image: catImages.dessert },
      { id: "brownie", name: "براونی شکلاتی", price: 65000, ingredients: "شکلات تلخ، کره، شکر، آرد، تخم‌مرغ، گردو", image: catImages.dessert },
      { id: "waffle", name: "وافل بلژیکی", price: 80000, ingredients: "آرد، تخم‌مرغ، شیر، کره، وانیل، میوه تازه، سس شکلات", image: catImages.dessert },
      { id: "baklava", name: "باقلوا ترکی", price: 70000, ingredients: "خمیر یوفکا، گردو، پسته، کره، شهد عسل، گلاب", image: catImages.dessert, badge: "ویژه" },
      { id: "cannoli", name: "کانولی سیسیلی", price: 65000, ingredients: "خمیر ترد سوخاری، ریکوتا، شکر، پوست لیمو، شکلات تلخ", image: catImages.dessert },
    ],
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
}
