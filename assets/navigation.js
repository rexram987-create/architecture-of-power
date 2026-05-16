(function () {
    const buildings = [
        { file: 'capitol.html', he: 'הקפיטול', en: 'The Capitol', metaHe: 'ארצות הברית', metaEn: 'United States' },
        { file: 'westminster.html', he: 'ארמון וסטמינסטר', en: 'Westminster', metaHe: 'בריטניה', metaEn: 'United Kingdom' },
        { file: 'reichstag.html', he: 'הרייכסטאג', en: 'Reichstag', metaHe: 'גרמניה', metaEn: 'Germany' },
        { file: 'brazil_congress.html', he: 'קונגרס ברזיל', en: 'Brazil Congress', metaHe: 'ברזיל', metaEn: 'Brazil' },
        { file: 'knesset.html', he: 'הכנסת', en: 'The Knesset', metaHe: 'ישראל', metaEn: 'Israel' },
        { file: 'kremlin.html', he: 'הקרמלין', en: 'The Kremlin', metaHe: 'רוסיה', metaEn: 'Russia' },
        { file: 'elysee_palace.html', he: 'ארמון האליזה', en: 'Élysée Palace', metaHe: 'צרפת', metaEn: 'France' },
        { file: 'un_headquarters.html', he: 'מטה האו״ם', en: 'UN Headquarters', metaHe: 'ניו יורק / בינלאומי', metaEn: 'New York / International' }
    ];

    function isBuildingPage() {
        return window.location.pathname.includes('/buildings/');
    }

    function prefix() {
        return isBuildingPage() ? '../' : './';
    }

    function buildingHref(file) {
        return isBuildingPage() ? './' + file : './buildings/' + file;
    }

    function activeClass(path) {
        return path ? 'text-blue-400 font-bold border-b-2 border-blue-400 pb-1' : 'hover:text-blue-300 transition-colors';
    }

    function injectStyles() {
        if (document.getElementById('sharedNavigationStyles')) return;
        const style = document.createElement('style');
        style.id = 'sharedNavigationStyles';
        style.textContent = `
            .buildings-overlay { display: none; }
            .buildings-overlay.open { display: block; }
            .buildings-drawer { transform: translateX(100%); transition: transform 0.3s ease; }
            .buildings-drawer.open { transform: translateX(0); }
            html[dir="ltr"] .buildings-drawer { right: auto; left: 0; transform: translateX(-100%); border-left: 0; border-right: 1px solid rgb(55 65 81); }
            html[dir="ltr"] .buildings-drawer.open { transform: translateX(0); }
        `;
        document.head.appendChild(style);
    }

    window.openBuildingsMenu = function () {
        document.getElementById('buildingsOverlay')?.classList.add('open');
        document.getElementById('buildingsDrawer')?.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    window.closeBuildingsMenu = function () {
        document.getElementById('buildingsOverlay')?.classList.remove('open');
        document.getElementById('buildingsDrawer')?.classList.remove('open');
        document.body.style.overflow = '';
    };

    function buildNav() {
        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        const homeActive = currentFile === 'index.html' && !isBuildingPage();
        const aboutActive = currentFile === 'about.html';
        return `
            <nav class="relative bg-gray-800 p-5 border-b border-gray-700 shadow-lg">
                <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
                    <div class="text-xl font-bold text-blue-400">
                        <span class="lang-he">היסטוריה באבן</span>
                        <span class="lang-en">History in Stone</span>
                    </div>
                    <div class="flex flex-wrap gap-4 text-sm md:text-base items-center">
                        <a href="${prefix()}index.html" class="${activeClass(homeActive)}"><span class="lang-he">ראשי</span><span class="lang-en">Home</span></a>
                        <a href="${prefix()}about.html" class="${activeClass(aboutActive)}"><span class="lang-he">אודות</span><span class="lang-en">About</span></a>
                        <button type="button" onclick="openBuildingsMenu()" class="bg-gray-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors font-medium shadow-md">
                            <span class="lang-he">מבנים ☰</span><span class="lang-en">Buildings ☰</span>
                        </button>
                    </div>
                    <button onclick="toggleLanguage()" class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                        <span class="lang-he">English</span><span class="lang-en">עברית</span>
                    </button>
                </div>
            </nav>
        `;
    }

    function buildDrawer() {
        const currentFile = window.location.pathname.split('/').pop();
        const links = buildings.map(item => {
            const active = currentFile === item.file ? 'border-blue-500 bg-blue-950/40' : 'border-gray-700 bg-gray-800 hover:border-blue-500 hover:bg-gray-700';
            return `
                <a href="${buildingHref(item.file)}" class="block rounded-xl border ${active} p-4 transition-colors">
                    <strong class="text-blue-300"><span class="lang-he">${item.he}</span><span class="lang-en">${item.en}</span></strong>
                    <p class="text-sm text-gray-400 mt-1"><span class="lang-he">${item.metaHe}</span><span class="lang-en">${item.metaEn}</span></p>
                </a>
            `;
        }).join('');
        return `
            <div id="buildingsOverlay" class="buildings-overlay fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onclick="closeBuildingsMenu()"></div>
            <aside id="buildingsDrawer" class="buildings-drawer fixed top-0 right-0 z-50 h-full w-80 max-w-[88vw] bg-gray-900 border-l border-gray-700 shadow-2xl overflow-y-auto">
                <div class="sticky top-0 bg-gray-900/95 backdrop-blur border-b border-gray-700 p-5 flex items-center justify-between">
                    <h2 class="text-2xl font-extrabold text-white"><span class="lang-he">מבני שלטון</span><span class="lang-en">Government Buildings</span></h2>
                    <button type="button" onclick="closeBuildingsMenu()" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 text-2xl leading-none">×</button>
                </div>
                <div class="p-5 space-y-3">${links}</div>
            </aside>
        `;
    }

    function installNavigation() {
        injectStyles();
        const oldNav = document.querySelector('nav');
        if (oldNav) oldNav.outerHTML = buildNav();
        if (!document.getElementById('buildingsDrawer')) {
            document.body.insertAdjacentHTML('afterbegin', buildDrawer());
        }
        if (typeof applyLanguage === 'function') {
            applyLanguage(localStorage.getItem('lang') || 'he');
        }
    }

    document.addEventListener('DOMContentLoaded', installNavigation);
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') window.closeBuildingsMenu();
    });
})();
