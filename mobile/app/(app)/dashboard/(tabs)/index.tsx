import { FlatList } from "react-native"
import { ServiceHistoryItem } from "@/components/rich/service-history-item"
import { useEffect, useState } from "react"
import { Loader } from "@/components/ui/loader"
import { EmptyContainer } from "@/components/ui/empty-container"
import { useAppDispatch, useAppSelector } from "@/hooks/store.hooks"
import { listServiceLog } from "@/store/service-log/actions/list-service-logs.action"
import { ServiceLogConnection, ServiceLogDeleteResponse, ServiceLogEdge, ServiceLogSortFields, SortDirection } from "@/graphql/gql/generated-models"
import { selectCurrentVehicle } from "@/store/user/user.selectors"
import { ConfirmationService } from "@/services/confirmation.service"
import { deleteServiceLogAction } from "@/store/service-log/actions/delete-service-log.action"
import { useRouter } from "expo-router"

const MOCKING_DATA = require('./logs.json')

const ServiceHistory = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
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

  function onEdit(item: ServiceLogEdge): void {
    router.push({ pathname: '/dashboard/add-service-history', params: { serviceLogId: item.node.id } })
  }

  function onDelete(item: ServiceLogEdge): void {
    ConfirmationService.open({
      title: 'Confirmation',
      description: 'Are you sure you want to delete the log?',
      confirmClassName: 'bg-destructive',
      onConfirm: async () => {
        try {
          const res = await dispatch<any>(deleteServiceLogAction({ input: { id: item.node.id } }))
          const payload = res.payload?.data as ServiceLogDeleteResponse;

          if (payload.id) {
            // fetchLogs()
          }
        } catch (err) {
          console.log(err)
        }
      }
    })
  }

  useEffect(() => {
    setLoading(false)
    setLogs(MOCKING_DATA)
    // fetchLogs()
  }, [])

  return (
    <FlatList
      data={logs}
      renderItem={({item}) =>
        <ServiceHistoryItem
          data={item}
          onRequestEdit={onEdit}
          onRequestDelete={onDelete}
          />
      }
      contentContainerClassName="gap-6 py-6"
      keyExtractor={item => item.node.id}
      ListEmptyComponent={loading ? <Loader /> : <EmptyContainer title="Empty" />}
    />
  )
}

export default ServiceHistory