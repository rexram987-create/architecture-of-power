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

    const buildingDetails = {
        'capitol.html': {
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/United_States_Capitol_west_front_edit2.jpg',
            imageAltHe: 'הקפיטול של ארצות הברית בוושינגטון',
            imageAltEn: 'United States Capitol in Washington, D.C.',
            subtitleHe: 'מושב הקונגרס האמריקאי וסמל הרפובליקה החוקתית.',
            subtitleEn: 'Seat of the U.S. Congress and symbol of the constitutional republic.',
            facts: [
                ['מדינה', 'ארצות הברית', 'Country', 'United States'],
                ['עיר', 'וושינגטון די. סי.', 'City', 'Washington, D.C.'],
                ['תפקיד', 'בית הנבחרים והסנאט', 'Role', 'House of Representatives and Senate'],
                ['סגנון', 'ניאו־קלאסי', 'Style', 'Neoclassical']
            ]
        },

        'westminster.html': {
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg',
            imageAltHe: 'ארמון וסטמינסטר בלונדון',
            imageAltEn: 'Palace of Westminster in London',
            subtitleHe: 'בית הפרלמנט הבריטי וסמל לשיטת וסטמינסטר.',
            subtitleEn: 'Home of the UK Parliament and symbol of the Westminster system.',
            facts: [
                ['מדינה', 'בריטניה', 'Country', 'United Kingdom'],
                ['עיר', 'לונדון', 'City', 'London'],
                ['תפקיד', 'בית הנבחרים ובית הלורדים', 'Role', 'House of Commons and House of Lords'],
                ['סגנון', 'התחייה הגותית', 'Style', 'Gothic Revival']
            ]
        },

        'reichstag.html': {
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Reichstag_building_Berlin_view_from_west_before_sunset.jpg',
            imageAltHe: 'בניין הרייכסטאג בברלין',
            imageAltEn: 'Reichstag building in Berlin',
            subtitleHe: 'מבנה שעבר מאימפריה ודיקטטורה לדמוקרטיה שקופה.',
            subtitleEn: 'A building transformed from empire and dictatorship into transparent democracy.',
            facts: [
                ['מדינה', 'גרמניה', 'Country', 'Germany'],
                ['עיר', 'ברלין', 'City', 'Berlin'],
                ['תפקיד', 'משכן הבונדסטאג', 'Role', 'Seat of the Bundestag'],
                ['סגנון', 'ניאו־רנסאנס עם כיפה מודרנית', 'Style', 'Neo-Renaissance with modern glass dome']
            ]
        },

        'brazil_congress.html': {
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Congresso_Nacional_do_Brasil.jpg',
            imageAltHe: 'ארמון הקונגרס הלאומי בברזיליה',
            imageAltEn: 'National Congress Palace in Brasília',
            subtitleHe: 'מודרניזם ברזילאי, בטון, סימטריה וסמליות של שלוש הרשויות.',
            subtitleEn: 'Brazilian modernism, concrete, symmetry, and the symbolism of the three powers.',
            facts: [
                ['מדינה', 'ברזיל', 'Country', 'Brazil'],
                ['עיר', 'ברזיליה', 'City', 'Brasília'],
                ['תפקיד', 'הקונגרס הלאומי', 'Role', 'National Congress'],
                ['סגנון', 'מודרניזם ברזילאי', 'Style', 'Brazilian modernism']
            ]
        },

        'knesset.html': {
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Knesset_Building%2C_Jerusalem.jpg',
            imageAltHe: 'משכן הכנסת בירושלים',
            imageAltEn: 'Knesset building in Jerusalem',
            subtitleHe: 'בית המחוקקים של ישראל והבמה המרכזית של הדמוקרטיה הישראלית.',
            subtitleEn: 'Israel’s legislature and the central stage of Israeli democracy.',
            facts: [
                ['מדינה', 'ישראל', 'Country', 'Israel'],
                ['עיר', 'ירושלים', 'City', 'Jerusalem'],
                ['תפקיד', 'כנסת ישראל', 'Role', 'Parliament of Israel'],
                ['סגנון', 'ממלכתיות מודרנית / ברוטליזם מתון', 'Style', 'Modern civic architecture / restrained Brutalism']
            ]
        },

        'kremlin.html': {
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Moscow_Kremlin_from_Bolshoy_Kamenny_Bridge.jpg',
            imageAltHe: 'הקרמלין של מוסקבה',
            imageAltEn: 'Moscow Kremlin',
            subtitleHe: 'מצודה, ארמון ומרכז שלטון רוסי לאורך מאות שנים.',
            subtitleEn: 'Fortress, palace, and Russian center of power over centuries.',
            facts: [
                ['מדינה', 'רוסיה', 'Country', 'Russia'],
                ['עיר', 'מוסקבה', 'City', 'Moscow'],
                ['תפקיד', 'מרכז נשיאותי וטקסי', 'Role', 'Presidential and ceremonial center'],
                ['סגנון', 'ביצורים רוסיים עם השפעות רנסאנס איטלקיות', 'Style', 'Russian fortification with Italian Renaissance influences']
            ]
        },

        'elysee_palace.html': {
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Palais_de_l_Elysee.jpg',
            imageAltHe: 'ארמון האליזה בפריז',
            imageAltEn: 'Élysée Palace in Paris',
            subtitleHe: 'בית הנשיא הצרפתי: ארמון אצולה שהפך למוקד נשיאותי.',
            subtitleEn: 'The French presidential residence: an aristocratic mansion turned presidential center.',
            facts: [
                ['מדינה', 'צרפת', 'Country', 'France'],
                ['עיר', 'פריז', 'City', 'Paris'],
                ['תפקיד', 'מעון רשמי ומשרד נשיא הרפובליקה', 'Role', 'Official residence and office of the President'],
                ['סגנון', 'הוטל פרטיקולייה צרפתי / קלאסיציזם עירוני', 'Style', 'French hôtel particulier / urban classicism']
            ]
        },

        'un_headquarters.html': {
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/United_Nations_Headquarters_in_New_York_City%2C_view_from_Roosevelt_Island.jpg',
            imageAltHe: 'מטה האו״ם בניו יורק',
            imageAltEn: 'United Nations Headquarters in New York City',
            subtitleHe: 'מרכז דיפלומטי עולמי ואדריכלות מודרניסטית של ממשל בינלאומי.',
            subtitleEn: 'A global diplomatic center and modernist architecture of international governance.',
            facts: [
                ['מדינה / מעמד', 'ניו יורק, אזור בינלאומי', 'Country / Status', 'New York, international zone'],
                ['עיר', 'ניו יורק', 'City', 'New York City'],
                ['תפקיד', 'מטה האומות המאוחדות', 'Role', 'United Nations headquarters'],
                ['סגנון', 'מודרניזם / International Style', 'Style', 'Modernism / International Style']
            ]
        }
    };

    function isBuildingPage() {
        return window.location.pathname.includes('/buildings/');
    }

    function prefix() {
        return isBuildingPage() ? '../' : './';
    }

    function buildingHref(file) {
        return isBuildingPage() ? './' + file : './buildings/' + file;
    }

    function activeClass(active) {
        return active
            ? 'text-blue-400 font-bold border-b-2 border-blue-400 pb-1'
            : 'hover:text-blue-300 transition-colors';
    }

    function injectStyles() {
        if (document.getElementById('sharedNavigationStyles')) return;

        const style = document.createElement('style');
        style.id = 'sharedNavigationStyles';
        style.textContent = `
            .buildings-overlay { display: none; }
            .buildings-overlay.open { display: block; }

            .buildings-drawer {
                transform: translateX(100%);
                transition: transform 0.3s ease;
            }

            .buildings-drawer.open {
                transform: translateX(0);
            }

            html[dir="ltr"] .buildings-drawer {
                right: auto;
                left: 0;
                transform: translateX(-100%);
                border-left: 0;
                border-right: 1px solid rgb(55 65 81);
            }

            html[dir="ltr"] .buildings-drawer.open {
                transform: translateX(0);
            }

            .building-image-modal {
                display: none;
            }

            .building-image-modal.open {
                display: flex;
            }
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

    window.openBuildingImageModal = function () {
        document.getElementById('buildingImageModal')?.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    window.closeBuildingImageModal = function () {
        document.getElementById('buildingImageModal')?.classList.remove('open');
        document.body.style.overflow = '';
    };

    function buildNav() {
        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        const homeActive = currentFile === 'index.html' && !isBuildingPage();
        const galleryActive = currentFile === 'gallery.html';
        const aboutActive = currentFile === 'about.html';

        return `
            <nav class="relative bg-gray-800 p-5 border-b border-gray-700 shadow-lg">
                <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
                    <div class="text-xl font-bold text-blue-400">
                        <span class="lang-he">היסטוריה באבן</span>
                        <span class="lang-en">History in Stone</span>
                    </div>

                    <div class="flex flex-wrap gap-4 text-sm md:text-base items-center">
                        <a href="${prefix()}index.html" class="${activeClass(homeActive)}">
                            <span class="lang-he">ראשי</span>
                            <span class="lang-en">Home</span>
                        </a>

                        <a href="${prefix()}gallery.html" class="${activeClass(galleryActive)}">
                            <span class="lang-he">תמונות</span>
                            <span class="lang-en">Gallery</span>
                        </a>

                        <a href="${prefix()}about.html" class="${activeClass(aboutActive)}">
                            <span class="lang-he">אודות</span>
                            <span class="lang-en">About</span>
                        </a>

                        <button type="button" onclick="openBuildingsMenu()" class="bg-gray-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors font-medium shadow-md">
                            <span class="lang-he">מבנים ☰</span>
                            <span class="lang-en">Buildings ☰</span>
                        </button>
                    </div>

                    <button onclick="toggleLanguage()" class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                        <span class="lang-he">English</span>
                        <span class="lang-en">עברית</span>
                    </button>
                </div>
            </nav>
        `;
    }

    function buildDrawer() {
        const currentFile = window.location.pathname.split('/').pop();

        const links = buildings.map(item => {
            const active = currentFile === item.file
                ? 'border-blue-500 bg-blue-950/40'
                : 'border-gray-700 bg-gray-800 hover:border-blue-500 hover:bg-gray-700';

            return `
                <a href="${buildingHref(item.file)}" class="block rounded-xl border ${active} p-4 transition-colors">
                    <strong class="text-blue-300">
                        <span class="lang-he">${item.he}</span>
                        <span class="lang-en">${item.en}</span>
                    </strong>
                    <p class="text-sm text-gray-400 mt-1">
                        <span class="lang-he">${item.metaHe}</span>
                        <span class="lang-en">${item.metaEn}</span>
                    </p>
                </a>
            `;
        }).join('');

        return `
            <div id="buildingsOverlay" class="buildings-overlay fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onclick="closeBuildingsMenu()"></div>

            <aside id="buildingsDrawer" class="buildings-drawer fixed top-0 right-0 z-50 h-full w-80 max-w-[88vw] bg-gray-900 border-l border-gray-700 shadow-2xl overflow-y-auto">
                <div class="sticky top-0 bg-gray-900/95 backdrop-blur border-b border-gray-700 p-5 flex items-center justify-between">
                    <h2 class="text-2xl font-extrabold text-white">
                        <span class="lang-he">מבני שלטון</span>
                        <span class="lang-en">Government Buildings</span>
                    </h2>
                    <button type="button" onclick="closeBuildingsMenu()" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 text-2xl leading-none">×</button>
                </div>

                <div class="p-5 space-y-3">
                    ${links}
                </div>
            </aside>
        `;
    }

    function factCard(fact) {
        return `
            <div class="rounded-2xl border border-gray-700 bg-gray-900/70 p-4">
                <p class="text-xs uppercase tracking-widest text-blue-300 mb-2">
                    <span class="lang-he">${fact[0]}</span>
                    <span class="lang-en">${fact[2]}</span>
                </p>
                <p class="text-gray-100 font-semibold">
                    <span class="lang-he">${fact[1]}</span>
                    <span class="lang-en">${fact[3]}</span>
                </p>
            </div>
        `;
    }

    function buildBuildingEnhancement(data) {
        return `
            <section id="museumEnhancement" class="bg-gray-800 rounded-3xl border border-gray-700 shadow-2xl overflow-hidden">
                <button type="button" onclick="openBuildingImageModal()" class="group block w-full relative text-start cursor-zoom-in" aria-label="Open building image">
                    <img src="${data.image}" alt="${data.imageAltEn}" class="w-full h-72 md:h-96 object-cover opacity-90 group-hover:opacity-100 transition-opacity" loading="lazy">

                    <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/25 to-transparent"></div>

                    <div class="absolute bottom-0 right-0 left-0 p-6 md:p-8">
                        <p class="text-sm text-blue-300 font-bold tracking-widest uppercase mb-2">
                            <span class="lang-he">תמונה ראשית נפתחת</span>
                            <span class="lang-en">Expandable main image</span>
                        </p>

                        <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-2">
                            <span class="lang-he">${data.imageAltHe}</span>
                            <span class="lang-en">${data.imageAltEn}</span>
                        </h2>

                        <p class="text-gray-200 text-lg">
                            <span class="lang-he">${data.subtitleHe}</span>
                            <span class="lang-en">${data.subtitleEn}</span>
                        </p>
                    </div>
                </button>

                <div class="auto-image-credit px-6 md:px-8 py-3 border-b border-gray-700 bg-gray-900/70 text-xs md:text-sm text-gray-400">
                    <span class="lang-he">מקור התמונה: </span>
                    <span class="lang-en">Image source: </span>
                    <a href="${data.image}" target="_blank" rel="noopener" class="text-blue-300 hover:text-blue-200 underline">Wikimedia Commons</a>
                    <span class="lang-he"> — פרטי היוצר והרישיון מופיעים בעמוד הקובץ המקורי.</span>
                    <span class="lang-en"> — author and license details appear on the original file page.</span>
                </div>

                <div class="p-6 md:p-8 space-y-8">
                    <div>
                        <h3 class="text-2xl font-bold text-white mb-4">
                            <span class="lang-he">כרטיס מידע מהיר</span>
                            <span class="lang-en">Quick fact card</span>
                        </h3>

                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            ${data.facts.map(factCard).join('')}
                        </div>
                    </div>
                </div>
            </section>

            <div id="buildingImageModal" class="building-image-modal fixed inset-0 z-[60] items-center justify-center bg-black/90 p-4 md:p-8" onclick="if(event.target.id === 'buildingImageModal') closeBuildingImageModal()">
                <button type="button" onclick="closeBuildingImageModal()" class="absolute top-4 right-4 md:top-8 md:right-8 bg-gray-900/90 hover:bg-blue-600 text-white border border-gray-600 rounded-full w-12 h-12 text-3xl leading-none flex items-center justify-center shadow-xl transition-colors" aria-label="Close image">×</button>

                <img src="${data.image}" alt="${data.imageAltEn}" class="max-h-[86vh] max-w-full rounded-3xl border-4 border-blue-500 shadow-2xl object-contain bg-gray-900">
            </div>
        `;
    }

    function installBuildingEnhancement() {
        if (!isBuildingPage()) return;
        if (document.getElementById('museumEnhancement')) return;

        const currentFile = window.location.pathname.split('/').pop();
        const data = buildingDetails[currentFile];

        if (!data) return;

        const mainHeader = document.querySelector('main header');

        if (mainHeader) {
            mainHeader.insertAdjacentHTML('afterend', buildBuildingEnhancement(data));
        }
    }

    function installNavigation() {
        injectStyles();

        const oldNav = document.querySelector('nav');
        if (oldNav) {
            oldNav.outerHTML = buildNav();
        }

        if (!document.getElementById('buildingsDrawer')) {
            document.body.insertAdjacentHTML('afterbegin', buildDrawer());
        }

        installBuildingEnhancement();

        if (typeof applyLanguage === 'function') {
            applyLanguage(localStorage.getItem('lang') || 'he');
        }
    }

    document.addEventListener('DOMContentLoaded', installNavigation);

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            window.closeBuildingsMenu();
            window.closeBuildingImageModal();
        }
    });
})();