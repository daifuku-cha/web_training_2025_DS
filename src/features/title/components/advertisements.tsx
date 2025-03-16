type AdvertisementsProps = {
    advertisements: string
}

export const Advertisements: React.FC<AdvertisementsProps> = (props) => {
    return (
        <div className='mx-auto flex w-[1024px] flex-col gap-4 py-8'>
            <h1 className='text-[22px] font-bold'>作品インフォメーション</h1>
            <p className='text-base font-bold text-[#6B6B6B]'>
                {props.advertisements}
            </p>
        </div>
    )
}
