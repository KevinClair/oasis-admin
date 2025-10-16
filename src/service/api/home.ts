import { request } from '../request';

/**
 * Login
 *
 * @param userName User name
 * @param password Password
 */
export function fetchGetAnnouncement() {
  return request<Api.Home.Announcement>({
    url: '/home/getAnnouncement',
    method: 'get'
  });
}
