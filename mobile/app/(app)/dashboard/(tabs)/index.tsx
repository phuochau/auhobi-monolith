import { FlatList } from "react-native"
import { ServiceHistoryItem } from "@/components/rich/service-history-item"

const DATA = [1,2,3,4,5,6,7,8,9,10]

const ServiceHistory = () => {
    return (
        <FlatList
          data={DATA}
          renderItem={({item}) => <ServiceHistoryItem />}
          contentContainerClassName="gap-4"
          keyExtractor={item => item.toString()}
        />
    )
}

export default ServiceHistory