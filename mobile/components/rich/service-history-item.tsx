import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Text } from '../ui/text'

export type ServiceHistoryItemProps = {

}

export const ServiceHistoryItem = (props: ServiceHistoryItemProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <Text>Card Content</Text>
            </CardContent>
            <CardFooter>
                <Text>Card Footer</Text>
            </CardFooter>
        </Card>
    )
}