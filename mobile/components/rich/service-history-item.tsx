import { Image, View } from "react-native"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card"
import { Text } from '../ui/text'
import { Badge } from "../ui/badge"
import { ServiceLogBill, ServiceLogEdge } from "@/graphql/gql/generated-models"
import _ from "lodash"
import { userService } from "@/services/user.service"
import { Label } from "../ui/label"
import { MediaGrid } from "../ui/media-grid"
import { NumberUtils } from "@/lib/number.utils"

export type ServiceHistoryItemProps = {
    data: ServiceLogEdge
}

export const ServiceHistoryItem = (props: ServiceHistoryItemProps) => {
    const { data } = props

    function getTotalBill(): number {
        const bills: ServiceLogBill[] = data.node.bills?.nodes || []
        return _.sumBy(bills, item => item.total || 0)
    }

    const attachments = data.node.media || []
    const billMedia = (data.node.bills?.nodes || []).map(item => item.media).filter(item => !_.isNil(item))
    const garageName = data.node.garage ? data.node.garage.name : data.node.customGarage

    return (
        <View className="px-6">
            <Card>
                <CardHeader>
                    <View className="flex flex-row items-start mb-1">
                        <Badge><Text>{data.node.type}</Text></Badge>
                        {data.node.mileage &&
                            <View className="flex-1 flex-row justify-end">
                                <Badge variant={'outline'}><Text>{NumberUtils.format(data.node.mileage)} km</Text></Badge>
                            </View>}
                    </View>
                    <CardDescription>{userService.formatDate(data.node.createdAt)}{Boolean(garageName?.length) ? ` | ${garageName}` : ''}</CardDescription>
                </CardHeader>

                {Boolean(data.node.description?.length) &&
                    <CardContent>
                        <Text>{data.node.description}</Text>
                    </CardContent>}
                    
                <CardFooter className="flex flex-col items-start gap-4">
                    {attachments.length > 0 && 
                        <View className="flex flex-col gap-1 w-full">
                            <Label nativeID="mediaLabel">Media</Label>
                            <MediaGrid urls={attachments} />
                        </View>
                    }
                    {billMedia.length > 0 &&
                        <View className="flex flex-col gap-1 w-full">
                            <View className="flex flex-row items-center">
                                <Label nativeID="mediaLabel" className="flex-1">Bills</Label>
                                <View className="flex-1 flex-row justify-end">
                                    <Badge variant={'outline'}><Text>{NumberUtils.format(getTotalBill())}đ</Text></Badge>
                                </View>
                            </View>
                            <MediaGrid urls={billMedia} />
                        </View>}
                </CardFooter>
            </Card>
        </View>
    )
}