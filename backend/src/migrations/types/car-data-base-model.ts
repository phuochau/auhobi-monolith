export interface CarDataBaseModel {
    brandName: string,
    baseModelName: string,
    baseModelUrl: string,
    baseModelImageUrl: string,
    subBaseModels?: CarDataBaseSubModel[],
    startYear?: string,
    endYear?: string,
}

export interface CarDataBaseSubModel {
    brandName: string,
    baseModelName: string,
    baseModelUrl: string,
    baseModelImageUrl: string,
    models?: CarDataModel[],
    startYear?: string,
    endYear?: string,
}

export interface CarDataModel {
    modelName: string,
    modelUrl: string
}