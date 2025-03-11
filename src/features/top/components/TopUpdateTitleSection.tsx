import { TopSectionContainer } from './layouts/TopSectionContainer'
import { Badge } from '@/components/Badge'
import MyImage from '@/components/MyImage'
import { TitleModel } from '@/models/title.model'

type TopUpdateTitleSectionProps = {
    updateTitles: TitleModel[]
}

export const TopUpdateTitleSection: React.FC<TopUpdateTitleSectionProps> = (
    props
) => {
    return (
        <TopSectionContainer
            headlineText='今日の更新作品'
            hrefText='連載作品一覧へ'
            href='/'
        >
            <div className='grid grid-cols-4 gap-8'>
                {props.updateTitles.map((title, updateTitleId) => (
                    <UpdateTitle key={updateTitleId} title={title} />
                ))}
            </div>
        </TopSectionContainer>
    )
}

type UpdateTitleProps = {
    title: TitleModel
}

export const UpdateTitle: React.FC<UpdateTitleProps> = (props) => {
    return (
        <div className='relative flex h-[336px] flex-col gap-2'>
            <MyImage
                className='h-[145px] w-[232px]'
                image={props.title.thumbnail}
            />
            <Badge />
            <div className='flex h-[83px] flex-col gap-[2px]'>
                <p>{props.title.name}</p>
                <p>{props.title.catchPhrase}</p>
            </div>
            <div className='flex flex-col gap-2'>
                <button className='bg-[#F5B437] px-[10px] py-3 text-base font-semibold text-white'>
                    読む
                </button>
                <button className='bg-[#6FBAF0] px-[10px] py-3 text-base font-semibold text-white'>
                    作品詳細
                </button>
            </div>
        </div>
    )
}
