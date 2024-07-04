import player from "../assets/newspage/academy-section/1.png"
import amateurPlayer from "../assets/newspage/academy-section/2.png";
import i1 from "../assets/academypage/vids-section/1.jpeg";
import i2 from "../assets/academypage/vids-section/2.jpeg";
import i3 from "../assets/academypage/vids-section/3.jpeg";
import i4 from "../assets/academypage/vids-section/4.jpeg";


const players = [
    {
        id: 1,
        imgSrc: player,
        name: "ايمن مدور",
        age: 16,
        description: "ايمن هو لاعب كرة قدم ناشئ ذو موهبة استثنائية. يتمتع بقدرات رائعة على الحنكشة وسط الزحمة",
        category: "ناشئ",
        position: "وسط ميدان",
        birthDate: "24/11/2007",
        joinDate: "20/7/2018"
    },
    {
        id: 2,
        imgSrc: amateurPlayer,
        name: "محمد علي",
        age: 17,
        description: "محمد هو لاعب كرة قدم موهوب يتمتع بمهارات فنية عالية وسرعة كبيرة في الميدان",
        category: "محترف",
        position: "مهاجم",
        birthDate: "15/5/2006",
        joinDate: "10/8/2017"
    },
    {
        id: 3,
        imgSrc: amateurPlayer,
        name: "خالد محمود",
        age: 18,
        description: "خالد هو لاعب دفاعي صلب يتميز بقدراته الدفاعية الرائعة وشجاعته في المواجهات الثنائية",
        category: "محترف",
        position: "مدافع",
        birthDate: "30/3/2005",
        joinDate: "5/9/2016"
    },
    {
        id: 4,
        imgSrc: player,
        name: "علي حسين",
        age: 16,
        description: "علي هو لاعب خط وسط مبدع يتمتع بمهارات تمرير دقيقة وقدرة على التحكم في مجريات اللعب",
        category: "ناشئ",
        position: "وسط ميدان",
        birthDate: "12/2/2007",
        joinDate: "15/6/2018"
    },
    {
        id: 5,
        imgSrc: amateurPlayer,
        name: "عمرو عبد الله",
        age: 17,
        description: "عمرو هو لاعب جناح سريع يتمتع بقدرة عالية على المراوغة واختراق دفاعات الخصم",
        category: "محترف",
        position: "جناح",
        birthDate: "8/10/2006",
        joinDate: "22/4/2017"
    },
    {
        id: 6,
        imgSrc: player,
        name: "ياسر محمد",
        age: 18,
        description: "ياسر هو حارس مرمى موهوب يتمتع بردود فعل سريعة وقدرة على صد الكرات بشكل رائع",
        category: "ناشئ",
        position: "حارس مرمى",
        birthDate: "1/1/2005",
        joinDate: "18/5/2016"
    },
    {
        id: 7,
        imgSrc: amateurPlayer,
        name: "سعيد أحمد",
        age: 17,
        description: "سعيد هو لاعب وسط ميدان موهوب يتمتع بقدرات تمرير وتحكم رائعة",
        category: "محترف",
        position: "وسط ميدان",
        birthDate: "23/9/2006",
        joinDate: "12/4/2017"
    },
    {
        id: 8,
        imgSrc: player,
        name: "محمود عبد الله",
        age: 16,
        description: "محمود هو لاعب هجوم سريع وقوي يتمتع بقدرة على تسجيل الأهداف",
        category: "ناشئ",
        position: "مهاجم",
        birthDate: "4/6/2007",
        joinDate: "9/11/2018"
    },
    {
        id: 9,
        imgSrc: amateurPlayer,
        name: "عبد الرحمن خالد",
        age: 18,
        description: "عبد الرحمن هو مدافع قوي يتمتع بقدرات كبيرة في قطع الكرات والدفاع",
        category: "محترف",
        position: "مدافع",
        birthDate: "5/7/2005",
        joinDate: "13/8/2016"
    },
    {
        id: 10,
        imgSrc: player,
        name: "حسن يوسف",
        age: 17,
        description: "حسن هو لاعب وسط مبدع يتمتع برؤية ميدانية وقدرات تمرير عالية",
        category: "ناشئ",
        position: "وسط ميدان",
        birthDate: "16/10/2006",
        joinDate: "7/5/2017"
    }
];

const sessions = [
    {
        imgSrc: i1,
        name: "سارة محمد",
        age: 14,
        description: "حصة تدريبية لتطوير المهارات الفردية و تعزيز السرعة و المرونة",
        history: "15/6/2024",
        price: 250  
    },
    {
        imgSrc: i2,
        name: "أحمد خالد",
        age: 18,
        description: "جلسة تدريبية لتقوية العضلات و التحمل البدني مع تمارين الكرة المتقدمة",
        history: "10/6/2024",
        price: 300  
    },
    {
        imgSrc: i3,
        name: "لينا حسن",
        age: 12,
        description: "حصة تدريبية للتوازن و التنسيق و تحسين المهارات الأساسية في الكرة",
        history: "20/6/2024",
        price: 150  
    },
    {
        imgSrc: i4,
        name: "عمر يوسف",
        age: 17,
        description: "جلسة تدريبية لتحسين التحكم بالكرة و الاستراتيجيات الهجومية",
        history: "5/6/2024",
        price: 220  
    },
    {
        imgSrc: i4,
        name: "عمر يوسف",
        age: 17,
        description: "جلسة تدريبية لتحسين التحكم بالكرة و الاستراتيجيات الهجومية",
        history: "5/6/2024",
        price: 220  
    },
    {
        imgSrc: i4,
        name: "عمر يوسف",
        age: 17,
        description: "جلسة تدريبية لتحسين التحكم بالكرة و الاستراتيجيات الهجومية",
        history: "5/6/2024",
        price: 220  
    },
];

    const data = { players , sessions};
export default data;