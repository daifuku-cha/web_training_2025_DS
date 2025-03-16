import { Proto } from "@/generated/protocol";
import { AuthorModel } from "@/models/author.model";
import { ImageModel } from "@/models/image.model";
import { TitleModel } from "@/models/title.model";
import { VolumeModel } from "@/models/volume.model";
import { BadgeStatus } from "@/models/title.model";

export const TitleTranslator = {
    translate: (proto: Proto.ITitle): TitleModel => {
        return {
            id: proto.id as number,
            name: proto.name as string,
            description: proto.description as string,
            catchPhrase: proto.catchPhrase as string,
            copyRight: proto.copyRight as string,
            thumbnail: proto.thumbnail as ImageModel,
            volume: proto.volume as VolumeModel,
            relatedVolume: proto.relatedVolume as VolumeModel,
            badge: transpileBadeStatus(proto.badge ?? Proto.Title.Badge.NONE),
            author: proto.author as AuthorModel,
            firstChapterId: proto.firstChapterId as number
        }
    }
}

export const transpileBadeStatus = (badge: Proto.Title.Badge): BadgeStatus => {
    switch (badge) {
        case Proto.Title.Badge.NONE:
            return 'NONE'
        case Proto.Title.Badge.NEW:
            return 'NEW'
    }
}