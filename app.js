// State Variables
let completedBooks = [];
let currentBookId = null;
let currentQuoteIndex = 0;

// DOM Elements
const quoteTickerText = document.getElementById('quote-ticker-text');
const btnDrawBook = document.getElementById('btn-draw-book');
const drawResultContainer = document.getElementById('draw-result-container');
const statsTextOt = document.getElementById('stats-text-ot');
const statsTextNt = document.getElementById('stats-text-nt');
const progressBarFillOt = document.getElementById('progress-bar-fill-ot');
const progressBarFillNt = document.getElementById('progress-bar-fill-nt');
const completedShelfGrid = document.getElementById('completed-shelf-grid');
const shelfEmptyMsg = document.getElementById('shelf-empty-msg');
const btnResetJourney = document.getElementById('btn-reset-journey');
const celebrationToast = document.getElementById('celebration-toast');
const shelfFilterTabs = document.querySelectorAll('.shelf-tab');

// 1. Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initQuoteTicker();
  updateProgressDashboard();
  renderCompletedShelf();
  renderCurrentBook();

  // Event Listeners
  btnDrawBook.addEventListener('click', handleDrawBook);
  btnResetJourney.addEventListener('click', handleResetJourney);
  
  // Shelf Tab Filtering
  shelfFilterTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      shelfFilterTabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      renderCompletedShelf(e.target.dataset.filter);
    });
  });
});

// 2. Load State from LocalStorage
function loadState() {
  const savedCompleted = localStorage.getItem('completedBooks');
  if (savedCompleted) {
    try {
      completedBooks = JSON.parse(savedCompleted);
    } catch (e) {
      console.error("Error parsing completed books:", e);
      completedBooks = [];
    }
  }

  currentBookId = localStorage.getItem('currentBookId') || null;
}

// 3. Save State to LocalStorage
function saveState() {
  localStorage.setItem('completedBooks', JSON.stringify(completedBooks));
  if (currentBookId) {
    localStorage.setItem('currentBookId', currentBookId);
  } else {
    localStorage.removeItem('currentBookId');
  }
}

// 4. Scripture Quote Ticker Logic
function initQuoteTicker() {
  // Set initial quote
  setTickerQuote(GNT_QUOTES[currentQuoteIndex]);

  // Rotate quotes every 7 seconds
  setInterval(() => {
    // Fade out
    quoteTickerText.classList.add('fade-out');

    // Wait for fade out animation (500ms), update content, then fade back in
    setTimeout(() => {
      currentQuoteIndex = (currentQuoteIndex + 1) % GNT_QUOTES.length;
      setTickerQuote(GNT_QUOTES[currentQuoteIndex]);
      quoteTickerText.classList.remove('fade-out');
    }, 500);
  }, 7000);
}

function setTickerQuote(quoteObj) {
  quoteTickerText.innerHTML = `"${quoteObj.text}" <span class="ticker-ref">${quoteObj.reference}</span>`;
}

// 5. Draw Book Mechanic
function handleDrawBook() {
  // Determine selected testament pool
  const selectedPool = document.querySelector('input[name="testament-pool"]:checked').value;
  
  // Filter out completed books from selected testament
  const availableBooks = BIBLE_BOOKS.filter(book => 
    book.testament === selectedPool && !completedBooks.includes(book.id)
  );

  if (availableBooks.length === 0) {
    // Testament is fully completed
    const testamentName = selectedPool === 'OT' ? 'Old Testament' : 'New Testament';
    const totalCount = BIBLE_BOOKS.filter(book => book.testament === selectedPool).length;
    renderCompletedTestamentView(testamentName, totalCount);
    currentBookId = null;
    saveState();
    return;
  }

  // Pick a random book from available pool
  const randomIndex = Math.floor(Math.random() * availableBooks.length);
  const selectedBook = availableBooks[randomIndex];
  
  currentBookId = selectedBook.id;
  saveState();
  renderCurrentBook();
}

// Render active selection card or default state
function renderCurrentBook() {
  if (!currentBookId) {
    drawResultContainer.innerHTML = `
      <div class="placeholder-card" id="result-placeholder">
        <div class="placeholder-icon">✦</div>
        <p class="placeholder-text">Draw a book above to begin your reading</p>
      </div>
    `;
    return;
  }

  const book = BIBLE_BOOKS.find(b => b.id === currentBookId);
  if (!book) {
    currentBookId = null;
    saveState();
    renderCurrentBook();
    return;
  }

  const testamentName = book.testament === 'OT' ? 'Old Testament' : 'New Testament';
  
  drawResultContainer.innerHTML = `
    <div class="result-card" id="active-result-card">
      <span class="result-testament">${testamentName}</span>
      <h2 class="result-book-name">${book.name}</h2>
      <div class="result-chapters">Read from Chapter 1 to ${book.chapters}</div>
      <p class="result-vibe">"${book.description}"</p>
      <button class="btn-complete" id="btn-complete-book" data-id="${book.id}">
        Mark as Completed ✓
      </button>
    </div>
  `;

  // Attach completion event listener
  document.getElementById('btn-complete-book').addEventListener('click', () => {
    markBookCompleted(book.id, book.name);
  });
}

