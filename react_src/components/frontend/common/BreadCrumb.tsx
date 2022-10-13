
import * as React from 'react';
import type { BreadCrumbProps } from '../types'

type Props = {
  breadcrumbs: BreadCrumbProps[]
}
const BreadCrumb: React.FC<Props> = (props) => {

  return (
    <div className="path">
      {props?.breadcrumbs?.map((breadCrumb: BreadCrumbProps, index: number) => {
        const key: string = `breadcrumb-${index}`
        const arrow: string = index == props.breadcrumbs.length - 1 ? ' ' : '>'

        return breadCrumb?.href ? <a key={key} href={breadCrumb.href}>{breadCrumb.title}{arrow}</a> : <p key={key}>{breadCrumb.title}{arrow}</p>
      })}
    </div>
  )
}

export default BreadCrumb
