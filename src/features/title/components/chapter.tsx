import React from 'react'
import Link from 'next/link'
import MyImage from '@/components/MyImage'
import { ChapterModel } from '@/models/chapter.models'

type ChapterProps = {
    chapter: ChapterModel
    titleId: number
}

export const Chapter: React.FC<ChapterProps> = (props) => {
    return (
        <Link
            href={`/title/${props.titleId}/chapter/${props.chapter.chapterId}`}
        >
            <div className='flex gap-5'>
                <MyImage
                    image={props.chapter.thumbnail}
                    className='h-[204px] w-[326px]'
                />
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col gap-1'>
                        <h2 className='text-xl font-bold'>
                            {props.chapter.title}
                        </h2>
                        <h3 className='text-lg text-[#333333]'>
                            {props.chapter.subTitle}
                        </h3>
                    </div>
                    <p className='text-[15px] font-bold'>公開期限</p>
                </div>
            </div>
        </Link>
    )
}
