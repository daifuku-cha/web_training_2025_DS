import React from 'react'
import { Chapter } from './chapter'
import { ChapterModel } from '@/models/chapter.models'

type ChapterListProps = {
    chapters: ChapterModel[]
    titleId: number
}

export const ChapterList: React.FC<ChapterListProps> = (props) => {
    return (
        <div className='mx-auto flex w-[1024px] flex-col gap-3 py-8'>
            <h1 className='text-2xl font-semibold'>チャプター</h1>
            {props.chapters.map((chapter) => (
                <Chapter
                    key={chapter.chapterId}
                    chapter={chapter}
                    titleId={props.titleId}
                />
            ))}
        </div>
    )
}
