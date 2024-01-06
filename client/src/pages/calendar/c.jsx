// Import necessary components and functions from the theme file and Material-UI
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  // Button,
  // Dialog,
  // DialogActions,
  // DialogContent,
  // DialogTitle,
  FormControl,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  // TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";

const Calendar = () => {
  // Access the current theme and color mode using Material-UI hooks
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // State to store current events and handle modal state
  const [currentEvents, setCurrentEvents] = useState([]);
  // const [open, setOpen] = useState(false);

  // Function to open the modal
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // Function to close the modal
  // const handleClose = () => {
  //   setOpen(false);
  // };

  // Handle date clicks on the calendar
  const handleDateClick = (selected) => {
    // Prompt user to enter an event title
    const title = prompt("Enter Event Title");
    // Access FullCalendar API to handle unselect and add the event
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    // Add the event if a title is provided
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  // Handle clicks on calendar events to delete them
  const handleEventClick = (selected) => {
    if (window.confirm(`Delete the event '${selected.event.title}'?`)) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      {/* Container for upcoming events list and the calendar */}
      <Box display="flex" justifyContent="space-between">
        {/* Upcoming Events List */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>

          {/* List of upcoming events */}
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                {/* Display event title and date */}
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Calendar */}
        <Box flex="1 1 100%" ml="15px">
          {/* FullCalendar component */}
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "title",
              center: "prev,today,next",
              right: "timeGridDay,timeGridWeek,dayGridMonth,listMonth",
              // right: (
                // <FormControl fullWidth>
                //   <Select
                //     labelId="demo-simple-select-label"
                //     id="demo-simple-select"
                //     // value={age}
                //     label="Age"
                //     // onChange={handleChange}
                //   >
                //     <MenuItem value="hey">Day</MenuItem>
                //     {/* <MenuItem >Twenty</MenuItem> */}
                //     {/* <MenuItem >Thirty</MenuItem> */}
                //   </Select>
                // </FormControl>
              // ),
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            // Event handlers
            select={handleDateClick}
            eventClick={handleEventClick}
            // Set and update events
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
