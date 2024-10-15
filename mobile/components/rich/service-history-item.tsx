import { Image, View } from "react-native"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Text } from '../ui/text'
import { Badge } from "../ui/badge"

export type ServiceHistoryItemProps = {

}

export const ServiceHistoryItem = (props: ServiceHistoryItemProps) => {
    return (
        <View className="px-4">
            <Card className="border">
                <CardHeader>
                    <View className="flex flex-row items-start mb-1">
                        <Badge><Text>Retrofit</Text></Badge>
                        <View className="flex-1 flex-row justify-end">
                            <Badge variant={'outline'}><Text>20.000.000đ</Text></Badge>
                        </View>
                    </View>
                    <CardDescription>29 Oct, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <Text>Upgrade MST Cold Air Intake</Text>
                </CardContent>
                <CardFooter className="gap-2 flex-wrap">
                    <Image source={{ uri: 'https://mrmperformance.com/cdn/shop/products/2000x_5.webp?v=1644951355&width=1445' }} className="w-16 h-16 object-fit" resizeMode="cover" />
                    <Image source={{ uri: 'https://mrmperformance.com/cdn/shop/products/2000x_5.webp?v=1644951355&width=1445' }} className="w-16 h-16 object-fit" resizeMode="cover" />
                    <Image source={{ uri: 'https://mrmperformance.com/cdn/shop/products/2000x_5.webp?v=1644951355&width=1445' }} className="w-16 h-16 object-fit" resizeMode="cover" />
                    <Image source={{ uri: 'https://mrmperformance.com/cdn/shop/products/2000x_5.webp?v=1644951355&width=1445' }} className="w-16 h-16 object-fit" resizeMode="cover" />
                </CardFooter>
            </Card>
        </View>
    )
}