(function () {
  function addImageCredits() {
    const enhancement = document.getElementById('museumEnhancement');
    if (!enhancement || enhancement.querySelector('.auto-image-credit')) return;

    const image = enhancement.querySelector('img[src*="commons.wikimedia.org"]');
    const imageButton = enhancement.querySelector('button');
    if (!image || !imageButton) return;

    const credit = document.createElement('div');
    credit.className = 'auto-image-credit px-6 md:px-8 py-3 border-b border-gray-700 bg-gray-900/70 text-xs md:text-sm text-gray-400';
    credit.innerHTML = `
      <span class="lang-he">מקור התמונה: </span>
      <span class="lang-en">Image source: </span>
      <a href="${image.src}" target="_blank" rel="noopener" class="text-blue-300 hover:text-blue-200 underline">Wikimedia Commons</a>
      <span class="lang-he"> — פרטי היוצר והרישיון מופיעים בעמוד הקובץ המקורי.</span>
      <span class="lang-en"> — author and license details appear on the original file page.</span>
    `;

    imageButton.insertAdjacentElement('afterend', credit);

    if (typeof applyLanguage === 'function') {
      applyLanguage(localStorage.getItem('lang') || 'he');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    addImageCredits();
    setTimeout(addImageCredits, 300);
    setTimeout(addImageCredits, 1000);
  });
})();
