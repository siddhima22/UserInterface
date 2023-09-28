import React, { useState } from "react";
import { Box, Grid, Heading, Text, Button, Flex } from "@chakra-ui/react";

const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const startingDay = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  // You can replace this with your event data
  const eventData = [
    //{ day: 5, eventName: "Meeting" },
    //{ day: 15, eventName: "Birthday" },
    // Add more event data here
  ];

  const renderCalendar = () => {
    const calendar = [];
    const totalDays = daysInMonth + startingDay; // Total number of cells to render

    for (let day = 1; day <= totalDays; day++) {
      const events = eventData.filter((event) => event.day === day - startingDay);

      if (day <= startingDay) {
        calendar.push(<Box key={day} p={2} />);
      } else {
        const dayOfMonth = day - startingDay;
        calendar.push(
          <Box
            key={day}
            p={2}
            border="1px solid #e1e1e1"
            minH="80px"
            display="flex"
            flexDirection="column"
          >
            <Text fontSize="lg" fontWeight="bold">
              {dayOfMonth}
            </Text>
            {events.map((event) => (
              <Box key={event.eventName} mt={2}>
                {event.eventName}
              </Box>
            ))}
          </Box>
        );
      }
    }

    return calendar;
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  return (
    <Box p={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Button onClick={handlePreviousMonth}>Previous Month</Button>
        <Heading as="h1">
          {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </Heading>
        <Button onClick={handleNextMonth}>Next Month</Button>
      </Flex>
      <Grid templateColumns="repeat(7, 1fr)" gap={2}>
        <Text fontWeight="bold">Sun</Text>
        <Text fontWeight="bold">Mon</Text>
        <Text fontWeight="bold">Tue</Text>
        <Text fontWeight="bold">Wed</Text>
        <Text fontWeight="bold">Thu</Text>
        <Text fontWeight="bold">Fri</Text>
        <Text fontWeight="bold">Sat</Text>
        {renderCalendar()}
      </Grid>
    </Box>
  );
};

export default CalendarPage;
