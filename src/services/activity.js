import { stringify } from 'qs';
import request from '../utils/request';

export async function queryHikeActivities(params) {
  return request(`/api/hike_activities?${stringify(params)}`);
}

export async function getActivity(params) {
  return request('/api/get_hike_activity_byid', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}
