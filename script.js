// נתוני היצירות עבור החלון הנפתח (Modal)
const itemsData = {
    item1: {
        title: "תדרוש גאולה לגלותנו",
        price: "₪450",
        isSold: false,
        desc: "תוף מרים בעיצוב מינימליסטי ומרגש עם הכיתוב 'תדרוש גאולה לגלותנו'. קוטר: 21 ס״מ.",
        images: ["images/tidrosh.jpg"]
    },
    item2: {
        title: "שורשי האלון",
        price: "₪1,800",
        isSold: true,
        desc: "צריכה ידנית מדויקת על עץ אלון מלא. היצירה נמכרה, ניתן להזמין יצירה דומה בעיצוב מותאם.",
        images: [
            "https://picsum.photos/id/1025/600/400",
            "https://picsum.photos/id/1024/600/400"
        ]
    },
    item3: {
        title: "תוף מרים - שירת הים",
        price: "₪950",
        isSold: false,
        desc: "תוף מרים אומנותי המשלב צבעי אקריליק, אלמנטים מעץ ועיטורים ידניים.",
        images: [
            "https://picsum.photos/id/1069/600/400",
            "https://picsum.photos/id/1062/600/400"
        ]
    },
    item4: {
        title: "עמק הארזים",
        price: "₪3,400",
        isSold: false,
        desc: "ציור קנווס מקורי ומרהיב של שיטפון בעמק הארזים. מידות: 100*60 ס\"מ.",
        images: ["images/DSC03088.jpg"]
    },
    item5: {
        title: "מערת אצבע",
        price: "₪2,800",
        isSold: false,
        desc: "ציור קנווס - מבט לנוף הכרמל הנושק לים מתוך מערת אצבע. מידות: 80*60 ס\"מ.",
        images: ["images/DSC03084.jpg"]
    }
};

// מנגנון סינון קטגוריות וזמינות
let currentCat = 'all';
let currentStatus = 'all';

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCat = btn.dataset.filterCat;
        applyFilters();
    });
});

document.querySelectorAll('.status-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.status-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentStatus = btn.dataset.filterStatus;
        applyFilters();
    });
});

function applyFilters() {
    const cards = document.querySelectorAll('.gallery-container .card');
    cards.forEach(card => {
        const catMatch = currentCat === 'all' || card.dataset.cat === currentCat;
        const statusMatch = currentStatus === 'all' || card.dataset.status === currentStatus;
        card.style.display = (catMatch && statusMatch) ? 'flex' : 'none';
    });
}

// מנגנון פתיחה וסגירה של חלון היצירה (Modal)
function openModal(itemId) {
    const item = itemsData[itemId];
    if (!item) return;

    document.getElementById('modal-title').innerText = item.title;
    document.getElementById('modal-price').innerText = item.price;
    document.getElementById('modal-desc').innerText = item.desc;
    document.getElementById('modal-item-name').value = item.title;

    const mainImg = document.getElementById('modal-main-img');
    const thumbsContainer = document.getElementById('modal-thumbs');

    mainImg.src = item.images[0];
    thumbsContainer.innerHTML = '';

    if (item.images.length > 1) {
        item.images.forEach((imgUrl, idx) => {
            const thumb = document.createElement('img');
            thumb.src = imgUrl;
            if (idx === 0) thumb.classList.add('active');
            thumb.onclick = () => {
                mainImg.src = imgUrl;
                document.querySelectorAll('#modal-thumbs img').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            };
            thumbsContainer.appendChild(thumb);
        });
    }

    document.getElementById('product-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModalDirect() {
    document.getElementById('product-modal').classList.remove('open');
    document.body.style.overflow = '';
}

function closeModal(event) {
    if (event.target.id === 'product-modal') {
        closeModalDirect();
    }
}