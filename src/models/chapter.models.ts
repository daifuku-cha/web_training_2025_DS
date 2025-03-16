import { ImageModel } from "./image.model"
import { PeriodModel } from "./period.models"

export type ChapterModel = {
    chapterId: number
    title: string
    subTitle: string
    period: PeriodModel
    thumbnail: ImageModel
}