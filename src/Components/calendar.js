 
const months = [
  { month: "January", days: 31 },
  { month: "February", days: 28 }, // 29 in leap years
  { month: "March", days: 31 },
  { month: "April", days: 30 },
  { month: "May", days: 31 },
  { month: "June", days: 30 },
  { month: "July", days: 31 },
  { month: "August", days: 31 },
  { month: "September", days: 30 },
  { month: "October", days: 31 },
  { month: "November", days: 30 },
  { month: "December", days: 31 }
];

const selected_date = "2026-05"

export function loadCalendar()  {

    const day_grid = document.getElementById("calendarBody");
    const [current_year,current_month] = selected_date.split('-').map(Number);

    day_grid.innerHTML = "";


    for (let index = 0; index < months[current_month-1].days; index++) {
        
        const div = document.createElement("div");
        div.classList.add("day-container");
        div.id = `${selected_date}-${index+1}`;
        div.textContent = index+1;
        day_grid.appendChild(div);
        
        
    }
    

};