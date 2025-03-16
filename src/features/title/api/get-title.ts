import { TitleDetailModel } from '../models/titleDetail.models'
import { TitleDetailTranslator } from './titleDetail.translator'
import { apiClient } from '@/api/api-client'
import { Endpoint } from '@/api/endpoint'
import { Proto } from '@/generated/protocol'

const endpoint: (titleId: number) => Endpoint<Proto.ITitleDetailView> = (titleId) => ({
    path: 'title/detail',
    method: 'get',
    revalidate: 60,
    parameters: {
        title_id: titleId,
    },
    decode: (data: ArrayBuffer) => {
        return Proto.TitleDetailView.decode(new Uint8Array(data))
    },
})

export const getTitleDetail: (titleId: number) => Promise<TitleDetailModel> = async (
    titleId
) => {
    const data = await apiClient(endpoint(titleId))
    return TitleDetailTranslator.translate(data)
}
