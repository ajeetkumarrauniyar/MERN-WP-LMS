import { useState } from "react";
import CommonHeader from "../../components/calendar/headerToolbar";
import ListView from "../../components/calendar/listView";
import DayView from "../../components/calendar/dayView";
import MonthView from "../../components/calendar/monthView";
import WeekView from "../../components/calendar/weekView";

const Calendar = () => {
  const [currentView, setCurrentView] = useState("month");

  const handleSelectView = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
      {/* <CommonHeader onSelectView={handleSelectView} /> */}
      {/* Render view based on the selectedView */}
      {currentView === "list" && <ListView />}
      {currentView === "day" && <DayView />}
      {currentView === "week" && <WeekView />}
      {currentView === "month" && <MonthView />}
    </div>
  );
};

export default Calendar;
