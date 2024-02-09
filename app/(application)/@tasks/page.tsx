"use client"

import clsx from "clsx";
import { useState } from "react";

import { SlOptionsVertical } from "react-icons/sl";
import { MdDragIndicator } from "react-icons/md";

export default function Tasks() {
    return (
        <div className="flex flex-col px-3 py-4 overflow-y-auto h-screen">
            <Task title="寫網頁"
                task={[
                    { title: "排版", id: "jsefijsldkf" },
                    { title: "美編", id: "jsejsldkf" },
                ]}
                color="purple"
            />
        </div>
    )
}

const colorPreset = {
    "purple": { header: "bg-purple-300 text-black", shadow: "hover:bg-purple-400" }
}

function Task({
    title,
    task,
    color
}: {
    title: string,
    task: { title: string, id: string }[],
    color: 'purple'
}) {
    return (
        <div className="bg-slate-200 rounded-md">
            <div className={clsx(colorPreset[color]['header'], "h-10 px-3 items-center flex flex-row justify-between rounded-t-md font-semibold")}>
                <h2>{title}</h2>
                <div>
                    <SlOptionsVertical className={clsx(colorPreset[color]["shadow"], "cursor-pointer rounded-full p-1 h-6 w-6 hover:shadow-lg")} />
                </div>
            </div>
            {task.map(t => (
                <div key={t.id} className="flex flex-row pl-5 items-center py-1 space-x-2">
                    <MdDragIndicator className=""/>
                    <h3 className="">{t.title}</h3>
                </div>
            ))}
        </div>
    )
}