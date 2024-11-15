import { View, Image, TouchableOpacity } from "react-native"
import { cn } from "@/lib/utils"
import React, { useState } from "react"
import { Lightbox } from "../dialogs/lightbox"

export type MediaGridProps = {
    urls: string[],
    cols?: number
}

export const MediaGrid = (props: MediaGridProps) => {
    const { urls, cols = 6 } = props
    const [open, setOpen] = useState(false)
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    let itemClassName = `w-1/4`
    if (cols === 6) {
        itemClassName = 'w-1/6'
    }

    function openMediaAtIndex(index: number): void {
        setOpen(true)
        setActiveImageIndex(index)
    }

    function closeLightbox(): void {
        setOpen(false)
    }

    return (
        <>
            <View className="flex flex-row gap-1 flex-wrap -mx-1 w-full">
                {urls.map((url, index) =>
                    <View key={url} className={cn("aspect-square p-1", itemClassName)}>
                        <TouchableOpacity
                            onPress={() => openMediaAtIndex(index)}
                            activeOpacity={0.8}
                            className="w-full h-full"
                        >
                            <Image source={{ uri: url }} className="w-full h-full rounded-xl" resizeMode="cover" />
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            <Lightbox
                mediaUrls={urls}
                activeIndex={activeImageIndex}
                open={open}
                requestClose={() => closeLightbox()}
            />
        </>
    )
}