// Render completion of an entire testament
function renderCompletedTestamentView(testamentName, totalBooksCount) {
  drawResultContainer.innerHTML = `
    <div class="result-card" id="completed-testament-card" style="outline-color: var(--accent-gold);">
      <span class="result-testament" style="color: var(--accent-gold); border-color: var(--border-vintage-gold); background-color: rgba(184, 134, 11, 0.05);">Soli Deo Gloria</span>
      <h2 class="result-book-name">All Finished!</h2>
      <div class="result-chapters" style="max-width: 350px;">${testamentName} Complete</div>
      <p class="result-vibe" style="font-weight: 500; font-style: normal;">
        "I have fought the good fight, I have finished the race, I have kept the faith." ✦ 2 Timothy 4:7
      </p>
      <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 10px;">
        You have successfully completed all ${totalBooksCount} books of the ${testamentName}.
      </p>
    </div>
  `;
}

// 6. Complete Book Functionality
function markBookCompleted(bookId, bookName) {
  if (!completedBooks.includes(bookId)) {
    completedBooks.push(bookId);
  }
  
  currentBookId = null;
  saveState();
  
  // Show Celebration Toast
  showToast(`✦ ${bookName} completed! ✦`);
  
  // Reset view to placeholder and update stats
  renderCurrentBook();
  updateProgressDashboard();
  
  // Update shelf based on the active shelf tab
  const activeTab = document.querySelector('.shelf-tab.active');
  const filter = activeTab ? activeTab.dataset.filter : 'all';
  renderCompletedShelf(filter);
}

// 7. Update Dashboard Stats and Progress Bars
function updateProgressDashboard() {
  const otBooks = BIBLE_BOOKS.filter(b => b.testament === 'OT');
  const ntBooks = BIBLE_BOOKS.filter(b => b.testament === 'NT');
  
  const completedOt = otBooks.filter(b => completedBooks.includes(b.id)).length;
  const completedNt = ntBooks.filter(b => completedBooks.includes(b.id)).length;
  
  const otPercentage = Math.round((completedOt / otBooks.length) * 100);
  const ntPercentage = Math.round((completedNt / ntBooks.length) * 100);
  
  statsTextOt.innerText = `${completedOt} / ${otBooks.length} completed (${otPercentage}%)`;
  statsTextNt.innerText = `${completedNt} / ${ntBooks.length} completed (${ntPercentage}%)`;
  
  progressBarFillOt.style.width = `${otPercentage}%`;
  progressBarFillNt.style.width = `${ntPercentage}%`;
}

// 8. Render Completed Books in Shelf
function renderCompletedShelf(filter = 'all') {
  completedShelfGrid.innerHTML = '';
  
  // Filter books
  const filteredBooks = BIBLE_BOOKS.filter(book => {
    const isCompleted = completedBooks.includes(book.id);
    if (!isCompleted) return false;
    
    if (filter === 'all') return true;
    return book.testament === filter;
  });

  if (filteredBooks.length === 0) {
    completedShelfGrid.appendChild(shelfEmptyMsg);
    shelfEmptyMsg.style.display = 'block';
    return;
  }

  shelfEmptyMsg.style.display = 'none';

  // Sort them in original order of the Bible books
  filteredBooks.sort((a, b) => BIBLE_BOOKS.indexOf(a) - BIBLE_BOOKS.indexOf(b));

  filteredBooks.forEach(book => {
    const bookEl = document.createElement('div');
    const testamentClass = book.testament === 'NT' ? 'book-nt' : 'book-ot';
    bookEl.className = `shelf-book ${testamentClass}`;
    bookEl.innerHTML = `
      <span>${book.name}</span>
      <span class="shelf-book-check">✓</span>
    `;
    completedShelfGrid.appendChild(bookEl);
  });
}

// 9. Toast Notification Handler
function showToast(message) {
  celebrationToast.innerText = message;
  celebrationToast.classList.add('show');
  
  setTimeout(() => {
    celebrationToast.classList.remove('show');
  }, 3500);
}

// 10. Reset Journey Handler
function handleResetJourney() {
  const confirmReset = confirm("Are you sure you want to reset your reading progress? This will clear all completed books and start your journey anew.");
  
  if (confirmReset) {
    completedBooks = [];
    currentBookId = null;
    saveState();
    
    // Reset view
    renderCurrentBook();
    updateProgressDashboard();
    renderCompletedShelf();
    
    // Set first shelf tab active
    shelfFilterTabs.forEach(t => t.classList.remove('active'));
    document.getElementById('tab-filter-all').classList.add('active');
    
    showToast("Reading progress has been reset.");
  }
}
