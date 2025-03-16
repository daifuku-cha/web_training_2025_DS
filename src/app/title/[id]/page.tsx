import { Divider } from '@/components/Divider'
import { getTitleDetail } from '@/features/title/api/get-title'
import { Advertisements } from '@/features/title/components/advertisements'
import { ChapterList } from '@/features/title/components/chapterList'
import { TitleSummary } from '@/features/title/components/titileSummary'

const titleDetailPage = async ({ params }: { params: { id: number } }) => {
    const { title, chapters, advertisements } = await getTitleDetail(params.id)

    const relatedTitles = title.relatedVolume
    const volume = title.volume

    return (
        <div className='flex flex-col'>
            <TitleSummary title={title} />
            <Divider />
            <ChapterList chapters={chapters} titleId={title.id} />
            <Divider />
            <Advertisements advertisements={advertisements} />
            <Divider />
        </div>
    )
}

export default titleDetailPage
