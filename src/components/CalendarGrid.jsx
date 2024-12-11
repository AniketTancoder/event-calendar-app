import React, { useState } from "react";
import { getCalendarDays } from "../hooks/useCalendar";
import EventForm from "./EventForm";
import EventListModal from "./EventListModal";
import Header from "./Header";

const CalendarGrid = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem("events")) || {});

  const days = getCalendarDays(currentDate);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDayClick = (day) => {
    setSelectedDay(day.date);
  };

  return (
    <div>
      <Header currentDate={currentDate} onPrevMonth={handlePrevMonth} onNextMonth={handleNextMonth} />

      <div className="calendar-grid">
        {days.map((day, index) => {
          const isSelected = selectedDay && selectedDay.toDateString() === day.date.toDateString();
          const isCurrent = day.date.toDateString() === new Date().toDateString();

          return (
            <div
              key={index}
              className={`calendar-day ${day.isCurrentMonth ? "" : "dimmed"} ${isCurrent ? "current" : ""} ${isSelected ? "selected" : ""}`}
              onClick={() => handleDayClick(day)}
            >
              {day.date.getDate()}
            </div>
          );
        })}
      </div>

      {selectedDay && (
        <EventForm
          date={selectedDay}
          events={events}
          setEvents={setEvents}
        />
      )}
      <EventListModal events={events[selectedDay]} />
    </div>
  );
};

export default CalendarGrid;
