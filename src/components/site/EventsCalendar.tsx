import { useState, useMemo, useCallback } from "react";
import { format, isSameMonth, isSameDay, addMonths, subMonths } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { events, type UaisEvent, eventTypeColor } from "@/data/events";
import { cn } from "@/lib/utils";

const semesters = ["Fall 2026", "Winter 2027"] as const;

const semesterRange: Record<string, { start: Date; end: Date }> = {
  "Fall 2026": { start: new Date(2026, 8, 1), end: new Date(2026, 11, 31) },
  "Winter 2027": { start: new Date(2027, 0, 1), end: new Date(2027, 3, 30) },
};

const colorVar: Record<string, string> = {
  blue: "var(--uais-blue)",
  green: "var(--uais-green)",
  yellow: "var(--uais-yellow)",
  red: "var(--uais-red)",
  orange: "var(--uais-orange)",
  pink: "var(--uais-pink)",
};

const eventTypeLabel: Record<UaisEvent["type"], string> = {
  Talk: "Talk",
  Workshop: "Workshop",
  Social: "Social",
  Hackathon: "Hackathon",
  Other: "Other",
};

function getEventsForDay(date: Date) {
  return events.filter((e) => isSameDay(e.date, date));
}

export default function EventsCalendar() {
  const [semester, setSemester] = useState<string>("Fall 2026");
  const [month, setMonth] = useState<Date>(new Date(2026, 8, 1));
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);

  const semesterEvents = useMemo(
    () => events.filter((e) => e.semester === semester),
    [semester],
  );

  const eventsInCurrentMonth = useMemo(
    () => semesterEvents.filter((e) => isSameMonth(e.date, month)),
    [semesterEvents, month],
  );

  const eventsForSelectedDay = useMemo(() => {
    if (!selectedDay) return eventsInCurrentMonth.slice(0, 3);
    const dayEvents = getEventsForDay(selectedDay).filter(
      (e) => e.semester === semester,
    );
    return dayEvents.length > 0 ? dayEvents : null;
  }, [selectedDay, semester, eventsInCurrentMonth]);

  const hasEventModifier = useCallback(
    (date: Date) => semesterEvents.some((e) => isSameDay(e.date, date)),
    [semesterEvents],
  );

  const handleSemesterChange = (s: string) => {
    setSemester(s);
    setMonth(semesterRange[s].start);
    setSelectedDay(undefined);
  };

  const goNextMonth = () => {
    const next = addMonths(month, 1);
    const range = semesterRange[semester];
    if (next > range.end) return;
    setMonth(next);
  };

  const goPrevMonth = () => {
    const prev = subMonths(month, 1);
    const range = semesterRange[semester];
    if (prev < range.start) return;
    setMonth(prev);
  };

  return (
    <section className="container py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-xs mono text-muted-foreground uppercase tracking-widest">
            Events Calendar
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-1">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground mt-1">
            Fall 2026 &mdash; Winter 2027
          </p>
        </div>

        <div className="flex gap-2">
          {semesters.map((s) => (
            <button
              key={s}
              onClick={() => handleSemesterChange(s)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium border transition",
                semester === s
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/40",
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Calendar */}
        <div className="lg:col-span-3">
          <div className="card-surface p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={goPrevMonth}
                className="h-8 w-8 rounded-full border border-border grid place-items-center hover:border-foreground/40 transition disabled:opacity-30"
                disabled={month <= semesterRange[semester].start}
                aria-label="Previous month"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="font-display text-lg font-semibold">
                {format(month, "MMMM yyyy")}
              </span>
              <button
                onClick={goNextMonth}
                className="h-8 w-8 rounded-full border border-border grid place-items-center hover:border-foreground/40 transition disabled:opacity-30"
                disabled={month >= semesterRange[semester].end}
                aria-label="Next month"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <DayPicker
              month={month}
              onMonthChange={setMonth}
              mode="single"
              selected={selectedDay}
              onSelect={setSelectedDay}
              showOutsideDays={false}
              modifiers={{ hasEvent: hasEventModifier }}
              modifiersClassNames={{
                hasEvent: "font-semibold",
              }}
              disabled={[
                { before: semesterRange[semester].start },
                { after: semesterRange[semester].end },
              ]}
              components={{
                DayContent: (props) => {
                  const dayEvents = semesterEvents.filter((e) =>
                    isSameDay(e.date, props.date),
                  );
                  return (
                    <div className="relative flex flex-col items-center justify-end h-full w-full pb-0.5">
                      <span className="leading-none">{format(props.date, "d")}</span>
                      {dayEvents.length > 0 && (
                        <div className="flex flex-col gap-[1.5px] mt-[2px] w-full px-1">
                          {dayEvents.map((e) => (
                            <span
                              key={e.id}
                              className="w-full h-[2.5px] rounded-sm"
                              style={{
                                backgroundColor: `hsl(${colorVar[eventTypeColor[e.type]]})`,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                },
              }}
              className="w-full"
              classNames={{
                months: "w-full",
                month: "w-full",
                caption: "sr-only",
                table: "w-full border-collapse",
                head_row: "flex justify-around mb-1",
                head_cell:
                  "w-11 text-xs font-medium text-muted-foreground text-center",
                row: "flex justify-around my-0.5",
                cell: cn(
                  "h-11 w-11 text-sm text-center p-0 relative",
                  "[&:has([aria-selected])]:bg-accent/20",
                  "first:[&:has([aria-selected])]:rounded-l-md",
                  "last:[&:has([aria-selected])]:rounded-r-md",
                  "focus-within:relative focus-within:z-20",
                ),
                day: cn(
                  "h-11 w-11 p-0 font-normal rounded-full hover:bg-accent/20 transition",
                  "aria-selected:bg-foreground aria-selected:text-background aria-selected:hover:bg-foreground",
                  "disabled:opacity-20 disabled:pointer-events-none",
                ),
                day_today: "ring-1 ring-border",
                day_outside: "text-muted-foreground opacity-30",
              }}
            />

            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 pt-4 border-t border-border">
              {(Object.entries(eventTypeLabel) as [UaisEvent["type"], string][]).map(
                ([type, label]) => (
                  <span key={type} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span
                      className="inline-block rounded-sm"
                      style={{
                        width: 12,
                        height: 3,
                        backgroundColor: `hsl(${colorVar[eventTypeColor[type]]})`,
                      }}
                    />
                    {label}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Event list */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-display text-lg font-semibold">
            {selectedDay && eventsForSelectedDay
              ? format(selectedDay, "MMMM d, yyyy")
              : `Events in ${format(month, "MMMM")}`}
          </h3>

          <div className="space-y-3 max-h-[480px] overflow-y-auto scrollbar-minimal pr-1">
            {eventsForSelectedDay === null && (
              <p className="text-sm text-muted-foreground">
                No events on this day.
              </p>
            )}

            {eventsForSelectedDay?.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No events scheduled for this month.
              </p>
            )}

            {eventsForSelectedDay &&
              eventsForSelectedDay.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EventCard({ event: e }: { event: UaisEvent }) {
  return (
    <div className="card-surface p-4 hover:glow-blue transition">
      <div className="flex items-start gap-3">
        <span
          className="mt-1.5 shrink-0 inline-block rounded-sm"
          style={{
            width: 14,
            height: 3,
            backgroundColor: `hsl(${colorVar[eventTypeColor[e.type]]})`,
          }}
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs mono text-muted-foreground">
              {e.dateLabel}
            </span>
            {e.time && (
              <>
                <span className="text-xs text-muted-foreground">&middot;</span>
                <span className="text-xs mono text-muted-foreground">
                  {e.time}
                </span>
              </>
            )}
          </div>

          <h4 className="font-display font-semibold text-sm mt-0.5 leading-snug">
            {e.title}
          </h4>

          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
            {e.description}
          </p>

          <div className="flex items-center justify-between gap-2 mt-2">
            <div className="flex items-center gap-2 min-w-0">
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-full font-mono uppercase tracking-wider shrink-0",
                  "border",
                )}
                style={{
                  borderColor: `hsl(${colorVar[eventTypeColor[e.type]]} / 0.3)`,
                  color: `hsl(${colorVar[eventTypeColor[e.type]]})`,
                }}
              >
                {eventTypeLabel[e.type]}
              </span>

              {e.location && (
                <span className="text-[10px] text-muted-foreground truncate">
                  {e.location}
                </span>
              )}
            </div>

            <a
              href={e.link || "#"}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full transition hover:opacity-90"
              style={{
                backgroundColor: `hsl(${colorVar[eventTypeColor[e.type]]} / 0.15)`,
                color: `hsl(${colorVar[eventTypeColor[e.type]]})`,
              }}
            >
              Register <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
