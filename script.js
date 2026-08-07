const styleOverride = document.createElement('style');
styleOverride.textContent = `
  
  html, body {
    width: 100% !important;
    max-width: 100vw !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow-x: hidden !important;
    background-color: #f7f5f0 !important;
    align-item: center !important;
  }
  
    /* header navigation row styling */
  .header-nav-row {
    width: 100% !important;
    display: flex !important;
    justify-content: flex-start !important;
    gap: 4rem !important;
    margin-top: 1.75rem !important;
    box-sizing: border-box !important;
  }

  .header-nav-row a {
    color: #e6dcc0 !important;
    text-decoration: none !important;
    font-size: 1.55rem !important;
    font-weight: 00 !important;
    letter-spacing: 1px !important;
    transition: color 0.15s ease !important;
    cursor: pointer !important;
  }

  .header-nav-row a:hover, .header-nav-row a.active {
    color: #ffffff !important;
    text-shadow: 0 0 6px rgba(255, 255, 255, 0.4) !important;
  }

  .container {
    width: 90% !important;
    max-width: 1100px !important;
    margin: 2rem auto !important;
    box-sizing: border-box !important;
  }

  .card, .app-footer {
    max-width: 1200px !important;
    width: 90% !important;
    box-sizing: border-box !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin: 2rem auto !important; 
    padding: 2.5rem !important;
    height: auto !important;
  }

  .app-header {
    margin-top: 2rem !important;
    padding: 1.5rem !important;
    width: 110% !important;
    max-width: 1200px !important;
    box-sizing: border-box !important;
    margin-left:-50px !important;
    margin-right: auto !important;
  }

  .card {
    max-width: 1200px !important;       
    margin: 2rem auto !important;    
    padding: 2.5rem !important;
    box-sizing: border-box !important;
    height: auto !important;
    background: #ffffff !important;
    box-shadow: 0 15px 35px rgba(44, 82, 157, 0.15) !important;
  }

  .subject-row, label.field-label, .row label {
    margin-left: 0 !important;
    margin-top: 1.5rem !important;
    margin-bottom: 0.5rem !important;
    display: block !important;
  }

  input[type="text"], textarea, .slot-display, .clear-btn {
    width: 100% !important;
    margin-left: 0 !important;
    box-sizing: border-box !important;
    display: block !important;
  }

  .row {
    margin-left: 0 !important;
    width: 100% !important;
    display: flex !important;
    gap: 1rem !important;
    flex-wrap: wrap !important;
    align-items: flex-end !important;
  }

  .row .grp {
    flex: 1 !important;
    min-width: 150px !important;
  }

  .row label {
    margin-left: 0 !important;
    margin-top: 0 !important;
  }

  input[type="time"] {
    width: 100% !important;
    margin-left: 0 !important;
    box-sizing: border-box !important;
  }

   .gen-btn {
    position: static !important;
    display:block !important;
    width:100% !important;
    height: 50px !important;
    line-height: normal !important;
    margin: 1.5rem 0 0 0 !important;
    padding: 0.5rem 1.5rem !important;
    box-sizing: border-box !important;
    background: var(--purple-500, #7c3fae) !important;
    background-color: var(--purple-500, #7c3fae) !important;
    color: #ffffff !important;
    border: none !important;
    border-radius: 0.625rem !important;
    font-weight: 700 !important;
    cursor: pointer !important;
    transition: all .15s ease !important;
  }
  .gen-btn:hover {
    background-color: var(--purple-700, #5b21b6) !important;
  }

  .slot-display, .slot-display.empty {
    width: 100% !important;
    margin-left: 0 !important;
    margin-top: 1.5rem !important;
    height: auto !important;
    padding: 1rem 1.25rem !important;
    font-size: 1.85rem !important;
    font-weight: 900 !important;
    box-sizing: border-box !important;
  }

  .add-btn {
    width: 100% !important;
    margin-left: 0 !important;
    margin-top: 2rem !important;
    box-sizing: border-box !important;
    display: block !important;
    background: linear-gradient(135deg, var(--purple-700, #6b21a8), var(--purple-500, #7c3fae)) !important;
    background-color: var(--purple-700, #6b21a8) !important;
    color: #ffffff !important;
    border: none !important;
    padding: 14px !important;
    border-radius: 10px !important;
    font-size: 18px !important;
    font-weight: 700 !important;
    cursor: pointer !important;
    transition: all 0.15s ease, transform 0.1s ease !important;
    box-shadow: 0 4px 12px rgba(124, 63, 174, 0.2) !important;
  }
  .add-btn:hover {
    background: linear-gradient(135deg, var(--purple-800, #5b21b6), var(--purple-600, #6d28d9)) !important;
    transform: translateY(-1px) !important;
    box-shadow: 0 6px 16px rgba(124, 63, 174, 0.3) !important;
  }
  .add-btn:active { transform: translateY(0) !important; }

   .clear-btn {
    margin-top: 2rem !important;
    height: auto !important;
    width: 100% !important;
    margin-left: 0 !important;
    box-sizing: border-box !important;
    display: block !important;
    background: var(--purple-100, #f3e8ff) !important;
    background-color: var(--purple-100, #f3e8ff) !important;
    color: var(--purple-700, #6b21a8) !important;
    border: 0.0625rem solid var(--purple-300, #e9d5ff) !important;
    padding: 0.6875rem !important;
    border-radius: 0.75rem !important;
    font-weight: 700 !important;
    cursor: pointer !important;
    transition: all .15s ease !important;
  }
  .clear-btn:hover { background-color: var(--purple-300, #e9d5ff) !important; }

   .download-btn {
    width: 100% !important;
    margin-left: 0 !important;
    margin-top: 1.5rem !important;
    box-sizing: border-box !important;
    display: block !important;
    background: var(--purple-700, #6b21a8) !important;
    background-color: var(--purple-700, #6b21a8) !important;
    color: #ffffff !important;
    border: none !important;
    padding: 0.8125rem !important;
    border-radius: 0.75rem !important;
    font-weight: 700 !important;
    cursor: pointer !important;
  }
  .download-btn:hover { background-color: var(--purple-900, #4c1d95) !important; }


  .days {
    display: flex !important;
    flex-wrap: nowrap !important;
    gap: 0.5rem !important;
    width: 100% !important;
    margin-bottom: 1.5rem !important;
  }
  .day-btn {
    flex: 1 !important;
    text-align: center !important;
    padding: 0.6rem 0 !important;
    font-size: 0.85rem !important;
    background-color: var(--purple-100, #f3e8ff) !important; 
    color: var(--purple-700, #6b21a8) !important;            
    border: none !important;
    border-radius: 50rem !important;
    cursor: pointer !important;
    transition: all .15s ease !important;
  }
  .day-btn:hover:not(.active) { background-color: var(--purple-300, #d8b4fe) !important; }
  .day-btn.active {
    background-color: var(--purple-700, #7c3fae) !important;   
    color: #ffffff !important;                                 
    box-shadow: 0 0.25rem 0.625rem -0.125rem rgba(124,63,174,0.6) !important;
  }
`;
document.head.appendChild(styleOverride);


