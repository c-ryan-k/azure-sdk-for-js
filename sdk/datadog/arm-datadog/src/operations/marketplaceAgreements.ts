/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/marketplaceAgreementsMappers";
import * as Parameters from "../models/parameters";
import { MicrosoftDatadogClientContext } from "../microsoftDatadogClientContext";

/** Class representing a MarketplaceAgreements. */
export class MarketplaceAgreements {
  private readonly client: MicrosoftDatadogClientContext;

  /**
   * Create a MarketplaceAgreements.
   * @param {MicrosoftDatadogClientContext} client Reference to the service client.
   */
  constructor(client: MicrosoftDatadogClientContext) {
    this.client = client;
  }

  /**
   * @summary List Datadog marketplace agreements in the subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.MarketplaceAgreementsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.MarketplaceAgreementsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.DatadogAgreementResourceListResponse>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DatadogAgreementResourceListResponse>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DatadogAgreementResourceListResponse>, callback?: msRest.ServiceCallback<Models.DatadogAgreementResourceListResponse>): Promise<Models.MarketplaceAgreementsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.MarketplaceAgreementsListResponse>;
  }

  /**
   * @summary Create Datadog marketplace agreement in the subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.MarketplaceAgreementsCreateOrUpdateResponse>
   */
  createOrUpdate(options?: Models.MarketplaceAgreementsCreateOrUpdateOptionalParams): Promise<Models.MarketplaceAgreementsCreateOrUpdateResponse>;
  /**
   * @param callback The callback
   */
  createOrUpdate(callback: msRest.ServiceCallback<Models.DatadogAgreementResource>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(options: Models.MarketplaceAgreementsCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.DatadogAgreementResource>): void;
  createOrUpdate(options?: Models.MarketplaceAgreementsCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.DatadogAgreementResource>, callback?: msRest.ServiceCallback<Models.DatadogAgreementResource>): Promise<Models.MarketplaceAgreementsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.MarketplaceAgreementsCreateOrUpdateResponse>;
  }

  /**
   * @summary List Datadog marketplace agreements in the subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.MarketplaceAgreementsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.MarketplaceAgreementsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DatadogAgreementResourceListResponse>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DatadogAgreementResourceListResponse>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DatadogAgreementResourceListResponse>, callback?: msRest.ServiceCallback<Models.DatadogAgreementResourceListResponse>): Promise<Models.MarketplaceAgreementsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.MarketplaceAgreementsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Datadog/agreements",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DatadogAgreementResourceListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Datadog/agreements/default",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.DatadogAgreementResource
  },
  responses: {
    200: {
      bodyMapper: Mappers.DatadogAgreementResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DatadogAgreementResourceListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};