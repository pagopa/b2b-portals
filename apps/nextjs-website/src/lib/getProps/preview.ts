import { AppEnv } from '@/AppEnv';
import {
  fetchAllPageIDs,
  fetchAllPageSwitchPageIDs,
  fetchAllPressReleaseIDs,
  fetchPageFromID,
  fetchPageSwitchPageFromID,
  fetchPressReleaseFromID,
} from '../fetch/preview';
import { previewPressReleaseToPreviewPageData } from '../pressRelease';
import { appEnv } from '../api';
import { Getters } from './types';

export const getAllPageIDs: Getters['getAllPageIDs'] = async (
  tenant,
  locale,
) => {
  const appEnvWithRequestedTenant: AppEnv = {
    config: {
      ...appEnv.config,
      ENVIRONMENT: tenant,
    },
    fetchFun: appEnv.fetchFun,
  };
  const pageIDs = await fetchAllPageIDs({
    ...appEnvWithRequestedTenant,
    locale,
  });
  return pageIDs.data;
};

export const getAllPressReleaseIDs: Getters['getAllPressReleaseIDs'] = async (
  tenant,
  locale,
) => {
  const appEnvWithRequestedTenant: AppEnv = {
    config: {
      ...appEnv.config,
      ENVIRONMENT: tenant,
    },
    fetchFun: appEnv.fetchFun,
  };
  const pressReleaseIDs = await fetchAllPressReleaseIDs({
    ...appEnvWithRequestedTenant,
    locale,
  });
  return pressReleaseIDs.data;
};

export const getAllPageSwitchPageIDs: Getters['getAllPageSwitchPageIDs'] =
  async (tenant, locale) => {
    const appEnvWithRequestedTenant: AppEnv = {
      config: {
        ...appEnv.config,
        ENVIRONMENT: tenant,
      },
      fetchFun: appEnv.fetchFun,
    };
    const pageSwitchPageIDs = await fetchAllPageSwitchPageIDs({
      ...appEnvWithRequestedTenant,
      locale,
    });
    return pageSwitchPageIDs.data;
  };

export const getPageDataFromID: Getters['getPageDataFromID'] = async (
  tenant,
  documentID,
  locale,
) => {
  const appEnvWithRequestedTenant: AppEnv = {
    config: {
      ...appEnv.config,
      ENVIRONMENT: tenant,
    },
    fetchFun: appEnv.fetchFun,
  };
  const { data } = await fetchPageFromID({
    ...appEnvWithRequestedTenant,
    documentID,
    locale,
  });
  return data;
};

export const getPressReleaseDataFromID: Getters['getPressReleaseDataFromID'] =
  async (tenant, documentID, locale) => {
    const appEnvWithRequestedTenant: AppEnv = {
      config: {
        ...appEnv.config,
        ENVIRONMENT: tenant,
      },
      fetchFun: appEnv.fetchFun,
    };
    const pressRelease = await fetchPressReleaseFromID({
      ...appEnvWithRequestedTenant,
      documentID,
      locale,
    });

    return previewPressReleaseToPreviewPageData(pressRelease).data;
  };

export const getPageSwitchPageDataFromID: Getters['getPageSwitchPageDataFromID'] =
  async (tenant, documentID, locale) => {
    const appEnvWithRequestedTenant: AppEnv = {
      config: {
        ...appEnv.config,
        ENVIRONMENT: tenant,
      },
      fetchFun: appEnv.fetchFun,
    };
    const { data } = await fetchPageSwitchPageFromID({
      ...appEnvWithRequestedTenant,
      documentID,
      locale,
    });

    return data;
  };
