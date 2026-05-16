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
            ],
            accordions: [
                ['המנהיג הראשון שהשתמש במבנה', 'ג׳ון אדמס (1735–1826), נשיא ארצות הברית השני, היה הנשיא שכיהן בעת מעבר הממשלה הפדרלית לוושינגטון בשנת 1800. הקונגרס החל להתכנס בקפיטול באותה שנה.', 'First leader associated with use', 'John Adams (1735–1826), the second U.S. president, was in office when the federal government moved to Washington in 1800; Congress began meeting in the Capitol that year.'],
                ['זהות צוות הבנייה', 'ויליאם תורנטון תכנן את התוכנית המקורית; בנג׳מין הנרי לטרוב וצ׳ארלס בולפינץ׳ פיתחו ושיקמו את המבנה; תומאס יו. וולטר תכנן את כיפת הברזל הגדולה; מונטגומרי מיגס היה דמות ניהולית־הנדסית מרכזית; Janes, Fowler, Kirtland & Co. יצקו והקימו את חלקי כיפת הברזל.', 'Building team', 'William Thornton created the original design; Benjamin Henry Latrobe and Charles Bulfinch developed and restored the building; Thomas U. Walter designed the great iron dome; Montgomery Meigs played a major engineering-management role; Janes, Fowler, Kirtland & Co. cast and erected major dome components.'],
                ['חומרי הבנייה', 'אבן חול מאקוויה קריק בשלבי הבנייה הראשונים, לבנים, שיש, אבן, ברזל יצוק בכיפה, ובהמשך גם פלדה וחומרי חיזוק מודרניים.', 'Building materials', 'Aquia Creek sandstone in early phases, brick, marble, stone, cast iron for the dome, and later steel and modern reinforcement materials.'],
                ['עלויות', 'אין סכום אחד פשוט לכל שלבי הבנייה, משום שהקפיטול נבנה והורחב בגלים. כיפת הברזל הנוכחית לבדה עלתה כ־1,047,291 דולר במאה ה־19.', 'Costs', 'There is no single simple cost for all phases because the Capitol was built and expanded over many decades. The present cast-iron dome alone cost about $1,047,291 in the 19th century.'],
                ['משך הבנייה', 'אבן הפינה הונחה בשנת 1793. שלבי הבנייה, השריפה, השיקום, ההרחבות והשלמת הכיפה נמשכו עד 1866.', 'Construction duration', 'The cornerstone was laid in 1793. Major building, burning, restoration, expansion, and dome-completion phases continued until 1866.']
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
            ],
            accordions: [
                ['המנהיג הראשון שהשתמש במבנה', 'הארמון ההיסטורי שימש מלכים אנגלים עוד מימי הביניים. לאחר השריפה של 1834 והשיקום הוויקטוריאני, המלכה ויקטוריה (1819–1901) הייתה המלכה שבתקופתה התבסס המבנה החדש כסמל הפרלמנטריזם הבריטי.', 'First leader associated with use', 'The medieval palace served English monarchs for centuries. After the 1834 fire and Victorian rebuilding, Queen Victoria (1819–1901) was the monarch under whom the rebuilt palace became the great symbol of British parliamentarism.'],
                ['זהות צוות הבנייה', 'צ׳ארלס בארי היה האדריכל הראשי; אוגוסטוס פוג׳ין עיצב את השפה הגותית והפרטים הפנימיים; הקבלנים הבולטים בשלב הבנייה הוויקטוריאני כללו את Grissell and Peto.', 'Building team', 'Charles Barry was the lead architect; Augustus Pugin shaped the Gothic language and interiors; major Victorian construction contractors included Grissell and Peto.'],
                ['חומרי הבנייה', 'אבן גיר, לבנים, ברזל יצוק, עץ, זכוכית, אריחים, עבודות אבן מפוסלות, ועיטורי פנים עשירים.', 'Building materials', 'Limestone, brick, cast iron, timber, glass, tiles, carved stonework, and richly decorated interiors.'],
                ['עלויות', 'הערכות מוקדמות לשיקום לאחר השריפה נעו סביב 707,000–725,000 ליש״ט, אך הבנייה נמשכה הרבה מעבר לתכנון המקורי ועלתה משמעותית יותר. אין באתר סכום סופי אחד כדי לא להציג מספר מטעה.', 'Costs', 'Early estimates after the fire were about £707,000–£725,000, but the reconstruction greatly exceeded the original timetable and cost more. No single final total is shown here to avoid a misleading figure.'],
                ['משך הבנייה', 'הארמון המקורי החל להתפתח במאה ה־11; השיקום הוויקטוריאני העיקרי נבנה בעיקר בשנים 1840–1876.', 'Construction duration', 'The original palace developed from the 11th century; the main Victorian reconstruction was built largely between 1840 and 1876.']
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
            ],
            accordions: [
                ['המנהיג הראשון שהשתמש במבנה', 'וילהלם השני (1859–1941), קיסר גרמניה, היה ראש המדינה בעת חנוכת המבנה בשנת 1894. לאחר איחוד גרמניה, המבנה חזר לשמש את הבונדסטאג בברלין.', 'First leader associated with use', 'Wilhelm II (1859–1941), German Emperor, was head of state when the building opened in 1894. After reunification, it returned to use as the Bundestag’s Berlin home.'],
                ['זהות צוות הבנייה', 'פאול וולוט תכנן את המבנה המקורי; לאחר איחוד גרמניה הוביל נורמן פוסטר את השיקום והכיפה השקופה החדשה.', 'Building team', 'Paul Wallot designed the original building; after German reunification, Norman Foster led the renovation and the new transparent dome.'],
                ['חומרי הבנייה', 'אבן, לבנים, פלדה, זכוכית ומתכת. הכיפה המודרנית מדגישה זכוכית ופלדה כסמל לשקיפות דמוקרטית.', 'Building materials', 'Stone, brick, steel, glass, and metal. The modern dome emphasizes glass and steel as symbols of democratic transparency.'],
                ['עלויות', 'העלות המקורית ההיסטורית אינה מוצגת כאן כסכום אחד מאומת. השיפוץ המודרני של שנות ה־90 דווח בפרסומים שונים בעלויות גבוהות, אך הנתונים משתנים לפי תחום הכללה.', 'Costs', 'The original historical cost is not shown here as one verified total. The 1990s renovation has been reported with high costs in different publications, but figures vary depending on what is included.'],
                ['משך הבנייה', 'המבנה המקורי נבנה בשנים 1884–1894. השיקום לאחר האיחוד הושלם בשנת 1999.', 'Construction duration', 'The original building was built from 1884 to 1894. The post-reunification renovation was completed in 1999.']
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
            ],
            accordions: [
                ['המנהיג הראשון שהשתמש במבנה', 'ז׳וסלינו קוביצ׳ק (1902–1976), נשיא ברזיל, היה המנהיג שקידם וחנך את ברזיליה ואת מבני השלטון המרכזיים שלה בשנת 1960.', 'First leader associated with use', 'Juscelino Kubitschek (1902–1976), President of Brazil, promoted and inaugurated Brasília and its central government buildings in 1960.'],
                ['זהות צוות הבנייה', 'אוסקר נימאייר תכנן את המבנה; לוסיו קוסטה תכנן את העיר ברזיליה; המהנדס ז׳ואקים קרדוזו היה מעורב בחישובים ובפתרונות ההנדסיים.', 'Building team', 'Oscar Niemeyer designed the building; Lúcio Costa planned Brasília; engineer Joaquim Cardozo was involved in structural calculations and engineering solutions.'],
                ['חומרי הבנייה', 'בטון מזוין, פלדה, זכוכית, שיש לבן וחומרי גמר מודרניסטיים. המבנה מנצל צורות בטון מעוגלות וכיפות סמליות.', 'Building materials', 'Reinforced concrete, steel, glass, white marble, and modernist finish materials. The building uses curved concrete forms and symbolic domes.'],
                ['עלויות', 'לא מוצג כאן סכום אמין יחיד לעלות המבנה עצמו. הוא היה חלק ממבצע רחב ומהיר של הקמת ברזיליה בשנים 1956–1960.', 'Costs', 'No single reliable cost for the building itself is shown here. It was part of the broader rapid construction of Brasília from 1956 to 1960.'],
                ['משך הבנייה', 'נבנה בעיקר בשנים 1958–1960, ונחנך עם העיר ברזיליה ב־21 באפריל 1960.', 'Construction duration', 'Built mainly from 1958 to 1960 and inaugurated with Brasília on April 21, 1960.']
            ]
        },
        'knesset.html': {
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Knesset_building_(South_side).jpg',
            imageAltHe: 'משכן הכנסת בירושלים',
            imageAltEn: 'Knesset building in Jerusalem',
            subtitleHe: 'בית המחוקקים של ישראל והבמה המרכזית של הדמוקרטיה הישראלית.',
            subtitleEn: 'Israel’s legislature and the central stage of Israeli democracy.',
            facts: [
                ['מדינה', 'ישראל', 'Country', 'Israel'],
                ['עיר', 'ירושלים', 'City', 'Jerusalem'],
                ['תפקיד', 'כנסת ישראל', 'Role', 'Parliament of Israel'],
                ['סגנון', 'ממלכתיות מודרנית / ברוטליזם מתון', 'Style', 'Modern civic architecture / restrained Brutalism']
            ],
            accordions: [
                ['המנהיג הראשון שהשתמש במבנה', 'לוי אשכול (1895–1969), ראש ממשלת ישראל, כיהן בעת חנוכת משכן הכנסת החדש בשנת 1966. נשיא המדינה באותה תקופה היה זלמן שזר (1889–1974).', 'First leader associated with use', 'Levi Eshkol (1895–1969), Prime Minister of Israel, was in office when the new Knesset building was inaugurated in 1966. Israel’s president at the time was Zalman Shazar (1889–1974).'],
                ['זהות צוות הבנייה', 'יוסף/אוסיפ קלרווין תכנן את חזות המבנה; דורה גד עיצבה את הפנים; דב כרמי ורם כרמי היו מעורבים בהתאמות תכנוניות; הבנייה בוצעה בידי החברה הלאומית לדרכים וקבלנים נוספים, כולל סולל בונה.', 'Building team', 'Joseph/Ossip Klarwein designed the exterior; Dora Gad designed the interiors; Dov Karmi and Ram Karmi were involved in planning adjustments; construction was carried out by the National Roads Company and other contractors, including Solel Boneh.'],
                ['חומרי הבנייה', 'אבן ירושלמית, בטון, זכוכית, עץ, אבן גיר ועבודות פנים אמנותיות, כולל קיר המליאה של דני קרוון מאבן גיר מהגליל.', 'Building materials', 'Jerusalem stone, concrete, glass, wood, limestone, and artistic interior works, including Dani Karavan’s plenum wall in Galilee limestone.'],
                ['עלויות', 'הבנייה עלתה כ־22 מיליון לירות ישראליות. תרומתו של ג׳יימס דה רוטשילד בסך כ־1.25 מיליון לירות סייעה למימון הקמת המשכן.', 'Costs', 'Construction cost about 22 million Israeli pounds. James de Rothschild’s donation of about £1.25 million helped finance the building.'],
                ['משך הבנייה', 'אבן הפינה הונחה ב־14 באוקטובר 1958; המשכן נחנך בשנת 1966, לאחר כחמש עד שמונה שנות תכנון ובנייה לפי נקודת הספירה.', 'Construction duration', 'The cornerstone was laid on October 14, 1958; the building was inaugurated in 1966, after roughly five to eight years depending on how the planning and construction period is counted.']
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
            ],
            accordions: [
                ['המנהיג הראשון שהשתמש במבנה', 'איוואן השלישי (1440–1505), נסיך מוסקבה הגדול, הזמין את שיקום הקרמלין באבן ובלבנים במאה ה־15 והפך אותו למרכז שלטוני רוסי מחודש.', 'First leader associated with use', 'Ivan III (1440–1505), Grand Prince of Moscow, commissioned the 15th-century stone and brick rebuilding of the Kremlin and made it a renewed Russian center of power.'],
                ['זהות צוות הבנייה', 'המתחם נבנה בשלבים רבים. בשיקום המרכזי של סוף המאה ה־15 פעלו אדריכלים ומהנדסים איטלקים ובהם אריסטוטלה פיורבנטי, פייטרו אנטוניו סולארי, מרקו רופו ואלויזיו דה מילאנו.', 'Building team', 'The complex was built in many phases. In the major late-15th-century rebuilding, Italian architects and engineers worked there, including Aristotele Fioravanti, Pietro Antonio Solari, Marco Ruffo, and Aloisio da Milano.'],
                ['חומרי הבנייה', 'לבנים אדומות, אבן לבנה, אבן גיר, עץ במבנים מוקדמים, מתכת, גגות מחודדים וחומרי שחזור מתקופות שונות.', 'Building materials', 'Red brick, white stone, limestone, timber in earlier structures, metal, tented roofs, and restoration materials from multiple periods.'],
                ['עלויות', 'אין עלות היסטורית אחת אמינה לכל הקרמלין, משום שמדובר במתחם רב־שכבתי שנבנה, נהרס, שוקם והורחב במשך מאות שנים.', 'Costs', 'There is no single reliable historical cost for the Kremlin, because it is a multi-layered complex built, destroyed, restored, and expanded over centuries.'],
                ['משך הבנייה', 'הקרמלין קיים מימי הביניים; השיקום הלבני המרכזי של תקופת איוואן השלישי התרחש בעיקר בסוף המאה ה־15, ולאחריו נוספו ארמונות, קתדרלות ומבנים נוספים במשך מאות שנים.', 'Construction duration', 'The Kremlin dates to the Middle Ages; the main brick rebuilding under Ivan III occurred largely in the late 15th century, followed by palaces, cathedrals, and additions over many centuries.']
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
            ],
            accordions: [
                ['המנהיג הראשון שהשתמש במבנה', 'לואי־נפוליאון בונפרטה (1808–1873), לימים נפוליאון השלישי, היה נשיא הרפובליקה השנייה כאשר האליזה נעשה משכן נשיאותי מרכזי ב־1848.', 'First leader associated with use', 'Louis-Napoléon Bonaparte (1808–1873), later Napoleon III, was President of the Second Republic when the Élysée became a central presidential residence in 1848.'],
                ['זהות צוות הבנייה', 'האדריכל ארמן־קלוד מולה תכנן את הארמון עבור הרוזן ד׳אברו. לאורך הדורות נעשו בו התאמות רבות בידי בעלים פרטיים והמדינה הצרפתית.', 'Building team', 'Architect Armand-Claude Mollet designed the palace for the Count of Évreux. Over time it was altered by private owners and the French state.'],
                ['חומרי הבנייה', 'אבן, לבנים, עץ, טיח, גגות צפחה, עבודות מתכת, עיטורי פנים, זהב, טקסטיל וריהוט טקסי.', 'Building materials', 'Stone, brick, timber, plaster, slate roofing, metalwork, interior ornament, gilding, textiles, and ceremonial furniture.'],
                ['עלויות', 'עלות הבנייה המקורית של בית האצולה מהמאה ה־18 אינה מוצגת כאן כסכום מאומת יחיד. המבנה עבר שינויים ורכישות לאורך מאות שנים.', 'Costs', 'The original 18th-century mansion cost is not shown here as a single verified amount. The building underwent many alterations and transfers over centuries.'],
                ['משך הבנייה', 'נבנה בעיקר בשנים 1718–1722, ולאחר מכן עבר התאמות רבות עד שהפך לאחד מסמלי הנשיאות הצרפתית.', 'Construction duration', 'Built mainly from 1718 to 1722, then altered repeatedly before becoming one of the symbols of the French presidency.']
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
            ],
            accordions: [
                ['המנהיג הראשון שהשתמש במבנה', 'טריגווה לי (1896–1968), המזכ״ל הראשון של האו״ם, היה מזכ״ל הארגון בתקופת הקמת המטה ובמעבר אליו בראשית שנות ה־50.', 'First leader associated with use', 'Trygve Lie (1896–1968), the first UN Secretary-General, led the organization during the headquarters’ construction and move into the complex in the early 1950s.'],
                ['זהות צוות הבנייה', 'צוות תכנון בינלאומי פעל בהובלת וולאס ק. הריסון, ובהשתתפות אדריכלים כגון לה קורבוזיה, אוסקר נימאייר, ליאנג סה־צ׳נג, סוון מרקליוס ואחרים. הקבלנים כללו את Fuller, Turner, Slattery and Walsh.', 'Building team', 'An international design board worked under Wallace K. Harrison, with architects such as Le Corbusier, Oscar Niemeyer, Liang Sicheng, Sven Markelius, and others. Major contractors included Fuller, Turner, Slattery, and Walsh.'],
                ['חומרי הבנייה', 'פלדה, זכוכית קיר מסך, שיש ורמונט, אבן גיר פורטלנד, גרניט, בטון ומערכות מתקדמות לתקופתן.', 'Building materials', 'Steel, glass curtain wall, Vermont marble, Portland limestone, granite, concrete, and advanced building systems for the period.'],
                ['עלויות', 'העלות הכוללת של הקמת המתחם דווחה בסדר גודל של כ־65–68 מיליון דולר בשנות ה־50.', 'Costs', 'The total construction cost of the complex was reported at roughly $65–68 million in early-1950s dollars.'],
                ['משך הבנייה', 'טקס תחילת העבודות נערך ב־1948; בניין המזכירות נכנס לשימוש ב־1950–1951; המתחם הושלם ב־1952.', 'Construction duration', 'Groundbreaking took place in 1948; the Secretariat entered use in 1950–1951; the complex was completed in 1952.']
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
            .building-image-modal { display: none; }
            .building-image-modal.open { display: flex; }
            .museum-detail summary::-webkit-details-marker { display: none; }
            .museum-detail summary::after { content: '+'; font-size: 1.5rem; color: #93c5fd; }
            .museum-detail[open] summary::after { content: '−'; }
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

    function factCard(fact) {
        return `
            <div class="rounded-2xl border border-gray-700 bg-gray-900/70 p-4">
                <p class="text-xs uppercase tracking-widest text-blue-300 mb-2"><span class="lang-he">${fact[0]}</span><span class="lang-en">${fact[2]}</span></p>
                <p class="text-gray-100 font-semibold"><span class="lang-he">${fact[1]}</span><span class="lang-en">${fact[3]}</span></p>
            </div>
        `;
    }

    function accordion(item, index) {
        return `
            <details class="museum-detail rounded-2xl border border-gray-700 bg-gray-900/70 p-5" ${index === 0 ? 'open' : ''}>
                <summary class="cursor-pointer list-none flex items-center justify-between gap-4 text-xl font-bold text-white">
                    <span><span class="lang-he">${item[0]}</span><span class="lang-en">${item[2]}</span></span>
                </summary>
                <div class="mt-4 text-gray-300 leading-relaxed text-lg">
                    <p class="lang-he">${item[1]}</p>
                    <p class="lang-en">${item[3]}</p>
                </div>
            </details>
        `;
    }

    function buildBuildingEnhancement(data) {
        return `
            <section id="museumEnhancement" class="bg-gray-800 rounded-3xl border border-gray-700 shadow-2xl overflow-hidden">
                <button type="button" onclick="openBuildingImageModal()" class="group block w-full relative text-start cursor-zoom-in" aria-label="Open building image">
                    <img src="${data.image}" alt="${data.imageAltEn}" class="w-full h-72 md:h-96 object-cover opacity-90 group-hover:opacity-100 transition-opacity" loading="lazy">
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/25 to-transparent"></div>
                    <div class="absolute bottom-0 right-0 left-0 p-6 md:p-8">
                        <p class="text-sm text-blue-300 font-bold tracking-widest uppercase mb-2"><span class="lang-he">תמונה ראשית נפתחת</span><span class="lang-en">Expandable main image</span></p>
                        <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-2"><span class="lang-he">${data.imageAltHe}</span><span class="lang-en">${data.imageAltEn}</span></h2>
                        <p class="text-gray-200 text-lg"><span class="lang-he">${data.subtitleHe}</span><span class="lang-en">${data.subtitleEn}</span></p>
                    </div>
                </button>
                <div class="p-6 md:p-8 space-y-8">
                    <div>
                        <h3 class="text-2xl font-bold text-white mb-4"><span class="lang-he">כרטיס מידע מהיר</span><span class="lang-en">Quick fact card</span></h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">${data.facts.map(factCard).join('')}</div>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold text-white mb-4"><span class="lang-he">פרטי עומק מסודרים</span><span class="lang-en">Structured deep details</span></h3>
                        <div class="space-y-4">${data.accordions.map(accordion).join('')}</div>
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
        if (oldNav) oldNav.outerHTML = buildNav();
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