let scheduleEntries = [];
let selectedDay = 'Mon';
let currentGeneratedSlot = "";

const dayTabsContainer = document.getElementById('dayTabs');
const subjectInput = document.getElementById('subject');
const startTimeInput = document.getElementById('startTime');
const endTimeInput = document.getElementById('endTime');
const genBtn = document.getElementById('genBtn');
const slotDisplay = document.getElementById('slotDisplay');
const notesTextarea = document.getElementById('notes');
const addBtn = document.getElementById('addBtn');
const countBadge = document.getElementById('countBadge');
const listContainer = document.getElementById('list');
const clearBtn = document.getElementById('clearBtn');
const downloadBtn = document.getElementById('downloadBtn');


const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
if (dayTabsContainer) {
  dayTabsContainer.innerHTML = daysOfWeek.map((day, idx) => {
    return `<button class="day-btn ${idx === 0 ? 'active' : ''}">${day}</button>`;
  }).join('');
}

const dayButtons = document.querySelectorAll('.day-btn');
dayButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    dayButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    selectedDay = e.target.textContent.trim();
  });
});


document.querySelectorAll('.footer-col a').forEach(link => {
  if (link.textContent.trim() === 'Home') {
    link.setAttribute('href', 'index.html');
  }
});


function format12Hour(timeString) {
  if (!timeString) return '';
  const [hours, minutes] = timeString.split(':');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  return `${String(formattedHours).padStart(2, '0')}:${minutes} ${ampm}`;
}


