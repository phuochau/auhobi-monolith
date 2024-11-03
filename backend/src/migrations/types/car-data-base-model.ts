export interface CarDataBaseModel {
    brandName: string,
    baseModelName: string,
    baseModelUrl: string,
    baseModelImageUrl: string,
    subBaseModels?: CarDataBaseSubModel[]
}

export interface CarDataBaseSubModel {
    brandName: string,
    baseModelName: string,
    baseModelUrl: string,
    baseModelImageUrl: string,
    models?: CarDataModel[]
}

export interface CarDataModel {
    modelName: string,
    modelUrl: string
}