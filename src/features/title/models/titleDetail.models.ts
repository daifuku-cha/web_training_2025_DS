import { ChapterModel } from "@/models/chapter.models"
import { TitleModel } from "@/models/title.model"

export type TitleDetailModel = {
    title: TitleModel
    chapters: ChapterModel[]
    advertisements: string
}