import { Proto } from '@/generated/protocol'
import { ChapterModel } from '@/models/chapter.models'
import { ImageModel } from '@/models/image.model'

export const ChapterTranslator = {
    translate: (proto: Proto.IChapter): ChapterModel => {
        return {
            chapterId: proto.id as number,
            title: proto.name as string,
            subTitle: proto.subName as string,
            period: {
                start: proto.period?.start as string,
                end: proto.period?.end as string,
            },
            thumbnail: proto.thumbnail as ImageModel,
        }
    },
}
