const menuItems = ["Mac", "iPad", "iPhone", "Watch", "AirPods", "TV", "Entertainment", "Support"];
const navList = document.getElementById('nav-list');

for (let i = 0; i < menuItems.length; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = "#";
    a.innerText = menuItems[i];
    li.appendChild(a);
    navList.appendChild(li);
}

// 2. ФУНКЦИЯ для закрытия верхнего баннера
const closeBtn = document.querySelector('.close');
const banner = document.querySelector('.banner-top');

closeBtn.addEventListener('click', function() {
    banner.style.display = 'none';
});

// 3. ФУНКЦИЯ для кнопки "Learn more"
document.querySelector('.learn-more').onclick = function() {
    alert("Вы переходите к обзору iPhone!");
};