import { FC } from "react"
import { CheckCircle, Lock } from "phosphor-react"
import { format, isPast } from "date-fns"

import "./Lesson.css"

interface LessonProps {
    title: string
    slug: string
    availableAt: Date
    type: "live" | "class"
}

const Lesson: FC<LessonProps> = ({
    title,
    slug,
    availableAt,
    type,
}: LessonProps) => {
    const isLessonAvailable = isPast(availableAt)

    return (
        <a href="#">
            <span className="lesson-date">
                {format(availableAt, "EEEE' • 'MMMM d' • ' k'h'mm")}
            </span>
            <div className="lesson">
                <header className="lesson-header">
                    {isLessonAvailable ? (
                        <span className="lesson-status">
                            <CheckCircle size={20} />
                            Content Released
                        </span>
                    ) : (
                        <span className="lesson-status soon">
                            <Lock size={20} />
                            Soon
                        </span>
                    )}
                    <span className="lesson-type">
                        {type === "live" ? "LIVE" : "CLASS"}
                    </span>
                </header>
                <span className="lesson-title">{title}</span>
            </div>
        </a>
    )
}

export default Lesson
