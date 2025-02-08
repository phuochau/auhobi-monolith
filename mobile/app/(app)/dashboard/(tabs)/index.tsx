import { FlatList } from "react-native"
import { ServiceHistoryItem } from "@/components/rich/service-history-item"
import { useEffect } from "react"
import { Loader } from "@/components/ui/loader"
import { EmptyContainer } from "@/components/ui/empty-container"
import { useAppDispatch, useAppSelector } from "@/hooks/store.hooks"
import { listServiceLog } from "@/store/service-log/actions/list-service-logs.action"
import { ServiceLogDeleteResponse, ServiceLogEdge } from "@/graphql/gql/generated-models"
import { ConfirmationService } from "@/services/confirmation.service"
import { deleteServiceLogAction } from "@/store/service-log/actions/delete-service-log.action"
import { useRouter } from "expo-router"
import { selectFetchingLogs, selectLogs } from "@/store/service-log/service-log.selector"

const MOCKING_DATA = require('./logs.json')

const ServiceHistory = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const loading = useAppSelector(selectFetchingLogs)
  const logs = useAppSelector(selectLogs)

  async function fetchLogs() {
    await dispatch<any>(listServiceLog())
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
    // setLogs(MOCKING_DATA)
    fetchLogs()
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
      ListEmptyComponent={loading ? <Loader /> : <EmptyContainer title="Empty Logs" />}
    />
  )
}

export default ServiceHistory