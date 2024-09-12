'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useEffect, useState } from "react"
import { GraphQLAPI } from "@/graphql/api"
import { useRouter } from "next/navigation"
import { GraphQLError } from "@/components/graphql-error"
import { ClientApi } from "@/graphql/client-api"
import { MutationCreateOneOrgArgs, Org, OrgTypeConnection, OrgTypeEdge, QueryOrgTypesArgs } from "@/graphql/gql/generated-models"
import _ from "lodash"
 
const formSchema = z.object({
  name: z.string().min(1, { message: 'Must have at least 1 character' }),
  type: z.string()
})

export default function CreateOrganization() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [orgTypes, setOrgTypes] = useState<OrgTypeEdge[]>([])
  const [response, setResponse] = useState<GraphQLAPI.Response<Org>>()

  async function loadOrgTypes() {
    const res = await ClientApi.query<OrgTypeConnection, QueryOrgTypesArgs>({
      name: 'orgTypes',
      variables: {
        paging: { first: 1000 },
        filter: {},
        sorting: []
      },
      requiredAuth: true
    })

    setOrgTypes(res.data?.edges || [])
  }

  useEffect(() => {
    loadOrgTypes()
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true)
    setResponse(undefined)

    const res = await ClientApi.mutate<Org, MutationCreateOneOrgArgs>({
      name: 'createOneOrg',
      variables: {
        input: {
          org: {
            ...values,
            teams: [
              { name: 'Default' }
            ]
          }
        }
      },
      requiredAuth: true,
      appendSessions: [
        { responseField: '', sessionField: 'org' }
      ]
    })

    setResponse(res)
    if (!res.errors && res.data) {
      router.replace('/dashboard')
    } else {
      setSubmitting(false)
    }
  }
  
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Create Organization</CardTitle>
        <CardDescription>
          Enter your organization information
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <GraphQLError response={response}></GraphQLError>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Please give us know your business" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          {orgTypes.map(item => <SelectItem key={item.node.id} value={item.node.id}>{item.node.name}</SelectItem>)}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button loading={submitting} disabled={submitting} type="submit" className="w-full mt-2">
                Create
              </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}