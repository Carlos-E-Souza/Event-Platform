import { gql, useQuery } from "@apollo/client"
import { FC } from "react"

const GET_LESSONS_QUERY = (id:string) => gql`
    query MyQuery {
        lessons(orderBy: availableAt_ASC, where: id == ${id}) {
            id
            slug
            title
            description
            teacher {
                name
            }
        }
    }
`

interface VideoProps {
    id: string
}

interface LessonProps {
    id: string
    title: string
    description: string
    teacher: {
        name: string
    }
}

export const Video:FC<VideoProps> = ({id}) => {
    const { data } = useQuery<{ lessons: LessonProps }>(GET_LESSONS_QUERY(id))
    
    return (
        <div>
            
            <h1>{data?.lessons.title}</h1>
            <span>{data?.lessons.description}</span>
            <div>
                <img src={data?.lessons.teacher.imgUrl} alt="" />
                <span>{data?.lessons.teacher.name}</span>
            </div>
        </div>
    )
}
