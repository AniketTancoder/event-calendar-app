export const getCalendarDays = (currentDate) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
  
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
  
    const days = [];
    const startDay = firstDay.getDay();
    const totalDays = lastDay.getDate();
  
    // Add padding days for the previous month
    for (let i = 0; i < startDay; i++) {
      days.push({ date: new Date(year, month, i - startDay + 1), isCurrentMonth: false });
    }
  
    // Add current month days
    for (let i = 1; i <= totalDays; i++) {
      days.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }
  
    return days;
  };
  