import { Linking, Pressable, TouchableOpacity, View } from "react-native"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card"
import { Text } from '../ui/text'
import { Badge } from "../ui/badge"
import { ServiceLogBill, ServiceLogEdge } from "@/graphql/gql/generated-models"
import _ from "lodash"
import { userService } from "@/services/user.service"
import { Label } from "../ui/label"
import { MediaGrid } from "../ui/media-grid"
import { NumberUtils } from "@/lib/number.utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { Ellipsis } from "@/lib/icons/Ellipsis"
import { SquarePen } from '@/lib/icons/SquarePen'
import { Trash2 } from '@/lib/icons/Trash2'
import { Link2 } from '@/lib/icons/Link2'
import { MapPin } from '@/lib/icons/MapPin'
import dayjs from "dayjs"
import { useState } from "react"
import React from "react"
import { UrlUtils } from "@/lib/url-utils"

export type ServiceHistoryItemProps = {
    data: ServiceLogEdge,
    onRequestEdit: (data: ServiceLogEdge) => any,
    onRequestDelete: (data: ServiceLogEdge) => any
}

export const ServiceHistoryItem = (props: ServiceHistoryItemProps) => {
    const { data, onRequestEdit, onRequestDelete } = props
    const [expanded, setExpanded] = useState(false)

    const attachments = data.node.media || []
    const billMedia = (data.node.bills?.nodes || []).map(item => item.media).filter(item => !_.isNil(item))
    const garageName = data.node.garage ? data.node.garage.name : data.node.customGarage
    const links = data.node.links || []

    function getTotalBill(): number {
        const bills: ServiceLogBill[] = data.node.bills?.nodes || []
        return _.sumBy(bills, item => item.total || 0)
    }

    function toggleExpanded() {
        setExpanded(!expanded)
    }

    function renderHeader() {
        return (
            <>
                <View className="flex flex-row items-center justify-center gap-2">
                    <View className="flex-1 flex flex-row">
                        <Badge><Text>{data.node.type}</Text></Badge>
                    </View>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='ghost' size='icon' className="-mr-2">
                                <Ellipsis size={20} className="text-foreground" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent insets={{ right: 16 }} className='w-32 native:w-32'>
                            <DropdownMenuItem onPress={() => onRequestEdit(data)}>
                                <SquarePen size={14} className="text-foreground" />
                                <Text className="text-foreground">Edit</Text>
                            </DropdownMenuItem>
                            <DropdownMenuItem onPress={() => onRequestDelete(data)}>
                                <Trash2 size={14} className="text-destructive" />
                                <Text className="text-destructive">Delete</Text>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </View>
                <View className="flex flex-row items-center">
                    {garageName?.length &&
                        <View className="flex-1 flex flex-row items-center gap-1">
                            <MapPin size={14} className="text-muted-foreground" />
                            <Text className="text-sm font-semibold">{Boolean(garageName?.length) ? `${garageName}` : ''}</Text>
                        </View>
                    }
                    {data.node.mileage && <Badge variant={'secondary'}><Text>{NumberUtils.format(data.node.mileage)} km</Text></Badge>}
                </View>
            </>

        )
    }

    function renderCollapsedContent() {
        return (
            <Pressable onPress={toggleExpanded}>
                <Card>
                    <CardHeader className="pt-4 pb-2">
                        {renderHeader()}
                    </CardHeader>
                    <View className="px-6 gap-4 mb-4">
                        <Text>{data.node.description}</Text>
                    </View>
                    {billMedia.length > 0 && <Badge variant={'secondary'} className="rounded-tl-none rounded-tr-none"><Text className="text-xl font-semibold">{NumberUtils.format(getTotalBill())}đ</Text></Badge>}
                </Card>
            </Pressable>
        )
    }

    function renderExpandedContent() {
        return (
            <Pressable onPress={toggleExpanded}>
                <Card>
                    <CardHeader className="pt-4">
                        {renderHeader()}
                    </CardHeader>

                    {Boolean(data.node.description?.length) &&
                        <CardContent>
                            <Text>{data.node.description}</Text>
                        </CardContent>}

                    <CardFooter className="flex flex-col items-start gap-4">
                        {attachments.length > 0 &&
                            <View className="flex flex-col gap-1 w-full">
                                <Label nativeID="mediaLabel" className="font-bold">Media</Label>
                                <MediaGrid urls={attachments} />
                            </View>
                        }

                        {billMedia.length > 0 &&
                            <View className="flex flex-col gap-1 w-full">
                                <View className="flex flex-row items-center">
                                    <Label nativeID="billsLabel" className="flex-1 font-bold">Bills</Label>
                                    <View className="flex-1 flex-row justify-end">
                                        <Badge variant={'default'}><Text>{NumberUtils.format(getTotalBill())}đ</Text></Badge>
                                    </View>
                                </View>
                                <MediaGrid urls={billMedia} />
                            </View>
                        }

                        {links.length > 0 &&
                            <View className="flex flex-col gap-1 w-full">
                                <Label nativeID="linksLabel" className="font-bold">Links</Label>
                                <View className="flex flex-col gap-1">
                                    {links.map(item =>
                                        <TouchableOpacity onPress={() => Linking.openURL(item)} key={item} className="flex flex-row items-center gap-1">
                                            <Link2 size={16} className="text-muted-foreground" />
                                            <Text className="flex-1 text-primary font-semibold">{item}</Text>
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </View>
                        }
                    </CardFooter>
                </Card>
            </Pressable>
        )
    }

    return (
        <View className="px-6 gap-2">
            <Text className="font-black text-2xl uppercase">{dayjs(data.node.date).format('D MMM')}</Text>
            {expanded ? renderExpandedContent() : renderCollapsedContent()}
        </View>
    )
}