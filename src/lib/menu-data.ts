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
      {
        id: "espresso",
        name: "اسپرسو",
        price: 45000,
        ingredients: "دانه قهوه عربیکا، دانه قهوه روبوستا",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "double-espresso",
        name: "دوبل اسپرسو",
        price: 55000,
        ingredients: "دانه قهوه عربیکا، دانه قهوه روبوستا (دو شات)",
        image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=400&h=400&fit=crop&auto=format",
        badge: "پرفروش",
      },
      {
        id: "americano",
        name: "آمریکانو",
        price: 50000,
        ingredients: "اسپرسو دوبل، آب داغ فیلتر شده",
        image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "latte",
        name: "لاته",
        price: 65000,
        ingredients: "اسپرسو، شیر بخارپز، فوم شیر",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop&auto=format",
        badge: "محبوب",
      },
      {
        id: "cappuccino",
        name: "کاپوچینو",
        price: 65000,
        ingredients: "اسپرسو، شیر بخارپز، فوم شیر غلیظ، پودر کاکائو",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "mocha",
        name: "موکا",
        price: 75000,
        ingredients: "اسپرسو، شکلات تلخ، شیر بخارپز، خامه فرم‌گرفته",
        image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "macchiato",
        name: "ماکیاتو",
        price: 55000,
        ingredients: "اسپرسو، فوم شیر",
        image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "flat-white",
        name: "فلت وایت",
        price: 70000,
        ingredients: "اسپرسو دوبل، شیر مایکروفوم",
        image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&h=400&fit=crop&auto=format",
      },
    ],
  },
  {
    id: "iced-drinks",
    title: "نوشیدنی‌های سرد",
    icon: "GlassWater",
    description: "نوشیدنی‌های خنک و طراوت‌بخش، مناسب روزهای گرم تابستان",
    products: [
      {
        id: "iced-latte",
        name: "آیس لاته",
        price: 75000,
        ingredients: "اسپرسو، شیر سرد، یخ، شربت وانیل",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop&auto=format",
        badge: "محبوب",
      },
      {
        id: "iced-mocha",
        name: "آیس موکا",
        price: 80000,
        ingredients: "اسپرسو، شکلات تلخ، شیر سرد، یخ، خامه",
        image: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "frappuccino",
        name: "فراپاچینو کلاسیک",
        price: 85000,
        ingredients: "قهوه فریزری، شیر، یخ خرد شده، شربت کارامل، خامه",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop&auto=format",
        badge: "پرفروش",
      },
      {
        id: "esmiron",
        name: "اسمیرن",
        price: 85000,
        ingredients: "اسپرسو فریزری، شکلات سفید، شیر سرد، یخ، سس شکلات",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop&auto=format",
        badge: "ویژه",
      },
      {
        id: "cold-brew",
        name: "کلد برو",
        price: 80000,
        ingredients: "قهوه دم‌کرده سرد (۲۴ ساعته)، آب فیلتر شده، یخ",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "coffee-shake",
        name: "شیک قهوه",
        price: 90000,
        ingredients: "بستنی وانیلی، اسپرسو، شیر، یخ، سس شکلات",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop&auto=format",
      },
    ],
  },
  {
    id: "hot-drinks",
    title: "نوشیدنی‌های گرم",
    icon: "Flame",
    description: "نوشیدنی‌های گرم و دلنشین برای روزهای سرد سال",
    products: [
      {
        id: "hot-chocolate",
        name: "هات چاکلت",
        price: 70000,
        ingredients: "پودر کاکائو بلژیکی، شیر بخارپز، خامه فرم‌گرفته",
        image: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=400&h=400&fit=crop&auto=format",
        badge: "محبوب",
      },
      {
        id: "hot-caramel",
        name: "هات کارامل",
        price: 75000,
        ingredients: "شیر بخارپز، سس کارامل خانگی، خامه، دارچین",
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "white-mocha",
        name: "موکا سفید",
        price: 75000,
        ingredients: "اسپرسو، شکلات سفید، شیر بخارپز، خامه",
        image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "hot-vanilla",
        name: "هات وانیل",
        price: 70000,
        ingredients: "شیر بخارپز، عصاره وانیل ماداگاسکار، فوم شیر",
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=400&fit=crop&auto=format",
      },
    ],
  },
  {
    id: "tea-herbal",
    title: "چای و دمنوش",
    icon: "Leaf",
    description: "مجموعه‌ای از چای‌های اصیل و دمنوش‌های طبیعی و سلامت‌بخش",
    products: [
      {
        id: "masala-tea",
        name: "چای ماسالا",
        price: 45000,
        ingredients: "چای سیاه، دارچین، هل، زنجبیل، میخک، فلفل سیاه، شیر",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=400&fit=crop&auto=format",
        badge: "ویژه",
      },
      {
        id: "green-tea",
        name: "چای سبز",
        price: 40000,
        ingredients: "چای سبز ژاپنی سنچا، آب جوش (۸۰ درجه)",
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "mint-tea",
        name: "چای نعناع",
        price: 40000,
        ingredients: "نوشیدنی نعناع تازه، عسل طبیعی، لیمو",
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "chamomile",
        name: "دمنوش بابونه",
        price: 45000,
        ingredients: "گل بابونه خشک، عسل طبیعی، لیمو ترش",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "rose-herbal",
        name: "دمنوش گل محمدی",
        price: 45000,
        ingredients: "گلبرگ گل محمدی خشک، عرق بیدمشک، زعفران",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "ginger-herbal",
        name: "دمنوش زنجبیل",
        price: 45000,
        ingredients: "ریشه زنجبیل تازه، عسل، لیمو ترش، دارچین",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "hibiscus-tea",
        name: "چای ترش",
        price: 45000,
        ingredients: "گل چای ترش (هیبیسکوس)، عسل، نعناع تازه",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=400&fit=crop&auto=format",
      },
    ],
  },
  {
    id: "desserts",
    title: "دسر",
    icon: "CakeSlice",
    description: "دسرهای تازه و خانگی، تهیه شده با بهترین مواد اولیه",
    products: [
      {
        id: "tiramisu",
        name: "تیرامیسو",
        price: 95000,
        ingredients: "بیسکویت ساوواردی، ماسکارپونه، اسپرسو، پودر کاکائو",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop&auto=format",
        badge: "پیشنهاد سرآشپز",
      },
      {
        id: "cheesecake",
        name: "چیزکیک",
        price: 90000,
        ingredients: "پنیر خامه‌ای، بیسکویت، کره، شکر، تخم‌مرغ، وانیل",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop&auto=format",
        badge: "محبوب",
      },
      {
        id: "chocolate-cake",
        name: "کیک شکلاتی",
        price: 85000,
        ingredients: "شکلات تلخ ۷۰٪، آرد، تخم‌مرغ، کره، شکر، گاناش شکلات",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "croissant",
        name: "کروسان کره‌ای",
        price: 55000,
        ingredients: "آرد، کره فرانسوی، مخمر، شکر، نمک، تخم‌مرغ",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "macaron",
        name: "ماکارون فرانسوی",
        price: 45000,
        ingredients: "پودر بادام، شکر پودری، سفیده تخم‌مرغ، شکلات، کرم گردو",
        image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "brownie",
        name: "براونی شکلاتی",
        price: 65000,
        ingredients: "شکلات تلخ، کره، شکر، آرد، تخم‌مرغ، گردو",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop&auto=format",
      },
      {
        id: "waffle",
        name: "وافل بلژیکی",
        price: 80000,
        ingredients: "آرد، تخم‌مرغ، شیر، کره، وانیل، میوه تازه، سس شکلات",
        image: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=400&h=400&fit=crop&auto=format",
        badge: "ویژه",
      },
    ],
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
}