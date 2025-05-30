import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import GavelIcon from '@mui/icons-material/Gavel';
import WorkIcon from '@mui/icons-material/Work';

const translations = {
  sections: {
    home: {
      id: "home",
      en: "Home",
      ar: "الرئيسية",
      kr: "سەرەکی",
      contents: {
        title: {
          en: "Lawyer",
          ar: "المحامي",
          kr: "پارێزەر",
        },
        fullName: {
          en: "Muhammad S. Qader",
          ar: "محمد سعدالله",
          kr: "محمد سعدالله",
        },
        motto: {
          en: "The law is our weapon, and your right is our mission.",
          ar: ".الـــقـانـون ســلاحـنا، وحــقـك غــايـتـنا",
          kr: "یاسا چەکی ئێمەیە، مافەکەت ئامانجی ئێمەیە",
        },
        scheduleButton: {
          en: "Schedule Consultation",
          ar: "استشر بنا",
          kr: "وەعدی ڕامان دانە",
        },
      },
    },
    aboutUs: {
      id: "about",
      en: "About Us",
      ar: "عنا",
      kr: "دەربارەی ئێمە",
      contents: {
        description: {
          en: "We provide comprehensive legal services characterized by expertise and professionalism. We are committed to protecting our clients' rights and providing accurate advice in various legal fields. We strive to achieve justice through effective and innovative legal solutions",
          ar: "نقدم خدمات قانونية شاملة تتميز بالخبرة والاحترافية. نحن ملتزمون بحماية حقوق عملائنا وتقديم المشورة الدقيقة في مختلف المجالات القانونية. نسعى لتحقيق العدالة من خلال حلول قانونية فعالة ومبتكرة",
          kr: "خزمەتگوزاری یاسایی گشتی پێشکەش دەکەین بە شارەزایی و پەروەردەی باڵا. ئێمە بە ژمارەبوونی مافەکانی موشتەریان مامەڵە دەکەین و ڕاهێنانێکی ڕاست و گونجاو پێشکەش دەکەین لە مەیدانی یاسا. هەوڵ دەدەین داد بەدەست بهێنین بە چارەسەرە یاسایی و کاریگەر.",
        },
      },
    },
    services: {
      id: "services",
      en: "Practice Areas",
      ar: "مجالات الممارسة",
      kr: "بوارەکانی کار",
      services: [
        {
          en: "Corporate Law",
          ar: "قانون الشركات",
          kr: "یاسای کۆمپانیاکان",
          icon: BusinessIcon,
        },
        {
          en: "Civil Litigation",
          ar: "التقاضي المدني",
          kr: "بڕیاری دادگای شارستانی",
          icon: AccountBalanceIcon,
        },
        {
          en: "Real Estate Law",
          ar: "القانون العقاري",
          kr: "یاسای زەوی و خاوەنەتی",
          icon: HomeWorkIcon,
        },
        {
          en: "Family Law",
          ar: "قانون الأسرة",
          kr: "یاسای خێزان",
          icon: FamilyRestroomIcon,
        },
        {
          en: "Criminal Law",
          ar: "القانون الجنائي",
          kr: "یاسای تاوانباران",
          icon: GavelIcon,
        },
        {
          en: "Labor Law",
          ar: "قانون العمل",
          kr: "یاسای کار",
          icon: WorkIcon,
        },
      ],
    },
    contact: {
      id: "contact",
      en: "Contact",
      ar: "اتصل بنا",
      kr: "پەیوەندیمان پێوە بکە",
      contents: {
        name: {
          en: "Name",
          ar: "الاسم",
          kr: "ناو",
        },
        email: {
          en: "Email",
          ar: "البريد الإلكتروني",
          kr: "ئیمەیڵ",
        },
        message: {
          en: "Message",
          ar: "الرسالة",
          kr: "پەیام",
        },
        send: {
          en: "Send Message",
          ar: "إرسال",
          kr: "ناردنی پەیام",
        },
      },
    },
  },
};

export default translations;
