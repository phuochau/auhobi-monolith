import { useEffect, useRef, useState } from "react"
import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import _ from "lodash"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { BlurView } from 'expo-blur';
import Feather from "@expo/vector-icons/Feather"
import { useTheme } from "@react-navigation/native"
import { Portal } from "@rn-primitives/portal"
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel"
import { cn } from "@/lib/utils";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export type LightboxProps = {
    open: boolean,
    mediaUrls: string[],
    activeIndex?: number,
    requestClose?: () => void
}

export const Lightbox = (props: LightboxProps) => {
    const { mediaUrls, open, requestClose } = props
    const ref = useRef<ICarouselInstance>(null)
    const [currentIndex, setCurrentIndex] = useState(props.activeIndex || 0)
    const insets = useSafeAreaInsets();
    const { colors } = useTheme();

    function closeDialog() {
        if (requestClose) {
            requestClose()
        }
    }

    useEffect(() => {
        if (!_.isNil(props.activeIndex) && currentIndex !== props.activeIndex) {
            if (ref?.current) {
                ref.current.scrollTo({
                    count: currentIndex - props.activeIndex,
                    animated: true,
                  })
            }
            setCurrentIndex(props.activeIndex)
        }
    }, [props.activeIndex])

    if (!mediaUrls.length || !open) {
        return null
    }

    return (
        <Portal name='lightbox'>
            <View className="w-screen h-screen bg-primary relative">
                <Carousel
                    ref={ref}
                    loop={true}
                    snapEnabled={true}
                    pagingEnabled={true}
                    data={mediaUrls}
                    width={windowWidth}
                    height={windowHeight}
                    defaultIndex={currentIndex}
                    renderItem={(data) => <Image key={data.item} source={{ uri: data.item }} className="w-full h-full" resizeMode="cover" />}
                    onSnapToItem={(index: number) => setCurrentIndex(index)}
                />

                <View className="w-full flex flex-row items-center justify-center p-6 absolute bottom-6 gap-2">
                    {mediaUrls.map((url, index) =>
                        <View
                            key={url}
                            className={cn("rounded-full w-2.5 h-2.5", index === currentIndex ? 'bg-primary' : 'bg-white')}
                        ></View>)}
                </View>
                
                <TouchableOpacity
                    className="absolute top-0 right-2 rounded-md overflow-hidden"
                    style={{ top: insets.top }}
                    onPress={() => closeDialog()}
                >
                    <BlurView intensity={80} tint="dark" className="w-10 h-10 flex flex-col items-center justify-center">
                        <Feather name="x" size={20} color={colors['background']} />
                    </BlurView>
                </TouchableOpacity>
            </View>
        </Portal>
    )
}