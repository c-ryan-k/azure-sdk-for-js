/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ReportRecordContract,
  ReportsListByApiOptionalParams,
  ReportsListByUserOptionalParams,
  ReportsListByOperationOptionalParams,
  ReportsListByProductOptionalParams,
  ReportsListByGeoOptionalParams,
  ReportsListBySubscriptionOptionalParams,
  ReportsListByTimeOptionalParams,
  RequestReportRecordContract,
  ReportsListByRequestOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Reports. */
export interface Reports {
  /**
   * Lists report records by API.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param filter The filter to apply on the operation.
   * @param options The options parameters.
   */
  listByApi(
    resourceGroupName: string,
    serviceName: string,
    filter: string,
    options?: ReportsListByApiOptionalParams
  ): PagedAsyncIterableIterator<ReportRecordContract>;
  /**
   * Lists report records by User.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param filter |   Field     |     Usage     |     Supported operators     |     Supported functions
   *                  |</br>|-------------|-------------|-------------|-------------|</br>| timestamp | filter | ge, le
   *               |     | </br>| displayName | select, orderBy |     |     | </br>| userId | select, filter | eq |
   *               | </br>| apiRegion | filter | eq |     | </br>| productId | filter | eq |     | </br>|
   *               subscriptionId | filter | eq |     | </br>| apiId | filter | eq |     | </br>| operationId | filter
   *               | eq |     | </br>| callCountSuccess | select, orderBy |     |     | </br>| callCountBlocked |
   *               select, orderBy |     |     | </br>| callCountFailed | select, orderBy |     |     | </br>|
   *               callCountOther | select, orderBy |     |     | </br>| callCountTotal | select, orderBy |     |     |
   *               </br>| bandwidth | select, orderBy |     |     | </br>| cacheHitsCount | select |     |     | </br>|
   *               cacheMissCount | select |     |     | </br>| apiTimeAvg | select, orderBy |     |     | </br>|
   *               apiTimeMin | select |     |     | </br>| apiTimeMax | select |     |     | </br>| serviceTimeAvg |
   *               select |     |     | </br>| serviceTimeMin | select |     |     | </br>| serviceTimeMax | select |
   *                 |     | </br>
   * @param options The options parameters.
   */
  listByUser(
    resourceGroupName: string,
    serviceName: string,
    filter: string,
    options?: ReportsListByUserOptionalParams
  ): PagedAsyncIterableIterator<ReportRecordContract>;
  /**
   * Lists report records by API Operations.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param filter |   Field     |     Usage     |     Supported operators     |     Supported functions
   *                  |</br>|-------------|-------------|-------------|-------------|</br>| timestamp | filter | ge, le
   *               |     | </br>| displayName | select, orderBy |     |     | </br>| apiRegion | filter | eq |     |
   *               </br>| userId | filter | eq |     | </br>| productId | filter | eq |     | </br>| subscriptionId |
   *               filter | eq |     | </br>| apiId | filter | eq |     | </br>| operationId | select, filter | eq |
   *                | </br>| callCountSuccess | select, orderBy |     |     | </br>| callCountBlocked | select, orderBy
   *               |     |     | </br>| callCountFailed | select, orderBy |     |     | </br>| callCountOther | select,
   *               orderBy |     |     | </br>| callCountTotal | select, orderBy |     |     | </br>| bandwidth |
   *               select, orderBy |     |     | </br>| cacheHitsCount | select |     |     | </br>| cacheMissCount |
   *               select |     |     | </br>| apiTimeAvg | select, orderBy |     |     | </br>| apiTimeMin | select |
   *                  |     | </br>| apiTimeMax | select |     |     | </br>| serviceTimeAvg | select |     |     |
   *               </br>| serviceTimeMin | select |     |     | </br>| serviceTimeMax | select |     |     | </br>
   * @param options The options parameters.
   */
  listByOperation(
    resourceGroupName: string,
    serviceName: string,
    filter: string,
    options?: ReportsListByOperationOptionalParams
  ): PagedAsyncIterableIterator<ReportRecordContract>;
  /**
   * Lists report records by Product.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param filter |   Field     |     Usage     |     Supported operators     |     Supported functions
   *                  |</br>|-------------|-------------|-------------|-------------|</br>| timestamp | filter | ge, le
   *               |     | </br>| displayName | select, orderBy |     |     | </br>| apiRegion | filter | eq |     |
   *               </br>| userId | filter | eq |     | </br>| productId | select, filter | eq |     | </br>|
   *               subscriptionId | filter | eq |     | </br>| callCountSuccess | select, orderBy |     |     | </br>|
   *               callCountBlocked | select, orderBy |     |     | </br>| callCountFailed | select, orderBy |     |
   *                | </br>| callCountOther | select, orderBy |     |     | </br>| callCountTotal | select, orderBy |
   *                 |     | </br>| bandwidth | select, orderBy |     |     | </br>| cacheHitsCount | select |     |
   *                | </br>| cacheMissCount | select |     |     | </br>| apiTimeAvg | select, orderBy |     |     |
   *               </br>| apiTimeMin | select |     |     | </br>| apiTimeMax | select |     |     | </br>|
   *               serviceTimeAvg | select |     |     | </br>| serviceTimeMin | select |     |     | </br>|
   *               serviceTimeMax | select |     |     | </br>
   * @param options The options parameters.
   */
  listByProduct(
    resourceGroupName: string,
    serviceName: string,
    filter: string,
    options?: ReportsListByProductOptionalParams
  ): PagedAsyncIterableIterator<ReportRecordContract>;
  /**
   * Lists report records by geography.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param filter |   Field     |     Usage     |     Supported operators     |     Supported functions
   *                  |</br>|-------------|-------------|-------------|-------------|</br>| timestamp | filter | ge, le
   *               |     | </br>| country | select |     |     | </br>| region | select |     |     | </br>| zip |
   *               select |     |     | </br>| apiRegion | filter | eq |     | </br>| userId | filter | eq |     |
   *               </br>| productId | filter | eq |     | </br>| subscriptionId | filter | eq |     | </br>| apiId |
   *               filter | eq |     | </br>| operationId | filter | eq |     | </br>| callCountSuccess | select |
   *               |     | </br>| callCountBlocked | select |     |     | </br>| callCountFailed | select |     |     |
   *               </br>| callCountOther | select |     |     | </br>| bandwidth | select, orderBy |     |     | </br>|
   *               cacheHitsCount | select |     |     | </br>| cacheMissCount | select |     |     | </br>| apiTimeAvg
   *               | select |     |     | </br>| apiTimeMin | select |     |     | </br>| apiTimeMax | select |     |
   *                 | </br>| serviceTimeAvg | select |     |     | </br>| serviceTimeMin | select |     |     | </br>|
   *               serviceTimeMax | select |     |     | </br>
   * @param options The options parameters.
   */
  listByGeo(
    resourceGroupName: string,
    serviceName: string,
    filter: string,
    options?: ReportsListByGeoOptionalParams
  ): PagedAsyncIterableIterator<ReportRecordContract>;
  /**
   * Lists report records by subscription.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param filter |   Field     |     Usage     |     Supported operators     |     Supported functions
   *                  |</br>|-------------|-------------|-------------|-------------|</br>| timestamp | filter | ge, le
   *               |     | </br>| displayName | select, orderBy |     |     | </br>| apiRegion | filter | eq |     |
   *               </br>| userId | select, filter | eq |     | </br>| productId | select, filter | eq |     | </br>|
   *               subscriptionId | select, filter | eq |     | </br>| callCountSuccess | select, orderBy |     |     |
   *               </br>| callCountBlocked | select, orderBy |     |     | </br>| callCountFailed | select, orderBy |
   *                 |     | </br>| callCountOther | select, orderBy |     |     | </br>| callCountTotal | select,
   *               orderBy |     |     | </br>| bandwidth | select, orderBy |     |     | </br>| cacheHitsCount |
   *               select |     |     | </br>| cacheMissCount | select |     |     | </br>| apiTimeAvg | select,
   *               orderBy |     |     | </br>| apiTimeMin | select |     |     | </br>| apiTimeMax | select |     |
   *                | </br>| serviceTimeAvg | select |     |     | </br>| serviceTimeMin | select |     |     | </br>|
   *               serviceTimeMax | select |     |     | </br>
   * @param options The options parameters.
   */
  listBySubscription(
    resourceGroupName: string,
    serviceName: string,
    filter: string,
    options?: ReportsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ReportRecordContract>;
  /**
   * Lists report records by Time.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param filter |   Field     |     Usage     |     Supported operators     |     Supported functions
   *                  |</br>|-------------|-------------|-------------|-------------|</br>| timestamp | filter, select
   *               | ge, le |     | </br>| interval | select |     |     | </br>| apiRegion | filter | eq |     |
   *               </br>| userId | filter | eq |     | </br>| productId | filter | eq |     | </br>| subscriptionId |
   *               filter | eq |     | </br>| apiId | filter | eq |     | </br>| operationId | filter | eq |     |
   *               </br>| callCountSuccess | select |     |     | </br>| callCountBlocked | select |     |     | </br>|
   *               callCountFailed | select |     |     | </br>| callCountOther | select |     |     | </br>| bandwidth
   *               | select, orderBy |     |     | </br>| cacheHitsCount | select |     |     | </br>| cacheMissCount |
   *               select |     |     | </br>| apiTimeAvg | select |     |     | </br>| apiTimeMin | select |     |
   *               | </br>| apiTimeMax | select |     |     | </br>| serviceTimeAvg | select |     |     | </br>|
   *               serviceTimeMin | select |     |     | </br>| serviceTimeMax | select |     |     | </br>
   * @param interval By time interval. Interval must be multiple of 15 minutes and may not be zero. The
   *                 value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can
   *                 be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours,
   *                 minutes, seconds)).
   * @param options The options parameters.
   */
  listByTime(
    resourceGroupName: string,
    serviceName: string,
    filter: string,
    interval: string,
    options?: ReportsListByTimeOptionalParams
  ): PagedAsyncIterableIterator<ReportRecordContract>;
  /**
   * Lists report records by Request.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param filter |   Field     |     Usage     |     Supported operators     |     Supported functions
   *                  |</br>|-------------|-------------|-------------|-------------|</br>| timestamp | filter | ge, le
   *               |     | </br>| apiId | filter | eq |     | </br>| operationId | filter | eq |     | </br>| productId
   *               | filter | eq |     | </br>| userId | filter | eq |     | </br>| apiRegion | filter | eq |     |
   *               </br>| subscriptionId | filter | eq |     | </br>
   * @param options The options parameters.
   */
  listByRequest(
    resourceGroupName: string,
    serviceName: string,
    filter: string,
    options?: ReportsListByRequestOptionalParams
  ): PagedAsyncIterableIterator<RequestReportRecordContract>;
}