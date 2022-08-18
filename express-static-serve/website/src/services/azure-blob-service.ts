import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';
import HoaBlobType from '../interfaces/HoaBlobType';

export function AzureBlobService() {

    let blobServiceClient: BlobServiceClient;

    const AZURE_STORAGE_CONNECTION_STRING = "DefaultEndpointsProtocol=https;AccountName=siennaforesteast2storage;AccountKey=jIWQOIHHAPNNXcGM+oaggPrZRzx47Vod84kV/T0v+wwPaTDOPgy4Q6aCF5sfZcm/pDrS+PqpPOu3+AStCR6lRQ==;EndpointSuffix=core.windows.net";
    
    if (!AZURE_STORAGE_CONNECTION_STRING) {
        throw Error("Azure Storage Connection string not found");
    }

    const imageContainerName = 'website-images';
    const docContainerName = 'website-docs';

    function initializeBlobServiceClient() {
        if(!blobServiceClient) {
            blobServiceClient = BlobServiceClient.fromConnectionString(
                AZURE_STORAGE_CONNECTION_STRING
            );
        }
    }

    function getBlobContainerByType(blobType: HoaBlobType): ContainerClient {
        let containerName = "";

        switch(blobType) {
            case HoaBlobType.Document:
                containerName = docContainerName;
                break;
            case HoaBlobType.Image:
                containerName = imageContainerName;
                break;
            default:
                throw Error(`BlobType ${blobType} has not been configured yet`);
        }

        return blobServiceClient.getContainerClient(containerName);
    }

    function getAllBlobsOfType(blobType: HoaBlobType) {
        initializeBlobServiceClient();
        const container = getBlobContainerByType(blobType);

        return container.listBlobsFlat();
    }

    return {
        getAllBlobsOfType
    };
}