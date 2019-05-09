import { getReq } from '@utils/request'

export const getHomeInfo = (params) => {
  return getReq({ 
    url: 'http://oa.kuaitui.net/system/channelInfoQuery2.json?channelId=3&more=false&_=1557373688621',
    params
   })
}