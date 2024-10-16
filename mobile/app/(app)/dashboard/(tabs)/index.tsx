import { FlatList } from "react-native"
import { ServiceHistoryItem } from "@/components/rich/service-history-item"
import { useEffect, useState } from "react"
import { Loader } from "@/components/ui/loader"
import { EmptyContainer } from "@/components/ui/empty-container"
import { useAppDispatch, useAppSelector } from "@/hooks/store.hooks"
import { listServiceLog } from "@/store/service-log/actions/list-service-logs.action"
import { ServiceLogConnection, ServiceLogEdge, ServiceLogSortFields, SortDirection } from "@/graphql/gql/generated-models"
import { selectCurrentVehicle } from "@/store/user/user.selectors"

const ServiceHistory = () => {
  const dispatch = useAppDispatch()
  const vehicle = useAppSelector(selectCurrentVehicle)
  const [loading, setLoading] = useState(true)
  const [logs, setLogs] = useState<ServiceLogEdge[]>([])

  async function fetchLogs() {
    try {
      const res = await dispatch<any>(listServiceLog({
        paging: { first: 500 },
        sorting: [{ field: ServiceLogSortFields.CreatedAt, direction: SortDirection.Desc }],
        filter: {
          vehicle: {
            id: { eq: vehicle?.id }
          }
        }
      }))

      const payload = (res.payload?.data || []) as ServiceLogConnection
      
      setLogs(payload.edges || [])
      setLoading(false)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLogs()
  }, [])

  return (
    <FlatList
      data={logs}
      renderItem={({item}) => <ServiceHistoryItem data={item} />}
      contentContainerClassName="gap-4"
      keyExtractor={item => item.toString()}
      ListEmptyComponent={loading ? <Loader /> : <EmptyContainer title="Empty" />}
    />
  )
}

export default ServiceHistory