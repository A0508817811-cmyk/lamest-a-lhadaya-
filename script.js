
const gifts = [

    {
        name: "بوكس العناية",
        price: 120,
        image: "images/uu.jpg",
        description: `
        محتويات الصندوق:
        • كريم عناية بالبشرة
        • عطر ناعم
        • لوشن للجسم
        • شمعة معطرة
        • بطاقة إهداء
        `
    },

    {
        name: "بوكس القهوة",
        price: 300,
        image: "images/gg.jpg",
        description: `
        محتويات الصندوق:
        • كوب قهوة أنيق
        • قهوة مختصة
        • شوكولاتة فاخرة
        • ملعقة قهوة
        • بطاقة إهداء
        `
    },

    {
        name: "بوكس الشوكولاتة",
        price: 180,
        image: "images/aa.jpg",
        description: `
        محتويات الصندوق:
        • شوكولاتة بالحليب
        • شوكولاتة داكنة
        • شوكولاتة محشوة
        • تغليف فاخر
        • بطاقة إهداء
        `
    },

    {
        name: "بوكس الميلاد",
        price: 200,
        image: "images/ee.jpg",
        description: `
        محتويات الصندوق:
        • بالونات عيد ميلاد
        • حلويات متنوعة
        • كرت تهنئة
        • هدية مميزة
        • تغليف جميل
        `
    },

    {
        name: "بوكس الهدايا",
        price: 350,
        image: "images/bb.jpg",
        description: `
        محتويات الصندوق:
        • هدية مميزة
        • باقة ورد
        • شوكولاتة فاخرة
        • بطاقة باسم الشخص
        • تغليف فاخر
        `
    }

];

// عرض تفاصيل البوكس
function showDetails(index) {

    let gift = gifts[index];

    document.getElementById("popupImage").src = gift.image;

    document.getElementById("popupTitle").textContent = gift.name;

    document.getElementById("popupDescription").textContent = gift.description;

    document.getElementById("popupPrice").textContent =
        gift.price + " ريال";

    document.getElementById("giftPopup").style.display = "flex";
}

// إغلاق التفاصيل
function closePopup() {

    document.getElementById("giftPopup").style.display = "none";
}

// حفظ الملاحظات في العرض التجريبي
function sendOrderNote() {

    let note = document.getElementById("orderNotes").value;

    if (note.trim() === "") {
        alert("اكتبي ملاحظاتك أولاً");
        return;
    }

    alert("تم تسجيل ملاحظاتك في العرض التجريبي");
}
