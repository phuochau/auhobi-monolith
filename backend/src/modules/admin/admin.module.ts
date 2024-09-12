import { Module } from '@nestjs/common';
import _ from 'lodash';
import { DataSource } from 'typeorm';

const authenticate = async (email: string, password: string) => {
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    return Promise.resolve({ email: process.env.ADMIN_EMAIL })
  }
  return null
}

@Module({
    imports: [
        // AdminJS version 7 is ESM-only. In order to import it, you have to use dynamic imports.
        import('@adminjs/nestjs').then(async ({ AdminModule }) => {
            const { AdminJS } = await import('adminjs')
            const AdminJSTypeorm = await import('@adminjs/typeorm')
            AdminJS.registerAdapter({
                Resource: AdminJSTypeorm.Resource,
                Database: AdminJSTypeorm.Database,
            })


            return AdminModule.createAdminAsync({
                useFactory: (dataSource: DataSource) => {
                    const keys = _.sortBy(Array.from(dataSource.entityMetadatasMap.keys()), item => dataSource.entityMetadatasMap.get(item).name)
                    const entityNames = dataSource.entityMetadatas.map(item => item.name).sort()

                    let resources = []
                    for (let i = 0; i < keys.length; i++) {
                        const item = keys[i]
                        if (typeof item === 'string') {
                            continue
                        }
                        const resource: any = { resource: keys[i] }

                        const itemEntityName = dataSource.entityMetadatasMap.get(item).name
                        const parentName = entityNames.find(name => itemEntityName.includes(name))
                        if (parentName) {
                            resource.options = {
                                navigation: {
                                    name: parentName,
                                },
                            }
                        }

                        resources.push(resource)
                    }

                    return {
                        adminJsOptions: {
                            rootPath: '/admin',
                            resources: resources,
                        },
                        auth: {
                            authenticate,
                            cookieName: 'adminjs',
                            cookiePassword: 'secret'
                        },
                        sessionOptions: {
                            resave: true,
                            saveUninitialized: true,
                            secret: 'secret'
                        },
                    }
                },
                inject: [DataSource]
            })
        }),
    ]
})
export class AdminModule {}
