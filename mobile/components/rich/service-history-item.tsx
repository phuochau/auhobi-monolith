import { Image, View } from "react-native"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card"
import { Text } from '../ui/text'
import { Badge } from "../ui/badge"
import { ServiceLogBill, ServiceLogEdge } from "@/graphql/gql/generated-models"
import _ from "lodash"
import { userService } from "@/services/user.service"
import { Label } from "../ui/label"

export type ServiceHistoryItemProps = {
    data: ServiceLogEdge
}

export const ServiceHistoryItem = (props: ServiceHistoryItemProps) => {
    const { data } = props

    console.log(JSON.stringify(data))

    function getTotalBill(): number {
        const bills: ServiceLogBill[] = data.node.bills?.nodes || []
        return _.sumBy(bills, item => item.total || 0)
    }

    const attachments = data.node.media || []
    const billMedia = (data.node.bills?.nodes || []).map(item => item.media).filter(item => !_.isNil(item))

    return (
        <View className="px-4">
            <Card className="border">
                <CardHeader>
                    <View className="flex flex-row items-start mb-1">
                        <Badge><Text>{data.node.type}</Text></Badge>
                        <View className="flex-1 flex-row justify-end">
                            <Badge variant={'outline'}><Text>{getTotalBill()}đ</Text></Badge>
                        </View>
                    </View>
                    <CardDescription>{userService.formatDate(data.node.createdAt)}</CardDescription>
                </CardHeader>

                {Boolean(data.node.description?.length) &&
                    <CardContent>
                        <Text>{data.node.description}</Text>
                    </CardContent>}
                    
                <CardFooter className="flex flex-col items-start gap-4">
                    {attachments.length > 0 &&
                        <View className="flex flex-col gap-1">
                            <Label nativeID="mediaLabel">Media</Label>
                            <View className="flex flex-row gap-2 flex-wrap">
                                {attachments.map(url =>
                                    <Image source={{ uri: url }} className="w-16 h-16 object-fit" resizeMode="cover" />
                                )}
                            </View>
                        </View>}

                    {billMedia.length > 0 &&
                        <View className="flex flex-col gap-1">
                            <Label nativeID="billLabel">Bills</Label>
                            <View className="flex flex-row gap-2 flex-wrap">
                                {billMedia.map(url =>
                                    <Image source={{ uri: url }} className="w-16 h-16 object-fit" resizeMode="cover" />
                                )}
                            </View>
                        </View>}
                </CardFooter>
            </Card>
        </View>
    )
}