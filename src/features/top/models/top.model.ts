import { BannerModel } from '@/models/banner.model'
import { TitleModel } from '@/models/title.model'

export interface TopModel {
    banners: BannerModel[]
    updateTitles: TitleModel[]
}
