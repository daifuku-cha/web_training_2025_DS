import React from 'react'
import MyImage from '@/components/MyImage'
import { TitleModel } from '@/models/title.model'
import {
    FacebookIcon,
    LineIcon,
    PaperPlaneIcon,
    TwitterIcon,
} from '@/utils/images'

type TitleSummaryProps = {
    title: TitleModel
}

export const TitleSummary: React.FC<TitleSummaryProps> = (props) => {
    return (
        <div className='flex justify-center gap-8 bg-[#F5F5F5] py-6 pl-8'>
            <MyImage
                image={props.title.thumbnail}
                className='h-[391px] w-[629px]'
            />
            <div className='flex w-[498px] flex-col gap-5'>
                <h1 className='text-2xl font-bold'>{props.title.name}</h1>
                <p className='whitespace-pre-line text-base'>
                    {props.title.description}
                </p>
                <div>
                    <p className='text-base'>{props.title.author.name}</p>
                    <p className='text-base text-[#6B6B6B]'>
                        {props.title.copyRight}
                    </p>
                </div>
                <div className='flex flex-col gap-3'>
                    <a className='flex items-center justify-center gap-2 bg-white py-4'>
                        <MyImage image={PaperPlaneIcon} className='h-6 w-6' />
                        <p className='text-lg font-semibold'>感想を送る</p>
                    </a>
                    {/* SNSシェアの実装:参考文献 */}
                    {/* https://zenn.dev/yurukei20/articles/5a7af661b2b89e */}
                    <div className='flex justify-stretch'>
                        <a
                            href={`https://twitter.com/share?url=http://localhost:3000/title/${props.title.id}&hashtags=漫画,最高&text=${props.title.name}`}
                            rel='nofollow noopener'
                            target='_blank'
                            className='flex h-[44px] w-[160px] items-center justify-center rounded bg-[#1877F2]'
                        >
                            <MyImage image={FacebookIcon} />
                        </a>
                        <a
                            href={`https://twitter.com/share?url=http://localhost:3000/title/${props.title.id}&hashtags=漫画,最高&text=${props.title.name}`}
                            rel='nofollow noopener'
                            target='_blank'
                            className='flex h-[44px] w-[160px] items-center justify-center rounded bg-[#1DA1F2]'
                        >
                            <MyImage image={TwitterIcon} />
                        </a>
                        <a
                            href={`https://twitter.com/share?url=http://localhost:3000/title/${props.title.id}&hashtags=漫画,最高&text=${props.title.name}`}
                            rel='nofollow noopener'
                            target='_blank'
                            className='flex h-[44px] w-[160px] items-center justify-center rounded bg-[#00B900]'
                        >
                            <MyImage image={LineIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
