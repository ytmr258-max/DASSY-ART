const itemsData = {
    item1: {
        title: "תדרוש גאולה לגלותנו",
        price: "₪450",
        desc: "תוף מרים בעיצוב טיפוגרפי. קוטר 21 ס\"מ.",
        image: "images/tidrosh.jpg"
    },
    item2: {
        title: "שורשי האלון",
        price: "₪1,800",
        desc: "עבודת צריבה מדויקת על עץ אלון מלא. (נמכר - ניתן להזמין דגם דומה).",
        image: "https://picsum.photos/id/1025/600/400"
    },
    item4: {
        title: "עמק הארזים",
        price: "₪3,400",
        desc: "ציור קנווס מקורי ומרהיב של שיטפון בעמק הארזים. מידות: 100*60 ס\"מ.",
        image: "images/DSC03088.jpg"
    },
    item5: {
        title: "מערת אצבע",
        price: "₪2,800",
        desc: "ציור קנווס - מבט מתוך המערה אל נוף הכרמל והים. מידות: 80*60 ס\"מ.",
        image: "images/DSC03084.jpg"
    }
};

// סינון
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const cat = btn.dataset.cat;
        document.querySelectorAll('.art-card').forEach(card => {
            if (cat === 'all' || card.dataset.cat === cat) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Modal
function openModal(itemId) {
    const item = itemsData[itemId];
    if (!item) return;

    document.getElementById('modal-title').innerText = item.title;
    document.getElementById('modal-price').innerText = item.price;
    document.getElementById('modal-desc').innerText = item.desc;
    document.getElementById('modal-main-img').src = item.image;
    document.getElementById('modal-item-name').value = item.title;

    document.getElementById('product-modal').classList.add('open');
}

function closeModalDirect() {
    document.getElementById('product-modal').classList.remove('open');
}

function closeModal(e) {
    if (e.target.id === 'product-modal') closeModalDirect();
}