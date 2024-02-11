"use client"

import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react"
import {
  set as setDate,
  add as addDate
} from "date-fns"
import { clsx } from "clsx"

interface Task {
  title: string,
  id: string
}

interface Day {
  date: number;
  tasks: Task[];
}

export default function Home() {
  // const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  const firstDay = setDate(new Date(), { date: 1, hours: 0, minutes: 0, milliseconds: 0 });
  const lastDay = addDate(firstDay, { months: 1, days: -1 });

  const emptyDays = firstDay.getDay()

  const parsedMonth = parseMonth({
    lastDay,
  });
  const [days, setDays] = useState<Day[]>(parsedMonth);

  return (
    <div className="flex flex-col h-screen py-3 px-5">
      <div className="h-8 bg-gray-100 flex flex-row px-3 items-center justify-between">
        <h2>Febuary, 2024</h2>
        <IoSettingsOutline />
      </div>
      <div className="h-[calc(100%-3rem)] bg-green py-2 grid-flow-col">
        <div className="grid grid-cols-7 h-8 bg-stone-100 gap-2 content-start px-3">
          {["一", "二", "三", "四", "五", "六", "日"].map((week) => (
            <div className={clsx(
              "h-6 text-center rounded-md",
              (week === "六" || week === "日") ? "bg-amber-400" : "bg-lime-200"
            )} key={week}>{week}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 h-full bg-stone-100 gap-2 px-3">
          {days.map((day) => (
            <DayView
              day={day}
              emptyDays={emptyDays}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


function decoratedStarting(value: number) {
  return (value === 1 && "col-start-1") ||
    (value === 2 && "col-start-2") ||
    (value === 3 && "col-start-3") ||
    (value === 4 && "col-start-4") ||
    (value === 5 && "col-start-5") ||
    (value === 6 && "col-start-6") ||
    (value === 7 && "col-start-7")
}

function parseMonth({
  lastDay
}: {
  lastDay: Date,
}) {
  let month: Day[] = []
  for (let i = 1; i <= lastDay.getDate(); ++i) {
    month.push({
      date: i,
      tasks: []
    });
  }
  return month
}

function DayView({
  emptyDays,
  day,
}: {
  emptyDays: number;
  day: Day
}) {
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {

  }

  const [taskView, setTaskView] = useState(day.tasks);

  return (
    <div className={clsx(
      "bg-gray-50 rounded-md shadow-lg px-2 py-1",
      // day === 1 && `col-start-2`,
      day.date === 1 && decoratedStarting(emptyDays)
    )}
      key={day.date}
      onDrop={(event) => { handleDrop(event) }}
      onDragEnter={(event) => { setTaskView(tasks => [...tasks, { id: "548787", title: "新增的東西" }]) }}
      onDragLeave={(event) => { setTaskView(taskView.filter((task) => { task.id === "548787" })) }}
    >
      <h3>{day.date}</h3>
      <div>
        {taskView.map((task) => (
          <div key={task.id}>
            {task.title}
          </div>
        ))}
      </div>
    </div>
  )
}