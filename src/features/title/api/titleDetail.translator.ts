import { TitleTranslator } from '@/translators/title.translator'
import { TitleDetailModel } from '../models/titleDetail.models'
import { Proto } from '@/generated/protocol'
import { ChapterTranslator } from '@/translators/chapter.traslator'

export const TitleDetailTranslator = {
    translate: (proto: Proto.ITitleDetailView): TitleDetailModel => {
        return {
            title: TitleTranslator.translate(proto.title as Proto.ITitle),
            chapters: proto.chapters?.map((chapter) => ChapterTranslator.translate(chapter)) ?? [],
            advertisements: proto.advertisement as string,
        }
    },
}