if (genBtn) {
  genBtn.addEventListener('click', () => {
    const startTime = startTimeInput ? startTimeInput.value : '';
    const endTime = endTimeInput ? endTimeInput.value : '';

    if (!startTime || !endTime) {
      alert('Please select both a Start Time and an End Time.');
      return;
    }

    if (slotDisplay) {
      slotDisplay.classList.remove('empty');
      currentGeneratedSlot = `${format12Hour(startTime)} - ${format12Hour(endTime)}`;
      slotDisplay.textContent = currentGeneratedSlot;
    }
  });
}


if (addBtn) {
  addBtn.addEventListener('click', () => {
    const subject = subjectInput ? subjectInput.value.trim() : '';
    const notes = notesTextarea ? notesTextarea.value.trim() : '';

    if (!subject) {
      alert('Please fill out the Subject field.');
      return;
    }

    if (!currentGeneratedSlot) {
      alert('Please click "Generate Time Slot" first.');
      return;
    }

    const isDuplicate = scheduleEntries.some(entry => {
      return entry.day === selectedDay && entry.timeSlot === currentGeneratedSlot;
    });

    if (isDuplicate){
      alert(`Error: A session is already scheduled on ${selectedDay} at ${currentGeneratedSlot}!`);
      return;
    }

    const newEntry = {
      id: Date.now(),
      day: selectedDay,
      subject: subject,
      timeSlot: currentGeneratedSlot,
      notes: notes
    };

    scheduleEntries.push(newEntry);
    renderEntries();
    resetFormInputs();
  });
}


if (addBtn) {
  addBtn.addEventListener('click', () => {
    // Collect cleaned inputs directly from index.html values
    const subject = subjectInput ? subjectInput.value.trim() : '';
    const notes = notesTextarea ? notesTextarea.value.trim() : '';

    if (!subject) {
      alert('Please fill out the Subject field.');
      return;
    }

    if (!currentGeneratedSlot) {
      alert('Please click "Generate Time Slot" first.');
      return;
    }

    const newEntry = {
      id: Date.now(),
      day: selectedDay,
      subject: subject,
      timeSlot: currentGeneratedSlot,
      notes: notes
    };

  
    scheduleEntries.push(newEntry);
    renderEntries();
    resetFormInputs();
  });
}

function renderEntries() {
  if (!listContainer) return;
  listContainer.innerHTML = '';
  
  if (countBadge) {
    countBadge.textContent = scheduleEntries.length;
  }

  if (scheduleEntries.length === 0) {
    listContainer.innerHTML = '<div class="empty-state" style="text-align:center; padding:1rem; color:#b5a67e;">No sessions added yet.</div>';
    return;
  }

  const grouped = scheduleEntries.reduce((acc, item) => {
    if (!acc[item.day]) acc[item.day] = [];
    acc[item.day].push(item);
    return acc;
  }, {});

  for (const day in grouped) {
    const groupLabel = document.createElement('div');
    groupLabel.className = 'day-group-label';
    groupLabel.textContent = day;
    listContainer.appendChild(groupLabel);

    grouped[day].forEach(entry => {
      const entryDiv = document.createElement('div');
      entryDiv.className = 'entry';
      entryDiv.innerHTML = `
        <div class="info">
          <b>${entry.subject}</b>
          <span>${entry.timeSlot}</span>
          ${entry.notes ? `<span class="notes">${entry.notes}</span>` : ''}
        </div>
        <button data-id="${entry.id}">✕</button>
      `;
      listContainer.appendChild(entryDiv);
    });
  }
}


if (listContainer) {
  listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const idToDelete = parseInt(e.target.getAttribute('data-id'));
      scheduleEntries = scheduleEntries.filter(entry => entry.id !== idToDelete);
      renderEntries();
    }
  });
}

function resetFormInputs() {
  if (subjectInput) subjectInput.value = '';
  if (notesTextarea) notesTextarea.value = '';
  currentGeneratedSlot = "";
  if (slotDisplay) {
    slotDisplay.classList.add('empty');
    slotDisplay.textContent = "No time slot generated yet";
  }
}

if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    scheduleEntries = []; 
    renderEntries();      
    resetFormInputs();    
  });
}

if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    if (scheduleEntries.length === 0) {
      alert('Your timetable is empty.');
      return;
    }
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(scheduleEntries, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "weekly_timetable.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  });
}