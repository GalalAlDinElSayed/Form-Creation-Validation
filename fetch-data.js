// دالة لجلب البيانات من API
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // رابط الـ API
    const dataContainer = document.getElementById('api-data'); // تحديد العنصر الذي سيتم عرض البيانات فيه

    try {
        const response = await fetch(apiUrl); // جلب البيانات من الـ API
        const users = await response.json(); // تحويل البيانات إلى JSON

        dataContainer.innerHTML = ''; // مسح الرسالة الافتراضية

        const userList = document.createElement('ul'); // إنشاء قائمة غير مرتبة

        users.forEach(user => {
            const listItem = document.createElement('li'); // إنشاء عنصر قائمة
            listItem.textContent = user.name; // تعيين اسم المستخدم كـ نص
            userList.appendChild(listItem); // إضافة العنصر إلى القائمة
        });

        dataContainer.appendChild(userList); // إضافة القائمة إلى العنصر في الـ HTML

    } catch (error) {
        dataContainer.innerHTML = 'Failed to load user data.'; // عرض رسالة الخطأ إذا فشل الجلب
    }
}

// استدعاء الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', fetchUserData);
