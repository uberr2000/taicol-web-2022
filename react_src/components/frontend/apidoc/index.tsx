import Banner from '../common/Banner'
import * as React from 'react'
import * as moment from 'moment';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import useSWR from 'swr'
import { fetcher } from '../utils/helper'


const breadcrumbs = [
  { title: '首頁', href: '/' },
  {title: '更多資訊'},
  {title: 'API說明文件'}
]

const ApiPage: React.FC = () => {
  const { data, isValidating, error } = useSWR(`${process.env.REACT_API_URL}/api/apidoc/info`,fetcher);
  console.log(`${process.env.REACT_API_URL}/api/apidoc/info`)
  console.log('error', error);
  console.log('data',data)


  return (
    <div className="page-top">
      <Banner title='API DOCUMENTATION' zhTWTitle='API說明文件' breadcrumbs={breadcrumbs} />
      <div className='main-box vivi-cont-top'>
        <div className="api-box">
          <div className='page-update'>更新日期：{data && moment(data.createdAt).format('yyyy/MM/DD') }</div>

          <div id='markdown' className='api-box apitable-style'>
            {data &&
              <ReactMarkdown remarkPlugins={[remarkGfm]} children={data.content}  />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApiPage
