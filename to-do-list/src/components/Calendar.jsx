import { useEffect, useRef } from "react";
import "cally";

const Calendar = () => {
    const calendarRef = useRef();

    useEffect(() => {
        if (calendarRef.current) {
            const today = new Date().toISOString().split("T")[0]; // format: YYYY-MM-DD
            calendarRef.current.value = today;
        }
    }, []);

    return (
        <div className="w-full max-w-md mb-10">
            <calendar-date
                ref={calendarRef}
                class="bg-white dark:bg-slate-800 text-black dark:text-white border border-slate-300 dark:border-slate-600 rounded-xl shadow-lg p-4 transition-colors duration-300"
            >
                <svg
                    aria-label="Previous"
                    className="fill-current size-5 hover:text-blue-500 transition-colors"
                    slot="previous"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <svg
                    aria-label="Next"
                    className="fill-current size-5 hover:text-blue-500 transition-colors"
                    slot="next"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <calendar-month></calendar-month>
            </calendar-date>
        </div>
    );
};

export default Calendar;
