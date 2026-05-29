 
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

/* VVVVV Place holder VVVV */

const selected_date = "2026-06" 

export function loadCalendar()  {

    //const day_grid = document.getElementById("calendarBody");
    const [current_year,current_month] = selected_date.split('-').map(Number);

    //if(day_grid.innerHTML != "")day_grid.innerHTML = "";

    let week_day_tracker = 0;
    let week_line_id = 1;

    for (let index = 0; index < months[current_month-1].days; index++) {

        if(week_day_tracker < 7) {
            week_day_tracker += 1; 
        }
        else {
            week_day_tracker = 1;
            week_line_id += 1;
            console.log(week_line_id)
        }

        const th = document.createElement("th");
        th.classList.add("day-container");
        th.id = `${selected_date}-${index+1}`;
        th.textContent = index+1;
        document.getElementById(`column${week_line_id}`).appendChild(th)
    }
    

};